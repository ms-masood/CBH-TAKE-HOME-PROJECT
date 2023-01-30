const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("returns trivial partition key if event is falsy", () => {
    expect(deterministicPartitionKey(null)).toBe("0");
    expect(deterministicPartitionKey(undefined)).toBe("0");
  });

  it("returns partition key from event if it exists", () => {
    expect(deterministicPartitionKey({ partitionKey: "abc" })).toBe("abc");
  });

  it("returns SHA3-512 hash of JSON stringified event if partition key does not exist", () => {
    const event = { foo: "bar" };
    const expectedPartitionKey = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
    expect(deterministicPartitionKey(event)).toBe(expectedPartitionKey);
  });

  it("returns truncated SHA3-512 hash if candidate is longer than maximum length", () => {
    const candidate = "a".repeat(257);
    const expectedPartitionKey = crypto
      .createHash("sha3-512")
      .update(candidate)
      .digest("hex");
    expect(deterministicPartitionKey({ partitionKey: candidate })).toBe(
      expectedPartitionKey
    );
  });

  it("converts candidate to string if it is not a string", () => {
    const candidate = { foo: "bar" };
    const expectedPartitionKey = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(candidate))
      .digest("hex");
    expect(deterministicPartitionKey({ partitionKey: candidate })).toBe(
      expectedPartitionKey
    );
  });
});

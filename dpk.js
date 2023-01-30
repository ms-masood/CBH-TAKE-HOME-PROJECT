const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate = getCandidate(event);
  candidate = ensureString(candidate);
  candidate = ensureLength(candidate);

  return candidate;

  function getCandidate(event) {
    if (!event) {
      return TRIVIAL_PARTITION_KEY;
    }
    if (event.partitionKey) {
      return event.partitionKey;
    }
    return crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
  }

  function ensureString(candidate) {
    if (typeof candidate === "string") {
      return candidate;
    }
    return JSON.stringify(candidate);
  }

  function ensureLength(candidate) {
    if (candidate.length <= MAX_PARTITION_KEY_LENGTH) {
      return candidate;
    }
    return crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
};

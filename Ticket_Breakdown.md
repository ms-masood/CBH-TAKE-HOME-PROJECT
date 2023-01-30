# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

-- Create a new field for custom Agent id in the database - Acceptance Criteria:
A new field for custom Agent id is added to the Agents table in the database
The field should be nullable, allowing Facilities to opt out of using custom Agent ids if they choose to
The database schema is updated to reflect the changes made - Time/Effort Estimate: 2-3 hours - Implementation Details: - Create a new column in the Agents table in the database to store the custom Agent id - Update the database schema to reflect the changes made

-- Add UI for Facilities to enter custom Agent ids for each Agent - Acceptance Criteria:
A new UI component is created for Facilities to enter custom Agent ids for each Agent they work with
The UI component should be easily accessible from the existing Facilities UI
The entered custom Agent ids are stored in the database - Time/Effort Estimate: 4-6 hours - Implementation Details:
Create a new UI component for Facilities to enter custom Agent ids
Integrate the component with the existing Facilities UI
Store the entered custom Agent ids in the database

-- Modify getShiftsByFacility function to include custom Agent id in returned Shift data - Acceptance Criteria:
The getShiftsByFacility function is updated to include the custom Agent id, if available, in the returned Shift data
If a custom Agent id is not available, the internal database id of the Agent should be used instead - Time/Effort Estimate: 2-3 hours - Implementation Details:
Update the getShiftsByFacility function to include the custom Agent id, if available, in the returned Shift data
If a custom Agent id is not available, the internal database id of the Agent should be used instead

-- Modify generateReport function to use custom Agent id on reports - Acceptance Criteria:
The generateReport function is updated to use the custom Agent id, if available, on reports generated for Facilities
If a custom Agent id is not available, the internal database id of the Agent should be used instead - Time/Effort Estimate: 2-3 hours - Implementation Details:
Update the generateReport function to use the custom Agent id, if available, on reports generated for Facilities
If a custom Agent id is not available, the internal database id of the Agent should be used instead

-- Test and deploy changes - Acceptance Criteria:
All changes are thoroughly tested and confirmed to be working correctly
The updated code is deployed to production - Time/Effort Estimate: 2-3 hours - Implementation Details:
Perform thorough testing of all changes
Deploy the updated code to production.

Feature: Dashboard functionallity



Scenario: Verify oneway trip in dashboard page

Given User is on dashboard page
When User enters oneway trip details
Then User should successfully select the locations 



Scenario: Verify departure date selection

Given User is on dashboard page
When User selects the departure date
Then selected date should be display successfully

Scenario: Verify passenger count selection

Given User is on dashboard page
When User selects the passenger number
Then Passenger count is updated successfully

Scenario: Verify search functionality

Given User is on dashboard page
When User clicks the search button in dashboard page
Then User should see the search results


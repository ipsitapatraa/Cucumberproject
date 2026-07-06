Feature: Dashboard 



Scenario: verify departure and arrival feilds in dashboard page

Given User is on dashboard page
When User enters departure city and arrival city
Then User should be able to select the locations from the dropdown 



Scenario: verify departure date selection in dashboard page

Given User is on dashboard page
When User selects the departure date
Then selected date should be dispalyed

Scenario: verify passenger selection in dashboard page

Given User is on dashboard page
When User selects the number of passengers
Then Passenger count should be updated successfully

Scenario: verify search button functionality in dashboard page

Given User is on dashboard page
When User clicks on the search button
Then User should be able to see the search results


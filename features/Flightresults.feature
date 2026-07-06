Feature: FlightResults validation

Scenario: Verify number of flights displayed

Given User is on Flight results page
When User searches flights
Then User should be able to see total flights count


Scenario: Verify booknow in flight results page

Given User is on Flight results page
When user clicks on book now button
Then User should be navigated to booking page
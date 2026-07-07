Feature: Flightdatapage validation

Scenario: Verify count of total flights

Given User is on Flight data page
When User performs search on flight
Then User should able to see total flight data


Scenario: Verify booking functionality

Given User is on Flight data page
When user clicks book now button
Then User should redirect to booking page
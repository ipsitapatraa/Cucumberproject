Feature: Invoice

   Invoice Page functinality validation


@smoke,@regression

Scenario: Verify Invoice page validation.


Given  user is on Invoice page
Then user should see booking success message.
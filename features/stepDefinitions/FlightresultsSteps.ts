import {Given,When,Then} from '@cucumber/cucumber';
//import {RegisterPage} from '../../pages/RegisterPage'
import {CustomWorld} from '../../support/world'

import {test, expect } from '@playwright/test';
import { DashboardPage } from '../../pages/DashboardPage';
import { LoginPage } from '../../pages/LoginPage';
import { FlightBookPage } from '../../pages/FlightresultsPage';

let Book : FlightBookPage;



Given('User is on Flight results page', async function (this:CustomWorld) {
    
     Book= new FlightBookPage(this.page);

console.log("user is on flight results page")
});

When('User searches flights', async function (this:CustomWorld){

     let dash = new DashboardPage(this.page);
     dash.clickSearchButton();

});

Then('User should be able to see total flights count',async function (this:CustomWorld) {
  
    await Book.getFlightcount();

});
When('user clicks on book now button', async function (this:CustomWorld){
      
    Book= new FlightBookPage(this.page);

     await Book.Booknow();
});

Then('User should be navigated to booking page',async function (this:CustomWorld) {
  
    console.log("User is navigated successfully") ;


});

  
    








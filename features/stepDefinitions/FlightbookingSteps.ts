import {Given,When,Then} from '@cucumber/cucumber';
//import {RegisterPage} from '../../pages/RegisterPage'
import {CustomWorld} from '../../support/world'

import {test, expect } from '@playwright/test';
import { DashboardPage } from '../../pages/DashboardPage';
import { LoginPage } from '../../pages/LoginPage';
import { FlightsBooksPage } from '../../pages/FlightbookingPage';


let fb : FlightsBooksPage;

Given('User on Flight booking page', async function (this:CustomWorld) {

     fb= new FlightsBooksPage(this.page);

   console.log("User on Flight booking page")
});

When('User gives all the valid passanger details', async function (this:CustomWorld){

     await fb.Guestdetails();
     await fb.Adulttwodetails()
     await fb.Adultthreedetails();
});

Then('User should be able to confirm booking successfully',async function (this:CustomWorld) {
  
    console.log("User able to confirm booking successfully") ;

});
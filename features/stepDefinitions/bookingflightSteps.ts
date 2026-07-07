import {Given,When,Then} from '@cucumber/cucumber';
import {CustomWorld} from '../../support/world'

import {test, expect } from '@playwright/test';
import { DashboardPage } from '../../pages/DashboardPage';
import { LoginPage } from '../../pages/LoginPage';
import { BookingPage } from '../../pages/bookingflightPage';


let fbp : BookingPage;

Given('User on booking Flight page', async function (this:CustomWorld) {

     fbp= new BookingPage(this.page);

   console.log("User lands fligt booking page")
});

When('User enters valid passanger data', async function (this:CustomWorld){

     await fbp.Guestdata();
     await fbp.passenger1();
     await fbp.passenger2();
});

Then('booking should confirm successfully',async function (this:CustomWorld) {
  
    console.log("User should book flight successfully") ;

});
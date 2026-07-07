import {Given,When,Then} from '@cucumber/cucumber';
import {CustomWorld} from '../../support/world'
import { LoginPage } from '../../pages/LoginPage';
import {test, expect } from '@playwright/test';

 
 
let lp : LoginPage;

Given('User launches the login page', async function (this:CustomWorld) {

    lp = new LoginPage(this.page);
     await lp.Launchapp();  
     await lp.popup();   
});
      
When('User enters login details', async function (this:CustomWorld){

    console.log("user entered valid credentails")

     await lp.login();
});
       
Then('User should login successfully',async function (this:CustomWorld) {
  
    console.log("user logged in successfully")     
});




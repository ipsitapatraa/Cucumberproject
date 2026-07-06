import {Given,When,Then} from '@cucumber/cucumber';
//import {RegisterPage} from '../../pages/RegisterPage'
import {CustomWorld} from '../../support/world'
import { LoginPage } from '../../pages/LoginPage';
import {test, expect } from '@playwright/test';

 
 
let login : LoginPage;

Given('User opens the login application', async function (this:CustomWorld) {

    login = new LoginPage(this.page);
     await login.Launchapp();  
     await login.understandandcontinue();   
});
      
When('User enters valid login credentials', async function (this:CustomWorld){

    console.log("entereed credentails")

     await login.login();
});
       
Then('User should be logged in successfully ',async function (this:CustomWorld) {
  
    console.log("Login successfully")     
});




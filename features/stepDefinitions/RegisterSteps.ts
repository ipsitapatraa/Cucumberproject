import {Given,When,Then} from '@cucumber/cucumber';
import {RegisterPage} from '../../pages/RegisterPage'
import {CustomWorld} from '../../support/world'
import{test,expect} from '@playwright/test';
 
 
let register : RegisterPage;

Given('User opens the application', async function (this:CustomWorld) {

    register = new RegisterPage(this.page);
    await register.openApp();       
    await register.clickSignup();
});
       

       
When('User enters valid credentails', async function (this:CustomWorld){

     await register.Register(); 
});
       

       
Then('User should be registered successfully',async function (this:CustomWorld) {
  
    console.log("Registration successfully")   
    await expect(this.page.getByText('Registration successful! Please check your email to verify your account.'))   
});


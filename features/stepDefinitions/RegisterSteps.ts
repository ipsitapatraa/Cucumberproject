import {Given,When,Then} from '@cucumber/cucumber';
import {RegistrationPage} from '../../pages/RegistrationPage'
import {CustomWorld} from '../../support/world'
import{test,expect} from '@playwright/test';
 
 
let rg : RegistrationPage;

Given('User launches the application', async function (this:CustomWorld) {

    rg = new RegistrationPage(this.page);
    await rg.launchApp();       
    await rg.customersignup();
});
       

       
When('User enters registration credentails', async function (this:CustomWorld){

     await rg.doRegister(); 
});
       

       
Then('User should register successfully',async function (this:CustomWorld) {
  
    console.log("user registration successfully compl")   
    await expect(this.page.getByText('Registration successful! Please check your email to verify your account.'))   
});


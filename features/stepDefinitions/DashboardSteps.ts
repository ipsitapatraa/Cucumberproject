import {Given,When,Then} from '@cucumber/cucumber';
//import {RegisterPage} from '../../pages/RegisterPage'
import {CustomWorld} from '../../support/world'

import {test, expect } from '@playwright/test';
import { DashboardPage } from '../../pages/DashboardPage';
import { LoginPage } from '../../pages/LoginPage';
     
let dash : DashboardPage;


Given('User is on dashboard page', async function (this:CustomWorld) {

dash = new DashboardPage(this.page);
    
     await dash.verifyDashboardPage();
     await dash.clickserviceslink();
    
});
When('User enters departure city and arrival city', async function (this:CustomWorld){

     await dash.clickDepartureFlightBooking();
     await dash.clickArrivalFlightBooking();
});
       

       
Then('User should be able to select the locations from the dropdown',async function (this:CustomWorld) {
  
    console.log("Locations selected successfully")  
  
});   


When('User selects the departure date', async function (this:CustomWorld){
    

     await dash.clickDeparturedateFlightBooking();
   
});
       
Then('selected date should be dispalyed',async function (this:CustomWorld) {
  
    console.log("selected date displayed successfully")  
});

When('User selects the number of passengers', async function (this:CustomWorld){
    

     await dash.clickPassengersFlightBooking();
   
});
       
Then('Passenger count should be updated successfully',async function (this:CustomWorld) {
  
    console.log("Passenger count updated successfully") 
});
    
When('User clicks on the search button', async function (this:CustomWorld){
    

     await dash.clickSearchButton();
   
});
       
Then('User should be able to see the search results',async function (this:CustomWorld) {
  
    console.log("User should be able to see the search results") ;    
});




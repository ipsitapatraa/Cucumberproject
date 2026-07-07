import {Given,When,Then} from '@cucumber/cucumber';
import {CustomWorld} from '../../support/world';
import { DashboardPage } from '../../pages/DashboardPage';
import { LoginPage } from '../../pages/LoginPage';
     
let dp : DashboardPage;


Given('User is on dashboard page', async function (this:CustomWorld) {

dp = new DashboardPage(this.page);
    
     await dp.verifyDashboard();
     await dp.onclickservices();
    
});
When('User enters oneway trip details', async function (this:CustomWorld){

     await dp.onclickDeparture();
     await dp.onclickArrival();
});
       

       
Then('User should successfully select the locations',async function (this:CustomWorld) {
  
    console.log("Locations displayed"); 
  
});   


When('User selects the passenger number', async function (this:CustomWorld){
    

     await dp.onclickDeparturedate();
   
});
       
Then('Passenger count is updated successfully',async function (this:CustomWorld) {
  
    console.log("user should see selected date")  
});

When('User selects the number of passengers', async function (this:CustomWorld){
    

     await dp.onclickPassengers();
   
});
       
Then('Passenger count should be updated successfully',async function (this:CustomWorld) {
  
    console.log("Passenger count updated");
});
    
When('User clicks the search button in dashboard page', async function (this:CustomWorld){
    

     await dp.onclickSearch();
   
});
       
Then('User should see the search results',async function (this:CustomWorld) {
  
    console.log("User should see the search result") ;    
});




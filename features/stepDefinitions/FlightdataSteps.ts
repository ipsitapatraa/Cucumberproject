import {Given,When,Then} from '@cucumber/cucumber';
import {CustomWorld} from '../../support/world'
import { DashboardPage } from '../../pages/DashboardPage';
import { LoginPage } from '../../pages/LoginPage';
import { BookingPage } from '../../pages/FlightdataPage';

let Bk : BookingPage;



Given('User is on Flight data page', async function (this:CustomWorld) {
    
     Bk= new BookingPage(this.page);

console.log("user landed on flight results page")
});

When('User performs search on flight', async function (this:CustomWorld){

     let dp = new DashboardPage(this.page);
     dp.onclickSearch();

});

Then('User should able to see total flight data',async function (this:CustomWorld) {
  
    await Bk.totalFlightcount();

});
When('user clicks book now button', async function (this:CustomWorld){
      
    Bk= new BookingPage(this.page);

     await Bk.Booking();
});

Then('User should redirect to booking page',async function (this:CustomWorld) {
  
    console.log("User is redireced successfully") ;


});

  
    








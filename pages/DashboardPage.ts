import { Page,expect } from '@playwright/test';



export class DashboardPage {

constructor(
private page: Page
) {}

serviceslink = "//span[@class='font-medium'][normalize-space()='Services']";
Flightbookingmenu=("//span[normalize-space()='Flights Booking']");
//Departurecity="('div').filter({ hasText: 'Departure City or Airport' }).first()";
//Arrivalcity="('div').filter({ hasText: 'Arrival City or Airport' }).first()";
//Departuredate=("div[class='field-box-segment']");
//Passengers= ("//div[normalize-space()='1 Passenger']");


async verifyDashboardPage() {

     
    
    await this.page.goto('https://phptravels.net/flights');
    await this.page.getByText('I Understand & Continue', { exact: true }).click();
    await expect(this.page).toHaveURL('https://phptravels.net/flights');
   

    
}

async  clickserviceslink() {
    await this.page.hover(this.serviceslink);
    //await this. page.locator(this.Flightbookingmenu).waitFor({state:"visible"});
    //await this.page.waitForTimeout(50000);
    await this.page.click(this.Flightbookingmenu);
}

async clickDepartureFlightBooking()

{
    await this.page.locator("#fl_from_trigger").click(); 
    await this.page.fill('#fl_from_q', "Bengaluru");
    await this.page.locator('div').filter({ hasText: 'Bengaluru, Karnataka, India' }).first().click();
}

async clickArrivalFlightBooking()
{
    await this.page.locator("#fl_to_trigger").click();
    await this.page.fill("#fl_to_q","Delhi");
   await this.page.locator(':text-is("New Delhi, National Capital Territory of India, India")').click();
}

async clickDeparturedateFlightBooking()
{

    await this.page.locator(" div[class='field-box-segment']").click();
    await this.page.locator('div').filter({ hasText: '16' }).first().click();

  }

async clickPassengersFlightBooking()
{
    await this.page.locator("//div[normalize-space()='Passengers']").click();
    let addbutton= await this.page.locator('span').filter({ hasText: 'add' }).first();
    await addbutton.click();
    await addbutton.click();
    //await this.page.locator('span').filter({ hasText: 'add' }).first().click();
    //await this.page.locator('span').filter({ hasText: 'add' }).first().click();
    
}

async clickSearchButton()
{
   await this. page.getByRole('button', { name: 'Search Flights' }).click();

   await this.page.waitForLoadState("networkidle");
}



}



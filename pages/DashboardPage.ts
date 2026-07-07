import { Page,expect } from '@playwright/test';



export class DashboardPage {

constructor(
private page: Page
) {}

servicemenu = "//span[@class='font-medium'][normalize-space()='Services']";
Flightsubmenu=("//span[normalize-space()='Flights Booking']");


async verifyDashboard() {     
    
    await this.page.goto('https://phptravels.net/flights');
    await this.page.getByText('I Understand & Continue', { exact: true }).click();
    await expect(this.page).toHaveURL('https://phptravels.net/flights');
    
}

async  onclickservices() {
    await this.page.hover(this.servicemenu);    
    await this.page.click(this.Flightsubmenu);
}

async onclickDeparture()

{
    await this.page.locator("#fl_from_trigger").click(); 
    await this.page.fill('#fl_from_q', "Bengaluru");
    await this.page.locator('div').filter({ hasText: 'Bengaluru, Karnataka, India' }).first().click();
}

async onclickArrival()
{
    await this.page.locator("#fl_to_trigger").click();
    await this.page.fill("#fl_to_q","Delhi");
   await this.page.locator(':text-is("New Delhi, National Capital Territory of India, India")').click();
}

async onclickDeparturedate()
{

    await this.page.locator(" div[class='field-box-segment']").click();
    await this.page.locator('div').filter({ hasText: '16' }).first().click();

  }

async onclickPassengers()
{
    await this.page.locator("//div[normalize-space()='Passengers']").click();
    let button= await this.page.locator('span').filter({ hasText: 'add' }).first();
    await button.click();
    await button.click();
    
}

async onclickSearch()
{
   await this. page.getByRole('button', { name: 'Search Flights' }).click();
   //await this.page.waitForLoadState("networkidle");
}



}



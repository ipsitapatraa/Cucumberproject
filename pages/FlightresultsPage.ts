import { Page,expect } from '@playwright/test';

export class FlightBookPage {

constructor(
private page: Page
) {}

async getFlightcount()
{    
    
    //let flightcount= await this.page.locator('strong:visible').textContent();
    let totalflights=await this.page.locator("//strong[@x-show='!loading']").textContent();
    console.log(totalflights);

    
}

async Booknow()
{
    let booknow=await this.page.locator('span').filter({ hasText: 'Book Now' })
    await expect(booknow.first()).toBeVisible();
    await booknow.first().click();
    await expect(this.page).toHaveURL(/booking/);
}
}


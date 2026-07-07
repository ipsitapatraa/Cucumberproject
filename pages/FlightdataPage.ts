import { Page,expect } from '@playwright/test';

export class BookingPage {

constructor(
private page: Page
) {}

async totalFlightcount()
{    
    
    let totalflightscount=await this.page.locator("//strong[@x-show='!loading']").textContent();
    console.log(totalflightscount);

    
}

async Booking()
{
    let booking=await this.page.locator('span').filter({ hasText: 'Book Now' })
    await expect(booking.first()).toBeVisible();
    await booking.first().click();
    await expect(this.page).toHaveURL(/booking/);
}
}


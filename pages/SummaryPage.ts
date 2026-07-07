import { Page,expect,Locator } from '@playwright/test';

export class SummaryPage {

constructor(
private page: Page
) {}

async onsummarypage()
{
    await expect(this.page).toHaveURL('/flights/');
}

async bookingvalidation()
{
  
  await expect(this.page.getByText("Your flight booking has been confirmed.")).toBeVisible();
  await expect(this.page.getByText('Invoice Details')).toBeVisible();
  await expect(this.page.getByText('Customer Information')).toBeVisible();
  await expect(this. page.locator('span').filter({ hasText: 'Pending' }).first()).toBeVisible();

}
}

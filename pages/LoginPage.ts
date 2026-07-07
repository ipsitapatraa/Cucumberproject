import { Page,expect } from '@playwright/test';

export class LoginPage {

constructor(
private page: Page
) {}

Loginbutton= "//a[@class='inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 rounded-full hover:bg-gray-100 transition-colors']"
Email= '#email';
password='#password';
submitbutton="button[type='submit']";

async Launchapp()
{
    await this.page.goto('https://phptravels.net/flights');

}

async popup()
{
    await this.page.getByText('I Understand & Continue', { exact: true }).click();
    await this.page.waitForTimeout(2000);
}
async login()
{
    await this.page.click(this.Loginbutton);
    await this. page.fill(this.Email,'sample@ymail.com');
    await this.page.fill(this.password,'Sample@1234');
    await this.page.click(this.submitbutton);
    await expect(this.page).toHaveURL('/flights');
}

}




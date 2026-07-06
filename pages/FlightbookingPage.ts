import { Page,expect } from '@playwright/test';

export class FlightsBooksPage {

constructor(
private page: Page
) {}
//guestdetails
Title=".select[x-model='primary_guest.title']";
Firstname="input[placeholder='Enter First Name']";
Lastname="input[placeholder='Enter Last Name']";
Email=".input[x-model='primary_guest.email']";
Countrycode="//select[@x-model='primary_guest.country_code']";
phonenumber="input[placeholder='Enter Phone Number']";

//Lead traveller
Leadnationality=("div[class='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'] div select[class='select']");
Leaddate="('div.flex.gap-1').locator('select').nth(0)";
Leadmonth="(div.flex.gap-1').locator('select').nth(1)";
Leadyear="('div.flex.gap-1').locator('select').nth(2)";
Leadpassportid="('div.flex.gap-1').locator('select').nth(2)";
Leadpassexpdate="('div.flex.gap-1').locator('select').nth(0)";
Leadpassexmonth="('div.flex.gap-1').locator('select').nth(1)";
Leadpassyear="('div.flex.gap-1').locator('select').nth(2)";

//Adult 2 deatils
Adult2Title=("select[x-model='formData.passengers.adult_1.title']");
Adult2firstname=("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)")
Adult2Lastname2=("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > input:nth-child(2)")
Adult2Nationality=("select[x-model='formData.passengers.adult_1.nationality']")
Adult2DBdate="('div.flex.gap-1').locator('select').nth(0)";
Adult2DBMonth="('div.flex.gap-1').locator('select').nth(1)";
Adult2DByear="('div.flex.gap-1').locator('select').nth(2)";
Adult2passport=("input[placeholder='6 - 15 Numbers'][type='text'][x-model='formData.passengers.adult_1.passport_number']")
Adult2passExpirydate="('div.flex.gap-1').locator('select').nth(0)";
Adult2passexpirymonth="('div.flex.gap-1').locator('select').nth(1)";
Adult2passexpiryyear="('div.flex.gap-1').locator('select').nth(2)";

//Adult 3 details

Adult3Title=("select[x-model='formData.passengers.adult_2.title']");
Adult3firstname=("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)")
Adult3Lastname=("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > input:nth-child(2)")
Adult3Nationality=("select[x-model='formData.passengers.adult_2.nationality']");
Adult3DBdate="('div.flex.gap-1').locator('select').nth(0)";
Adult3DBMonth="('div.flex.gap-1').locator('select').nth(1)";
Adult3DByear="('div.flex.gap-1').locator('select').nth(2)";
Adult3passport=("input[placeholder='6 - 15 Numbers'][type='text'][x-model='formData.passengers.adult_2.passport_number']")
Adult3passExpirydate="('div.flex.gap-1').locator('select').nth(0)";
Adult3passexpirymonth="('div.flex.gap-1').locator('select').nth(1)";
Adult3passexpiryyear="('div.flex.gap-1').locator('select').nth(2)";

//click agree terms and conditions
Terms="('span').filter({ hasText: 'check' }).first()";


async Guestdetails()
{
    await this.page.selectOption(this.Title,'Mr');
    await this.page.fill(this.Firstname,"guestfirstname");
    await this.page.fill(this.Lastname,"guestlastname");
    await this.page.fill(this.Email,"guest@ymail.com");
    await this.page.selectOption(this.Countrycode,'91');
    await this.page.fill(this.phonenumber,"123412341");


}

async Adulttwodetails()
{
    await this.page.selectOption(this.Adult2Title,'Mr');
    await this.page.fill(this.Adult2firstname,"adult2firstname");
    await this.page.fill(this.Adult2Lastname2,"adult2lastname");
    await this.page.selectOption(this.Adult2Nationality,"IN");
    await this.page.selectOption(this.Adult2DBdate,"12");
    await this.page.selectOption(this.Adult2DBMonth,"Feb");
    await this.page.selectOption(this.Adult2DByear,"1990");
    await this.page.fill(this.Adult2passport,"8987678");
    await this.page.selectOption(this.Adult2passExpirydate,"11");
    await this.page.selectOption(this.Adult2passexpirymonth,"Feb");
   await this.page.selectOption(this.Adult2passexpiryyear,"2029");
}

async Adultthreedetails()
{
    await this.page.selectOption(this.Adult3Title,'Mr');
    await this.page.fill(this.Adult3firstname,"adult3firstname");
    await this.page.fill(this.Adult3Lastname,"adult3lastname");
    await this.page.selectOption(this.Adult3Nationality,"IN");
    await this.page.selectOption(this.Adult3DBdate,"25");
    await this.page.selectOption(this.Adult3DBMonth,"Mar");
    await this.page.selectOption(this.Adult3DByear,"1992");
    await this.page.fill(this.Adult3passport,"6789876");
    await this.page.selectOption(this.Adult3passExpirydate,"24");
    await this.page.selectOption(this.Adult3DBMonth,"May");
   await this.page.selectOption(this.Adult3passexpirymonth,"2032");
}

async checktermsandconfirmbooking()
{
    await this.page.click(this.Terms);
    await this.page.locator('span').filter({ hasText: 'Confirm Booking' }).click();
}
}


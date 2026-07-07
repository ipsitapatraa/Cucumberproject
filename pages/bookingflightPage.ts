import { Page,expect } from '@playwright/test';

export class BookingPage {

constructor(
private page: Page
) {}

Title=".select[x-model='primary_guest.title']";
Firstname="input[placeholder='Enter First Name']";
Lastname="input[placeholder='Enter Last Name']";
Email=".input[x-model='primary_guest.email']";
Countrycode="//select[@x-model='primary_guest.country_code']";
phonenumber="input[placeholder='Enter Phone Number']";

guestnationality=("div[class='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'] div select[class='select']");
guestdate="('div.flex.gap-1').locator('select').nth(0)";
guestmonth="(div.flex.gap-1').locator('select').nth(1)";
guestyear="('div.flex.gap-1').locator('select').nth(2)";
guestpassportid="('div.flex.gap-1').locator('select').nth(2)";
guestpassexpdate="('div.flex.gap-1').locator('select').nth(0)";
guestpassexmonth="('div.flex.gap-1').locator('select').nth(1)";
guestpassyear="('div.flex.gap-1').locator('select').nth(2)";


passenger1Title=("select[x-model='formData.passengers.adult_1.title']");
passenger1firstname=("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)")
passenger1Lastname=("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > input:nth-child(2)")
passenger1Nationality=("select[x-model='formData.passengers.adult_1.nationality']")
passenger1DBdate="('div.flex.gap-1').locator('select').nth(0)";
passenger1DBMonth="('div.flex.gap-1').locator('select').nth(1)";
passenger1DByear="('div.flex.gap-1').locator('select').nth(2)";
passenger1passport=("input[placeholder='6 - 15 Numbers'][type='text'][x-model='formData.passengers.adult_1.passport_number']")
passenger1passExpirydate="('div.flex.gap-1').locator('select').nth(0)";
passenger1passexpirymonth="('div.flex.gap-1').locator('select').nth(1)";
passenger1passexpiryyear="('div.flex.gap-1').locator('select').nth(2)";



passenger2Title=("select[x-model='formData.passengers.adult_2.title']");
passenger2firstname=("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)")
passenger2Lastname=("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > input:nth-child(2)")
passenger2Nationality=("select[x-model='formData.passengers.adult_2.nationality']");
passenger2DBdate="('div.flex.gap-1').locator('select').nth(0)";
passenger2DBMonth="('div.flex.gap-1').locator('select').nth(1)";
passenger2DByear="('div.flex.gap-1').locator('select').nth(2)";
passenger2passport=("input[placeholder='6 - 15 Numbers'][type='text'][x-model='formData.passengers.adult_2.passport_number']")
passenger2passExpirydate="('div.flex.gap-1').locator('select').nth(0)";
passenger2passexpirymonth="('div.flex.gap-1').locator('select').nth(1)";
passenger2passexpiryyear="('div.flex.gap-1').locator('select').nth(2)";


Terms="('span').filter({ hasText: 'check' }).first()";


async Guestdata()
{
    await this.page.selectOption(this.Title,'Mr');
    await this.page.fill(this.Firstname,"guestfirstname");
    await this.page.fill(this.Lastname,"guestlastname");
    await this.page.fill(this.Email,"guest@ymail.com");
    await this.page.selectOption(this.Countrycode,'91');
    await this.page.fill(this.phonenumber,"123412341");


}

async passenger1()
{
    await this.page.selectOption(this.passenger1Title,'Mr');
    await this.page.fill(this.passenger1firstname,"passenger1firstname");
    await this.page.fill(this.passenger1Lastname,"passenger1lastname");
    await this.page.selectOption(this.passenger1Nationality,"IN");
    await this.page.selectOption(this.passenger1DBdate,"12");
    await this.page.selectOption(this.passenger1DBMonth,"Feb");
    await this.page.selectOption(this.passenger1DByear,"1990");
    await this.page.fill(this.passenger1passport,"8987678");
    await this.page.selectOption(this.passenger1passExpirydate,"11");
    await this.page.selectOption(this.passenger1passexpirymonth,"Feb");
   await this.page.selectOption(this.passenger1passexpiryyear,"2029");
}

async passenger2()
{
    await this.page.selectOption(this.passenger2Title,'Mr');
    await this.page.fill(this.passenger2firstname,"passenger2firstname");
    await this.page.fill(this.passenger2Lastname,"passenger2lastname");
    await this.page.selectOption(this.passenger2Nationality,"IN");
    await this.page.selectOption(this.passenger2DBdate,"25");
    await this.page.selectOption(this.passenger2DBMonth,"Mar");
    await this.page.selectOption(this.passenger2DByear,"1992");
    await this.page.fill(this.passenger2passport,"6789876");
    await this.page.selectOption(this.passenger2passExpirydate,"24");
    await this.page.selectOption(this.passenger2passexpirymonth,"2032");
}

async confirmbooking()
{
    await this.page.click(this.Terms);
    await this.page.locator('span').filter({ hasText: 'Confirm Booking' }).click();
}
}


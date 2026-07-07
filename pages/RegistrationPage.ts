import { Page } from '@playwright/test';



export class RegistrationPage {

constructor(
private page: Page
) {}


// locators 

private signupbutton  = ("//span[@class='material-symbols-outlined !text-[16px] transition-transform group-hover:rotate-180']")
private customersignupbutton = "//span[@class='font-medium'][normalize-space()='Customer Signup']";
private firstname= '#first_name';
private lastname="#last_name";
private email="#email";
private password= "#password";
private confirmpassword= "#confirm_password";
private captcha="//input[@id='captcha_answer']";
private checkbox='span.material-symbols-outlined.text-white.text-xs.checkbox-icon';
private createaccount= "//button[@type='submit']"
async launchApp() {

await this.page.goto(


'https://phptravels.net/flights');

}

async customersignup() {
    
    await this.page.getByText('I Understand & Continue', { exact: true }).click();
    await this.page.waitForTimeout(5000);
    await this.page.locator(this.signupbutton).click();
    await this.page.click(this.customersignupbutton);
    
}


async doRegister()
{

console.log(
'Enter the registration details');
    await this.page.click(this.signupbutton);
    await this.page.click(this.customersignupbutton);
    await this.page.fill(this.firstname, 'firstname');
    await this.page.fill(this.lastname, 'lastname');
    await this.page.fill(this.email, 'sample2@ymail.com');
    await this.page.fill(this.password,"Sample@1234");
    await this.page.fill(this.confirmpassword,"Sample@1234");
    await this.page.fill(this.captcha, '1234');
    await this.page.click(this.checkbox);
    await this.page.click(this.createaccount);


}


}


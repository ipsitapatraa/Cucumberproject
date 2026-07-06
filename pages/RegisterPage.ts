import { Page } from '@playwright/test';



export class RegisterPage {

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
async openApp() {

await this.page.goto(


'https://phptravels.net/flights');

}

async clickSignup() {
    
    await this.page.getByText('I Understand & Continue', { exact: true }).click();
    await this.page.waitForTimeout(5000);
    await this.page.locator(this.signupbutton).click();
    await this.page.click(this.customersignupbutton);
    
}


async Register()
{

console.log(
'Entering registeration credentials');
    await this.page.click(this.signupbutton);
    await this.page.click(this.customersignupbutton);
    await this.page.fill(this.firstname, 'firstname');
    await this.page.fill(this.lastname, 'lastname');
    await this.page.fill(this.email, 'sample@ymail.com');
    await this.page.fill(this.password,"Sample@1234");
    await this.page.fill(this.confirmpassword,"Sample@1234");
    await this.page.fill(this.captcha, '1234');
    await this.page.click(this.checkbox);
    await this.page.click(this.createaccount);


}


}


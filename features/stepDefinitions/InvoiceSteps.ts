import {Given,When,Then} from '@cucumber/cucumber';
//import {RegisterPage} from '../../pages/RegisterPage'
import {CustomWorld} from '../../support/world'
import { LoginPage } from '../../pages/LoginPage';
import {test, expect } from '@playwright/test';
import { InvoicePage } from '../../pages/InvoicePage';

 
 
let invoice: InvoicePage
Given('user is on Invoice page', async function (this:CustomWorld) {

    invoice = new InvoicePage(this.page);
    await invoice.oninvoicepage
});

Then('user should see booking success message. ',async function (this:CustomWorld) {
      invoice = new InvoicePage(this.page);
      await invoice.validatebookingsuccess();
  
    
});




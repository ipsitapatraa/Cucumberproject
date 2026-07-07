import {Given,When,Then} from '@cucumber/cucumber';
import {CustomWorld} from '../../support/world'
import { LoginPage } from '../../pages/LoginPage';
import {test, expect } from '@playwright/test';
import { SummaryPage } from '../../pages/SummaryPage'; 
 
let summary: SummaryPage
Given('user is on summary page', async function (this:CustomWorld) {

    summary = new SummaryPage(this.page);
    await summary.onsummarypage();
});

Then('user should view summary success',async function (this:CustomWorld) {
      summary = new SummaryPage(this.page);
      await summary.bookingvalidation();
  
    
});




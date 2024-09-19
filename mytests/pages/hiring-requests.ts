import { type Locator, type Page, expect } from '@playwright/test';

export class HiringRequests {
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly approveBtn: Locator;
  readonly confirmBtn: Locator;
  readonly backNav: Locator;


  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.locator(`//div[normalize-space(text())='Employee Hiring Requisition']`);
    this.approveBtn = page.getByText('Approve');
    this.confirmBtn = page.getByText('Confirm');
    this.backNav = page.locator('[ng-if=vm.forcedBackButton.uiSref]');
}

  async gotoUrl() {
    await this.page.goto('https://william77-trials714.orangehrmlive.com');
  }

  async approveFirstRequest() {
    //.nth(0)
    await this.page.locator("(//td[@name='listField.name'])[1]").click();
   
    await this.approveBtn.scrollIntoViewIfNeeded();
    
    await this.approveBtn.click();
    //approve popup confirm
    await this.confirmBtn.click();

    //navigate back
    await this.backNav.click();
    //verify 'approved status'
//Mentor
    //await expect(this.page.locator('span').getByText('Approved')).toBeVisible();
  }

  async confirmPageHeading() {
    await expect(this.pageHeading).toBeTruthy();
  }

}
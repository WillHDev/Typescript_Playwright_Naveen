import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly generalRequests: Locator;
  readonly hiringRequests: Locator;



  constructor(page: Page) {
    this.page = page;
    this.generalRequests = page.locator(`(//img[@ng-src='images/dashboard/icons/request.png'])[2]`);
    this.hiringRequests = page.locator(`(//img[@ng-src='images/dashboard/icons/hire.png'])[2]`);
}

  async gotoUrl() {
    await this.page.goto('https://william77-trials714.orangehrmlive.com');
  }

}
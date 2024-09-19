import { type Locator, type Page } from '@playwright/test';

export class GeneralRequests {
  readonly page: Page;
  readonly pageHeading: Locator;



  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.locator(`//div[normalize-space(text())='Employee General Requests']`);
  }

  async gotoUrl() {
    await this.page.goto('https://william77-trials714.orangehrmlive.com');
  }

//   async login(username: string, password: string) {
//     await this.username.fill(username);
//     await this.password.fill(password);
//     await this.submitBtn.press('Enter');
//   }
}




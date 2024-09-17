import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly submitBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.submitBtn = page.getByRole( 'button', { type: 'submit' });

  }

  async gotoUrl() {
    await this.page.goto('https://william77-trials714.orangehrmlive.com');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submitBtn.press('Enter');
  }
}
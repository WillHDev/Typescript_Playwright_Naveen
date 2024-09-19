import { chromium, Browser, FullConfig, Page } from '@playwright/test';
import { test, expect } from './mytests/fixtures/orangeHrm-test.ts';


 async function globalSetup() {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page: Page  = await context.newPage();
    await page.goto('https://william77-trials714.orangehrmlive.com');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('8cTW2tXu@K');
    await page.getByRole( 'button', { type: 'submit' }).click();
    await expect(page.locator('a[class="name"]').getByText('Aaron Hamilton')).toBeVisible();
    // Save signed-in state to ‘storageState.json’.
    await page.context().storageState({ path: 'storageState.json' });
    //cleans everything up
    //await browser.close();
}

export default globalSetup;
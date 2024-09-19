import { test, expect } from './fixtures/orangeHrm-test.ts';

//TODO: refactor authentication

test.beforeEach(async({ loginPage })=>{
    await loginPage.gotoUrl();
    await loginPage.login('Admin', '8cTW2tXu@K');
    await expect(loginPage.page.locator('a[class="name"]').getByText('Aaron Hamilton')).toBeVisible();
});

test('accept a general request from general requests inbox', async({ homePage, generalRequests })=>{
    await homePage.generalRequests.click();
    await homePage.page.waitForTimeout(5000);
    await expect(generalRequests.pageHeading).toBeVisible();
});
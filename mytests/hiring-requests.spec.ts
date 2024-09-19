import { test, expect } from './fixtures/orangeHrm-test.ts';


test.beforeEach(async({ loginPage })=>{
    await loginPage.gotoUrl();
    await loginPage.login('Admin', '8cTW2tXu@K');
    await expect(loginPage.page.locator('a[class="name"]').getByText('Aaron Hamilton')).toBeVisible();
});

test('accept a hiring request from hiring requests inbox', async({ homePage, hiringRequests })=>{
    test.setTimeout(60000)
    await homePage.gotoUrl();
    await homePage.hiringRequests.click({ timeout:15000 });
    await homePage.page.waitForTimeout(15000);
    await hiringRequests.confirmPageHeading();
    await hiringRequests.approveFirstRequest();
    await expect(hiringRequests.page.locator('span').getByText('Approved')).toBeVisible();
});
import { test, expect } from './fixtures/orangeHrm-test.ts';

test('login test', async({ loginPage })=>{
    await loginPage.gotoUrl();
    await loginPage.login('Admin', '8cTW2tXu@K');
    await expect(loginPage.page.locator('a[class="name"]').getByText('Aaron Hamilton')).toBeVisible();
});
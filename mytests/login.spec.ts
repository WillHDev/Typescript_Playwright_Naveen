import { test, expect } from './fixtures/orangeHrm-test.ts';

test('login test', async({ loginPage })=>{
    await loginPage.gotoUrl();
    await loginPage.login('Admin', '8cTW2tXu@K');
    const title = await loginPage.page.title();
    expect(title).toEqual('OrangeHRM');
});
import { test, expect, type Page, Locator } from '@playwright/test';
import { LoginPage } from './pages/login.ts';


test('login test', async({ page })=>{
    const loginPage = new LoginPage(page);
    await loginPage.gotoUrl();
    await loginPage.login('Admin', '8cTW2tXu@K');
    const title = await page.title();
    expect(title).toEqual('OrangeHRM');
//    await page.goto("https://william77-trials714.orangehrmlive.com");
//     // const emailId:Locator =  page.locator('#input-email');
//     // const password:Locator =  page.locator('#input-password');
//     // const loginButton:Locator = page.locator("[value='Login']");
//     const emailId:Locator =  page.getByPlaceholder('Username');
//     const password:Locator =  page.getByPlaceholder('Password');
//     const loginButton:Locator = page.getByRole( 'button', { type: 'submit' });
//     await emailId.fill("Admin");
//     await password.fill("8cTW2tXu@K");
//     await loginButton.click();
//     const title = await page.title();
//     await page.screenshot({path: 'homepage.png'});

//     expect(title).toEqual('OrangeHRM');

});
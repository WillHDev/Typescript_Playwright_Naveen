import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.ts';


type OrangeFixtures = {
  loginPage: LoginPage;
  //homePage: HomePage;

};

export const test = base.extend<OrangeFixtures>({

    loginPage: async ({ page, isMobile }, use) => {
    await use(new LoginPage( page, isMobile ));
  },

//   homePage: async ({ page }, use) => {
//     await use(new homePage(page));
//   }
//   },
});

export { expect } from '@playwright/test';
import { test as base } from '@playwright/test';
//import { GetStartedPage } from '../pages/get-started';


type TrelloFixtures = {
  loginPage: loginPage;
  homePage: HomePage;

};

export const test = base.extend<TrelloFixtures>({

    loginPage: async ({ page }, use) => {
    await use(new loginPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new homePage(page));
  }
  },
});

export { expect } from '@playwright/test';
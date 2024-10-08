import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.ts';
import { HomePage } from '../pages/home.ts';
import { GeneralRequests } from '../pages/general-requests.ts';
import { HiringRequests } from '../pages/hiring-requests.ts';


type OrangeFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  generalRequests: GeneralRequests;
  hiringRequests: HiringRequests;
};

export const test = base.extend<OrangeFixtures>({

  loginPage: async ({ page, isMobile }, use) => {
    await use(new LoginPage( page, isMobile ));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  generalRequests: async ({ page }, use) => {
    await use(new GeneralRequests(page));
  },
  hiringRequests: async ({ page }, use) => {
    await use(new HiringRequests(page));
  },
});

export { expect } from '@playwright/test';
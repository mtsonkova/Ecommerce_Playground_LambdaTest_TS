import { test as base, Page, BrowserContext } from '@playwright/test';
import loginCredentials from '@src/testData/loginCredentials.json'
import { HomePage } from '@src/pageObjects/homePage';
import { LoginPage } from '@src/pageObjects/loginPage';
import { CartPage } from '@src/pageObjects/shoppingCart';
import { CheckoutPage } from '@src/pageObjects/checkoutPage';
import { ConfirmOrderPage } from '@src/pageObjects/confirmOrderPage';
import { CheckoutSuccessPage } from '@src/pageObjects/checkoutSuccessPage';
import { OrderHistoryPage } from '@src/pageObjects/orderHistoryPage';
import { OrderPage } from '@src/pageObjects/orderPage';

// Define a type for the fixtures
type PageObjects = {
  context: BrowserContext;
  page: Page;
  homePage: HomePage;
  loginPage: LoginPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  confirmOrderPage: ConfirmOrderPage;
  checkoutSuccessPage: CheckoutSuccessPage;
  orderHistotyPage: OrderHistoryPage;
  orderPage: OrderPage;
};

// Extend the base test to include your fixtures
export const test = base.extend<PageObjects>({
  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    await use(context);
    await context.close();
  },
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await page.goto('/index.php?route=account/login');
    page.fill('#input-email', loginCredentials.email);
    page.fill('#input-password', loginCredentials.password);
    page.click('input[type="submit"]');
    await page.waitForSelector('aside')
    await use(page);
  },
  
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({page}, use) => {
    await use(new LoginPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  confirmOrderPage: async ({page}, use) => {
    await use(new ConfirmOrderPage(page));
  },
  checkoutSuccessPage: async ({page}, use) => {
    await use(new CheckoutSuccessPage(page));
  },
  orderHistotyPage: async ({page}, use) => {
    await use(new OrderHistoryPage(page));
  },
  orderPage: async ({page}, use) => {
    await use(new OrderPage(page));
  }
});

export { expect } from '@playwright/test';

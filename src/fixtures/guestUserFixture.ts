import { test as base, Page, BrowserContext } from '@playwright/test';
import { HomePage } from '@src/pageObjects/homePage';
import { CartPage } from '@src/pageObjects/shoppingCart';
import { CheckoutPage } from '@src/pageObjects/checkoutPage';
import { ContactFormPage } from '@src/pageObjects/contactFormPage';
import { ContactUsPage } from '@src/pageObjects/contactUsPage';

// Define a type for the fixtures
type PageObjects = {
  context: BrowserContext;
  page: Page;
  homePage: HomePage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  contactFormPage: ContactFormPage;
  contactUsPage: ContactUsPage;
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
    await page.goto('/');
    await use(page);
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  contactFormPage: async ({ page }, use) => {
    await use(new ContactFormPage(page));
  },
  contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  }
});

export { expect } from '@playwright/test';

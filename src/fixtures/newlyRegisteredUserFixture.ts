import { test as base, Page, BrowserContext } from '@playwright/test';
import { HomePage } from '@src/pageObjects/homePage';
import { RegisterPage } from '@src/pageObjects/registerPage';
import { WishlistPage } from '@src/pageObjects/wishlistPage';
import { ProductPage } from '@src/pageObjects/productPage';
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
  registerPage: RegisterPage;
  wishlistPage: WishlistPage;
  productPage: ProductPage;
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
    await page.goto('/');
    await use(page);
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  registerPage: async ({page}, use) => {
    await use(new RegisterPage(page));
  },
   wishlistPage: async({page}, use) => {
    await use(new WishlistPage(page));
   },
    productPage: async({page}, use) => {
        await use(new ProductPage(page));
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

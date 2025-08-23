import type { Page } from "@playwright/test";

export const CheckoutSuccessLocators = (page: Page) => ({
    checkoutSuccessTitle: page.locator('h1.page-title'),
    continueBtn: page.locator('div.buttons a'),
});
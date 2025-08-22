import type { Page } from "@playwright/test";

export const checkoutSuccessLocators = (page: Page) => ({
    checkoutSuccessTitle: page.locator('h1.page-title'),
    continueBtn: page.locator('div.buttons a'),
});
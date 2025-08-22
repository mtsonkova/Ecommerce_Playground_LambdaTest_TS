import type { Page } from "@playwright/test";

export const RegisterPageLocators = (page: Page) => ({
    firstName: page.locator('#input-firstname'),
    lastName: page.locator('#input-lastname'),
    email: page.locator('#input-email'),
    telephone: page.locator('#input-telephone'),
    password: page.locator('#input-password'),
    confirmPassword: page.locator('#input-confirm'),
    newsletterSunbscribe: {
        yes: page.locator('#input-newsletter-yes'),
        no: page.locator('#input-newsletter-no')
    },
    privacyPolicyCheckbox: page.locator('#input-agree'),
    continueBtn: page.locator('input[type="Submit"]'),

});
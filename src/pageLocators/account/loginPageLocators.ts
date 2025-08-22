import { Page } from "@playwright/test";

export const LoginPageLocators = (page:Page) => ({
 email: page.locator('#input-email'),
 password: page.locator('#input-password'),
loginBtn: page.locator('input[type="submit"]'),
forgottenPassword: page.locator('div.form-group a'),
errorMsg: page.locator('div#account-login div.alert'),
});
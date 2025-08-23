import type {Page} from '@playwright/test';

export const ContactFormLocators = (page: Page) => ({
    yourName: page.locator('#input-name'),
    email: page.locator('#input-email'),
    enquiry: page.locator('#input-enquiry'),
    submit: page.locator('input[value="Submit"]'),
});
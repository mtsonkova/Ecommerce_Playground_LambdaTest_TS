import type {Page} from '@playwright/test';

export const ContactUsPageLocators = (page: Page) => ({
 title: page.locator('div#content h1'),
 text: page.locator('div#content p').nth(1),
 continueBtn: page.locator('div.buttons a'),
});
import type {Page}  from '@playwright/test';
import {expect} from '@playwright/test';
import { ContactUsPageLocators } from '@src/pageLocators/contactUsLocators';
import messages from '@src/testData/messages.json'

export class ContactUsPage {
    private page: Page;
    private contactUsPageLocators: ReturnType<typeof ContactUsPageLocators>;

    constructor(page: Page) {
        this.page = page;
        this.contactUsPageLocators = ContactUsPageLocators(page);
    }

    async checkInfoOnContactsPage() {
        const actualTitle = await this.contactUsPageLocators.title.textContent();
        const expectedTitle = messages.contactUs.title;
        const actualText = await this.contactUsPageLocators.text.textContent();
        const expectedText = messages.contactUs.text;

        expect(actualTitle).toContain(expectedTitle);
        expect(actualText).toContain(expectedText);
    }
}
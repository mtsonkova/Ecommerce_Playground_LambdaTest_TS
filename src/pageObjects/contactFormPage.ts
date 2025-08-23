import type {Page} from '@playwright/test';
import { ContactFormLocators } from '@src/pageLocators/contactFormLocators';
import messages from '@src/testData/messages.json';
import userData from '@src/testData/userData.json'

export class ContactFormPage {

    private page: Page;
    private contactFormLocators: ReturnType<typeof ContactFormLocators>
    
    constructor(page: Page) {
        this.page = page;
        this.contactFormLocators = ContactFormLocators(page);
    }

    async fillContactForm(userEmail: string) {
        const fullName = `${userData.firstName} ${userData.lastName}`;
        await this.contactFormLocators.yourName.fill(fullName);
        await this.contactFormLocators.email.fill(userEmail);
        await this.contactFormLocators.enquiry.fill(messages.enquiry.enquiryMsg);
        await this.contactFormLocators.submit.click();
    }
}


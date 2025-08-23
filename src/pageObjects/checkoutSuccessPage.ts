import type {Page} from '@playwright/test';
import { CheckoutSuccessLocators } from '@src/pageLocators/checkoutSuccessLocators';


export class CheckoutSuccessPage {
    private page: Page;
    private checkoutSuccessLocators: ReturnType<typeof CheckoutSuccessLocators>;

    constructor(page: Page) {
        this.page = page;
        this.checkoutSuccessLocators = CheckoutSuccessLocators(page);
    }

    async clickContinue() {
        await this.checkoutSuccessLocators.continueBtn.click();
    }

    
}
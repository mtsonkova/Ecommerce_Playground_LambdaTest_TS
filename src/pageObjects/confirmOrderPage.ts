import type {Page} from '@playwright/test';
import { ConfirmOrderLocators } from '@src/pageLocators/confirmOrderLocators';

export class ConfirmOrderPage {
    private page: Page;
    private confirmOrderLocators: ReturnType<typeof ConfirmOrderLocators>;

    constructor(page: Page) {
        this.page = page;
        this.confirmOrderLocators = ConfirmOrderLocators(page);
    }

    async confirmOrder() {
        await this.confirmOrderLocators.confirmOrderBtn.click();
    }

    async editOrder() {
        await this.confirmOrderLocators.editBtn.click();
    }
}
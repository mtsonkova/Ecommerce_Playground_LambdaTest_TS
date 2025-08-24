import type {Page} from '@playwright/test';
import { OrderPageLocators } from '@src/pageLocators/ordrerPageLocators';

export class OrderPage {
    private page: Page;
    private orderPageLocators: ReturnType<typeof OrderPageLocators>

    constructor(page: Page) {
        this.page = page;
        this.orderPageLocators = OrderPageLocators(page);
    }

    async getOrderIdData(): Promise<string| null> {
        return await this.orderPageLocators.orderId.textContent();
    }

    async clickOnReorderBtn() {
        await this.orderPageLocators.reorderBtn.click();
    }

    async clickOnReturnBtn() {
        await this.orderPageLocators.returnBtn.click();
    }


}
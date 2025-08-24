import type {Page} from '@playwright/test';
import { OrderHistoryLocators } from '@src/pageLocators/orderHistoryLocators';

export class OrderHistoryPage {
    private page: Page;
    private orderHistoryLocators: ReturnType<typeof OrderHistoryLocators>

    constructor(page: Page) {
        this.page = page;
        this.orderHistoryLocators = OrderHistoryLocators(page);
    }

    async viewOrder(index: number) {
        await this.orderHistoryLocators.viewOrderBtn.nth(index).click();
    }

    async getOrderId(): Promise<string | null> {
        return await this.orderHistoryLocators.orderId.first().textContent();
    }


}
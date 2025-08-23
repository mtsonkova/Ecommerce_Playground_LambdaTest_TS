import type {Page} from '@playwright/test';
import { CartPageLocators } from '@src/pageLocators/cartPageLocators';

export class CartPage {
    private page: Page;
    private cartPageLocators: ReturnType<typeof CartPageLocators>;

    constructor(page: Page) {
        this.page = page;
        this.cartPageLocators = CartPageLocators(page);
    }

    async increaseProductQty(qty: string) {
        await this.cartPageLocators.tableRowData.quantity.qtyInput.fill(qty);
        await this.cartPageLocators.tableRowData.quantity.updateBtn.click();
    }

    async getSubTotalPrice(): Promise<number> {
        let priceAsText = 
    }
}
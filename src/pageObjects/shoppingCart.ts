import type {Page} from '@playwright/test';
import { CartPageLocators } from '@src/pageLocators/cartPageLocators';
import { convertStringPriceToNumber } from '@src/helpers/pricesUtils';

export class CartPage {
    private page: Page;
    private cartPageLocators: ReturnType<typeof CartPageLocators>;

    constructor(page: Page) {
        this.page = page;
        this.cartPageLocators = CartPageLocators(page);
    }

    async increaseProductQty({ index, qtyNumber }: { index: number; qtyNumber: string }): Promise<void>  {
        await this.cartPageLocators.tableRowData.quantity.qtyInput.nth(index).fill(qtyNumber);
        await this.cartPageLocators.tableRowData.quantity.updateBtn.click();
    }

    async getCartWarningMsg():Promise<string> {
        return await this.cartPageLocators.warningMsg.textContent() ?? '';
    }
 
    async getSubTotalPrice(index: number): Promise<number> {
        let priceAsText = await this.cartPageLocators.tablePrices.subTotal.nth(index).textContent();
        let price = convertStringPriceToNumber(priceAsText ?? '');
        return price;
    }

     async getTotalPrice(): Promise<number> {
        let priceAsText = await this.cartPageLocators.tablePrices.total.textContent();
        let price = convertStringPriceToNumber(priceAsText ?? '');
        return price;
    }

    async clickOnCheckoutBtn() {
        await this.cartPageLocators.chekoutBtn.click();
    }
}
import type {Page} from '@playwright/test';
import { ProductPageLocators } from '@src/pageLocators/productPageLocators';

export class ProductPage {
    private page: Page;
    private productPageLocators: ReturnType<typeof ProductPageLocators>;

    constructor(page: Page) {
        this.page = page;
        this.productPageLocators = ProductPageLocators(page);
    }

    async addProductToCart() {
        await this.productPageLocators.addtToCartBtn.click();
    }
}
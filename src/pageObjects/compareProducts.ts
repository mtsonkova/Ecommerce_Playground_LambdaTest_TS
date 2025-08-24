import type {Page} from '@playwright/test';
import { ComparePageLocators } from '@src/pageLocators/comparePageLocators';

export class ComparePage {
    private page: Page;
    private comparePageLocators: ReturnType<typeof ComparePageLocators>;

    constructor(page: Page) {
        this.page = page;
        this.comparePageLocators = ComparePageLocators(page);
    }

    async addProductToCart() {
        await this.comparePageLocators.addToCartBtn.first().click({force: true}); 
    }
}
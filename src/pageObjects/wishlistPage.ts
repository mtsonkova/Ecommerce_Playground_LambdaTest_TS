import type {Page} from '@playwright/test';
import { WishlistLocators } from '@src/pageLocators/wishlistPageLocators';

export class WishlistPage {
    private page: Page;
    private wishlistLocators: ReturnType<typeof WishlistLocators>;

    constructor(page: Page) {
        this.page = page;
        this.wishlistLocators = WishlistLocators(page);
    }

    async addToCart() {
        await this.wishlistLocators.wishlistTable.action.addToCartBtn.first().click({force:true});
    }
}
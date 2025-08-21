import {Page} from '@playwright/test';

export const WishlistLocators = (page: Page) => {
    const products =  'table.table.border tbody tr';
    
    return {
    pageTitle: page.locator('h1.page-title.h3'),
    emptyWishlist: page.locator('div.content p'),
    wishlistTable: {
        tableRows: page.locator(`${products}`),
        name: page.locator(`${products} td`).nth(1),
        model: page.locator(`${products} td`).nth(2),
        stock: page.locator(`${products} td`).nth(3),
        price: page.locator(`${products} td`).nth(4),
        action: {
            addToCartBtn:page.locator(`${products} td`).nth(5).locator('button'),
            deleteBtn: page.locator(`${products} td`).nth(5).locator('a'),
        },
    },

    continueBtn: page.locator('div.buttons a'),
    
};
};
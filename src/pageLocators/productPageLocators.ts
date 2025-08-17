import {Page} from '@playwright/test';

export const ProductPageLocators = (page:Page) => ({
productName: page.locator('h1.h3'),
price: page.locator('h3.price-new'),
optionsSelect: page.locator('[id*="input-option240"]'),
optionValues: {
    small: page.locator('option[value="83"]'),
    medium: page.locator('option[value="84"]'),
    large: page.locator('option[value="85"]'),
},
addtToCartBtn: page.getByRole('button', {name: 'Add to Cart'}),
buyNowBtn: page.getByRole('button', {name: 'Buy now'}),


});
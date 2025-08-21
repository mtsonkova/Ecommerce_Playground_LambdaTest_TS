import { Page } from "@playwright/test";

export const ComparePageLocators = (page: Page) => ({
title: page.locator('h1.h4'),
productDetails: {
    product: page.locator('#content tbody').nth(0).locator('tr').nth(0).locator('td'),
    image: page.locator('#content tbody').nth(0).locator('tr').nth(1).locator('td'),
    price: page.locator('#content tbody').nth(0).locator('tr').nth(2).locator('td'),
    model: page.locator('#content tbody').nth(0).locator('tr').nth(3).locator('td'),
    brand: page.locator('#content tbody').nth(0).locator('tr').nth(4).locator('td'),
    availability: page.locator('#content tbody').nth(0).locator('tr').nth(5).locator('td'),
    rating: page.locator('#content tbody').nth(0).locator('tr').nth(6).locator('td'),
    summary: page.locator('#content tbody').nth(0).locator('tr').nth(7).locator('td'),
    weight: page.locator('#content tbody').nth(0).locator('tr').nth(8).locator('td'),
    dimentions: page.locator('#content tbody').nth(0).locator('tr').nth(9).locator('td'),    
},
memory: {
    deviceMemory:page.locator('#content tbody').nth(1).locator('tr').nth(0).locator('td'),
},
processor: {
numberOfCores: page.locator('#content tbody').nth(2).locator('tr').nth(0).locator('td'),
},
addToCartBtn: page.getByRole('button', {name: 'Add to Cart'}),
removeBtn: page.getByRole('link', {name: 'Remove'}),
});
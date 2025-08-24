import type {Page} from '@playwright/test';

export const OrderPageLocators = (page: Page) => ({
reorderBtn: page.locator('a[title="Reorder"]'),
returnBtn: page.locator('a[title="Return"]'),
orderId: page.locator('#content table tbody tr').first().locator('td').first(),

});
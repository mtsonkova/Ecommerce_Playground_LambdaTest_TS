import { Page } from "@playwright/test";

export const OrderHistoryLocators = (page: Page) => ({
    orderHistoryTitle: page.locator('h1.page-title.h3'),
    tableRows: page.locator('#content tbody tr'),
    orderId: page.locator('#content tbody tr td').nth(0),
    customer:page.locator('#content tbody tr td').nth(1),
    numOfProducts:page.locator('#content tbody tr td').nth(2),
    status:page.locator('#content tbody tr td').nth(3),
    total:page.locator('#content tbody tr td').nth(4),
    dateAdded:page.locator('#content tbody tr td').nth(5),
    viewOrderBtn:page.locator('#content tbody tr td').nth(6).locator('a'),
    continueBtn: page.locator('div.buttons a'),
});
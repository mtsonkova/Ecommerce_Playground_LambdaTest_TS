import { Page } from "@playwright/test";

export const ConfirmOrderLocators = (page: Page) => {
    const orderTable = '#content table';
    const tableFooter = 'tfoot'
    return {
    confirmOrderTitle: page.locator('h1.page-title'),
    tableRows: page.locator(`${orderTable} tbody tr`),
    productName: page.locator('td:nth-of-type(1)'), 
    model: page.locator('td:nth-of-type(2)'),
    quantity: page.locator('td:nth-of-type(3)'),
    price: page.locator('td:nth-of-type(4)'),
    total: page.locator('td:nth-of-type(5)'),
    subTotal: page.locator(`${tableFooter} tr:nth-of-type(1) td:nth-of-type(2)`),
    flatShippingRate: page.locator(`${tableFooter} tr:nth-of-type(2) td:nth-of-type(2)`),
    ecoTax: page.locator(`${tableFooter} tr:nth-of-type(3) td:nth-of-type(2)`),
    vat: page.locator(`${tableFooter} tr:nth-of-type(4) td:nth-of-type(2)`),
    finalTotal: page.locator(`${tableFooter} tr:nth-of-type(5) td:nth-of-type(2)`),
    paymentAddress: page.locator('div.card-body:nth-of-type(1)'),
    shippingAddress: page.locator('div.card-body:nth-of-type(2)'),
    shippingMethod: page.locator('div.card-body:nth-of-type(3)'),
    editBtn: page.locator('div.buttons a'),
    confirmOrderBtn: page.locator('button#button-confirm'),
};
};
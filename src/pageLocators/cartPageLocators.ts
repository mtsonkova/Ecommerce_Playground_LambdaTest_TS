import type { Page } from "@playwright/test";

export const CartPageLocators = (page: Page) => {
    const productsTable ='div.table-responsive table.table-bordered';
    const qtyUpdate = 'div.input-group';
    const tablePrices = 'table.table.table-bordered.m-0';

    return {
    title: page.locator('h1.page-title.mb-3.h4'),
    warningMsg: page.locator('div.alert.alert-danger'),
    tableRows: page.locator(`${productsTable} tbody tr`),
    tableRowData: {
        productName: page.locator('td:nth-of-type(2)'),
        model: page.locator('td:nth-of-type(3)'),
        quantity: {
            qtyInput: page.locator(`td:nth-of-type(4) ${qtyUpdate} input[type="text"]`),
            updateBtn: page.locator(`td:nth-of-type(4) ${qtyUpdate} button[type="submit"]`),
            deleteBtn: page.locator(`td:nth-of-type(4) ${qtyUpdate} button[type="button"]`),
            unitPrice: page.locator('td:nth-of-type(5)'),
            total: page.locator('td:nth-of-type(6)'),
        },
    },
    tablePrices: {
        subTotal: page.locator(`${tablePrices} tr:nth-of-type(1) td:nth-of-type(2)`),
        ecoTax: page.locator(`${tablePrices} tr:nth-of-type(2) td:nth-of-type(2)`),
        vat: page.locator(`${tablePrices} tr:nth-of-type(3) td:nth-of-type(2)`),
        total: page.locator(`${tablePrices} tr:nth-of-type(4) td:nth-of-type(2)`),
    },
    continueShopingBtn: page.getByRole('link', {name: 'Continue Shopping'}),
    chekoutBtn: page.locator('div.buttons a:last-child'),
    };

}
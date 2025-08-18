import { Page } from "@playwright/test";

export const CheckoutPageLocators = (page: Page) => {
    const cartTable = 'div#checkout-cart table';
    const checkOutTotalTable= 'table#checkout-total';

    return {
checkoutRadioBtns: {
    login: page.locator('#input-account-login'),
    register: page.locator('#input-account-register'),
    guest: page.locator('#input-account-guest'),
},

personalDetails: {
    firstName: page.locator('#input-payment-firstname'),
    lastName: page.locator('#input-payment-lastname'),
    email: page.locator('#input-payment-email'),
    telephone: page.locator('#input-payment-telephone'),
    password: page.locator('#input-payment-password'),
    confirmPassword: page.locator('#input-payment-confirm'),
},

billingAddress: {
    company: page.locator('#input-payment-company'),
    address1: page.locator('#input-payment-address-1'),
    address2: page.locator('#input-payment-address-2'),
    city: page.locator('#input-payment-city'),
    postalCode: page.locator('#input-payment-postcode'),
    country: page.locator('#input-payment-country'),
    regionState:page.locator('#input-payment-zone'),
},

shippingAddressSame: page.locator('#input-shipping-address-same'),

shippingAddress: {
    firstNane: page.locator('#input-shipping-firstname'),
    lastName: page.locator('#input-shipping-lastname'),
    company: page.locator('#input-shipping-company'),
    address1: page.locator('#input-shipping-address-1'),
    address2: page.locator('#input-shipping-address-2'),
    city: page.locator('#input-shipping-city'),
    postCode: page.locator('#input-shipping-postcode'),
    country: page.locator('#input-shipping-country'),
    regionState: page.locator('#input-shipping-zone'),
},
checkoutCart: {
productRows: page.locator(`${cartTable} tbody tr`),
productName: page.locator('td:nth-of-type(2) a'),
productQtyField: {
    qty: page.locator('input[type="number"]'),
    updateBtn: page.locator('div.input-group-append button[data-original-title="Update"]'),
    deleteBtn: page.locator('div.input-group-append button[data-original-title="Remove"]'),
},
unitPrice: page.locator('td:nth-of-type(4)'),
totalPrice: page.locator('td:nth-of-type(5)'),
},
totalCheckoutTable: {
    checkoutTableRows: page.locator(`${checkOutTotalTable} tr`),
    subTotal: page.locator('tr:nth-child(1) td:last-of-type'),
    flatShippiingRate: page.locator('tr:nth-child(2) td:last-of-type'),
    ecoTax: page.locator('tr:nth-child(3) td:last-of-type'),
    vat: page.locator('tr:nth-child(4) td:last-of-type'),
    total: page.locator('tr:nth-child(5) td:last-of-type'),
},
comments: page.locator('#input-comment'),
newsletterSubscribtion: page.locator('#input-newsletter'),
privacyPolicy: page.locator('#input-account-agree'),
termsAndConditions: page.locator('#input-agree'),
continueBtn: page.locator('button#button-save')

};
};
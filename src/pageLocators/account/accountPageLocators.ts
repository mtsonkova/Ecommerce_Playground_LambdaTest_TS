import {type Page} from '@playwright/test';

export const AccountPageLocators = (page: Page) => {
    const menu = 'div.list-group';
 
    return    {
login: page.locator(`${menu} a:nth-of-type(1)`),
register: page.locator(`${menu} a:nth-of-type(2)`),
forgottenPassword: page.locator(`${menu} a:nth-of-type(3)`),
myAccount: page.locator(`${menu} a:nth-of-type(4)`),
addressBook: page.locator(`${menu} a:nth-of-type(5)`),
wishList: page.locator(`${menu} a:nth-of-type(6)`),
orderHistory: page.locator(`${menu} a:nth-of-type(7)`),
downloads: page.locator(`${menu} a:nth-of-type(8)`),
requrringPayments: page.locator(`${menu} a:nth-of-type(9)`),
rewardPoints: page.locator(`${menu} a:nth-of-type(10)`),
returns: page.locator(`${menu} a:nth-of-type(11)`),
transactions: page.locator(`${menu} a:nth-of-type(12)`),
newsletter: page.locator(`${menu} a:nth-of-type(13)`),
messages: {
    successMsgAccountCreation: page.locator('h1.page-title'),
}
};
};
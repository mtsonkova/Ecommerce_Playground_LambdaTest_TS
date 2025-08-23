import { HomePage } from "@src/pageObjects/homePage";
import {test, expect, Page} from '@playwright/test';
import { debug } from "console";

test.describe('Guest user functionality', () => {
    let homePage:HomePage;
         let context;
         let page: Page;

     test.beforeEach('Initial setup', async ({browser}) => {
            context = await browser.newContext();
            page = await context.newPage();
    
            await page.goto('/');
            homePage = new HomePage(page);
        });
        
    test('Should purchase products successfully - qty increase in cart', async () => {
        await homePage.searchForProduct('iPod Shuffle');
        await homePage.addProductToCart(0);
       await homePage.goToShoppingCart();

    });
})

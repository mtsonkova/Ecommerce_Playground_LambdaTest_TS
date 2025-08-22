import {test, expect, Page } from '@playwright/test';
import {HomePage} from '@src/pageObjects/homePage'
import { LoginPage } from '@src/pageObjects/loginPage';


test.describe('Verify login functionality', ()=> {
     let homePage:HomePage;
     let loginPage: LoginPage;
     let context;
     let page: Page;

     test.beforeEach('Initial setup', async ({browser}) => {
        context = await browser.newContext();
        page = await context.newPage();

        await page.goto('/');
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
     })

    test('Login with valid credentials',{tag: '@smoke'}, async() => {
        await homePage.clickOnMyAccount();
        await loginPage.login({email: 'samgreen@test.qa', password: 'testuser'});
        const actualTitle = await page.title();
        const expectedTitle: string = 'My Account';
        expect(actualTitle).toBe(expectedTitle);

    });

    test('Login with wrong credentials should throw error', async() => {
        await homePage.clickOnMyAccount();
        await loginPage.login({email: 'testuser@test.qa', password: 'userpass'});
        const errorMsg = await loginPage.getErrorMsg();
        const expectedErrMsg: string = 'Warning: No match for E-Mail Address and/or Password.';
        expect(errorMsg?.trim()).toBe(expectedErrMsg);
    });
})

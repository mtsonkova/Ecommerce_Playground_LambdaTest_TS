import {test, expect, Page } from '@playwright/test';
import {HomePage} from '@src/pageObjects/homePage';
import { RegisterPage} from '@src/pageObjects/registerPage';
import messages from '@src/testData/messages.json' with {type: 'json'};


test.describe('Verify register new user functionality', ()=> {
     let homePage:HomePage;
     let registerPage: RegisterPage;
     let context;
     let page: Page;

     test.beforeEach('Initial setup', async ({browser}) => {
        context = await browser.newContext();
        page = await context.newPage();

        await page.goto('/');
        homePage = new HomePage(page);
        registerPage = new RegisterPage(page);
     })

    test('Register new user',{tag: '@smoke'}, async() => {
        await homePage.clickOnMyAccount();
       const registerMsg =  await registerPage.registerUser();
        const expectedMsg = messages.register.success;
       expect(registerMsg).toBe(expectedMsg);
    });    
})

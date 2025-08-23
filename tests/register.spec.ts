import {test, expect, Page } from '@playwright/test';
import {HomePage} from '@src/pageObjects/homePage';
import { RegisterPage} from '@src/pageObjects/registerPage';
import messages from '@src/testData/messages.json' with {type: 'json'};
import { generateRandomEmail } from "@src/helpers/userUtils";
import loginCredentials from '@src/testData/loginCredentials.json' with {type: 'json'};


test.describe('Verify register new user functionality', ()=> {
     let homePage:HomePage;
     let registerPage: RegisterPage;
     let context;
     let page: Page;
     let email: string;

     test.beforeEach('Initial setup', async ({browser}) => {
        context = await browser.newContext();
        page = await context.newPage();

        await page.goto('/');
        homePage = new HomePage(page);
        registerPage = new RegisterPage(page);
     })

    test('Register new user',{tag: '@smoke'}, async() => {
        await homePage.clickOnMyAccount();
        email = generateRandomEmail();
       const registerMsg =  await registerPage.registerUser(email);
        const expectedMsg = messages.register.success;
       expect(registerMsg).toBe(expectedMsg);
    });    

    test('Register new user with existing email should trigger errror' ,{tag: '@smoke'}, async() => {
        await homePage.clickOnMyAccount();
        await registerPage.registerUser(loginCredentials.email);
        const actualMsg = await registerPage.getErrMsg();
        const expectedMsg = messages.register.failure;
       expect(actualMsg).toContain(expectedMsg);
    });  
})

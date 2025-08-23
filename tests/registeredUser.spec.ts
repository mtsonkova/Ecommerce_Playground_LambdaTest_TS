import { test, expect } from '@src/fixtures/registeredUserFixture';
import messages from '@src/testData/messages.json' with { type: 'json' };
import { generateRandomEmail } from '@src/helpers/userUtils';

test.describe('Newly Registered user functionality', {tag: '@smoke'}, () => {
  let userEmail: string;

  test('Register new user and purchase product', async ({page,
    homePage,
    registerPage,
    cartPage,
    checkoutPage,
    confirmOrderPage,
  
  }) => {
    userEmail = generateRandomEmail();
   
    await test.step('Register new user', async () => {
      await homePage.clickOnMyAccount();
      await registerPage.registerUser(userEmail);
      await homePage.clickOnHome();
    });

    await test.step('Add product to Shopping cart', async () => {
        await homePage.searchForProduct('iPod Touch');
        await homePage.addProductToCart(1);       
    });

    await test.step('Complete checkout process', async() => {
        await homePage.goToCheckout();
        await checkoutPage.checkoutAsRegisterUser();
        await confirmOrderPage.confirmOrder();
        
    
    })

  });

  
});

import { test, expect } from '@src/fixtures/registeredUserFixture';
import messages from '@src/testData/messages.json' with { type: 'json' };
import { generateRandomEmail } from '@src/helpers/userUtils';

test.describe('Newly Registered user functionality', {tag: '@smoke'}, () => {
  let userEmail: string;

  test.beforeEach('Initial setup', async() => {
    userEmail = generateRandomEmail();
  })
  test('Register new user and purchase product', async ({
    homePage,
    registerPage,
    checkoutPage,
    confirmOrderPage,
    checkoutSuccessPage,
    orderHistotyPage,   
  }) => {
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
        await checkoutSuccessPage.clickContinue();
    });
    
    await test.step('View order on order history page', async() => {
      await homePage.goToOrderHistpry();
      await orderHistotyPage.viewOrder(0);
    })
  });

  test('Register new user from checkout page', async ({
    homePage,
    checkoutPage,
    confirmOrderPage,
    checkoutSuccessPage,
    orderHistotyPage,   
  }) => {
    await test.step('Add product to Shopping cart', async () => {
        await homePage.searchForProduct('iPod Touch');
        await homePage.addProductToCart(1);       
    });

    await test.step('Complete checkout process', async() => {
        await homePage.goToCheckout();
        await checkoutPage.registerFromCheckoutPage(userEmail);
        await confirmOrderPage.confirmOrder();
        await checkoutSuccessPage.clickContinue();
    });
    
    await test.step('View order on order history page', async() => {
      await homePage.goToOrderHistpry();
      await orderHistotyPage.viewOrder(0);
    })
  });

  
});

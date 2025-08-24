import { test, expect } from '@src/fixtures/newlyRegisteredUserFixture';
import { generateRandomEmail } from '@src/helpers/userUtils';
import messages from '@src/testData/messages.json'

test.describe('Newly Registered user functionality', {tag: '@smoke'}, () => {
  let userEmail: string;
  let totalPrice: number | null;
  let newTotalPrice: number | null;

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
    orderPage
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
      const orderId = await orderHistotyPage.getOrderId();
      await orderHistotyPage.viewOrder(0);
      const orderIdFromOrderPage = await orderPage.getOrderIdData();
      expect(orderIdFromOrderPage).toContain(orderId);
    })
  });

  test('Register new user from checkout page', async ({
    homePage,
    checkoutPage,
    confirmOrderPage,
    checkoutSuccessPage,
    orderHistotyPage,
    orderPage,   
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
     const orderId = await orderHistotyPage.getOrderId();
     await orderHistotyPage.viewOrder(0);
      const orderIdFromOrderPage = await orderPage.getOrderIdData();
      expect(orderIdFromOrderPage).toContain(orderId);
    })
  });

  test('Purchase product from products page', async({
         homePage,
         registerPage,
         productPage,
         cartPage,
         checkoutPage,
         confirmOrderPage, 
         checkoutSuccessPage
        }) => {
          await test.step('Register new user', async () => {
      await homePage.clickOnMyAccount();
      await registerPage.registerUser(userEmail);
      await homePage.clickOnHome();
    });
    
            await test.step('Add product from product page', async() => {
                await homePage.searchForProduct('iPod Nano');
                await homePage.goToProductPage();
                await productPage.addProductToCart();
                await homePage.goToShoppingCart();
                await cartPage.clickOnCheckoutBtn();
            });

            await test.step('Fill in checkout details', async() => {
                await checkoutPage.checkoutAsExistingUser();
                totalPrice = await checkoutPage.getTotalPrice();
            });
            
            await test.step('Edit Order -> update qty from checkout page', async () => {
                await confirmOrderPage.editOrder();
                await checkoutPage.updateProductQuantity({index: 0, qtyNumber: '4'});
                newTotalPrice = await checkoutPage.getTotalPrice();
                expect(newTotalPrice).not.toBe(totalPrice);
            });

            await test.step('Complete checkout process', async() => {
                await checkoutPage.checkoutAsExistingUser();
                await confirmOrderPage.confirmOrder();
                const actualMessage = await checkoutSuccessPage.getHeaderText();
                const expectedMessage = messages.confirmOrder.success;
                expect (actualMessage).toContain(expectedMessage);
            });
    });

    test('Purchase product from wishlist page', async({
         homePage,
         registerPage,
         wishlistPage,
         checkoutPage,
         confirmOrderPage, 
         checkoutSuccessPage
        }) => {
          await test.step('Register new user', async () => {
      await homePage.clickOnMyAccount();
      await registerPage.registerUser(userEmail);
      await homePage.clickOnHome();
    });
            await test.step('Add product from wishlist page', async() => {
                await homePage.searchForProduct('iPod Nano');
               await homePage.addProductToWishlist(1);
               await homePage.goToWishlist();
               await wishlistPage.addToCart();
               await homePage.goToCheckout();
                
            });

            await test.step('Complete checkout process', async() => {
                await checkoutPage.checkoutAsExistingUser();
                await confirmOrderPage.confirmOrder();
                const actualMessage = await checkoutSuccessPage.getHeaderText();
                const expectedMessage = messages.confirmOrder.success;
                expect (actualMessage).toContain(expectedMessage);
            });

    })



  
});

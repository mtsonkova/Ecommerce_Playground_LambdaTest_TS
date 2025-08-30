import {test, expect} from '@src/fixtures/existingUserFixture';
import messages from '@src/testData/messages.json'

test.describe('Exisiting user functionality', async() => {
    let totalPrice: number | null;
    let newTotalPrice;
    
    
   test("Purchase product from products page", async ({
    loginPage,
    homePage,
    productPage,
    cartPage,
    checkoutPage,
    confirmOrderPage,
    checkoutSuccessPage,
  }) => {

    await test.step('Login in the ecommerce site', async() => {
     await homePage.clickOnMyAccount();
     await loginPage.login({email: 'samgreen@test.qa', password: 'testuser'});
    });
    await test.step("Add product from product page", async () => {
      await homePage.searchForProduct("iPod Nano");
      await homePage.goToProductPage();
      await productPage.addProductToCart();
      await homePage.goToShoppingCart();
      await cartPage.clickOnCheckoutBtn();
    });

    await test.step("Fill in checkout details", async () => {
      totalPrice = await checkoutPage.getTotalPrice();
      await checkoutPage.checkoutAsExistingUser();
    });

    await test.step("Edit Order -> update qty from checkout page", async () => {
      await confirmOrderPage.editOrder();
      await checkoutPage.updateProductQuantity({ index: 0, qtyNumber: "4" });
      newTotalPrice = await checkoutPage.getTotalPrice();
      expect(newTotalPrice).not.toBe(totalPrice);
    });

    await test.step("Complete checkout process", async () => {
      await checkoutPage.acceptTermsAndConfitions();
      await checkoutPage.clickOnContinueBtn();
      await confirmOrderPage.confirmOrder();
      const actualMessage = await checkoutSuccessPage.getHeaderText();
      const expectedMessage = messages.confirmOrder.success;
      expect(actualMessage).toContain(expectedMessage);
    });
  });

})
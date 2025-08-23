import { test, expect } from '@src/fixtures/guestUserFixture';
import messages from '@src/testData/messages.json' with { type: 'json' };
import { generateRandomEmail } from '@src/helpers/userUtils';

test.describe('Guest user functionality', {tag: '@smoke'}, () => {
  let userEmail: string;

  test('Should send email for further instructions to purchase product', async ({
    homePage,
    cartPage,
    checkoutPage,
    contactFormPage,
    contactUsPage
  }) => {
    userEmail = generateRandomEmail();

    await test.step('Add product to shopping cart', async () => {
      await homePage.searchForProduct('iPod Nano');
      await homePage.addProductToCart(0);
      await homePage.goToShoppingCart();
      await cartPage.clickOnCheckoutBtn();
    });

    await test.step('Fill user information on checkout page', async () => {
      await checkoutPage.checkoutAsGuest(userEmail);
    });

    await test.step('Send email with request for instructions', async () => {
      await contactFormPage.fillContactForm(userEmail);
      await contactUsPage.checkInfoOnContactsPage();
    });
  });

  test('Should purchase out of stock product - expect warning message in cart', async ({
    homePage,
    cartPage
  }) => {
    await homePage.searchForProduct('iPod Shuffle');
    await homePage.addProductToCart(0);
    await homePage.goToShoppingCart();
    const expectedWarningMsg = messages.shoppingCart.outOfStock;
    const actualMsg = await cartPage.getCartWarningMsg();
    expect(actualMsg).toContain(expectedWarningMsg);
  });
});

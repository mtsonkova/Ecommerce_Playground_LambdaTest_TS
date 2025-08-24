import {test, expect} from '@src/fixtures/existingUserFixture';
import messages from '@src/testData/messages.json'

test.describe('Exisiting user functionality', async() => {
    let totalPrice: number | null;
    let newTotalPrice;
    
    
    test('Purchase product from compare page', async({
         homePage,
         comparePage,
         cartPage,
         checkoutPage,
         confirmOrderPage, 
         checkoutSuccessPage
        }) => {
            
            await test.step('Add product from compare page', async() => {
                await homePage.searchForProduct('iPod Nano');
               await homePage.addProductToCompare(1);
                await homePage.searchForProduct('iPod Classic');
               await homePage.addProductToCompare(1);
               await homePage.goToCompare();
               await comparePage.addProductToCart();
                
            });

            await test.step('Update product qty in shopping cart', async() => {
                totalPrice = await cartPage.getTotalPrice();
                await cartPage.increaseProductQty({index: 0, qtyNumber: '2'});
                newTotalPrice = await cartPage.getTotalPrice();
                expect(totalPrice).not.toBe(newTotalPrice);
            });
            
            await test.step('Complete checkout process', async() => {
                await checkoutPage.checkoutAsExistingUser();
                await confirmOrderPage.confirmOrder();
                const actualMessage = await checkoutSuccessPage.getHeaderText();
                const expectedMessage = messages.confirmOrder.success;
                expect (actualMessage).toContain(expectedMessage);
            });
    });
})
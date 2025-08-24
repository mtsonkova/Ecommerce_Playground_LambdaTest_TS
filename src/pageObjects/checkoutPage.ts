import type {Page} from '@playwright/test';
import { CheckoutPageLocators } from '@src/pageLocators/checkoutPageLocators';
import userData from '@src/testData/userData.json' with {type: 'json'};
import {convertStringPriceToNumber} from '@src/helpers/pricesUtils';


export class CheckoutPage {
    private page: Page;
    private checkoutPageLocators: ReturnType<typeof CheckoutPageLocators>;
 
    constructor(page: Page) {
        this.page = page;
        this.checkoutPageLocators = CheckoutPageLocators(page);
    }

    async checkoutAsGuest(userEmail: string) {
        await this.checkoutPageLocators.checkoutRadioBtns.guest.click({force: true});
        await this.fillGuestCheckoutPersonalDetails(userEmail);
        await this.fillGuestCheckoutBillingAddress();
        await this.checkoutPageLocators.termsAndConditions.check({force: true});
        await this.checkoutPageLocators.continueBtn.click();
        await this.closeAlertPopUp();
        await this.clickOnContactUs();
    }

    async fillGuestCheckoutPersonalDetails(userEmail: string) {
        await this.checkoutPageLocators.personalDetails.firstName.fill(userData.firstName);
        await this.checkoutPageLocators.personalDetails.lastName.fill(userData.lastName);
        await this.checkoutPageLocators.personalDetails.email.fill(userEmail);
        await this.checkoutPageLocators.personalDetails.telephone.fill(userData.phoneNumber);
    }

    async fillGuestCheckoutBillingAddress() {
        await this.checkoutPageLocators.billingAddress.address1.fill(userData.address);
        await this.checkoutPageLocators.billingAddress.city.fill(userData.city);
        await this.checkoutPageLocators.billingAddress.postalCode.fill(userData.postalCode);
    }

    async checkoutAsRegisterUser() {
        await this.checkoutPageLocators.personalDetails.firstName.fill(userData.firstName);
        await this.checkoutPageLocators.personalDetails.lastName.fill(userData.lastName);
        await this.checkoutPageLocators.billingAddress.address1.fill(userData.address);
        await this.checkoutPageLocators.billingAddress.city.fill(userData.city);
        await this.checkoutPageLocators.billingAddress.postalCode.fill(userData.postalCode);
        await this.checkoutPageLocators.termsAndConditions.check({force:true});
        await this.checkoutPageLocators.continueBtn.click();
    }

    async registerFromCheckoutPage(userEmail: string){
        await this.checkoutPageLocators.personalDetails.firstName.fill(userData.firstName);
        await this.checkoutPageLocators.personalDetails.lastName.fill(userData.lastName);
        await this.checkoutPageLocators.personalDetails.email.fill(userEmail);
        await this.checkoutPageLocators.personalDetails.telephone.fill(userData.phoneNumber);
        await this.checkoutPageLocators.personalDetails.password.fill(userData.password);
        await this.checkoutPageLocators.personalDetails.confirmPassword.fill(userData.password);
        await this.checkoutPageLocators.billingAddress.address1.fill(userData.address);
        await this.checkoutPageLocators.billingAddress.city.fill(userData.city);
        await this.checkoutPageLocators.billingAddress.postalCode.fill(userData.postalCode);
        await this.checkoutPageLocators.privacyPolicy.check({force:true});
        await this.checkoutPageLocators.termsAndConditions.check({force:true});
        await this.checkoutPageLocators.continueBtn.click();

    }

    async checkoutAsExistingUser() {
        await this.checkoutPageLocators.termsAndConditions.check({force:true});
    }

async closeAlertPopUp() {
  const dialog = await this.page.waitForEvent('dialog'); // Wait for alert
  console.log(`Dialog message: ${dialog.message()}`);
  await dialog.accept();
}

 async clickOnContactUs() {
    await this.checkoutPageLocators.contactUs.nth(1).click({force: true});
  }

  async updateProductQuantity({ index, qtyNumber }: { index: number; qtyNumber: string }): Promise<void> {
    await this.checkoutPageLocators.checkoutCart.productQtyField.qty.nth(index).fill(qtyNumber);
    await this.checkoutPageLocators.checkoutCart.productQtyField.updateBtn.click({force: true});
  }

 async getTotalPrice(): Promise<number | null> {
  const totalPriceAsText = await this.checkoutPageLocators.checkoutCart.totalPrice.nth(0).textContent();

  if (!totalPriceAsText) {
    return null; // Element is missing or has no text
  }

  const totalPrice = convertStringPriceToNumber(totalPriceAsText.trim());
  return totalPrice;
}

}
import type { Page } from "@playwright/test";
import { HomePageLocators } from "@src/pageLocators/homePageLocators";

export class HomePage{
private page: Page;
private homePageLocators: ReturnType<typeof HomePageLocators>;

constructor(page: Page) {
    this.page = page;
    this.homePageLocators = HomePageLocators(page);
}

async clickOnMyAccount() {
    await this.homePageLocators.mainMenu.myAccount.last().click();   
}

async clickOnHome() {
    await this.homePageLocators.mainMenu.home.nth(0).click({force:true});
}

async searchForProduct(productName: string): Promise<void> {
    await this.homePageLocators.mainHeader.searchSection.searchField.first().fill(productName);
    await this.homePageLocators.mainHeader.searchSection.searchBtn.first().click();
}

async addProductToCart(index: number): Promise<void>{
    await this.homePageLocators.productsSection.productsItems.nth(index).hover();
    await this.homePageLocators.productsSection.productsActions.addToCartBtn.nth(index).hover();
    await this.homePageLocators.productsSection.productsActions.addToCartBtn.nth(index).click({force: true});
}

async addProductToWishlist(index: number): Promise<void>{
    await this.homePageLocators.productsSection.productsItems.nth(index).hover();
    await this.homePageLocators.productsSection.productsActions.addToWishlistbtn.nth(index).hover();
     await this.homePageLocators.productsSection.productsActions.addToWishlistbtn.nth(index).click({force: true});
}

async addProductToCompare(index: number): Promise<void>{
    await this.homePageLocators.productsSection.productsItems.nth(index).hover();
    await this.homePageLocators.productsSection.productsActions.compareBtn.nth(index).hover();
    await this.homePageLocators.productsSection.productsActions.compareBtn.nth(index).click({force: true});
}

async goToShoppingCart() {
    await this.homePageLocators.notificationPopup.body.viewCartBtn.click();
}

async goToCheckout() {
    await this.homePageLocators.notificationPopup.body.checkoutBtn.click();
}

async goToOrderHistpry() {
    await this.homePageLocators.mainMenu.myAccount.nth(1).hover();
    await this.homePageLocators.mainMenu.myAccountMenu.regularUser.myOrder.click();
}

async goToProductPage() {
    await this.homePageLocators.productsSection.productsItems.nth(1).click({force:true});
}

async goToCompare() {
    await this.homePageLocators.mainHeader.compareIcon.click({force: true});
}

async goToWishlist() {
    await this.homePageLocators.mainHeader.favoritesIcon.click({force:true});
}

async closePopUp() {
    await this.homePageLocators.notificationPopup.header.closeBtn.click({force:true});
}
}
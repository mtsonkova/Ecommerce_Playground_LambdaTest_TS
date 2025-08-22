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

}
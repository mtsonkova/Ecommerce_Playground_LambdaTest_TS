import type { Page } from "@playwright/test";
import { RegisterPageLocators } from "@src/pageLocators/account/registerPageLocators";
import { AccountPageLocators } from "@src/pageLocators/account/accountPageLocators";
import userData from '@src/testData/userData.json' with {type: 'json'};

export class RegisterPage{
    private page: Page;
    private registerPageLocators: ReturnType<typeof RegisterPageLocators>;
    private accountPageLocators: ReturnType<typeof AccountPageLocators>;
       
    constructor(page: Page) {
        this.page = page;
        this.accountPageLocators = AccountPageLocators(page);
        this.registerPageLocators = RegisterPageLocators(page);
    }

    async registerUser(userEmail: string): Promise<string | null> {
        await this.accountPageLocators.register.click();
        await this.registerPageLocators.firstName.fill(userData.firstName);
        await this.registerPageLocators.lastName.fill(userData.lastName);
        await this.registerPageLocators.email.fill(userEmail);
        await this.registerPageLocators.telephone.fill(userData.phoneNumber);
        await this.registerPageLocators.password.fill(userData.password);
        await this.registerPageLocators.confirmPassword.fill(userData.password);

        await this.registerPageLocators.privacyPolicyCheckbox.check({force: true});
        await this.registerPageLocators.continueBtn.click();
        return await this.accountPageLocators.messages.successMsgAccountCreation.textContent();
    }

    async getErrMsg() {
        return await this.registerPageLocators.errorMessage.textContent();
    }
}
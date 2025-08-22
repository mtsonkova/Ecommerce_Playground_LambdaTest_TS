import type { Page } from "@playwright/test";
import { RegisterPageLocators } from "@src/pageLocators/account/registerPageLocators";
import { AccountPageLocators } from "@src/pageLocators/account/accountPageLocators";
import { generateRandomEmail } from "@src/helpers/userUtils";
import userData from '@src/testData/userData.json' with {type: 'json'};

export class RegisterPage{
    private page: Page;
    private registerPageLocators: ReturnType<typeof RegisterPageLocators>;
    private accountPageLocators: ReturnType<typeof AccountPageLocators>;
    private email: string = generateRandomEmail();
    
    constructor(page: Page) {
        this.page = page;
        this.accountPageLocators = AccountPageLocators(page);
        this.registerPageLocators = RegisterPageLocators(page);
    }

    async registerUser(): Promise<string | null> {
        await this.accountPageLocators.register.click();
        await this.registerPageLocators.firstName.fill(userData[0].firstName);
        await this.registerPageLocators.lastName.fill(userData[0].lastName);
        await this.registerPageLocators.email.fill(this.email);
        await this.registerPageLocators.telephone.fill(userData[0].phoneNumber);
        await this.registerPageLocators.password.fill(userData[0].password);
        await this.registerPageLocators.confirmPassword.fill(userData[0].password);

        await this.registerPageLocators.privacyPolicyCheckbox.check({force: true});
        await this.registerPageLocators.continueBtn.click();
        return await this.accountPageLocators.messages.successMsgAccountCreation.textContent();
    }

}
import {Page} from '@playwright/test';
import {LoginPageLocators} from  '@src/pageLocators/account/loginPageLocators';

export class LoginPage {
    private page: Page;
    private loginPageLocators: ReturnType<typeof LoginPageLocators>;

    constructor(page: Page) {
        this.page = page;
        this.loginPageLocators = LoginPageLocators(page);
    }

    async login({email, password}: {email: string, password: string}):Promise<void> {
        await this.loginPageLocators.email.fill(email);
        await this.loginPageLocators.password.fill(password);
        await this.loginPageLocators.loginBtn.click();
    }

    async getErrorMsg(): Promise<string | null> {
        return await this.loginPageLocators.errorMsg.textContent();
    }
}
import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly txtemail: Locator;
  readonly btnNext: Locator;
  readonly txtPassword: Locator;

  constructor(page: Page) {
    this.page = page;
    this.txtemail = page.locator('[aria-label="Email or phone"]');
    this.btnNext = page.locator('//span[contains(text(),"Next")]');
    this.txtPassword = page.locator('//div[contains(text(),"Enter your password")]');
  }

  async fillEmail(email: string) {
    await this.txtemail.fill(email);
  }
  async clickNextbtn() {
    await this.btnNext.click();
  }
  
  async fillPassword(password: string) {
    await this.txtPassword.fill(password);
  }

}

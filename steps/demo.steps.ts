import { ICustomWorld } from '../src/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../src/pages/loginPage';
import { expect } from '@playwright/test';

Given(`I am on the gmail page`, async function (this: ICustomWorld) {
    const page = this.page!;
    await page.goto('https://accounts.google.com/');
  });

Given('I input {string} into email field', async function (this: ICustomWorld) {
  const page = this.page!;
  const loginPage = new LoginPage(page);
  await loginPage.fillEmail("testfl148@gmail.com");
});

When('I click on next button', async function (this: ICustomWorld) {
  const page = this.page!;
  const loginPage = new LoginPage(page);
  await loginPage.clickNextbtn();
});

Given('I input {string} into password field', async function (this: ICustomWorld) {
    const page = this.page!;
    const loginPage = new LoginPage(page);
    await loginPage.fillPassword("Test@1234");
  });

Then('Gmail account detail page should be displayed', async function (this: ICustomWorld) {
    const page = this.page!;
    await expect(page).toHaveTitle("myaccount");
});

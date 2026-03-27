const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/login.page');
const data = require('../utils/testData');
const { expect } = require('@playwright/test');

Given('user is on login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When('user enters valid credentials', async function () {
  await this.loginPage.login(
    data.validUser.username,
    data.validUser.password
  );
});

When('user enters invalid credentials', async function () {
  await this.loginPage.login(
    data.invalidUser.username,
    data.invalidUser.password
  );
});

Then('user should be redirected to dashboard', async function () {
  await this.page.waitForURL('**/dashboard', { timeout: 10000 });

  const header = this.page.locator('.oxd-topbar-header-breadcrumb h6');
  await expect(header).toBeVisible({ timeout: 10000 }); // ✅ strong
});

Then('user should see error message', async function () {
  await expect(this.page.locator('.oxd-alert-content-text')).toBeVisible();
});
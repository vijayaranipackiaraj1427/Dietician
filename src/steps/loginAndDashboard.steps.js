const { Given, When, Then } = require('@cucumber/cucumber');
const LoginAndDashboardPage = require('../../src/pages/LoginAndDashboard.page');

const { expect } = require('@playwright/test');

Given('User is on the browser', async function () {
   expect(this.page).toBeDefined();
});

When('user enters app url', async function () {
 this.loginAndDashboardPage  = new LoginAndDashboardPage(this.page);
 await this.loginAndDashboardPage.navigateToLoginPage();

});

//TC01
Then('User should see the text {string} on left side of Navigation bar', async function (expectedTitle) {
  await this.loginAndDashboardPage.verifyNavigationBarText(expectedTitle);

//update below for Dietician project 
// await expect(page.getByText('Dietitian Project', { exact: true })).toBeVisible();

});
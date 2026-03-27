const { Given, When, Then } = require('@cucumber/cucumber');
const LoginAndDashboardPage = require('../pages/LoginAndDashboardPage');

const logger = require('../utils/logger');
logger.info('Logger test successful');

const { expect } = require('@playwright/test');

Given('User is on the browser', async function () {
   logger.info('Browser launched');
   expect(this.page).toBeDefined();
});

When('user enters app url', async function () {

 logger.info('Navigation to Login Page');
 this.loginAndDashboardPage  = new LoginAndDashboardPage(this.page);
 await this.loginAndDashboardPage.navigateToLoginPage();

});

//TC01
Then('User should see the text {string} on left side of Navigation bar', async function (expectedTitle) {
  await this.loginAndDashboardPage.verifyNavigationBarText(expectedTitle);
  logger.info('Navigation bar text displayed');

//update below for Dietician project 
// await expect(page.getByText('Dietitian Project', { exact: true })).toBeVisible();

});
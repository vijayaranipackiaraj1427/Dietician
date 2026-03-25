const { Given, When, Then } = require('@cucumber/cucumber');
const LoginAndDashboardPage = require('../../src/pages/LoginAndDashboard.page');

const logger = require('../utils/logger');

const { expect } = require('@playwright/test');

Given('User is on the browser', async function () {
   logger.info('Browser launching');
   expect(this.page).toBeDefined();

   this.loginAndDashboardPage  = new LoginAndDashboardPage(this.page);
});

When('user enters app url', async function () {

 logger.info('Navigating to Login Page');
 
 await this.loginAndDashboardPage.navigateToLoginPage();

});

//TC01
Then('User should see the text {string} on left side of Navigation bar', async function (expectedTitle) {
  logger.info('Verifying - Navigation bar text display');
  await this.loginAndDashboardPage.verifyNavigationBarText(expectedTitle);

//update below for Dietician project 
// await expect(page.getByText('Dietitian Project', { exact: true })).toBeVisible();

});

//TC02 
     Then('User should see the home icon on left side of navigation bar', async function () {
        logger.info('Verifying - Navigation bar home icon visibility');
        await this.loginAndDashboardPage.verifyNavBarHomeIcon();
         });

//TC03
    Then('Navigation bar background should have a blue-purple color', async function () {
      logger.info('Verifying - Navigation bar color-blue-purple');
      await this.loginAndDashboardPage.verifyNavBarBgColor();

    });

  //TC04
    Then('Heading {string} should be visible inside the login card', async function(pageTitle){

      logger.info(`Verifying - Navigation bar text visibility: ${pageTitle}`);
      await this.loginAndDashboardPage.verifyPageTitle(pageTitle);
    });

  //TC05, TC06
  
    Then('User should see the label text {string}', async function (labelText) {
            logger.info(`Verifying - Label Text visibility: ${labelText}`);
            await this.loginAndDashboardPage.verifyLabelText(labelText);
         });

//TC07, TC08
Then('Username input field should be visible', async function () {
  await this.loginAndDashboardPage.verifyUsernameFieldVisibility();
  logger.info('Username field is visible');
});

Then('Password input field should be visible', async function () {
  await this.loginAndDashboardPage.verifyPasswordFieldVisibility();
  logger.info('Password field is visible');
});

//TC09

   Then('Login button should be visible', async function () {

    await this.loginAndDashboardPage.verifyLoginBtnVisibility();
    logger.info('Login Button is displayed');
 
          });

//TC10


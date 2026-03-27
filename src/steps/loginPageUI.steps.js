const { Given, When, Then } = require('@cucumber/cucumber');
const LoginUIPage = require('../pages/LoginUI.page');

const logger = require('../utils/logger');

const { expect } = require('@playwright/test');

Given('User is on the browser', async function () {
   logger.info('Browser launching');
   expect(this.page).toBeDefined();

   this.loginUIPage  = new LoginUIPage(this.page);
});

When('user enters app url', async function () {

 logger.info('Navigating to Login Page');
 
 await this.loginUIPage.navigateToLoginPage();

});

//TC01
Then('User should see the text {string} on left side of Navigation bar', async function (expectedTitle) {
  logger.info('Verifying - Navigation bar text display');
  await this.loginUIPage.verifyNavigationBarText(expectedTitle);

//update below for Dietician project 
// await expect(page.getByText('Dietitian Project', { exact: true })).toBeVisible();

});

//TC02 
     Then('User should see the home icon on left side of navigation bar', async function () {
        logger.info('Verifying - Navigation bar home icon visibility');
        await this.loginUIPage.verifyNavBarHomeIcon();
         });

//TC03
    Then('Navigation bar background should have a blue-purple color', async function () {
      logger.info('Verifying - Navigation bar color-blue-purple');
      await this.loginUIPage.verifyNavBarBgColor();

    });

  //TC04
    Then('Heading {string} should be visible inside the login card', async function(pageTitle){

      logger.info(`Verifying - Navigation bar text visibility: ${pageTitle}`);
      await this.loginUIPage.verifyPageTitle(pageTitle);
    });

  //TC05, TC06
  
    Then('User should see the label text {string}', async function (labelText) {
            logger.info(`Verifying - Label Text visibility: ${labelText}`);
            await this.loginUIPage.verifyLabelText(labelText);
         });

//TC07, TC08
Then('Username input field should be visible', async function () {
  await this.loginUIPage.verifyUsernameFieldVisibility();
  logger.info('Username field is visible');
});

Then('Password input field should be visible', async function () {
  await this.loginUIPage.verifyPasswordFieldVisibility();
  logger.info('Password field is visible');
});

//TC09

   Then('Login button should be visible', async function () {

    await this.loginUIPage.verifyLoginBtnVisibility();
    logger.info('Login Button is displayed');
 
          });
//TC10
Then('Login button should be displayed with a blue-purple background and white text', async function () {
  logger.info('Verifying - Username and Password label alignment');
  await this.loginUIPage.verifyLoginBtnColorAndStyle();
});

//TC11
Then('Username and Password labels should be left-aligned above their respective input fields', async function () {
  logger.info('Verifying - Login button color and styling');
  await this.loginUIPage.verifyInputFieldLabelAlignment();
});

//TC12
Then('User should see exactly two input fields', async function(){
   logger.info('Verifying - Total number of input fields');
  await this.loginUIPage.verifyInputFieldsCount();
})

//TC13
Then('User should see login button enabled', async function () {
  logger.info('Verifying - Login button is enabled');
  await this.loginUIPage.verifyLoginBtnEnabled();
});





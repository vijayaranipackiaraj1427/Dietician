const { Given, When, Then } = require('@cucumber/cucumber');
const logger = require('../utils/logger');

const { expect } = require('@playwright/test');

const LoginFunctionalPage = require('../pages/LoginFunctional.page');
const LoginUIPage = require('../pages/LoginUI.page');



Given('User is on the login page', async function () {
  logger.info('Launching login functional page');
  expect(this.page).toBeDefined();

   this.loginUIPage  = new LoginUIPage(this.page);
   await this.loginUIPage.navigateToLoginPage();

  
});

// TC01 - Valid username and password entered 
When(
  'User clicks login button after entering valid {string} and {string} details',
  async function (username, password) {
    logger.info('Entering valid username and password');
    await this.loginFunctionalPage.login(username, password);
  }
);

Then('User should be redirected to dashboard page', async function () {
  logger.info('Verifying dashboard redirection');
  await this.loginFunctionalPage.verifyDashboardPage();
});

// TC02 - Non-existing user entered 
When('User clicks login button after entering non existing user', async function () {
  logger.info('Entering non-existing user credentials');

  await this.loginFunctionalPage.loginDetails(
    'nonexistinguser@test.com',
    'Password123!'
  );
});

// TC03 - Special characters in username entered 
When('User clicks login button after entering spl charac in username', async function () {
  logger.info('Entering special characters in username');

  await this.loginFunctionalPage.loginDetails(
    '@@@@test.com',
    'Password123!'
  );
});

//TC04 -  Few characters in username entered 
When('User clicks login button after entering only few charac of username', async function () {
  logger.info('Entering incomplete username');

  await this.loginFunctionalPage.loginDetails(
    'abc',
    'Password123!'
  );
});

//TC05 -  Wrong password entered 
When('User clicks login button after entering wrong password', async function () {
  logger.info('Entering wrong password');

  await this.loginFunctionalPage.loginDetails(
    'validuser@test.com',
    'WrongPassword123!'
  );
});

//TC06 - special characters in password entered 
When('User clicks login button after entering spl charach in password', async function () {
  logger.info('Entering special characters in password');

  await this.loginFunctionalPage.loginDetails(
    'validuser@test.com',
    '@@@@####'
  );
});

// TC07- Empty username entered 
When('User clicks login button after entering only password', async function () {
  logger.info('Leaving username empty and entering password only');

  await this.loginFunctionalPage.loginWithOnlyPassword('Password123!');
});

// TC08 - Empty password entered 
When('User clicks login button after entering only username', async function () {
  logger.info('Entering username only and leaving password empty');

  await this.loginFunctionalPage.loginWithOnlyUsername('validuser@test.com');
});

//TC09 -   error validation entered
Then('An error message {string} should be displayed', async function (expectedMessage) {
  logger.info(`Verifying error message: ${expectedMessage}`);
  await this.loginFunctionalPage.verifyErrorMessage(expectedMessage);
});


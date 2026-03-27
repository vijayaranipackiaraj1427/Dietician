const { expect } = require('@playwright/test')
const config = require('../config/config');

const logger = require('../utils/logger');

const locators = require('../locators/login.locator');



class LoginFunctional { 

  constructor(page) {

    this.page = page;
       
    //this.emailInput = page.locator(locators.emailInput);
    //this.passwordInput = page.locator(locators.passwordInput);
    //this.loginBtn = page.locator(locators.loginBtn);

     this.dashboardPageIdentifier = page.locator(locators.dashboardPageIdentifier);
     this.errorMessage = page.locator(locators.errorMessage);

     this.username = page.locator(locators.usernameInput);
     this.password = page.locator(locators.passwordInput);
     this.loginBtn = page.locator(locators.loginBtn);
           
    }
 
 async loginDetails(username, password) {
    //await this.emailInput.fill(email);
    await this.username.fill(username);
   // await this.passwordInput.fill(password);
    await this.password.fill(password);
   
    await this.loginBtn.click();

    logger.info(`Login attempted with: ${email}`);
  }

  async verifyDashboardPage() {
    await expect(this.dashboardPageIdentifier).toBeVisible();
    logger.info('User redirected to dashboard page');
  }
async verifyErrorMessage(expectedMessage) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(expectedMessage);

    logger.info(`Error message validated: ${expectedMessage}`);
  }
}

module.exports = LoginFunctional;
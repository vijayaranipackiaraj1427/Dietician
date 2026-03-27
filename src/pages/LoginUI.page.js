const { expect } = require('@playwright/test')
const config = require('../config/config');

const logger = require('../utils/logger');

const locators = require('../locators/login.locator');

class LoginUIPage {

  constructor(page) {
    this.page = page;
    this.username = page.locator(locators.usernameInput);
    this.password = page.locator(locators.passwordInput);
    this.loginBtn = page.locator(locators.loginBtn);

    this.navigationBar = page.locator(locators.navigationBar);
    this.navBarHomeIcon = page.locator(locators.navBarHomeIcon);

    this.usernameLabel = page.locator(locators.usernameLabel);
    this.passwordLabel = page.locator(locators.passwordLabel);
    this.inputFields = page.locator(locators.inputFields);

    //imp note to learn : we should not declare dynamic locators in constructor 
    //we only declare static locators in constructors 
    //Dynamic locator (with parameters) - declare inside method

  }

  async navigateToLoginPage() {

    await this.page.goto(`${config.baseURL}/login`);
    //await this.page.goto(`${config.baseURL}/practice-test-login`);  
    logger.info('url loadeded and navigate to login page')

  }

  async verifyNavigationBarText(expectedTitle) {

    await expect(this.page.locator(locators.navigationBarTitle(expectedTitle))).toBeVisible();
    logger.info(`Validating - Navigation bar text visibility: ${expectedTitle}`);
    //await expect(this.page.getByAltText(expectedTitle, { exact: true})).toBeVisible(); // for practice page to test

  }

  async verifyNavBarHomeIcon() {

    await expect(this.navBarHomeIcon).toBeVisible();
    logger.info('Validating - Navigation bar home icon visibility');

  }
  async verifyNavBarBgColor() {

    await expect(this.navigationBar).toHaveCSS('background-color', 'rgb(63, 81, 181)');
    logger.info('Validating - Navigation bar color - blue-purple');

  }


  async verifyPageTitle(pageTitle) {
    await expect(this.page.locator(locators.pageHeading(pageTitle))).toBeVisible();
    logger.info(`Validating - Page title visibility: ${pageTitle}`);

  }

  async verifyLabelText(labelText) {

    await expect(this.page.locator(locators.label(labelText))).toBeVisible();
    logger.info(`Validating - Label text visibility: ${labelText}`);
  }

  async verifyUsernameFieldVisibility() {

    await expect(this.username).toBeVisible();
    logger.info('Username Field is visible');

  }

  async verifyPasswordFieldVisibility() {

    await expect(this.password).toBeVisible();
    logger.info('Password Field is visible');

  }

  async verifyLoginBtnVisibility() {

    await expect(this.loginBtn).toBeVisible();
    logger.info('Validating - Login Button is displayed');
  }


  async verifyLoginBtnColorAndStyle() {
  await expect(this.loginBtn).toBeVisible();

  const bgColor = await this.loginBtn.evaluate(element => getComputedStyle(element).backgroundColor);
  const textColor = await this.loginBtn.evaluate(element => getComputedStyle(element).color);

  expect(bgColor).toBe('rgb(63, 81, 181)');
  expect(textColor).toBe('rgb(255, 255, 255)');

  logger.info('Validating - Login button has blue-purple background and white text');
}

  async verifyInputFieldLabelAlignment() {

    await expect(this.usernameLabel).toBeVisible();
    await expect(this.username).toBeVisible();
    await expect(this.passwordLabel).toBeVisible();
    await expect(this.password).toBeVisible();

    const usernameLabelBox = await this.usernameLabel.boundingBox();
    const usernameInputBox = await this.username.boundingBox();

    const passwordLabelBox = await this.passwordLabel.boundingBox();
    const passwordInputBox = await this.password.boundingBox();

    expect(usernameLabelBox).not.toBeNull();
    expect(usernameInputBox).not.toBeNull();
    expect(passwordLabelBox).not.toBeNull();
    expect(passwordInputBox).not.toBeNull();

    expect(usernameLabelBox.y).toBeLessThan(usernameInputBox.y);
    expect(passwordLabelBox.y).toBeLessThan(passwordInputBox.y);

    expect(Math.abs(usernameLabelBox.x - usernameInputBox.x)).toBeLessThanOrEqual(5);
    expect(Math.abs(passwordLabelBox.x - passwordInputBox.x)).toBeLessThanOrEqual(5);

    logger.info('Labels are left-aligned above input fields');
  }

  async verifyInputFieldsCount() {

    await expect(this.inputFields).toHaveCount(2);
    logger.info('Input fields displayed count of 2');
  }

  async verifyLoginBtnEnabled(){
    await expect(this.loginBtn).toBeEnabled();
    logger.info('Validating - Login Button Enablement')

  }


}


module.exports = LoginUIPage;


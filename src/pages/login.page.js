const locators = require('../locators/login.locator');

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/');
  }

  async enterUsername(username) {
    await this.page.fill(locators.usernameInput, username);
  }

  async enterPassword(password) {
    await this.page.fill(locators.passwordInput, password);
  }

  async clickLogin() {
    await this.page.click(locators.loginButton);
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}

module.exports = LoginPage;
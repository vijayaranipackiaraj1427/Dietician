const locators = require('../locators/addPatientFuncLocators.js');

class AddPatientFuncPage {
  constructor(page) {
    this.page = page;
    this.locators = locators;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async clickAllergyDropdown() {
    await this.page.click(this.locators.dropdowns.allergy);
  }

  async clickFoodPreferenceDropdown() {
    await this.page.click(this.locators.dropdowns.foodPreference);
  }

  async clickCuisineDropdown() {
    await this.page.click(this.locators.dropdowns.cuisine);
  }

  async getDropdownValues() {
    return await this.page.locator(this.locators.dropdownValues).allTextContents();
  }

  async selectValue(value) {
    await this.page.click(`text=${value}`);
  }

  async fillForm(data) {
    await this.page.fill(this.locators.fields.firstname, data.firstname);
    await this.page.fill(this.locators.fields.lastname, data.lastname);
    await this.page.fill(this.locators.fields.email, data.email);
    await this.page.fill(this.locators.fields.contact, data.contact);
  }

  async clickSubmit() {
    await this.page.click(this.locators.buttons.submit);
  }

  async getSuccess() {
    return this.page.locator(this.locators.messages.success);
  }

  async getError() {
    return this.page.locator(this.locators.messages.error);
  }

  async clickDOB() {
    await this.page.click(this.locators.fields.dob);
  }

  async enterDOB(date) {
    await this.page.fill(this.locators.fields.dob, date);
  }

  async uploadFile(file) {
    await this.page.setInputFiles(this.locators.fields.upload, file);
  }

  async clickClose() {
    await this.page.click(this.locators.buttons.close);
  }
}

module.exports = AddPatientFuncPage;
// const { expect } = require('@playwright/test');
// const locators = require('../locators/addPatientFuncLocators.js');
// const config = require('../config/config.js');

// class AddPatientFuncPage {
//   constructor(page) {
//     this.page = page;
//   }

//   async navigate(url) {
//     await this.page.goto(url);
//   }

  
//   async getDropdownValues() {
//     return await this.page.locator(locators.dropdownValues).allTextContents();
//   }

//   async selectValue(value) {
//     await this.page.click(`text=${value}`);
//   }

//   async fillForm(data) {
//     await this.page.fill(locators.fields.firstname, data.firstname);
//     await this.page.fill(locators.fields.lastname, data.lastname);
//     await this.page.fill(locators.fields.email, data.email);
//     await this.page.fill(locators.fields.contact, data.contact);
//   }

//   async clickSubmit() {
//     await this.page.click(locators.buttons.submit);
//   }

//   async getSuccess() {
//     return this.page.locator(locators.messages.success);
//   }

//   async getError() {
//     return this.page.locator(locators.messages.error);
//   }

//   async clickDOB() {
//     await this.page.click(locators.fields.dob);
//   }

//   async enterDOB(date) {
//     await this.page.fill(locators.fields.dob, date);
//   }

//   async uploadFile(file) {
//     await this.page.setInputFiles(locators.fields.upload, file);
//   }

//   async clickClose() {
//     await this.page.click(locators.buttons.close);
//   }

//  async waitForDialog() {
//     await this.page.waitForSelector(locators.dialog);
//   }

//   async selectAllergy(value) {
//     await this.page.selectOption(locators.dropdowns.allergy, value);
//   }

//   async selectFoodPreference(value) {
//     await this.page.selectOption(locators.dropdowns.foodPreference, value);
//   }

//   async selectCuisine(value) {
//     await this.page.selectOption(locators.dropdowns.cuisine, value);
//   }

//   async getSelectedValue(selector) {
//     return await this.page.$eval(selector, el => el.value);
//   }

//   async clickDOB() {
//     await this.page.click(locators.fields.dob);
//   }

//   async fillDOB(value) {
//     await this.page.fill(locators.fields.dob, value);
//   }

//   async getDOBValue() {
//     return await this.page.inputValue(locators.fields.dob);
//   }
// }

// module.exports = AddPatientFuncPage;
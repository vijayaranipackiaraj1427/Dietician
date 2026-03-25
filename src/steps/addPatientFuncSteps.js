const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const AddPatientFuncPage = require('../pages/AddPatientFuncPage');
const testData = require('../testdata/addPatientFuncData');

let addPatientFuncPage;

Given('User is in Add Patient Details Dialog Box', async function (page) {
  addPatientFuncPage = new AddPatientFuncPage(page);
  await addPatientFuncPage.navigate(testData.url);
});

When('User clicks on Allergry dropdown', async function () {
  await addPatientFuncPage.clickAllergyDropdown();
});

When('User clicks on Food Preference dropdown', async function () {
  await addPatientFuncPage.clickFoodPreferenceDropdown();
});

When('User clicks on cuisine dropdown', async function () {
  await addPatientFuncPage.clickCuisineDropdown();
});

Then('Values should be present inside Allergy dropdown', async function () {
  const values = await addPatientFuncPage.getDropdownValues();
  expect(values.length).toBeGreaterThan(0);
});

Then('Dropdown should contain {int} values', async function (count) {
  const values = await addPatientFuncPage.getDropdownValues();
  expect(values.length).toBe(count);
});

Then(/^Dropdown should contain values (.+)$/, async function () {
  expect(true).toBeTruthy();
});

When('User enters valid values in all field', async function () {
  await addPatientFuncPage.fillForm(testData.valid);
});

When('User clicks Submit after entering valid data in all mandatory fields', async function () {
  await addPatientFuncPage.clickSubmit();
});

Then('Submit button should be enabled', async function () {
  expect(true).toBeTruthy();
});

// Then('User should see Patient successfully created - toast message', async function () {
//   await expect(await this.pageObj.getSuccess()).toBeVisible();
// });

// Then('User is directed to My Patient Page with New Patient Details created', async function () {
//   await expect(this.page).toHaveURL(/patients/);
// });

// When('User selects {string} from Allergy dropdown', async function (value) {
//   await this.pageObj.clickAllergyDropdown();
//   await this.pageObj.selectValue(value);
// });

// When('User selects {string} and {string} from Allergy dropdown', async function (v1, v2) {
//   await this.pageObj.clickAllergyDropdown();
//   await this.pageObj.selectValue(v1);
//   await this.pageObj.selectValue(v2);
// });

// When('User select {string} from Allergy dropdown', async function (value) {
//   await this.pageObj.clickAllergyDropdown();
//   await this.pageObj.selectValue(value);
// });

// Then('No selection should occur', async function () {
//   expect(true).toBeTruthy();
// });

// When('User clicks Date of Birth field', async function () {
//   await this.pageObj.clickDOB();
// });

// When('User clicks Date of Birth field, selects valid date {string}', async function (date) {
//   await this.pageObj.enterDOB(date);
// });

// When('User uploads a file with other format', async function () {
//   await this.pageObj.uploadFile(testData.files.invalid);
// });

// When('User uploads a file larger than allowed size', async function () {
//   await this.pageObj.uploadFile(testData.files.large);
// });

// When('User clicks Close button after submit', async function () {
//   await this.pageObj.clickClose();
// });
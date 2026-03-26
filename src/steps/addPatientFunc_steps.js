const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const locators = require('../testdata/addPatientFuncLocators');
const testdata = require('../testdata/addPatientFuncData');
const AddPatientFuncPage = require('../pages/AddPatientFuncPage');

let pageObj;


// When('User enters valid values in all field', async function () {

//   await pageObj.fill(locators.fields.firstname, testdata.valid.firstname);
//   await pageObj.fill(locators.fields.lastname, testdata.valid.lastname);
//   await pageObj.fill(locators.fields.email, testdata.valid.email);
//   await pageObj.fill(locators.fields.contact, testdata.valid.contact);

//   await pageObj.fill(locators.fields.dob, testdata.dob.valid);

//   await pageObj.setFile(locators.fields.upload, testdata.files.valid);

//   await pageObj.selectOption(locators.dropdowns.allergy, testdata.dropdowns.allergy);
//   await pageObj.selectOption(locators.dropdowns.foodPreference, testdata.dropdowns.foodPreference);
//   await pageObj.selectOption(locators.dropdowns.cuisine, testdata.dropdowns.cuisine);
// });

// Then('Submit button should be enabled', async function () {
//   const enabled = await pageObj.isEnabled(locators.buttons.submit);
//   expect(enabled).toBeTruthy();
// });

// When('User clicks Submit after entering valid data in all mandatory fields', async function () {

//   await pageObj.fill(locators.fields.firstname, testdata.valid.firstname);
//   await pageObj.fill(locators.fields.lastname, testdata.valid.lastname);
//   await pageObj.fill(locators.fields.email, testdata.valid.email);
//   await pageObj.fill(locators.fields.contact, testdata.valid.contact);

//   await pageObj.fill(locators.fields.dob, testdata.dob.valid);

//   await pageObj.selectOption(locators.dropdowns.allergy, testdata.dropdowns.allergy);
//   await pageObj.selectOption(locators.dropdowns.foodPreference, testdata.dropdowns.foodPreference);
//   await pageObj.selectOption(locators.dropdowns.cuisine, testdata.dropdowns.cuisine);

//   await pageObj.setFile(locators.fields.upload, testdata.files.valid);

//   await pageObj.click(locators.buttons.submit);
// });

// Then('User should see Patient successfully created - toast message', async function () {
//   const msg = await pageObj.getText(locators.messages.success);
//   expect(msg).toContain(testdata.messages.success);
// });


// // -------- NAVIGATION --------
// Then('User is directed to My Patient Page with New Patient Details created', async function () {
//   const url = await pageObj.getURL();
//   expect(url).toContain('patient');
// });


// // -------- ALLERGY SELECTION --------
// When('User selects {string} from Allergy dropdown', async function () {
//   await pageObj.selectOption(locators.dropdowns.allergy, testdata.multiSelect.allergy[0]);
// });

// When('User selects {string} and {string} from Allergy dropdown', async function () {
//   await pageObj.selectOption(locators.dropdowns.allergy, testdata.multiSelect.allergy[0]);
//   await pageObj.selectOption(locators.dropdowns.allergy, testdata.multiSelect.allergy[1]);
// });

// When('User select {string} from Allergy dropdown', async function () {
//   try {
//     await pageObj.selectOption(locators.dropdowns.allergy, testdata.invalidDropdowns.allergy);
//   } catch (e) {}
// });

// Then('{string} should be selected in the Allergy field', async function () {
//   const selected = await pageObj.getSelectedValue(locators.dropdowns.allergy);
//   expect(selected).toBe(testdata.multiSelect.allergy[1]);
// });


// // -------- FOOD SELECTION --------
// When('User selects {string} from Food Preference dropdown', async function () {
//   await pageObj.selectOption(locators.dropdowns.foodPreference, testdata.multiSelect.foodPreference[0]);
// });

// When('User selects {string} and {string} from Food Preference dropdown', async function () {
//   await pageObj.selectOption(locators.dropdowns.foodPreference, testdata.multiSelect.foodPreference[0]);
//   await pageObj.selectOption(locators.dropdowns.foodPreference, testdata.multiSelect.foodPreference[1]);
// });

// When('User tries to select {string} from Food Preference dropdown', async function () {
//   try {
//     await pageObj.selectOption(locators.dropdowns.foodPreference, testdata.invalidDropdowns.foodPreference);
//   } catch (e) {}
// });

// Then('{string} should be selected in the Food Preference field', async function () {
//   const selected = await pageObj.getSelectedValue(locators.dropdowns.foodPreference);
//   expect(selected).toBe(testdata.multiSelect.foodPreference[1]);
// });


// // -------- CUISINE SELECTION --------
// When('User selects {string} from Cuisine Category dropdown', async function () {
//   await pageObj.selectOption(locators.dropdowns.cuisine, testdata.multiSelect.cuisine[0]);
// });

// When('User selects {string} and {string} from Cuisine Category dropdown', async function () {
//   await pageObj.selectOption(locators.dropdowns.cuisine, testdata.multiSelect.cuisine[0]);
//   await pageObj.selectOption(locators.dropdowns.cuisine, testdata.multiSelect.cuisine[1]);
// });

// When('User tries to select {string} from Cuisine Category dropdown', async function () {
//   try {
//     await pageObj.selectOption(locators.dropdowns.cuisine, testdata.invalidDropdowns.cuisine);
//   } catch (e) {}
// });

// Then('{string} should be selected in the Cuisine Category field', async function () {
//   const selected = await pageObj.getSelectedValue(locators.dropdowns.cuisine);
//   expect(selected).toBe(testdata.multiSelect.cuisine[1]);
// });


// // -------- NO SELECTION --------
// Then('No selection should occur', async function () {
//   expect(true).toBeTruthy();
// });


// // -------- DOB --------
// When('User clicks Date of Birth field', async function () {
//   await pageObj.clickDOB();
// });

// Then('User should see calender date picker displayed with Month,Day,Year', async function () {
//   const visible = await pageObj.isVisible(locators.calendar);
//   expect(visible).toBeTruthy();
// });

// When('User clicks Date of Birth field, selects valid date 01/12/2000', async function () {
//   await pageObj.clickDOB();
//   await pageObj.fillDOB(testdata.dob.valid);
// });

// Then('User should see the selected date 01/12/2000', async function () {
//   const val = await pageObj.getDOB();
//   expect(val).toBe(testdata.dob.valid);
// });

// When('User clicks Date of Birth field, selects valid date', async function () {
//   await pageObj.clickDOB();
//   await pageObj.fillDOB(testdata.dob.valid);
// });

// Then('User should see the selected date in MM/DD/YYYY format', async function () {
//   const val = await pageObj.getDOB();
//   expect(val).toMatch(/\d{2}\/\d{2}\/\d{4}/);
// });
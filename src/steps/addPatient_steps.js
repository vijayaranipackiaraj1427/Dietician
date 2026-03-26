const { Given, When, Then } = require('@cucumber/cucumber');
const AddPatientPage = require('../pages/AddPatientPage.js');
 const testdata = require('../testdata/addPatientData');


let addPatient;

Given('User is in Home Page', async function (page) {
    addPatient = new AddPatientPage(page);   // passing page
    await addPatient.navigateToHome();       
});

When('User clicks on New Patient in the header section', async function () {
     addPatient = new AddPatientPage();
    await addPatient.clickNewPatient();
});

Then('User should see Add Patient Details dialog box', async function () {
     addPatient = new AddPatientPage();
    await addPatient.verifyDialogBox();
});

Then('User should see 9 input boxes in Add Patient dialog box', async function () {
     addPatient = new AddPatientPage();
    await addPatient.verifyInputCount();
});

Then('User should see 3 dropdowns in Add Patient dialog box', async function () {
     addPatient = new AddPatientPage();
    await addPatient.verifyDropdownCount();
});

Then('User should see date picker for DOB with MM/DD/YYYY format', async function () {
     addPatient = new AddPatientPage();
    await addPatient.verifyDOBField();
});

Then('User should see file upload option in Add Patient dialog box', async function () {
     addPatient = new AddPatientPage();
    await addPatient.verifyFileUpload();
});
Then('User should see Submit button', async function () {
     addPatient = new AddPatientPage();
    await addPatient.verifySubmitButton();
});

Then('User should see Submit button in disabled state', async function () {
     addPatient = new AddPatientPage();
    await addPatient.verifySubmitDisabled();
});

Then('User should see Close button', async function () {
     addPatient = new AddPatientPage();
    await addPatient.verifyCloseButton();
});

Then('User should see Close button in enabled state', async function () {
     addPatient = new AddPatientPage();
    await addPatient.verifyCloseEnabled();
});

Then('User should see placeholder {string}', async function (text) {
    addPatient = new AddPatientPage();
    await addPatient.verifyPlaceholder(text);
});

Then('User should see dropdown placeholder {string}', async function (text) {
     addPatient = new AddPatientPage();
    await addPatient.verifyDropdown(text);
});

Then('User should see optional field {string}', async function (text) {
     addPatient = new AddPatientPage();
    await addPatient.verifyOptionalField(text);
});

Then('User should see Upload Health Report text', async function () {
     addPatient = new AddPatientPage();
    await addPatient.verifyUploadText();
});

Then('User should see {string} text', async function (text) {
     addPatient = new AddPatientPage();
    await addPatient.verifyNoFileText(text);
});

Then('User should see scroll bar in dialog box', async function () {
     addPatient = new AddPatientPage();
    await addPatient.verifyScrollBar();
});


When('User clicks on Allergry dropdown', async function () {
     addPatient = new AddPatientPage();
  await addPatient.clickAllergyDropdown();
});

Then('Values should be present inside Allergy dropdown', async function () {
     addPatient = new AddPatientPage();
  const values = await addPatient.getAllergyDropdownValues();
  expect(values.length).toBeGreaterThan(0);
});

Then('Dropdown should contain 13 values', async function () {
     addPatient = new AddPatientPage();
  const count = await addPatient.getAllergyDropdownCount();
  expect(count).toBe(13);
});

// Then('Dropdown should contain values {string}', async function () {
//      addPatient = new AddPatientPage();
//   const values = await pageObj.getOptions(locators.dropdowns.allergy);
//   const expected = testdata.dropdownValues.allergy;

//   expected.forEach(val => {
//     expect(values).toContain(val);
//   });
// });

When('User clicks on Food Preference dropdown', async function () {
         addPatient = new AddPatientPage(page);
  await addPatient.clickFoodPreferenceDropdown();
});

Then('Values should be present inside Food preference dropdown', async function () {
     addPatient = new AddPatientPage();
  const values = await addPatient.getFoodPreferenceDropdownValues();
  expect(values.length).toBeGreaterThan(0);
});

Then('Dropdown should contain 5 values', async function () {
     addPatient = new AddPatientPage();
   const count = await addPatient.getFoodDropdownCount();
  expect(count).toBe(5);
});

When('User clicks on cuisine dropdown', async function () {

 addPatient = new AddPatientPage(page);
   await addPatient.clickCuisineDropdown();
});

Then('Values should be present inside Cuisine dropdown', async function () {
     addPatient = new AddPatientPage();
  const values = await addPatient.getCuisineDropdownValues();
  expect(values.length).toBeGreaterThan(0);
});

Then('Dropdown should contain 36 values', async function () {
     addPatient = new AddPatientPage();
  const count = await addPatient.getCuisineDropdownCount();

  expect(count).toBe(36);
});

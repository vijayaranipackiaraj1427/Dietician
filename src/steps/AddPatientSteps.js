const { Given, When, Then } = require('@cucumber/cucumber');
const AddPatientDialogboxPage = require('../pages/AddPatientPage.js');

let addPatient;

Given('User is in Home Page', async function () {
    addPatient = new AddPatientDialogboxPage(this.page);   // passing page
    await addPatient.navigateToHome();
});

When('User clicks on New Patient in the header section', async function () {
    await addPatient.clickNewPatient();
});

Then('User should see Add Patient Details dialog box', async function () {
    await addPatient.verifyDialogBox();
});

Then('User should see 9 input boxes in Add Patient dialog box', async function () {
    await addPatient.verifyInputCount();
});

Then('User should see 3 dropdowns in Add Patient dialog box', async function () {
    await addPatient.verifyDropdownCount();
});

Then('User should see date picker for DOB with MM/DD/YYYY format', async function () {
    await addPatient.verifyDOBField();
});

Then('User should see file upload option in Add Patient dialog box', async function () {
    await addPatient.verifyFileUpload();
});
Then('User should see Submit button', async function () {
    await addPatient.verifySubmitButton();
});

Then('User should see Submit button in disabled state', async function () {
    await addPatient.verifySubmitDisabled();
});

Then('User should see Close button', async function () {
    await addPatient.verifyCloseButton();
});

Then('User should see Close button in enabled state', async function () {
    await addPatient.verifyCloseEnabled();
});

Then('User should see placeholder {string}', async function (text) {
    await addPatient.verifyPlaceholder(text);
});

Then('User should see dropdown placeholder {string}', async function (text) {
    await addPatient.verifyDropdown(text);
});

Then('User should see optional field {string}', async function (text) {
    await addPatient.verifyOptionalField(text);
});

Then('User should see Upload Health Report text', async function () {
    await addPatient.verifyUploadText();
});

Then('User should see {string} text', async function (text) {
    await addPatient.verifyNoFileText(text);
});

Then('User should see scroll bar in dialog box', async function () {
    await addPatient.verifyScrollBar();
});
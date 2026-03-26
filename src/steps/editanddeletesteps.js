import { Given, When, Then } from '@cucumber/cucumber'; 

import { expect } from '@playwright/test'; 

import EditPatientPage from '../pages/editPatient.page.js'; 

 

Given('User is on My Patient page', async function () {

  this.editPatientPage = new EditPatientPage(this.page);        
    await this.editPatientPage.navigateToPatientPage();
});

 
When('User clicks edit icon for a particular patient', async function () {
    await this.editPatientPage.clickEditIcon();
});


Then('User should see "Edit Patient" page on the dialog box', async function () {
    await expect(this.editPatientPage.dialogTitle).toHaveText('Edit Patient');
});

Then('User should see Submit button', async function () {
    await expect(this.editPatientPage.submitButton).toBeVisible();
});

Then('Submit button should be enabled', async function () {
    await expect(this.editPatientPage.submitButton).toBeEnabled();
});

Then('User should see Close button', async function () {
    await expect(this.editPatientPage.closeButton).toBeVisible();
});

Then('Close button should be enabled', async function () {
    await expect(this.editPatientPage.closeButton).toBeEnabled();
});                         
Then('User should see Cancel button', async function () {
    await expect(this.editPatientPage.cancelButton).toBeVisible();
});

Then('Cancel button should be enabled', async function () {
    await expect(this.editPatientPage.cancelButton).toBeEnabled();
});   

Then('User should see placeholder in Weight field', async function () {
    await expect(this.editPatientPage.weightField).toHaveAttribute('placeholder', 'Enter weight in kg');
});

Then('User should see placeholder in Height field', async function () {
    await expect(this.editPatientPage.heightField).toHaveAttribute('placeholder', 'Enter height in cm');
});             
Then('User should see tempature placeholder in Temperature field', async function () {
    await expect(this.editPatientPage.temperatureField).toHaveAttribute('placeholder', 'Enter temperature in °C');
});

Then('User should not see mandatory indicators for Vitals information fields', async function () {
    await expect(this.editPatientPage.vitalsMandatoryIndicator).toBeHidden();
});         
Then('User should see "Upload health report" label', async function () {
    await expect(this.editPatientPage.uploadHealthReportLabel).toHaveText('Upload health report');
});     
Then('User should see "No File Chosen" text', async function () {
    await expect(this.editPatientPage.noFileChosenText).toHaveText('No File Chosen');
});

Then('Close button should be displayed in red color', async function () {
    const closeButtonColor = await this.editPatientPage.closeButton.evaluate((button) => {
        return window.getComputedStyle(button).color;
    });
    expect(closeButtonColor).toBe('rgb(255, 0, 0)'); // Assuming red color is rgb(255, 0, 0)
});                         










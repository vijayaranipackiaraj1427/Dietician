const { expect } = require('@playwright/test');
const locators = require('../locators/AddPatientLocators.js');
const config = require('../config/config.js');

class AddPatientPage {
    constructor(page) {
        this.page = page;
    }

    async navigateToHome() {
        await this.page.goto(config.addPatientURL);
    }

    async clickNewPatient() {
        await this.page.click(locators.newPatientBtn);
    }

    async verifyDialogBox() {
        await expect(page.locator(locators.dialogBox)).toBeVisible();
    }

    async verifyInputCount() {
        const count = await page.locator(locators.inputFields).count();
        expect(count).toBe(9);
    }

    async verifyDropdownCount() {
        const count = await page.locator(locators.dropdownFields).count();
        expect(count).toBe(3);
    }

    async verifyDOBField() {
        await expect(page.locator(locators.dobField)).toBeVisible();
        await expect(page.locator(locators.dobField)).toHaveAttribute('placeholder', 'MM/DD/YYYY');
    }

    async verifyFileUpload() {
        await expect(page.locator(locators.fileUpload)).toBeVisible();
    }

 async verifySubmitButton() {
        await expect(this.page.locator(locators.submitBtn)).toBeVisible();
    }

    async verifySubmitDisabled() {
        await expect(this.page.locator(locators.submitBtn)).toBeDisabled();
    }

    async verifyCloseButton() {
        await expect(this.page.locator(locators.closeBtn)).toBeVisible();
    }

    async verifyCloseEnabled() {
        await expect(this.page.locator(locators.closeBtn)).toBeEnabled();
    }

    async verifyPlaceholder(text) {
        await expect(this.page.locator(locators.inputByPlaceholder(text))).toBeVisible();
    }

    async verifyDropdown(text) {
        await expect(this.page.locator(locators.dropdownByText(text))).toBeVisible();
    }

    async verifyOptionalField(text) {
        await expect(this.page.locator(locators.inputByPlaceholder(text))).toBeVisible();
    }

    async verifyUploadText() {
        await expect(this.page.locator(locators.uploadText)).toBeVisible();
    }

    async verifyNoFileText(text) {
        await expect(this.page.locator(locators.noFileText)).toContainText(text);
    }

    async verifyScrollBar() {
        await expect(this.page.locator(locators.dialog)).toBeVisible();
    }
}

module.exports = AddPatientPage;
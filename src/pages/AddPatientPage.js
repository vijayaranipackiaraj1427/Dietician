const { expect } = require('@playwright/test');
const locators = require('../locators/AddPatientLocators.js');
const config = require('../config/config.js');
const { count } = require('node:console');

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
        await expect(this.page.locator(locators.dialog)).toBeVisible();
    }

    async verifyInputCount() {
        const count = await this.page.locator(locators.inputFields).count();
        expect(count).toBe(9);
    }

    async verifyDropdownCount() {
        const count = await this.page.locator(locators.dropdownFields).count();
        expect(count).toBe(3);
    }

    async verifyDOBField() {
        await expect(this.page.locator(locators.dobField)).toBeVisible();
        await expect(this.page.locator(locators.dobField)).toHaveAttribute('placeholder', 'MM/DD/YYYY');
    }

    async verifyFileUpload() {
        await expect(this.page.locator(locators.fileUpload)).toBeVisible();
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


//click dropdowns
async clickAllergyDropdown() {
    await this.page.click(locators.dropdowns.allergy);
  }

  async clickFoodPreferenceDropdown() {
    await this.page.click(locators.dropdowns.foodPreference);
  }

  async clickCuisineDropdown() {
    await this.page.click(locators.dropdowns.cuisine);
  }

  //Dropdown values check
 async getAllergyDropdownValues() {
  return await this.page.$$eval(
    this.locators.dropdowns.allergy + ' option',
    options => options.map(option => option.textContent)
  );
}
async getFoodPreferenceDropdownValues() {
  return await this.page.$$eval(
    this.locators.dropdowns.foodPreference + ' option',
    options => options.map(option => option.textContent)
  );
}

async getCuisineDropdownValues() {
  return await this.page.$$eval(
    this.locators.dropdowns.cuisine + ' option',
    options => options.map(option => option.textContent)
  );
}

//Dropdown count

async getAllergyDropdownCount() {
  const count = await this.page.$$eval(
    this.locators.dropdowns.allergy + ' option',
    options => options.length
  );
  return count;
}
async getFoodDropdownCount() {
  const values = await this.page.$$eval(
    this.locators.dropdowns.foodPreference + ' option',
    options => options.length
  );
  return count;
}
async getCuisineDropdownCount() {
  const count = await this.page.$$eval(
    this.locators.dropdowns.cuisine + ' option',
    options => options.length
  );
  return count;
}

}          
module.exports = AddPatientPage;
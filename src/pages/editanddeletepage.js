import { test } from "playwright-bdd";

class EditPatientPage {
  constructor(page) {
    this.page = page;

    // Navigation
    this.patientMenu = page.locator('#patientMenu');

    // Dialog
    this.dialogTitle = page.locator('h2:has-text("Edit Patient")');

    // Buttons
    this.submitButton = page.locator('#submit');
    this.closeButton = page.locator('#close');
    this.cancelButton = page.locator('#cancel');


    // Fields
    this.inputFields = page.locator('input');
    this.dropdowns = page.locator('select');
    this.fileUpload = page.locator('input[type="file"]');

    // Patient fields
    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.email = page.locator('#email');
    this.contactNumber = page.locator('#contactNumber');
    this.allergy = page.locator('#allergy');
    this.foodPreference = page.locator('#foodPreference');
    this.cuisineCategory = page.locator('#cuisineCategory');
    this.dob = page.locator('#dob');
this.uploadLabel = page.locator('text=Upload health report');
    this.noFileText = page.locator('text=No File Chosen');
    this.weightField = page.locator('#weight');
    this.heightField = page.locator('#height');
    this.temperatureField = page.locator('#temperature');
    this.vitalsMandatoryIndicator = page.locator('.vitals-mandatory-indicator');
   
    // Edit icon
    this.editIcon = page.locator('.edit-icon').first();
  }

  async navigateToPatientPage() {
    await this.patientMenu.click();
  }

  async clickEditIcon() {
    await this.editIcon.click();
  }
}

export default EditPatientPage; 


  
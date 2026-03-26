import { expect } from 'playwright/test';

import EditPatientPage from '../pages/editPatient.page.js';

const dialogTitle = page.getByText('Edit Patient');
const submitButton = page.getByRole('button', { name: 'Submit' });
const closeButton = page.getByRole('button', { name: 'Close' });
const cancelButton = page.getByRole('button', { name: 'Cancel' });
const weightField = page.locator('#weight');
const heightField = page.locator('#height');
const temperatureField = page.locator('#temperature');
const vitalsMandatoryIndicator = page.locator('.vitals-mandatory-indicator');
const uploadHealthReportLabel = page.locator('text=Upload health report');
const noFileChosenText = page.locator('text=No File Chosen');
const editIcon = page.locator('.edit-icon').first();

export {
  dialogTitle,
  submitButton,
  closeButton,
  cancelButton,
  weightField,
  heightField,
  temperatureField,
  vitalsMandatoryIndicator,
  uploadHealthReportLabel,
  noFileChosenText,
  editIcon
};

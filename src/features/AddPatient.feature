@addPatient
Feature: Add Patient Dialog Box - Validation

Background:
  Given User is in Home Page
  When User clicks on New Patient in the header section
    
Scenario: Validate dialog box opens
  Then User should see Add Patient Details dialog box


Scenario: Validate input fields count
  Then User should see 9 input boxes in Add Patient dialog box


Scenario: Validate dropdown count
  Then User should see 3 dropdowns in Add Patient dialog box


Scenario: Validate DOB field
  Then User should see date picker for DOB with MM/DD/YYYY format


Scenario: Validate file upload option
  Then User should see file upload option in Add Patient dialog box

Scenario: Validate button states
  Then User should see Submit button
  And User should see Submit button in disabled state
  And User should see Close button
  And User should see Close button in enabled state


Scenario Outline: Validate placeholders
  Then User should see placeholder "<field>"

  Examples:
    | field           |
    | First name      |
    | Last name       |
    | Email           |
    | Contact Number  |
    | Date of Birth   |


Scenario Outline: Validate dropdown placeholders
  Then User should see dropdown placeholder "<dropdown>"

  Examples:
    | dropdown          |
    | Allergies         |
    | Food Preference   |
    | Cuisine Category  |


Scenario Outline: Validate optional fields
  Then User should see optional field "<field>"

  Examples:
    | field       |
    | Weight      |
    | Height      |
    | Temperature |
    | SP          |
    | DP          |


Scenario: Validate upload section text
  Then User should see Upload Health Report text
  And User should see "No file chosen" text


Scenario: Validate scroll bar presence
  Then User should see scroll bar in dialog box
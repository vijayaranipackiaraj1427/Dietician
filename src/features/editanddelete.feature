Feature: Edit Patient - Dialog Box Validation

  Background:
    Given User is logged into the application
    And Patients already exist in the system
    And User is on My Patient page

  Scenario: Validate title of the dialog box
    Given User is on My Patient page
    When User clicks edit icon for a particular patient
    Then User should see "Edit Patient" page on the dialog box

  Scenario: Validate presence of Submit button
    Given User is on My Patient page
    When User clicks edit icon for a particular patient
    Then User should see Submit button

  Scenario: Validate state of Submit button
    Given User is on My Patient page
    When User clicks edit icon for a particular patient
    Then Submit button should be enabled

  Scenario: Validate presence of Close button
    Given User is on My Patient page
    When User clicks edit icon for a particular patient
    Then User should see Close button

  Scenario: Validate state of Close button
    Given User is on My Patient page
    When User clicks edit icon for a particular patient
    Then Close button should be enabled

  Scenario: Validate presence of Cancel button
    Given User is on My Patient page
    When User clicks edit icon for a particular patient
    Then User should see Cancel button    

  Scenario: Validate state of Cancel button
    Given User is on My Patient page  
    When User clicks edit icon for a particular patient
    Then Cancel button should be enabled        

Scenario: Validate presence of input fields 
    Given User is on My Patient page 
    When User clicks edit icon for a particular patient 
    Then User should see 9 input fields 
 
  Scenario: Validate presence of dropdowns 
    Given User is on My Patient page 
    When User clicks edit icon for a particular patient 
    Then User should see 3 dropdowns 
 
  Scenario: Validate file upload option 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should see exactly 1 file upload option 

  Scenario: Validate First Name field is populated 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should see First Name field populated with the value entered during patient creation.
 
  Scenario: Validate Last Name field is populated 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should see Last Name field populated with the value entered during patient creation.
 
  Scenario: Validate Email field is populated 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should see Email field populated with the value entered during patient creation
 
  Scenario: Validate Contact Number field is populated 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should see Contact Number field populated with the value entered during patient creation
 
  Scenario: Validate Allergy field is populated 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should see Allergy field populated with the value entered during patient creation
 
  Scenario: Validate Food Preference field is populated 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should see Food Preference field populated with the value entered during patient creation 
 
Scenario: Validate Cuisine Category field is populated 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should see Cuisine Category field populated with the value entered during patient creation

  Scenario: Validate Date of Birth field is populated 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should see Date of Birth field populated with the value entered during patient creation
 
  Scenario: Validate presence of Vitals subtitle 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should see Vitals title after Date of Birth field 
 
  Scenario: Validate SP field placeholder 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should see placeholder in SP field 
 
  Scenario: Validate DP field placeholder 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should see placeholder in DP field 
 
  Scenario: Validate Weight field placeholder 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should see placeholder in Weight field 
 
  Scenario: Validate Height field placeholder 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should see placeholder in Height field 
 
  Scenario: Validate Temperature field placeholder 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should see tempature placeholder in Temperature field 
 
  Scenario: Validate Vitals fields are not mandatory 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should not see mandatory indicators for Vitals information fields 
 
  Scenario: Validate Upload Health Report label 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should see "Upload health report" label 
 
  Scenario: Validate No File Chosen text 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then User should see "No File Chosen" text 
 
  Scenario: Validate Close button color 
    Given User is on My Patient page
    When User clicks edit icon for a particular patient 
    Then Close button should be displayed in red color 

 
      
    
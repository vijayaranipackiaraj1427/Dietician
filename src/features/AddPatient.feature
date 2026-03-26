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

  

  Scenario: Presence of dropdown values in Allergy
  Given User is in Add Patient Details Dialog Box
  When User clicks on Allergry dropdown
  Then Values should be present inside Allergy dropdown


Scenario: Number of values in Allergy dropdown
  Given User is in Add Patient Details Dialog Box
  When User clicks on Allergry dropdown
  Then Dropdown should contain 13 values


Scenario: Specific values in Allergy dropdown
  Given User is in Add Patient Details Dialog Box
  When User clicks on Allergry dropdown
  Then Dropdown should contain values "Egg, Milk, Soy, Almond, Peanuts, Walnut, Pistachio, Sesame, Hazelnut, Pecan, Cashew, NONE"


Scenario: Presence of dropdown values in food presence
  Given User is in Add Patient Details Dialog Box
  When User clicks on Food Preference dropdown
  Then Values should be present inside Food preference dropdown


Scenario: Number of values in Food Preference dropdown
  Given User is in Add Patient Details Dialog Box
  When User clicks on Food Preference dropdown
  Then Dropdown should contain 5 values


Scenario: Specific values in food presence dropdown
  Given User is in Add Patient Details Dialog Box
  When User clicks on Food Preference dropdown
  Then Dropdown should contain values "Vegan", "Vegetarian", "Jain", "Eggitarian", "NonVeg"


Scenario: Presence of dropdown values in cuisine
  Given User is in Add Patient Details Dialog Box
  When User clicks on cuisine dropdown
  Then Values should be present inside Cuisine dropdown


Scenario: Number of values in Cuisine dropdown
  Given User is in Add Patient Details Dialog Box
  When User clicks on cuisine dropdown
  Then Dropdown should contain 36 values


Scenario: Specific values in cuisine dropdown
  Given User is in Add Patient Details Dialog Box
  When User clicks on cuisine dropdown
  Then Dropdown should contain values "Indian", "South Indian", "Rajasthani", "Punjabi", "Bengali", "Orissa", "Gujarati", "Maharashtrian", "Andhra", "Kerala", "Goan", "Kashmiri", "Himachali", "Tamil Nadu", "Karnataka", "Sindhi", "Chhattisgarhi", "Madhya Pradesh", "Assamese", "Manipuri", "Tripuri", "Sikkimese", "Mizo", "Arunachali", "Uttarakhand", "Haryanvi", "Awadhi", "Bihari", "Uttar Pradesh", "Delhi", "North Indian"


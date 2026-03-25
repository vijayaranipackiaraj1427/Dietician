@addPatientFunctions
Feature: Add Patient Details - Functional TestCase

Background:
  Given User is in Add Patient Details Dialog Box


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
  Then Dropdown should contain values "Egg", "Milk", "Soy", "Almond", "Peanuts", "Walnut", "Pistachio", "Sesame", "Hazelnut", "Pecan", "Cashew", "NONE"


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


Scenario: State of Submit button after adding values in all field
  Given User is in Add Patient Details Dialog Box
  When User enters valid values in all field
  Then Submit button should be enabled


# Scenario: Success message validation for adding new patient with valid data
#   Given User is in Add Patient Details Dialog Box
#   When User clicks Submit after entering valid data in all mandatory fields
#   Then User should see Patient successfully created - toast message


# Scenario: Navigation to My patient after adding new patient with valid data
#   Given User is in Add Patient Details Dialog Box
#   When User clicks Submit after entering valid data in all mandatory fields
#   Then User is directed to My Patient Page with New Patient Details created


# Scenario: Select a single value from Allergy dropdown
#   Given User is in Add Patient Details Dialog Box
#   When User selects "Peanuts" from Allergy dropdown
#   Then "Peanuts" should be selected in the Allergy field


# Scenario: Select multiple values from Allergy dropdown
#   Given User is in Add Patient Details Dialog Box
#   When User selects "Peanuts" and "Milk" from Allergy dropdown
#   Then "Milk" should be selected in the Allergy field


# Scenario: selecting a value not present in Allergy dropdown
#   Given User is in Add Patient Details Dialog Box
#   When User select "Soybean" from Allergy dropdown
#   Then No selection should occur


# Scenario: Select a single value from Food Preference dropdown
#   Given User is in Add Patient Details Dialog Box
#   When User selects "Vegan" from Food Preference dropdown
#   Then "Vegan" should be selected in the Food Preference field


# Scenario: Select multiple values from Food Preference dropdown
#   Given User is in Add Patient Details Dialog Box
#   When User selects "Vegan" and "Jain" from Food Preference dropdown
#   Then "Jain" should be selected in the Food Preference field


# Scenario: selecting a value not present in Food Preference dropdown
#   Given User is in Add Patient Details Dialog Box
#   When User tries to select "Keto" from Food Preference dropdown
#   Then No selection should occur


# Scenario: Select a single value from Cuisine Category dropdown
#   Given User is in Add Patient Details Dialog Box
#   When User selects "Punjabi" from Cuisine Category dropdown
#   Then "Punjabi" should be selected in the Cuisine Category field


# Scenario: Select multiple values from Cuisine Category dropdown
#   Given User is in Add Patient Details Dialog Box
#   When User selects "Punjabi" and "Gujarati" from Cuisine Category dropdown
#   Then "Gujarati" should be selected in the Cuisine Category field


# Scenario: selecting a value not present in Cuisine Category dropdown
#   Given User is in Add Patient Details Dialog Box
#   When User tries to select "Italian" from Cuisine Category dropdown
#   Then No selection should occur


# Scenario: Selecting date for DOB field
#   Given User is in Add Patient Details Dialog Box
#   When User clicks Date of Birth field
#   Then User should see calender date picker displayed with Month,Day,Year


# Scenario: Selecting valid date in DOB field
#   Given User is in Add Patient Details Dialog Box
#   When User clicks Date of Birth field, selects valid date 01/12/2000
#   Then User should see the selected date 01/12/2000


# Scenario: Verify selected date is displayed in MM/DD/YYYY format
#   Given User is in Add Patient Details Dialog Box
#   When User clicks Date of Birth field, selects valid date
#   Then User should see the selected date in MM/DD/YYYY format
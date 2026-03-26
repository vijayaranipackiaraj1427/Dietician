# @addPatientFunctions
# Feature: Add Patient Details - Functional TestCase

# Background:
#   Given User is in Add Patient Details Dialog Box


# Scenario: State of Submit button after adding values in all field
#   Given User is in Add Patient Details Dialog Box
#   When User enters valid values in all field
#   Then Submit button should be enabled


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
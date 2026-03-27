Feature: Login page UI verification

  Background:
    Given User is on the browser
    When user enters app url

  Scenario: Navigation bar text visibility
    Then User should see the text "Dietitian Project" on left side of Navigation bar


  Scenario: Navigation bar icon visibility
    Then User should see the home icon on left side of navigation bar

  Scenario: Navigation bar background colour
    Then Navigation bar background should have a blue-purple color

  Scenario: Page title visibility
    Then Heading "Dietitian Application" should be visible inside the login card

  Scenario: label for first field
    Then User should see the label text "username"

  Scenario: label for second field
    Then User should see the label text "password"

  Scenario: Username input field presence
    Then Username input field should be visible

  Scenario: Password input field presence
    Then Password input field should be visible

  Scenario: Login button presence
    Then Login button should be visible

  Scenario: Login button color and styling
    Then Login button should be displayed with a blue-purple background and white text

  Scenario: Input field label alignment
    Then Username and Password labels should be left-aligned above their respective input fields

  Scenario: Total number of input fields
    Then User should see exactly two input fields

  Scenario: Login button enabled state
    Then User should see login button enabled


# Feature: Login functionality

#   Scenario: Valid login
#     Given user is on login page
#     When user enters valid credentials
#     Then user should be redirected to dashboard

#   Scenario: Invalid login
#     Given user is on login page
#     When user enters invalid credentials
#     Then user should see error message















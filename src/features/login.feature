Feature: Login functionality

  Scenario: Valid login
    Given user is on login page
    When user enters valid credentials
    Then user should be redirected to dashboard

  Scenario: Invalid login
    Given user is on login page
    When user enters invalid credentials
    Then user should see error message
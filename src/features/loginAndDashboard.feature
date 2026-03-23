Feature: Login page UI verification

  Background:
    Given User is on the browser
    When user enters app url

  Scenario: Navigation bar text visibility
    Then User should see the text "Practice Test Automation" on left side of Navigation bar

   
Feature: Login page Functional Verification

    Background:
        Given User is on the login page

    Scenario: Login with valid credential
        When User clicks login button after entering valid "username" and "password" details 
        Then User should be redirected to dashboard page


    Scenario: Login with non-existing user
        When User clicks login button after entering non existing user
        Then An error message "Invalid username or password" should be displayed

    Scenario: Login with spl charac in user name
        When User clicks login button after entering spl charac in username
        Then An error message "Invalid username or password" should be displayed

    Scenario: Login with only few charac of username
        When User clicks login button after entering only few charac of username
        Then An error message "Invalid username or password" should be displayed


    Scenario: Login with wrong password
        When User clicks login button after entering wrong password
        Then An error message "Invalid username or password" should be displayed


    Scenario: Login with spl charac in password
        When User clicks login button after entering spl charach in password
        Then An error message "Invalid username or password" should be displayed

    Scenario: Login with empty username field
        When User clicks login button after entering only password
        Then An error message "Username is Required" should be displayed

    Scenario: Login with empty password field
        When User clicks login button after entering only username
        Then An error message "Password is Required" should be displayed
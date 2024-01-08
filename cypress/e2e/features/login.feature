Feature: Login to the Application

    Scenario: Successful Login
         Given the user is on the login page
         When the user enters the username "standard_user"
         And the user enters the password "secret_sauce"
         And clicks the "Login" button
         Then The user should be redirected to the main page
         And should see a "Swag Labs" message in contenta
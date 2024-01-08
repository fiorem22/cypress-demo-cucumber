Feature: Login to the Application
    Background:
    Given the user is on the login page

    Scenario: Successful Login
        When User enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        Then The user should be redirected to the main page
        # And should see a "Swag Labs" message in contenta
        # Given the user is on the inventory page
        # When the user click the "add_to_cart_backpack" backpackBtn
        # And the user click the "shopping_cart" addcartBtn
        # Then the user should be redirected to the cart page


    Scenario: Blocked Login
        When User enters the username "locked_out_user", the password "secret_sauce", and clicks on the login button
        # Then error message "Epic sadface: Sorry, this user has been locked out." is displayed



















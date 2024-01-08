Feature: Inventory to the Application

    Scenario: Successful inventory
         Given the user is on the inventory page
         When the user click the "add_to_cart_backpack" button
         And the user click the "shopping_cart" button
         Then the user should be redirected to the cart page
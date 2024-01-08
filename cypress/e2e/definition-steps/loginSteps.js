const{Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor")
import loginPage from "../pages/loginPage"
import inventoryPage from "../pages/inventoryPage"


Given("the user is on the login page", () => {
    cy.visit("/");
});

When("User enters the username {string}, the password {string}, and clicks on the login button" , (username, password) =>{
    loginPage.submitLogin(username, password);
})

Then("The user should be redirected to the main page", () => {
    cy.url().should('contains', 'inventory.html');
})

Then("The error message {string} is displayed", (errorMessage) => {
    loginPage.elements.errorMessage().should("have.text", errorMessage);
})

// Then("The error message {string} is displayed", (errorMessage) => {
//   loginPage.elements.errorMessage().should("have.text", errorMessage);
// });



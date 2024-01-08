const{Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor")
import loginPage from "../pages/loginPage"


Given("the user is on the login page", () => {
    cy.visit("/");
});

When("the user enters the username {string}", (user) => {
    loginPage.writeUser(user);
});

When("the user enters the password {string}", (password) => {
    loginPage.writePassword(password);
});

When("clicks the {string} button",()=>{
    loginPage.btnClickLogin();
})


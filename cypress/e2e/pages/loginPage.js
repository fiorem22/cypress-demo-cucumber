class loginPage{
    elements = {
        usernameInput : ()  =>  cy.get("#user-name"),
        passwordInput : ()  => cy.get("#password"),
        clickLogin : () => cy.get("#login-button")
        errorMessage : () => cy.get('[data-test="error"]')
    }

    submitLogin(username, password){
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.clickLogin().click();
    }
}

export default new loginPage();
class loginPage{
    elements = {
        username : ()  =>  cy.get("#user-name"),
        password : ()  => cy.get("#password"),
        clickLogin : () => cy.get("#login-button")
    }

    writeUser(user){
        this.elements.username().type(user);
    }

    writePassword(password){
        this.elements.password().type(password);
    }

    btnClickLogin(){
        this.elements.clickLogin().click();
    }
}

export default new loginPage();
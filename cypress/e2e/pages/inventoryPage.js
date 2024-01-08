class inventoryPage {
    elements = {
        addBackpack : () => cy.get('#add-to-cart-sauce-labs-backpack'),
        addCart : () => cy.get(".shopping_cart_link")
    }

    clickAddBackpack(){
        this.elements.addBackpack().click();
    }

    clickAddCart(){
        this.elements.addCart().click();
    }
}

export default new inventoryPage();
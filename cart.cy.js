describe('Cart and Quantity Management', () => {
  it('Adds multiple items, updates quantity, and removes one item', () => {
    cy.visit('https://automationexercise.com/products');

    // Add first product
    cy.get('.product-overlay').first().invoke('show');
    cy.contains('Add to cart').first().click();
    cy.contains('Continue Shopping').click();

    // Add second product
    cy.get('.product-overlay').eq(1).invoke('show');
    cy.contains('Add to cart').eq(1).click();
    cy.contains('View Cart').click();

    // Wait and verify cart items
    cy.url().should('include', '/view_cart');
    cy.get('.cart_quantity_input').should('have.length.at.least', 1);

    // Change quantity of the first product
    cy.get('.cart_quantity_input').first().clear().type('3');
    cy.get('.cart_quantity_input').first().should('have.value', '3');

    // Remove the second item
    cy.get('.cart_delete a').eq(1).click();

    // Confirm cart updated
    cy.get('.cart_quantity_input').should('have.length', 1);
  });
});

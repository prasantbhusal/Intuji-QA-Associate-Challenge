describe('Checkout Flow with Fake Payment', () => {
  it('Completes checkout using fake card details', () => {
    cy.visit('https://automationexercise.com/products');

    // Add item to cart first
    cy.get('.product-overlay').first().invoke('show');
    cy.contains('Add to cart').first().click();
    cy.contains('View Cart').click();

    // Proceed to checkout
    cy.contains('Proceed To Checkout').click();

    // Fill in payment (after placing order)
    cy.contains('Place Order').click();
    cy.get('input[name=name_on_card"]').type('Test User');
    cy.get('input[name=card_number"]').type('4111111111111111');
    cy.get('input[name=cvc]').type('123');
    cy.get('input[name=expiry_month"]').type('12');
    cy.get('input[name=expiry_year"]').type('2027');
    cy.contains('Pay and Confirm Order').click();

    // Confirm success message
    cy.contains('Your order has been placed successfully!').should('be.visible');
  });
});

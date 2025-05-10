describe('Product Filtering', () => {
  it('Filter Women > Dress', () => {
    cy.visit('https://automationexercise.com/products');
    cy.contains('Women').click();
    cy.contains('Dress').click();
    cy.get('.productinfo').should('contain', 'Dress');
  });
});
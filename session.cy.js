describe('Logout and Re-login Flow', () => {
  const email = 'test@example.com';  // use the actual registered email
  const password = '123456';         // and the actual password used in registration

  it('Logs out and logs back in with same credentials', () => {
    cy.visit('https://automationexercise.com');
    cy.contains('Logout').click();

    cy.contains('Signup / Login').click();
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
    cy.get('button[data-qa="login-button"]').click();

    cy.contains('Logged in as').should('exist');
    cy.contains('Logout').should('exist');
  });
});

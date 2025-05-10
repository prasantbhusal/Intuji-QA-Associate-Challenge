import { faker } from '@faker-js/faker';

describe('User Registration', () => {
  it('Register with random details', () => {
    const randomEmail = faker.internet.email();
    cy.visit('https://automationexercise.com');
    cy.contains('Signup / Login').click();
    cy.get('input[data-qa="signup-name"]').type(faker.name.firstName());
    cy.get('input[data-qa="signup-email"]').type(randomEmail);
    cy.get('button[data-qa="signup-button"]').click();
    
    // Fill up rest of the form, validate login
  });
});
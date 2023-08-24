/// <reference types="Cypress" />
import 'cypress-mochawesome-reporter/register';

describe('Test Suite', () => {
  it('testing positive', () => {
    cy.visit('https://github.com')
    cy.title()
      .should('eq', `GitHub: Let’s build from here · GitHub`)
  });

  it('testing negative', () => {
    cy.visit('https://github.com')
    cy.title()
      .should('eq', 'Yo BOIII')
    
  });
});
/// <reference types="Cypress" />

describe('template spec', () => {
  let url = `https://demo.opencart.com/admin/index.php`
  url = `https://demo.opencart.com/`
  it('NavigationTest', () => {

    //* Home Page
    cy.visit(url)
    cy.title()
    .should('eq', 'Your Store')
    
    //* Cameras Page
    cy.get(':nth-child(7) > .nav-link')
      .click()
    cy.get('h2')
      .contains('Cameras')

    cy.go('back')
    cy.title()
      .should('eq', 'Your Store')

    cy.go('forward')
    cy.get('h2')
      .contains('Cameras')

    cy.go(-1)
    cy.title()
      .should('eq', 'Your Store')

    cy.go(1)
    cy.get('h2')
      .contains('Cameras')

    cy.reload()
    cy.reload()
    cy.reload()
    cy.reload()
  });
})
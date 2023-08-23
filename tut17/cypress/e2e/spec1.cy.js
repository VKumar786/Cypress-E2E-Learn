/// <reference types="Cypress" />

describe('Custom Command', () => {
  let url = `https://demo.nopcommerce.com/`

  // ? click on link using local
  it('direct handling links version 1', () => {
    cy.visit(url)

    cy.get(':nth-child(1) > .product-item > .details > .product-title > a')
      .click()

    cy.get('h1')
      .contains('Build your own computer')
  });

  it('custom command handling links version 2', () => {
    cy.visit(url)

    cy.clickLink('Apple MacBook Pro 13-inch')

    cy.get('h1')
      .contains('Apple MacBook Pro 13-inch')
  });

  // ? over writing existing contains() command
  //! FAILURE
  // it.only('Overwriting existing command', () => {
  //   cy.visit(url)

  //   cy.clickLink('APPLE MACBOOK PRO 13-inch')

  //   cy.get('h1')
  //     .contains('Apple MacBook Pro 13-inch')
  // });

  // ? re-usuable custom command
  it.only('Login Command', () => {
    cy.visit(url)

    cy.LoginApp("yadav11adu@gmail.com", "Vijay750@")

    cy.get('.ico-account')
      .should('have.text', 'My account')
  });

});
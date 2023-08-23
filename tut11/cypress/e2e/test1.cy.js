import 'cypress-iframe'
/// <reference types="Cypress" />

describe('Frames', () => {
  let url = `http://the-internet.herokuapp.com/iframe`

  it.skip('Approach 1', () => {
    cy.visit(url)

    //? capturing iframe
    const iframe = cy.get('#mce_0_ifr')
      .its('0.contentDocument.body') //? when one document is nested in another one
      .should('be.visible')
      .then(cy.wrap)

    // console.warn('🕺', iframe);
    iframe.clear()
      .type("My name is Khan {cmd+a}")

    cy.get('[aria-label="Bold"]')
      .click()
  })

  it.skip('Approach 2 - using custom command', () => {
    cy.visit(url)

    //? capturing iframe
    const iframe = cy.getIFrame('#mce_0_ifr')

    // console.warn('🕺', iframe);
    iframe.clear()
      .type("My name is Khan {cmd+a}")

    cy.get('[aria-label="Bold"]')
      .click()
  })

  it('Approach 3 - using cypress-iframe plugin', () => {
    cy.visit(url)

    //? Loading Frame
    cy.frameLoaded('#mce_0_ifr')

    cy.iframe('#mce_0_ifr').clear().type('welcome {cmd+a}')
    // cy.iframe('#mce_0_ifr').clear().type('welcome').type('{cmd+a}')
    // cy.iframe('#mce_0_ifr').clear().type('welcome').invoke('text')

    cy.get('[aria-label="Bold"]')
      .click()
  })


  

})
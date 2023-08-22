/// <reference types="Cypress" />

describe('Tabs', () => {
  let url = `http://the-internet.herokuapp.com/windows`

  it.skip('Approach 1', () => {
    cy.visit(url)

    //? remove attribute from tag
    cy.get('.example > a')
      .invoke('removeAttr', 'target')
      .click()

    cy.url()
      .should('eq', 'http://the-internet.herokuapp.com/windows/new')

    cy.wait(3000)

    //? operation
    cy.go('back') //? back to parent tab

  });

  it.skip('Approach 2', () => {
    cy.visit(url)

    cy.get('.example > a')
      .then((val) => {
        console.warn('🎂', val);
        console.warn('🎂', val[0].attributes.href);
        console.warn('🎂', val[0].attributes.href.nodeValue);
        cy.visit('http://the-internet.herokuapp.com/' + val[0].attributes.href.nodeValue)
      })

    //? Validation
    cy.url()
      .should('eq', 'http://the-internet.herokuapp.com/windows/new')

    cy.wait(3000)

    //? operation
    cy.go('back') //? back to parent tab
  });

  it.only('Approach 3', () => {
    cy.visit(url)

    cy.get('.example > a')
      .then((val) => {
        url = val.prop('href')
        cy.visit(url)
      })

    //? Validation
    cy.url()
      .should('include', 'http://the-internet.herokuapp.com/windows/new')

    cy.wait(3000)

    //? operation
    cy.go('back') //? back to parent tab
  });

});
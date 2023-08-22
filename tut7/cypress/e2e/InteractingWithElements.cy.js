// const cy = require('cypress')

/// <reference types="Cypress" />>
describe('Check UI Elements Radio & Checkbox', () => {

  let url = 'https://demoqa.com/automation-practice-form'

  it('Checking Radio Button', () => {
    cy.visit(url)
    cy.get('#genterWrapper > .col-md-9 > :nth-child(3)')

    //? Visibility of Radio Button
    cy.get('#gender-radio-1').should('not.be.visible')

    //? Selection of radio button
    cy.get('#gender-radio-1')
      .should('not.be.visible')

    cy.get(`.custom-control-input[class$='custom-control-input'][id$='gender-radio-1']`)
      .check({ force: true })

    cy.get('#gender-radio-1')
      .should('be.checked')

    cy.get('#gender-radio-2')
      .should('not.be.visible')

    cy.get(`.custom-control-input[class$='custom-control-input'][id$='gender-radio-2']`)
      .check({ force: true })

    cy.get('#gender-radio-2')
      .should('be.checked')
  })

  it('Checking CheckBoxes', () => {
    cy.visit(url)

    //? Visibility of Check Box
    cy.get('#hobbies-checkbox-1')
      .should('not.be.visible')

    //? Checking
    cy.get('#hobbies-checkbox-1')
      .check({ force: true })

    cy.get('#hobbies-checkbox-1')
      .should('be.checked')

    cy.get('#hobbies-checkbox-2')
      .check({ force: true })

    cy.get('#hobbies-checkbox-3')
      .check({ force: true })

    //? Unchecking
    cy.get('#hobbies-checkbox-2')
      .uncheck({ force: true })
      .should('not.be.checked')

    //? Selecting all checkboxes
    cy.get(`.custom-control-input[type$='checkbox']`)
      .check({ force: true })
      .should('be.checked')

    //? Unselecting all checkboxes
    cy.get(`.custom-control-input[type$='checkbox']`)
      .uncheck({ force: true })
      .should('not.be.checked')

    //? Selecting particular First and Last checkboxses
    cy.get(`.custom-control-input[type$='checkbox']`).first()
      .check({ force: true })
      .should('be.checked')

    cy.get(`.custom-control-input[type$='checkbox']`).last()
      .check({ force: true })
      .should('be.checked')

  });

})
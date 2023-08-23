/// <reference types="Cypress" />

import * as data from '../fixtures/praticeData.json'

describe('MyTestSuite', () => {
  let url = `https://practice.expandtesting.com/login`
  //? Brute Method Accesss
  it('FixturesDemoTest1', () => {
    cy.visit(url)

    cy.get('#username')
      .type(data.username, { force: true })

    cy.get('#password')
      .type(data.password, { force: true })

    cy.get('#login > .btn')
      .click()

    cy.get('#flash-message')
      .should('be.visible')
      .contains('You logged into a secure area!')
  });

  //? Direct Method Accesss
  it('FixturesDemoTest1.5', () => {
    cy.visit(url)

    cy.fixture('praticeData')
      .then((t) => {
        cy.get('#username')
          .type(t.username)

        cy.get('#password')
          .type(t.password)

        cy.get('#login > .btn')
          .click()

        cy.get('#flash-message')
          .should('be.visible')
          .contains('You logged into a secure area!')
      })
  });

  //? Access through Hook - for multiples it blocks {GLOBAL}
  let userInfo;
  before(() => {
    cy.fixture('praticeData.json').then((data) => {
      userInfo = data
    })
  });
  it.only('FixturesDemoTest2', () => {
    cy.visit(url)

    cy.get('#username')
      .type(userInfo.username)

    cy.get('#password')
      .type(userInfo.password)

    cy.get('#login > .btn')
      .click()

    cy.get('#flash-message')
      .should('be.visible')
      .contains('You logged into a secure area!')
  });

});
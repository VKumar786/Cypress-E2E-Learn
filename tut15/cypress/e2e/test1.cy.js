/// <reference types="Cypress" />

describe('MyTestSuite', () => {

  before(() => {
    cy.log('--- Launch App (only once) ---')
  });

  beforeEach(() => {
    cy.log('--- Before Start (Every It Block, login functionality) ---')
  });

  after(() => {
    cy.log('--- Close App (only once) ---')
  });

  afterEach(() => {
    cy.log('--- After End (Every It Block, logout functionality) ---')
  });

  it('Search', () => {
    cy.log('--- Search ---')
  });

  it('Advance Search', () => {
    cy.log('--- Advance Search ---')
  });

  it('Listing Products', () => {
    cy.log('--- Listing Products ---')
  });

});
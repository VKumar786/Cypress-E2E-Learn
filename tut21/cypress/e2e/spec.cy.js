/// <reference types="Cypress" />
import Login from '../PageObjects/LoginPage'
import Login1 from '../PageObjects/LoginPage1'


describe('Test Suite 1', () => {
  let url = `https://practicetestautomation.com/practice-test-login/`

  //? General Approach
  it('testing 1', () => {
    cy.visit(url)

    cy.get('#username')
      .type('student')

    cy.get('#password')
      .type('Password123')

    cy.get('#submit')
      .click()

    //? Validation
    cy.get('.post-title')
      .should('have.text', 'Logged In Successfully')
  });

  //? using pom Approach 1
  it('Page Object Model Approach 1', () => {
    cy.visit(url)

    const login = new Login()

    login.setUserName('student')
    login.setPassword('Password123')
    login.clickSubmit()
    login.verifyLogin()

  });

  //? using pom Approach 2
  it('Page Object Model Approach 2', () => {
    cy.visit(url)

    const login = new Login1()

    login.setUserName('student')
    login.setPassword('Password123')
    login.clickSubmit()
    login.verifyLogin()
  })

  //? using pom Approach 2 + Fixture
  it.only('Page Object Model With Fixture Approach 3', () => {
    cy.visit(url)

    cy.fixture('data.json').then((val) => {
      const login = new Login1()

      login.setUserName(val.userName)
      login.setPassword(val.password)
      login.clickSubmit()
      login.verifyLogin()
    })
  });
})
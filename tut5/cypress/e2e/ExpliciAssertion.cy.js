const {assert, expect} = require('chai')

describe('Explicit Assertion', () => {
   it('test1', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login/')
      // cy.get('[data-cy="username"]').type('yadav11adu@gmail.com')

      cy.get('#username').type('student')
      cy.get('#password').type('Password123')

      cy.get('#submit').click()

      let expName = "Logged In Successfully"

      cy.get('.post-title').then((x) => {
         let actName = x.text()

         //* BDD Style
         expect(actName).to.equal(expName)
         expect(actName).to.not.equal("xyz")

         //* TDD Style
         assert.equal(actName, expName)
         assert.notEqual(actName, "xyz")
      })

   }); 
});
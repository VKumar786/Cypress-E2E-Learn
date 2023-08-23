/// <reference types="Cypress" />

describe('Running Same it Block for multiple data', () => {

    let url = `https://practice.expandtesting.com/login`
    it('test1', () => {
        cy.visit(url)

        cy.fixture('praticeData1.json').then((data) => {
            data.forEach(item => {
                cy.get('#username')
                    .type(item.username)

                cy.get('#password')
                    .type(item.password)

                cy.get('#login > .btn')
                    .click()

                cy.get('#flash-message')
                    .should('be.visible')
                    .contains(item.expected)

                if (item.expected === 'You logged into a secure area!') {
                    cy.get('.icon-2x').click()
                } else {
                    cy.get('.btn-close').click()
                }
            });
        })

    });

});
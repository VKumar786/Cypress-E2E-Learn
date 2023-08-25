/// <reference types="Cypress" />
// const { assert } = import('chai')
const { expect } = require('chai');

describe('Alerts', () => {
    let url = `http://the-internet.herokuapp.com/javascript_alerts`

    //! Alert Box
    it.skip('Alert Box', () => {
        cy.visit(url)

        cy.get(':nth-child(1) > button').click()

        // cy.on('window:alert', (err, runnable) => {
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert')
            console.warn('😋😋😋😋😋', t)
        })

        //? Alert window will be automatically be closed by cypress
        cy.get('#result')
            .should('have.text', 'You successfully clicked an alert')
    });

    //! Conformation Box
    it.skip('Conformation Button - default OK btn', () => {
        cy.visit(url)

        cy.get(':nth-child(2) > button').click()

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
            console.warn('👦👦👦👦👦', t);
        })

        //? Alert window will be automatically be closed by cypress - by default using OK btn
        cy.get('#result')
            .should('have.text', 'You clicked: Ok')

    })

    it.skip('Conformation Button - using Cancel btn', () => {
        cy.visit(url)

        cy.get(':nth-child(2) > button').click()

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
            console.warn('👦👦👦👦👦', t);
        })

        //? Alert window will be automatically be closed by cypress - using cancel btn
        cy.on('window:confirm', () => false)

        cy.get('#result')
            .should('have.text', 'You clicked: Cancel')

    })

    //! Prompt Alert
    it.skip('Prompt Alert - By Default Ok Btn', () => {
        cy.visit(url)

        //? this event will be trigger before opening window open
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome Home')
        })

        cy.get(':nth-child(3) > button')
            .click()

        //? default behavior - ~ Need of this
        cy.on('window:confirm', () => true)

        cy.get('#result')
            .should('have.text', 'You entered: welcome Home')
    })

    it.skip('Prompt Alert - By Cancel Btn', () => {
        cy.visit(url)

        //? this event will be trigger before opening window open
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome Home')
        })

        cy.get(':nth-child(3) > button')
            .click()

        //! ~ working : instead of :confirm use :prompt
        // cy.on('window:prompt', () => false)

        cy.get('#result')
            .should('have.text', 'You entered: null')
    })

    //! Authenticated Alert
    it('Authenticated Alert', () => {
        url = `http://the-internet.herokuapp.com/basic_auth`

        //* Approach1
        // cy.visit(url, {
        //     auth: {
        //         username: 'admin',
        //         password: 'admin'
        //     }
        // })

        //* Approach2
        cy.visit(`http://admin:admin@the-internet.herokuapp.com/basic_auth`)


        cy.get('h3')
            .should('have.text', 'Basic Auth')

    });
}); 

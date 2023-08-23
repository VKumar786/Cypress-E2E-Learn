// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//? custom command for clicking on links using label
Cypress.Commands.add('clickLink', (title) => {
    return cy.get('a').contains(title).click()
})

//? Overriding query command
// Cypress.Commands.overwriteQuery('contains', (originalFn, subject, filter, text, options = {}) => {
//     //* Determine if a filter argument was passed
//     if (typeof text === 'object') {
//         options = text; 
//         text = filter;
//         filter = undefined;
//     }
//     options.matchCase = false;
//     return originalFn(subject, filter, text, options);
// });

Cypress.Commands.add('LoginApp', (email, password) => {
    cy.get('.ico-login').click()

    cy.get('#Email')
        .type(email)

    cy.get('#Password')
        .type(password)

    cy.get('form > .buttons > .button-1')
        .click()
})
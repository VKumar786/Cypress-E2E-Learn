/*
    TODO: How To Generate HTML Reports|Headed & Headless
    ? 1) install cypress-mochawesome-reporter
        * npm i --save-dev cypress-mochawesome-reporter
    ? 2) Change cypress reporter & setup hooks
        * Edit config file (cypress.config.js by default)
        * const { defineConfig } = require('cypress');
        * module.exports = defineConfig({
            * reporter: 'cypress-mochawesome-reporter',
            * e2e: {
            *     setupNodeEvents(on, config) {
            *     require('cypress-mochawesome-reporter/plugin')(on);
            *     },
            * },
        * });
    ? 3) Add to cypress/support/e2e.js
        * import 'cypress-mochawesome-reporter/register';
    ? 4) run cypress
        * npx cypress run --spec cypress\e2e\spec.cy.js
        * npx cypress run --spec cypress\e2e\spec.cy.js --browser chrome
        * npx cypress run --headed --spec cypress\e2e\spec.cy.js --browser chrome
    ! we have to copy complete path for seeing report
        * Alt + Ctrl + C on reports\html\index.html
        * copy this path to browser
*/

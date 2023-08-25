/*
    TODO: Interacting with Elements | Alert
    ? Types
        * 1) Javascript Alert: It will have some text and an 'OK' button
        * 2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons
        * 3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK; button
        * 4) Authenticated Alert
    ? Method used
        * 1) Alert, Confirm: .on()
        * 2) Prompt: .window().then( => cy.stub(win, 'prompt').returns('val) )
        * 3) Auth: cy.visit(url, auth: {}), cy.visit('https://userName:password@url')
    ! docs
        * cy.on('window:___', () => true)
        * https://docs.cypress.io/api/cypress-api/catalog-of-events
*/
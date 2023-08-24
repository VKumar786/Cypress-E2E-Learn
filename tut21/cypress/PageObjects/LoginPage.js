class Login {
    setUserName(userName) {
        cy.get('#username')
            .type(userName)
    }
    setPassword(password) {
        cy.get('#password')
            .type(password)
    }
    clickSubmit() {
        cy.get('#submit')
            .click()
    }
    verifyLogin() {
        //? Validation
        cy.get('.post-title')
            .should('have.text', 'Logged In Successfully')
    }
}

export default Login
class Login {
    txtUserName = `#username`
    txtPassword = `#password`
    txtSubmit = `#submit`
    txtValidation = '.post-title'

    setUserName(userName) {
        cy.get(this.txtUserName)
            .type(userName)
    }
    setPassword(password) {
        cy.get(this.txtPassword)
            .type(password)
    }
    clickSubmit() {
        cy.get(this.txtSubmit)
            .click()
    }
    verifyLogin() {
        //? Validation
        cy.get(this.txtValidation)
            .should('have.text', 'Logged In Successfully')
    }
}

export default Login
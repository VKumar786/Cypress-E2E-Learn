describe('testing css locators', () => {
    it('test1 module', () => {
        cy.viewport('macbook-16')
        cy.visit('https://github.com')
        if (cy.get('#user_email')) {
            cy.get('#user_email')
                .type("vkumar@onemindservices.com")
            cy.get(`button.btn-mktg[type='submit']`)
                .click()
        }
    });

    it('test2 module', () => {
        cy.visit('https://github.com/VishalKumar000?tab=repositories')
        cy.get(`#your-repos-filter`)
            .type('react')
        cy.get(`div.user-repo-search-results-summary`)
            .should("eq", " 3 results for repositories matching react sorted by last updated ")
        //! cy.get(`[xpath='1']`).should("eq", "")
        cy.get(`.p-label`)
            .contains("Meerut City")
    });
});

// btn-mktg.width-full.width-md-auto.mb-3.mb-md-0.rounded-md-left-0.home-campaign-signup-button.btn-signup-mkt
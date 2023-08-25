describe('Assertions', () => {
    let url = 'https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fsignup%3Fref_cta%3DSign%2Bup%26ref_loc%3Dheader%2Blogged%2Bout%26ref_page%3D%252F%26source%3Dheader-home'

    // it('Implicity Assertions', () => {
        // cy.visit(url)

        //? should       and
        /*
            ? include, contain work are same
            cy.url()
                .should('include', '/login?')
            cy.url()
                .should('eq', url)
            cy.url()
                .should('contain', '/login?')
        */

        /*
            ? multiple checking of validation
            cy.url()
                .should('include', '/login?')
                .should('eq', url)
                .should('contain', '/login?')
         */

        /*
            ? ~ contain, and work same as should
            cy.url()
                .should('include', '/login?')
                .and('eq', url)
                .and('contain', '/login?')
                .and('not.contain', 'vishal')

            cy.title()
                .should('include', 'Sign in to GitHub · GitHub')
                .and('contain', 'Sign in to GitHub · GitHub')
        */

       
       
    // });

    url = 'https://github.com'
    it('test2', () => {
        cy.visit(url)
        
        //? is image visible
        cy.get('[src="https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg"]')
            .should('be.visible')
            .and('exist')
        
        //? Number of link in web page 
        cy.get('a').should('have.length', 110)

        cy.get('#user_email')
            .type("Admin")
        cy.get('#user_email')
            .should('have.value', "Admin")

    });
}); 
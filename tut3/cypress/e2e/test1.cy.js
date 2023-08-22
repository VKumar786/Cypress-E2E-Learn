describe('test module 1', () => {
    it('checking header', () => {
        cy.visit('https://github.com') 
        cy.title().should("eq", "GitHub: Let’s build from here · GitHub")
    });
});
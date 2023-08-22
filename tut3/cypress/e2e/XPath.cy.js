// import ;

describe('XPath Testing', () => {
    it('finding number of repo', () => {
        cy.visit('http://github.com/VishalKumar000')
        cy.xpath(`//ol[@class='d-flex flex-wrap list-style-none gutter-condensed mb-4']/li`).should('have.length', 6)
    });
    it('Chained XPath', () => {
        cy.visit('http://github.com/VishalKumar000')
        cy.xpath(`//ol[@class='d-flex flex-wrap list-style-none gutter-condensed mb-4']`).xpath('./li').should('have.length', 6)
    });
});
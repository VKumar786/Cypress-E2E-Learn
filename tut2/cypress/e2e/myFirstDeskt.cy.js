describe('suite name1', () => {
    // let url = 'https://leetcode.com/vishal_k78/'
    // it('test1', () => {
    //     cy.visit('https://leetcode.com/vishal_k78/')
    //     cy.title().should("eq", "vishal_k78 - LeetCode Profile")
    // });
    let url = 'https://github.com/'
    it('verify title-positive', () => {
        cy.visit(url)
        cy.title().should("eq", "GitHub: Let’s build from here · GitHub")
    });
    it('verify title-negative test', () => {
        cy.visit('https://github.com/')
        cy.title().should("eq", "vishal_k78 - LeetCode Profile1")
    });
})


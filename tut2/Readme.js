/*
    TODO: How To Write & Run Tests
    ? e2e - end to end testing folder
        * testcase are called specification files
    ? syntax
        describe('suite name', () => {
            it('test1', () => {
                ? steps
                expect(true).to.equal(true)
            })
            it('test2', () => {
                expect(true).to.equal(true)
            })
            ...n testcase
        })
    ? npx cypress open -> Most Important command
    ? npx cypress run -> for cmd line run of all files
    ? npx cypress run --headed -> run in browser
    ? npx cypress run --spec C:\Users\hp\Desktop\cypress\tut2\cypress\e2e\myFirstDeskt.cy.js (for specific file with cmd)
    ? npx cypress run --spec C:\Users\hp\Desktop\cypress\tut2\cypress\e2e\myFirstDeskt.cy.js --headed (for specific file)

    ? npx cypress run --browser chrome
    ? npx cypress run --browser chrome --headed

    ! Theory
    * testSuite --> TestCase --> Test Steps
    * Spec File(cy.js) --> describe blocks(test suites) --> it blocks (test)
*/
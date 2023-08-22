/// <reference types="Cypress" />

describe('Handle Dropdown', () => {

  let url = 'https://zoho.com/commerce/free-demo.html'
  url = 'https://demoqa.com/select-menu'

  //? Skipping it sector
  it.skip('we are just skipping', () => { })

  it.skip('select dropdowns', () => {
    cy.visit(url)

    //? Select tag
    cy.get('#oldSelectMenu')
      .select('Magenta')
      .should('have.value', '9')
  })

  it.skip('Single Value Enter Select DropDowns', () => {
    cy.visit(url)

    cy.get('#selectOne > .css-yk16xz-control > .css-1hwfws3')
      .click()

    //! for Single value type
    cy.get(`#react-select-3-input`)
      .type('Mr.')
      .type('{enter}')

    cy.get('.css-1uccc91-singleValue')
      .should('have.text', 'Mr.')

  });

  url = `https://en.wikipedia.org/wiki/Gurgaon`
  it.skip('Static DropDown Automation | Auto Suggested DropDown', () => {
    cy.visit(url)

    cy.get('#searchInput')
      .click()
      .type('Harry Potter')

    //? contain is used to find value in an array
    cy.get(`.cdx-search-result-title`)
      .contains('Harry Potter')
      .click()

  });

  url = 'https://google.com'
  it('Dynamic DropDown Automation', () => {
    cy.visit(url)

    cy.get('#APjFqb')
      .type('Ping Pong')

    //! important
    cy.wait(3000)

    // cy.get('.wM6W7d > span')
    //   .should('have.length', 12)

    let flag = false
    cy.get('.wM6W7d > span')
      .each(($el, index, $list) => {
        let val = $el['0'].textContent
        if (val === 'ping pong ball') {
          flag = true;
          cy.wrap($el).click()
        };

        console.log($el.text())
      })


    //? Verifying the title that is search in google
    cy.get('#APjFqb')
      .should('have.text', 'ping pong ball')

  });
})
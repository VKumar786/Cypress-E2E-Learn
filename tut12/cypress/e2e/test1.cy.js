/// <reference types="Cypress" />

describe('template spec', () => {

  let url = `https://demo.opencart.com/admin/index.php`
  let row = 0, column = 0;

  //? it is called as hook
  //? it work is to execute before execution of it block
  beforeEach('Login', () => {
    cy.visit(url)

    cy.get('#input-username')
      .type('demo')

    cy.get('#input-password')
      .type('demo')

    cy.get('.btn')
      .click()

    cy.get('.btn-close')
      .click()

    cy.get('#menu-customer > .parent')
      .click()

    cy.get('#collapse-5 > :nth-child(1) > a')
      .click()
  })

  it.skip('Check Number of Rows & Column', () => {

    cy.get('thead > tr > td')
      .should('have.length', 7)
      .then((val) => {
        column = val.length
      })

    cy.get('table > tbody > tr')
      .should('have.length', 10)
      .then((val) => {
        row = val.length
      })

  });

  it.skip('Check cell data from specific row & column', () => {
    cy.get('tbody > tr:nth-child(1) > td:nth-child(3)')
      .then((val) => {
        let val1 = val[0]
        let value = val1.innerText
        console.warn('output', value);
        console.warn('expected', value);
      })


    cy.get('table > tbody > tr:nth-child(1) > td:nth-child(3)')
      .contains('ceo@wolfchip.com')
  });

  //!
  it.skip('Read all the rows & column data in first page', () => {

    //? Approach 1
    // row = 10, column = 7
    // for (let i = 0; i < row; i++) {
    //   for (let j = 0; j < column; j++) {
    //     cy.get(`table > tbody > tr:nth-child(${i+1}) > td:nth-child(${j+1})`)
    //       .then((val) => {
    //         console.warn(val[0].innerText);
    //       })
    //   }
    // }

    //?  Approach 2
    cy.get('table > tbody > tr')
      .each(($row, index, $rows) => {
        cy.wrap($row).within(() => {
          cy.get('td').each(($col, idx, $cols) => {
            cy.log($col.text())
          })
        })
      })

  });

  it('Paginations', () => {
    let totalPages = -1;

    cy.get('.row > .text-end')
      .then(($val) => {
        let str = $val.text(), el = 0;
        for (let i = str.indexOf('('); i < str.length; i++) {
          if (str[i] === '(') continue;
          else if (str[i] === ' ') break;
          el = el * 10 + (str[i] - '0')
        }
        totalPages = el


        if (totalPages <= 9) {
          cy.get(`:nth-child(${totalPages}) > .page-link`)
            .click()
        } else {


          cy.get(`:nth-child(9) > .page-link`)
            .click()
          cy.wait(200)

          totalPages -= 9

          let target = 25, curr = 0
          for (let i = 9; ; i++) {
            if (curr <= target) {
              curr += 4;
              cy.get(`:nth-child(${11}) > .page-link`)
                .click()
              cy.wait(200)
            } else break;
          }

        }

      })
  });
})
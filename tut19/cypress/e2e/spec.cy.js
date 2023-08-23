/// <reference types="Cypress" />

describe('My Suite', () => {
  let url = `https://demo.opencart.com/`
  it.only('Capture ScreenShots', () => {

    cy.visit(url)
     
    //? ScreenShot of Complete Pages
    cy.screenshot()

    cy.screenshot("homepage.jpeg")

    //? screenshot of particular element
    cy.get(':nth-child(2) > form > .product-thumb > .image > a > .img-fluid')
      .screenshot()

    cy.get(':nth-child(3) > form > .product-thumb > .image > a > .img-fluid')
      .screenshot("desktop 12")

    cy.get('footer').scrollIntoView()

    cy.wait(3000)

    cy.get('.active > .row > :nth-child(2) > .img-fluid')
      .screenshot("boii")

    //? Automatically capture screenshot & video on failure - only when on execute through CLI
    //! 
    cy.get(':nth-child(7) > .nav-link')
      .click()

    cy.get('h2')
      .contains('sadfkljsadflkj') 
  });

  it('Capture video', () => {
    cy.visit(url)

   
  });
})
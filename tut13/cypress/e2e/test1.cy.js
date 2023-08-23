/// <reference types="Cypress" />
import 'cypress-iframe';
import '@4tw/cypress-drag-drop'

describe('Mouse Operations', () => {

  let url = `https://demo.opencart.com/`
  it.skip('Mouse Hover', () => {
    cy.visit(url)

    cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
      .should('not.be.visible')

    cy.get('.nav > :nth-child(1) > .dropdown-toggle')
      .trigger('mousemove')
      .click()

    cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
      .should('be.visible')
      .click()

  });

  it.skip('Right Click', () => {

    url = `https://swisnl.github.io/jQuery-contextMenu/demo.html`

    cy.visit(url)

    //? Approach 1
    cy.get('.context-menu-icon-copy')
      .should('not.be.visible')

    cy.get('.context-menu-one')
      .rightclick()

    cy.get('.context-menu-icon-copy')
      .should('be.visible')
      .click()

    //? Approach 2
    cy.get('.context-menu-one')
      .trigger('contextmenu')

  });

  it.skip('Double Click', () => {
    url = `https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick_dom`
    cy.visit(url)

    cy.frameLoaded('#iframeResult')

    cy.iframe('#iframeResult')
      .find('p#demo')
      .trigger('dblclick')

    cy.iframe('#iframeResult')
      .find('p#demo')
      .dblclick()
  });

  //!
  it.skip('Drag and Drop using plugin', () => {
    url = `http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html`
    cy.visit(url)

    cy.get('#box1').drag('#box106', { force: true })
    // cy.get('#box106').drag('#box1')
  });

  //!
  it('Scrolling page', () => {
    cy.visit(url)

    cy.get('.active > .row > :nth-child(2) > .img-fluid')
      .scrollIntoView({
        duration: 2000
      })

    //? validation
    cy.get('.active > .row > :nth-child(2) > .img-fluid')
      .should('be.visible')

    cy.get('.dropdown > .btn > .fas')
      .scrollIntoView({
        duration: 2000
      })
      .should('be.visible')

    //? till end of page
    cy.get('footer')
      .scrollIntoView({
        duration: 5000
      })
  });
});
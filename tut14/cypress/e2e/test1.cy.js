import 'cypress-file-upload';
import 'cypress-iframe';
/// <reference types="Cypress" />

describe('file Upload', () => {
  let url = `https://the-internet.herokuapp.com/upload`
  it.skip('Single File Upload', () => {
    cy.visit(url)

    cy.get('#file-upload')
      .attachFile('pxfuel(2).jpg');

    cy.get('#file-submit')
      .click()

    cy.wait(300)

    cy.get('h3')
      .should('have.text', 'File Uploaded!')
  });

  it.skip('File Upload - Rename', () => {
    cy.visit(url)

    cy.get('#file-upload')
      .attachFile({
        filePath: 'pxfuel(2).jpg',
        fileName: 'toy-boy.jpg'
      });

    cy.get('#file-submit')
      .click()

    cy.wait(300)

    cy.get('h3')
      .should('have.text', 'File Uploaded!')
  });

  it.skip('File Upload - Drag and Drop', () => {
    cy.visit(url)

    cy.get('#drag-drop-upload')
      .attachFile('pxfuel(2).jpg', { subjectType: 'drag-n-drop' });

    cy.get('#file-submit')
      .click()

    cy.wait(300)


    cy.get('h1')
      .contains('Internal Server Error')
  });

  it.skip('Multiple File Upload', () => {
    url = `https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_multiple`

    cy.visit(url)

    cy.frameLoaded('#iframeResult')

    cy.iframe('#iframeResult')
      .find('input[type="file"]')
      .attachFile(['pxfuel(2).jpg', 'laptop.png']);

  });

  it('File Upload - Shadown Dom', () => {
    url = `https://www.htmlelements.com/demos/fileupload/overview/`
    cy.visit(url)

    cy.frameLoaded('iframe.demo-frame')

    //? find the input tag for shadow file upload
    cy.iframe('iframe.demo-frame')
      .find('.smart-browse-input', {
        includeShadowDom: true,
      })
      .attachFile('laptop.png')

    cy.wait(100)
    cy.iframe('iframe.demo-frame')
      .find('.smart-item-name', {
        includeShadowDom: true,
      })
      .contains('laptop.png')

  });
})
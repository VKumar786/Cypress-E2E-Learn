/*
    TODO: CSS & XPath Locators | get() & xpath() methods
    ? Locator
        ? locator - used to identify element in web page
            * CSS Selector is by default locator used by cypress
            * XPath - is locator access using plugin
        ? cy.get(CSSLocator)
        ? cy.get(XPath)
    ? CSS Selector  
        * tag id - [            #id  |   tag#id         ]
        * tag class - [         .class              |           tag.class               ]
        * tag attribute - [     attribute='value'   |           tag.attribute='value'   ]
        * tag class attribute - [       .class[attribute='value'] |     tag.class[attribute='value'] ]
    ? XPath
        * npm i cypress-xpath
    ! support -> commands.js
        * /// <reference types="Cypress"/>
        * /// <reference types="cypress-xpath"/>
    ! support -> e2e.js
        * require('cypress-xpath')
*/
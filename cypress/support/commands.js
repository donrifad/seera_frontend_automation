
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Cypress.Commands.add('changeLanguage', ($element, languageTo) => {
  cy.get($element).then(function ($el) {
    let languageOption = $el.text()
    if (languageOption == languageTo) {
      cy.log('changing language to ' + languageOption)
      cy.wrap($el).click()
    } else {
      cy.log('User is already in the given language  ' + languageTo);
    }
  })

})

Cypress.Commands.add('getSelectedLanguage', ($element) => {
  cy.get($element).then(function ($el) {
    let languageOption = $el.text()
    return languageOption
  })
})


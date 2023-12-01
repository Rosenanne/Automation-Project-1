/// <reference types="Cypress" />
describe('My training test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
  
    cy.contains('type').click()

    //Sould be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    //Get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    //Veryfy that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')

    //Best, isolated from all changes.
    cy.get('[data-cy="submit"]').click()
  })
})
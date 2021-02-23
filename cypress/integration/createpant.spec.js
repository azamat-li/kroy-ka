/// <reference types="cypress" />

context('Index', () => {
  beforeEach(() => {
		cy.visit('/')
    cy.visit('/p/1')
  })

  it('has some meaningful text', () => {
		cy.contains('Feed')
		cy.contains('Brand new sewing model')
  })

			

  it('.as() - alias a route for later use', () => {
    // Alias the route to wait for its response
    //cy.intercept('GET', '**/comments/*').as('getComment')

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    //cy.get('.network-btn').click()

    // https://on.cypress.io/wait
    //cy.wait('@getComment').its('response.statusCode').should('eq', 200)
  })
})

describe('Verify Our Locations Section', () => {
  it('Navigates to contact us page', () => {
    cy.visit('/', {
      failOnStatusCode: false
    })
    cy.url().should("include", 'contact-us')
  })
})
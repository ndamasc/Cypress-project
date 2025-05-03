describe('pagina de cadastro', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();

})
  
  it('passes', () => {
    cy.cadastro('Daniele', 'dani@gmail.com', 'Dani12345')
  })
})


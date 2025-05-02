

describe('pagina de cadastro', () => {

    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/')
  
})

  it('passes', () => {
    cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
  })
})

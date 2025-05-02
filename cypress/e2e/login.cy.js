describe('teste de login', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();

    })



    it('passes', () => {     
      cy.get('[data-test="input-loginEmail"]').type('amanda123@gmail.com');
      cy.get('[data-test="input-loginPassword"]').type('Senha123');
      cy.get('[data-test="submit-button"]').click();
    })
  })
  
describe('entrando na pagina home', () => {
    it('passes', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/home')
  
    })
  })
describe('teste de login', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();

    })



    it('passes', () => {     
      cy.login('amanda123@gmail.com', 'Senha123');

    })
  })
  
describe('entrando na pagina home', () => {
    it('passes', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/home')
  
    })
  })



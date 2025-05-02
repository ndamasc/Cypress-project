describe('teste de login', () => {
    it('passes', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/')
      cy.contains('a', 'Fazer login').click();
      cy.get('input[name="email"').type('amanda123@gmail.com');
      cy.get('input[name="password"').type('Senha123');
      cy.contains('button', 'Entrar').click();
    })
  })
  
describe('entrando na pagina home', () => {
    it('passes', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/home')
  
    })
  })
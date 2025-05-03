describe('teste de login', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();

    })



    it('passes', () => {     
      cy.login('dani@gmail.com', 'Dani12345');

    })
  })

describe('API adpet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiNThmOWNmYS1lZGUxLTRmM2QtODJhNC00OWViNzIzZTVhMmMiLCJhZG9wdGVyTmFtZSI6IkRhbmllbGUiLCJpYXQiOjE3NDYyODg2MTksImV4cCI6MTc0NjU0NzgxOX0.6r1rpzDs7OrGU2DHXzWA4lurvfOdcaHJNVMDcokD-e0`

    it('Nome do perfil', () => {
        cy.request({
            method: 'GET'  ,
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/b58f9cfa-ede1-4f3d-82a4-49eb723e5a2c'  ,
            headers: {authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('Daniele')
    })

    })

})
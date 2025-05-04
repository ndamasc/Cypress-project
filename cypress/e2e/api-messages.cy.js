
describe('API adpet', () => {
    const expectTime = Math.random() *1000
    
    it('Mensagens da API', () => {
        cy.request({
            method: 'GET'  ,
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/b58f9cfa-ede1-4f3d-82a4-49eb723e5a2c'  ,
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            expect(res.duration).to.be.lte(expectTime)
    })

    })

})
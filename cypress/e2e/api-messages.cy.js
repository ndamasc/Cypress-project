describe('API adpet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiNThmOWNmYS1lZGUxLTRmM2QtODJhNC00OWViNzIzZTVhMmMiLCJhZG9wdGVyTmFtZSI6IkRhbmllbGUiLCJpYXQiOjE3NDYyMjk5MjgsImV4cCI6MTc0NjQ4OTEyOH0.ZiW5fV6QhvuoRfXU9ZxnypxvbBXJAM3rFkjg46tLu6s`

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET'  ,
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/b58f9cfa-ede1-4f3d-82a4-49eb723e5a2c'  ,
            headers: {authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
    })

    })

})
describe('testes opção Lembrar Senha!', () =>{
    it('verifica envio de dados e resposta "Lembrar Senha!" com dados validos', () =>{
        cy.request({
            method: 'POST',
            url: 'http://pe.questor.com.br/Acesso/EnviarSenha',
            body: {
                email: Cypress.env('email'),
                cnpj: Cypress.env('cnpj')
            }
        }).then((res) =>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).contains('Lembrete de senha enviado com sucesso!')
        })
    })

    it('verifica envio de dados e resposta "Lembrar Senha!" com dados invalidos', () =>{
        cy.request({
            method: 'POST',
            url: 'http://pe.questor.com.br/Acesso/EnviarSenha',
            body: {
                email: 'emailnaovalido@testes.com.br',
                cnpj: '00.000.999/9999-99'
            }
        }).then((res) =>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).contains('Não foram encontrados registros com os dados fornecidos')
        })
    })
})
describe ('testes cadastro de usuarios', () =>{
    beforeEach(() =>{
        cy.visit('https://pe.questor.com.br/Acesso/Index')
        cy.loginPE(Cypress.env('email'), Cypress.env('senha'), 1)
    })

    
    it('importar dados receita federal', () =>{      
        cy.get('#trpnlCadastros').click()
        cy.contains('span', 'Clientes').click()
        cy.intercept('POST', '/Cadastro/Data/Cliente_Pesquisa').as('waitPesquisaClientes')
        cy.wait('@waitPesquisaClientes').its('response.statusCode').should('eq', 200)
        cy.visit('https://pe.questor.com.br/Cadastro/Forms/Frm_Cliente_Cadastro')
        cy.contains('button', 'Importar Cadastro').click()
        cy.get('#btnImportar').click()
        cy.get('#CNPJ_IMPORTACAO').type('79.011.862/0003-31')
        cy.get('#ext-gen1589').click()
        cy.get('#NR_CPFCNPJ').should('have.value', '79011862000331')
    })
    
})
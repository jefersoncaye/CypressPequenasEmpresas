// Realiza o Login no PE
Cypress.Commands.add('loginPE', (email, password, empresa) =>{
        Cypress.on('uncaught:exception', (err, runnable) => {
                return false;
            });
    
        cy.get('#TxtEmail').type((email), {log: false})
        cy.get('#TxtSenha').type((password), {log: false})
        cy.get('#BtnLogin').click()
        cy.get('div[id="'+empresa+'"]').click()
        cy.contains('button', 'Selecionar').click()
        cy.intercept('POST', 'https://pe.questor.com.br/Cadastro/Forms/Menu').as('waitMenuCadastros')
        cy.wait('@waitMenuCadastros').its('response.statusCode').should('eq', 200)
})
describe ('testes CRUD ordem compra', () =>{
    beforeEach(() =>{
        cy.visit('https://pe.questor.com.br/Acesso/Index')
        cy.loginPE(Cypress.env('email'), Cypress.env('senha'), 1)
    })

    const getIframeDocument = () => {
        return cy
        .get('iframe[name="1048788558_IFrame"]')
        .its('0.contentDocument').should('exist')
      }

    const getIframeBody = () => {
        return getIframeDocument()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
      }


it('Cadastrar Ordem Compra', () =>{
    cy.get('#ext-gen94').click()
    cy.get('#ext-gen95 > .x-tree-root-node > :nth-child(3) > .x-tree-node-el > .x-tree-node-anchor > span').click()
    getIframeBody().find('#ext-gen88').should('be.visible').click()
})

})
describe ('testes tela de login PE', () =>{
    beforeEach(() =>{
        cy.visit('http://pe.questor.com.br/Acesso/Index')
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    it('verifica se os principais campos existem', () =>{
        cy.get('#BtnLogin').should('exist');
        cy.get('#TxtEmail').should('exist');
        cy.get('#TxtSenha').should('exist');
        cy.get('#entrar').should('exist');
        cy.get('#rodape-c1').should('exist');
        cy.get('.imagem').should('exist');
        cy.get('#buttonTexto > input').should('exist');
        cy.get('#ext-gen13').should('exist');
    })

    it('loga com usuario valido', () =>{
        cy.get('#TxtEmail').type(Cypress.env('email'), {log: false});
        cy.get('#TxtSenha').type(Cypress.env('senha'), {log: false});
        cy.get('#BtnLogin').click();
        cy.get('#ext-gen137').should('exist');
        cy.get('#ext-gen144').should('exist');
    })

    it('alerta senha faltando', () =>{
        cy.get('#TxtEmail').type(Cypress.env('email'));
        cy.get('#BtnLogin').click();
        cy.get('#ext-gen12').should('have.text', 'Senha deve ser Informada!');
    })

    it('alerta e-mail faltando', () =>{
        cy.get('#BtnLogin').click();
        cy.get('#ext-gen12').should('have.text', 'Email deve ser Informado!');
    })

    it('alerta usuario ou senha invalido', () =>{
        cy.get('#TxtEmail').type('emailnaovalido@testes.com.br');
        cy.get('#TxtSenha').type('54878787');
        cy.get('#BtnLogin').click();
        cy.get('#ext-gen12').should('have.text', 'Ocorreu uma Falha: Usuário ou senha incorretos');
    })

    it('verifica "Lembrar Senha!"', () =>{
        cy.contains('a', 'Lembrar senha!').click();
        cy.get('#ext-gen27').should('exist');
        cy.get('#ext-gen27').should('have.text', 'Envio de senha');
        cy.get('#UcJanela_IFrame').should('be.visible');
    })


})
describe('Form Authentication', () => {
        
        it('Login success', () => {

            cy.AccessTheInternet()

            cy.get('li a[href="/login"]').click()

            cy.fixture('dados').then((dados) => {
                cy.get("#username").type(dados.login.user)
                cy.get("#password").type(dados.login.password, {log: false})
            })

            cy.get('button.radius').contains("Login").click()

            cy.url().should('eq', 'https://the-internet.herokuapp.com/secure')

            cy.contains(" You logged into a secure area! ")

        })

})

describe('Form Authentication', () => {
        

        it('Login success', () => {

            cy.AccessTheInternet()

            cy.get('li a[href="/login"]').click()

        //Aqui foi utilizado uma fixture, a qual não está no repositório, assim conseguimos protejer dados sensiveis como senha e, em determinados momentos, o usuário
        //a fixture está sendo ignorada pelo git ignore
            cy.fixture('dados').then((dados) => {
                cy.get('#username').type(dados.login.user)
                cy.get('#password').type(dados.login.password, {log: false})
            })

            cy.get('button.radius').contains("Login").click()

            cy.url().should('eq', 'https://the-internet.herokuapp.com/secure')

            cy.contains(' You logged into a secure area! ')

        })

        it('Login failed - Incorrect password', () => {
            
            cy.AccessTheInternet()

            cy.get('li a[href="/login"]').click()

            cy.fixture('dados').then((dados) => {
                cy.get('#username').type(dados.login.user)
            })

            cy.get('#password').type('passwordfake')

            cy.get('button.radius').contains("Login").click()

            cy.url().should('eq', 'https://the-internet.herokuapp.com/login')

            cy.contains(' Your password is invalid! ')

        })

        it('Login failed - Incorrect user', () => {
            
            cy.AccessTheInternet()

            cy.get('li a[href="/login"]').click()

            cy.get('#username').type('userFaker')

            cy.fixture('dados').then((dados) => {
                cy.get('#password').type(dados.login.password, {log: false})
            })

            cy.get('button.radius').contains("Login").click()

            cy.url().should('eq', 'https://the-internet.herokuapp.com/login')

            cy.contains(' Your username is invalid! ')

        })

        it('Login failed - Incorrect user and password', () => {
            
            cy.AccessTheInternet()

            cy.get('li a[href="/login"]').click()

            cy.get('#username').type('userFaker')

            cy.get('#password').type('passwordfake')
           
            cy.get('button.radius').contains("Login").click()

            cy.url().should('eq', 'https://the-internet.herokuapp.com/login')

            cy.contains(' Your username is invalid! ')

        })


})

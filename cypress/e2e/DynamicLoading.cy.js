describe('Dynamic Loading', () => {
        
    before(() => {
        cy.AccessTheInternet()
    }) 

    it('Element rendered after the fact', () => {

        cy.get('li a[href="/dynamic_loading"]').click()

        cy.get('#content').contains("Example 2: Element rendered after the fact").click()

        cy.url().should('eq', 'https://the-internet.herokuapp.com/dynamic_loading/2')

        cy.contains('Dynamically Loaded Page Elements')

        cy.get('#start').contains('Start').click({force: true})

        cy.get('#loading').should('exist')

        cy.contains('Hello World!', {timeout: 10000})
    })
})
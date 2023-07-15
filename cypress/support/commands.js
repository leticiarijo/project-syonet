Cypress.Commands.add('AccessTheInternet', () => {
    cy.visit('https://the-internet.herokuapp.com/')

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;       
    })
});

    
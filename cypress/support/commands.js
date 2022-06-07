/// <reference types="cypress" />

Cypress.Commands.add('login', () => {
    cy.fixture('login.json').then((login) => { 
        cy.get('#user-name').type(login.userName);
        cy.get('#password').type(login.password);
    
        cy.get('[type="submit"]').click();
        cy.get('#react-burger-menu-btn').should('be.visible');
    });
});


beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
    cy.viewport(1000, 1020);
});

afterEach(function () {
    cy.wait(1500);
    cy.screenshot();

    if(this.currentTest.state === 'failed') {
        cy.wait(1000);
        cy.screenshot();
    }
});

/// <reference types="cypress" />

Cypress.Commands.add('login', () => {
    cy.fixture('login.json').then((login) => { 
        cy.get('#user-name').type(login.userName);
        cy.get('#password').type(login.password);
    
        cy.get('[type="submit"]').click();
        cy.get('#react-burger-menu-btn').should('be.visible');
    });
});
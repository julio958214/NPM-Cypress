/// <reference types="cypress" />

Cypress.Commands.add('login', () => {
    cy.fixture('login.json').then((login) => { 
        cy.get('#user-name').type(login.userName);
        cy.get('#password').type(login.password);
    
        cy.get('[type="submit"]').click();
        cy.get('#react-burger-menu-btn').should('be.visible');
    });
});

Cypress.Commands.add('logOut', () => { 
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.get('div[class="login-box"]').should('be.visible');
});
/// <reference types="cypress" />

describe('NPM Project Swag Labs', () => {
    it('Login', () => {
        cy.url().should('be.equal', Cypress.env('baseUrl'));

        cy.fixture('login.json').then((login) => { 
            cy.get('#user-name').type(login.userName);
            cy.get('#password').type(login.password);

            cy.get('[type="submit"]').click();
            cy.get('#react-burger-menu-btn').should('be.visible');
        });
        
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        cy.get('div[class="login-box"]').should('be.visible');
    });

    it('Adding products to cart', () => {
        cy.login();
        
        cy.get('.inventory_item_name').first().invoke('text')
            .then(myProduct => {

                cy.contains('Add to cart').click();
                cy.get('#shopping_cart_container').click();
                cy.contains('Your Cart');
        
                cy.get('.cart_item')
                    .should('contain', myProduct)
                    .and('be.visible');
            });
    });
});
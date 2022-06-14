before(() => {
    cy.log('Start');
});

beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
});

afterEach(function () {
    cy.wait(1500);
    cy.screenshot();

    if(this.currentTest.state === 'failed') {
        cy.wait(1000);
        cy.screenshot('error/error');
    }
});

before(() => {
    cy.log('Start');
});

beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
});

afterEach(function () {
    if(this.currentTest.state === 'failed')
        return cy.wait(1000).screenshot('error/error');
    else 
        return cy.wait(1000).screenshot('output/success');
});

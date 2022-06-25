before(() => {
    cy.log('Start');
});

beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
});

before(function () { 
    if(this.currentTest.state = true)
        cy.task('deleteFolder');
});

afterEach(function () {
    if(this.currentTest.state === 'failed')
        return cy.wait(1000).screenshot('error/error');
    else 
        return cy.wait(1500).screenshot('output/success');
});

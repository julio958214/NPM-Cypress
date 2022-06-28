before(() => {
    cy.log('Start');
    cy.task('deleteFolder', 'cypress/screenshots');
});

beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
});

afterEach(function () {
    if (this.currentTest.state === 'failed')
        return cy.wait(1500).screenshot('error/testFailed');
    else
        return cy.wait(1500).screenshot('output/testPassed');
});

before(() => {
    cy.log('Start');
});

beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
});

before(function () {
    cy.task('deleteFolder', 'cypress/screenshots');
    cy.task('deleteFolder', 'cypress/videos');       
});

afterEach(function () {
    if (this.currentTest.state === 'failed')
        return cy.wait(1500).screenshot('error/testFailed');
    else
        return cy.wait(1500).screenshot('output/testPassed');
});

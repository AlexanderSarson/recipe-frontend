/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Using Offset', () => {
  it('Visits SearchPage', () => {
    cy.visit('http://localhost:3000');
    cy.findByText('Search').click();
    cy.url().should('include', '/search');
    cy.wait(1000);
  });
  it('Searches for recipe', () => {
    cy.get('#searchField').clear().type('falafel');
    cy.get('#searchBtn').click();
    cy.wait(1000);
    cy.get('#pageLabel').contains('Page 1 of 18');
  });
  it('Searches forward', () => {
    cy.get('#nextBtn').click();
    cy.wait(1000);
    cy.get('#pageLabel').contains('Page 2 of 18');
  });
  it('Searches backward', () => {
    cy.get('#previousBtn').click();
    cy.wait(1000);
    cy.get('#pageLabel').contains('Page 1 of 18');
  });
});

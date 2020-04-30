/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Random Recipe', () => {
  it('Visits Random Recipes', () => {
    cy.visit('http://localhost:3000');
    cy.findByText('Random Recipe').click();
    cy.url().should('include', '/details');
    cy.wait(1000);
  });
  it('Search for Content', () => {
    cy.get('.Header').should('exist');
  });
});

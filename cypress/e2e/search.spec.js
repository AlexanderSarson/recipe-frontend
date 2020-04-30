/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Search', () => {
  it('Visits SearchPage', () => {
    cy.visit('http://localhost:3000');
    cy.findByText('Search').click();
    cy.url().should('include', '/search');
    cy.wait(1000);
  });
  it('Searches for recipe', () => {
    cy.get('#searchField').clear().type('Jumbo Chickpea Pancake');
    cy.get('#searchBtn').click();
    cy.wait(1000);
    cy.get('.header').contains('Jumbo Chickpea Pancake');
  });
  it('Goes to details page', () => {
    cy.get('.card').click();
    cy.url().should('include', '/details/262756');
  });
});

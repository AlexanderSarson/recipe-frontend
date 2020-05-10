/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Using extended search', () => {
  it('Visits the search page', () => {
    cy.visit('http://localhost:3000');
    cy.findByText('Search').click();
    cy.wait(1000);
    cy.get('#searchField').clear().type('Pasta');
    cy.get('#includeIngredientsDropdown')
      .click()
      .type('Avocado')
      .type('{enter}');
    cy.get('#excludeIngredientsDropdown')
      .click()
      .type('Tomato')
      .type('{downarrow}')
      .type('{enter}');
    cy.get('#submitExtendedSearch').click();
    cy.wait(1000);
    cy.get('.header').contains('15-minute Avocado Pasta');
  });
});

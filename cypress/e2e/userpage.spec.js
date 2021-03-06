/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Userpage', () => {
  it('Signs in', () => {
    cy.visit('http://localhost:3000');
    cy.findByText('Login').click();
    cy.get('#loginUsername').type(Cypress.env('TEST_USER'));
    cy.get('#loginPassword').type(Cypress.env('TEST_PASSWORD'));
    cy.get('#loginBtn').click();
  });
  it('Visits userpage', () => {
    cy.get('#userpageBtn').click();
    cy.url().should('include', `/user/${Cypress.env('TEST_USER')}`);
  });
});

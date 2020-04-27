/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Login', () => {
  it('Visits login', () => {
    cy.visit('http://localhost:3000');
    cy.findByText('Login').click();
    cy.findByText('Welcome back. Sign in below!').should('exist');
  });
  it('Sign in as user', () => {
    cy.findByLabelText('Username').type(Cypress.env('TEST_USER'));
    cy.findByLabelText('Password').type(Cypress.env('TEST_PASSWORD'));
    cy.get('#loginBtn').click();
    cy.get('h1').contains('Home');
  });
  it('Log out', () => {
    cy.findByText('Logout').click();
    cy.findByText('Sign out').click();
    cy.findByText('Sign out').should('not.exist');
  });
});

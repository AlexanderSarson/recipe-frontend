/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Advanced state management', () => {
  it('Visits content 3', () => {
    cy.visit('http://localhost:3000');
    cy.findByText('Content 3').click();
    cy.url().should('include', '/content3');
  });
  it('Add Users', () => {
    cy.get('#name').type('testname');
    cy.get('#age').type('30');
    cy.get('#email').type('test@example.com');
    cy.findByText('Add').click();

    cy.get('#name').type('testname2');
    cy.get('#age').type('20');
    cy.get('#email').type('test2@example.com');
    cy.findByText('Add').click();
    cy.contains('test@example.com').should('exist');
    cy.contains('test2@example.com').should('exist');
  });
  it('Undo Changes', () => {
    cy.findByText('Undo').click();
    cy.contains('test2@example.com').should('not.exist');
    cy.findByText('Undo').click();
    cy.contains('test@example.com').should('not.exist');
  });

  it('Redo Changes', () => {
    cy.findByText('Redo').click();
    cy.contains('test@example.com').should('exist');
    cy.findByText('Redo').click();
    cy.contains('test2@example.com').should('exist');
  });

  it('Remove Users', () => {
    cy.findByTestId('test@example.com').click();
    cy.contains('test@example.com').should('not.exist');
    cy.findByTestId('test2@example.com').click();
    cy.contains('test2@example.com').should('not.exist');
  });
});

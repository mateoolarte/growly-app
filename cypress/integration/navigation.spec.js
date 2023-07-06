describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('When click on Plantillas should go to /plantillas', () => {
    cy.contains('Plantillas').click();
    cy.url().should('include', '/plantillas');
  });

  it('When click on Como funciona should go to /como-funciona', () => {
    cy.contains('Como funciona').click();
    cy.url().should('include', '/como-funciona');
  });
});

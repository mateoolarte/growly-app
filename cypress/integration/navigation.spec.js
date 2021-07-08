describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it.skip('When click on Plantillas should go to /plantillas', () => {
    cy.contains('Plantillas').click();
    cy.url().should('include', '/plantillas');
  });

  it.skip('When click on Como funciona should go to /como-funciona', () => {
    cy.contains('Como funciona').click();
    cy.url().should('include', '/como-funciona');
  });

  // it("Should go to /plantillas", () => {
  //   cy.contains("Plantillas").click();
  //   cy.url().should("include", "/plantillas");
  //   expect(true).to.equal(true);
  // });
});

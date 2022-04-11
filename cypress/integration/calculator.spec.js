describe("Calculator", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  // it('should be able to add 1 and 4', () => {
  //   cy.get('#number1').click();
  //   cy.get('#operator-add').click();
  //   cy.get('#number4').click();
  //   cy.get('#operator-equals').click();
  //   const result
  // })
})
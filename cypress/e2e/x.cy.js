describe("Login Formu", () => {
  it("Login butonu çalışıyor mu testi", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="firstLogin"]').should("not.be.disabled").click();
    cy.get('[data-cy="email"]').type("test@example.com");
    cy.get('[data-cy="forward"]').click();
    cy.get('[data-cy="secondEmail"]').should("have.value", "test@example.com");
    cy.get('[data-cy="pswd"]').type("password1234");
    cy.get('[data-cy="secondLogin"]').click();
    cy.url().should("eq", "http://localhost:5173/home");
  });
});

describe("Login Formu", () => {
  it("Login formu input ve butonlar icin test", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="firstLogin"]').should("not.be.disabled").click();
    cy.get('[data-cy="email"]').type("test@example.com");
    cy.get('[data-cy="forward"]').click();
    cy.get('[data-cy="secondEmail"]').should("have.value", "test@example.com");
    cy.get('[data-cy="pswd"]').type("password1234");
    cy.get('[data-cy="secondLogin"]').click();
    cy.url().should("eq", "http://localhost:5173/home");
  });

  it("Email alanı boş bırakılırsa uyarı gösterir", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="firstLogin"]').should("not.be.disabled").click();
    cy.get('[data-cy="email"]').type("test");
    cy.get('[data-cy="email"]').clear();
    cy.get('[data-cy="emailError"]').should("contain", "Email is required");
  });

  it("Geçersiz email formatı için uyarı gösterir", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="firstLogin"]').should("not.be.disabled").click();
    cy.get('[data-cy="email"]').type("test");
    cy.get('[data-cy="emailError"]').should("contain", "Invalid email address");
  });

  it("Şifre 8 karakterli değilse uyarı gösterir", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="firstLogin"]').should("not.be.disabled").click();
    cy.get('[data-cy="email"]').type("test@example.com");
    cy.get('[data-cy="forward"]').click();
    cy.get('[data-cy="secondEmail"]').should("have.value", "test@example.com");
    cy.get('[data-cy="pswd"]').type("pass");
    cy.get('[data-cy="passwordError"]').should(
      "contain",
      "Password must be at least 8 characters."
    );
  });

  it("Submit butonu geçersiz olduğunda disabled olmalıdır", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="firstLogin"]').should("not.be.disabled").click();
    cy.get('[data-cy="email"]').type("invalid-email");
    cy.get('[data-cy="forward"]').should("be.disabled");
  });

  it("Submit butonu geçerli olduğunda disabled olmamalıdır", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="firstLogin"]').should("not.be.disabled").click();
    cy.get('[data-cy="email"]').type("valid@example.com");
    cy.get('[data-cy="forward"]').should("not.be.disabled");
  });

  it("İkinci formda submit butonu geçersiz olduğunda disabled olmalıdır", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="firstLogin"]').should("not.be.disabled").click();
    cy.get('[data-cy="email"]').type("valid@example.com");
    cy.get('[data-cy="forward"]').click();
    cy.get('[data-cy="secondEmail"]').should("have.value", "valid@example.com");
    cy.get('[data-cy="pswd"]').type("short");
    cy.get('[data-cy="secondLogin"]').should("be.disabled");
  });

  it("İkinci formda submit butonu geçerli olduğunda disabled olmamalıdır", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="firstLogin"]').should("not.be.disabled").click();
    cy.get('[data-cy="email"]').type("valid@example.com");
    cy.get('[data-cy="forward"]').click();
    cy.get('[data-cy="secondEmail"]').should("have.value", "valid@example.com");
    cy.get('[data-cy="pswd"]').type("validpassword");
    cy.get('[data-cy="secondLogin"]').should("not.be.disabled");
  });
});

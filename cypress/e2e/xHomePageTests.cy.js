describe("Home Page", () => {
  it("Home Page butonları için test", () => {
    cy.visit("http://localhost:5173/profile");
    cy.get('[data-cy="homeBtn"]').click();
    cy.url().should("eq", "http://localhost:5173/home");
  });

  it("Log out için test", () => {
    cy.visit("http://localhost:5173/home");
    cy.get('[data-cy="dropUp"]').click();
    cy.get('[data-cy="logOut"]').click();
    cy.url().should("eq", "http://localhost:5173/");
  });
  it("Sidebar yeni post ekle butonu için test", () => {
    cy.visit("http://localhost:5173/home");
    cy.get('[data-cy="postTweet"]').click();
    cy.get('[data-cy="modalWindow"]').should("be.visible");
  });
  it("Profil fotoğrafına tıklandığında profile sayfasına gidiyor mu?", () => {
    cy.visit("http://localhost:5173/home");
    cy.get('[data-cy="profilePic"]').click();
    cy.url().should("eq", "http://localhost:5173/profile");
  });
});

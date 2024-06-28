describe("Profile Page", () => {
  it("Edit Profile butonuna tıklandığında Edit Profile Modal açılıyor mu?", () => {
    cy.visit("http://localhost:5173/profile");
    cy.get('[data-cy="editProfileBtn"]').click();
    cy.get('[data-cy="editProfileModal"]').should("be.visible");
  });
  it("Edit Profile header back butonuna tıklandığında home sayfasına gidiyor mu?", () => {
    cy.visit("http://localhost:5173/profile");
    cy.get('[data-cy="back-btn"]').click();
    cy.url().should("eq", "http://localhost:5173/home");
  });
  it("Edit Profile ile kullanıcı adı değişiyor mu?", () => {
    cy.visit("http://localhost:5173/profile");
    cy.get('[data-cy="editProfileBtn"]').click();
    cy.get('[data-cy="nameInput"]').clear();
    cy.get('[data-cy="nameInput"]').type("new name");
    cy.get('[data-cy="saveBtn"]').click();
    cy.get('[data-cy="username"]').should("contain", "new name");
  });
  it("Edit Profile ile bio değişiyor mu?", () => {
    cy.visit("http://localhost:5173/profile");
    cy.get('[data-cy="editProfileBtn"]').click();
    cy.get('[data-cy="bioInput"]').clear();
    cy.get('[data-cy="bioInput"]').type("new description");
    cy.get('[data-cy="saveBtn"]').click();
    cy.get('[data-cy="bio"]').should("contain", "new description");
  });
});

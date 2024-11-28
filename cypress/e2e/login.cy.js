describe("Login Form Test", () => {
  it("should visit the login page", () => {
    cy.visit("http://localhost:5173/");
  });

  it("should show errors for invalid email and password", () => {
    cy.visit("http://localhost:5173/");

    cy.get('[data-cy="email-input"]').type("erdem.guntay@wit.com.tr");
    cy.get('[data-cy="password-input"]').type("9fxIH0GXesEwH_I");
    cy.get('[data-cy="checkbox-input"]').click();

    cy.get('[data-cy="submit-input"]').click();
  });
});

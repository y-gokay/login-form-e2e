describe("Login Form Test", () => {
  // Visiting the login page
  it("should visit the login page", () => {
    cy.visit("http://localhost:5173/");
  });

  // Test for invalid email and password submission
  it("should show errors for invalid email and password", () => {
    cy.visit("http://localhost:5173/");

    // Check that the login form is loaded
    cy.get('[data-cy="email-input"]').type("hello@com.tr");
    cy.get('[data-cy="password-input"]').type("Hello123");
    cy.get('[data-cy="checkbox-input"]').click();

    // Try to submit the form with invalid data (empty fields)
    cy.get('[data-cy="submit-input"]').click();
  });
});

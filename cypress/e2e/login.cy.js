describe("Login Form Test", () => {
  it("should visit the login page", () => {
    cy.visit("http://localhost:5173/");
  });

  // Her şey doğru
  it("should submit the form and show the success page when correct email, password and terms are provided", () => {
    cy.visit("http://localhost:5173/");

    cy.get('[data-cy="email-input"]').type("erdem.guntay@wit.com.tr");
    cy.get('[data-cy="password-input"]').type("9fxIH0GXesEwH_I");
    cy.get('[data-cy="checkbox-input"]').check();
    cy.get('[data-cy="submit-input"]').click();

    cy.url().should("include", "/success");
  });

  // Email yanlış
  it("should show an error message when the email is incorrect and keep the submit button disabled", () => {
    cy.visit("http://localhost:5173/");

    cy.get('[data-cy="email-input"]').type("ahmet.guntay@wit.com.tr");
    cy.get('[data-cy="password-input"]').type("9fxIH0GXesEwH_I");
    cy.get('[data-cy="checkbox-input"]').check();
    cy.get('[data-cy="submit-input"]').click();

    cy.url().should("include", "/error");
  });

  // Email ve şifre yanlış
  it("should show error messages for both email and password when both are incorrect", () => {
    cy.visit("http://localhost:5173/");

    cy.get('[data-cy="email-input"]').type("ahmet.guntay@wit.com.tr");
    cy.get('[data-cy="password-input"]').type("2fxIH0GXesEwH_I");
    cy.get('[data-cy="checkbox-input"]').check();
    cy.get('[data-cy="submit-input"]').click();

    cy.url().should("include", "/error");
  });
});

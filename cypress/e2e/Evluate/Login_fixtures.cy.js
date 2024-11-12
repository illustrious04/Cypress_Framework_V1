/// <reference types="cypress" />

const { default: login_page } = require("../../support/pages/login_page");

// Test suite
describe.skip("Evluate- [Login Page]", () => {
  beforeEach(() => {
    //Execute before each test case
    //cy.visit("https://company.evluate.com/en/company-login");
    cy.goToApplication();
  });

  const login_credentials = require("/cypress/fixtures/login_credentials.json");
  const user_email = login_credentials.user_email;
  const user_password = login_credentials.user_password;

  it("Login with valid credentials", () => {
    cy.get("input[placeholder='Registered email *']").type(user_email);

    cy.get("input[placeholder='Password *']").type(user_password);
    cy.get("button[type='submit']").click();
    cy.get("div[class='CreatedAssessmentListTitle'] h2").should(
      "have.text",
      "Assessments"
    );
    cy.screenshot();
  });
});

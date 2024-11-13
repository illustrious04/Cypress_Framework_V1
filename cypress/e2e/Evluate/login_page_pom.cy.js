/// <reference types="cypress" />

import login_page from "../../support/pages/login_page";
import company_dashboard from "../../support/pages/company_dashboard";
import footer from "../../support/pages/components/footer";

// Test suite
describe("Evluate- [Login Page]", () => {
  beforeEach(() => {
    //Execute before each test case
    //cy.visit("https://company.evluate.com/en/company-login");
    cy.goToApplication();
  });

  const login_credentials = require("/cypress/fixtures/login_credentials.json");
  const user_email = login_credentials.user_email;
  const user_password = login_credentials.user_password;

  it.skip("Login with valid credentials POM", () => {
    login_page.fill_text_box_email(user_email);
    login_page.fill_text_box_password(user_password);
    login_page.click_sign_in_button();
    company_dashboard.elements
      .heading_assesments()
      .should("have.text", "Assessments");
    cy.screenshot();
    // Checking footer copyright message
    footer.elements.copy_right().should("include.text", "Evluate Global, LLC.");
  });

  it("Login with valid credentials POM With Base Page", () => {
    login_page.fill_text_box_email(user_email);
    login_page.fill_text_box_password(user_password);
    login_page.click_sign_in_button();
    company_dashboard.elements
      .heading_assesments()
      .should("have.text", "Assessments hyhyhyhyh");
    cy.screenshot();
    // Checking footer copyright message
    footer.elements.copy_right().should("include.text", "Evluate Global, LLC.");
  });
});

/// <reference types="cypress" />

// Test suite
describe.skip("Evluate- [Login Page]", () => {
  beforeEach(() => {
    //Execute before each test case
    //cy.visit("https://company.evluate.com/en/company-login");
    //cy.goToApplication();
  });

  it.skip("@regression @sanity Login with valid credentials", () => {
    // cy.get("input[placeholder='Registered email *']").type(
    //   "sc7@techvalens.com"
    // );
    cy.goToApplication();
    cy.xpath("//input[@placeholder='Registered email *']").type(
      "sc7@techvalens.com"
    );
    cy.get("input[placeholder='Password *']").type("test@1234");
    cy.get("button[type='submit']").click();
    cy.get("div[class='CreatedAssessmentListTitle'] h2").should(
      "have.text",
      "Assessments"
    );
    cy.screenshot();
  });

  it.skip("@regression Google page: Check Page Title:", () => {
    cy.visit("https://www.google.com/");
    cy.title().should("eq", "Google");
    cy.screenshot();
  });
});

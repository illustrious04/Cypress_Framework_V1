class company_dashboard {
  // Define the elements

  elements = {
    heading_assesments: () =>
      cy.get("div[class='CreatedAssessmentListTitle'] h2"),
  };

  //Operations Method we want to perform
}

export default new company_dashboard();

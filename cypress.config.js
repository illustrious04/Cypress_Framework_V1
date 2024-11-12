const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: { application_URL: "https://company.evluate.com/en/company-login" },

  //Configure the Mochawsome report for geneating the test reports
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/Evluate-ui-test-reports",
    charts: true,
    reportPageTitle: "Evluate UI Tests",
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: true,
    autoOpen: false,
    code: true,
    timestamp: "longDate",
    showPassed: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});

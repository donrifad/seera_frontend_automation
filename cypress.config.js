const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  reporter: 'mochawesome',

  env: {
    url: "https://almosafer.com/",
    lang: "arabic",
  },

  retries: {
    runMode: 1,
  },

  projectId: "a5zbka",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
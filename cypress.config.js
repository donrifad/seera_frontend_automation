const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 20000,
  reporter: 'mochawesome',
  viewportHeight: 660,
  viewportWidth: 1000,

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
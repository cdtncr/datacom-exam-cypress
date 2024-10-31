const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: ["**/*.ts"],
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 20000,
    baseUrl: 'https://datacom.com/nz/en/contact-us',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

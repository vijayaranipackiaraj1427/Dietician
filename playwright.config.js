// playwright.config.js

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    headless: false, // visible browser for demo
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  timeout: 30 * 1000,

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      },
    }
  ],
};

module.exports = config;
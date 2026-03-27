
const { Before, After, BeforeAll, AfterAll, Status } = require('@cucumber/cucumber');
//const { chromium } = require('playwright');
const { chromium, firefox, webkit } = require('playwright');
const logger = require('../utils/logger');
const path = require('path');

let browser;

BeforeAll(async function () {

  //const browserName = process.env.BROWSER || 'chromium';
  const browserName = (process.env.BROWSER || 'chromium').trim().toLowerCase();

  if (browserName === 'chromium') {
    browser = await chromium.launch({ headless: false });
  } else if (browserName === 'firefox') {
    browser = await firefox.launch({ headless: false });
  } else if (browserName === 'webkit') {
    browser = await webkit.launch({ headless: false });
  } else {
    throw new Error(`Unsupported browser: ${browserName}`);
  }

  logger.info(`Browser launched: ${browserName}`);

  //logger.info('Starting test execution');
  //browser = await chromium.launch({ headless: false });
});


Before(async function (scenario) {
  logger.info(`Starting scenario: ${scenario.pickle.name}`);
   const browserType = process.env.BROWSER || 'chromium';

  const browsers = {
    chromium,
    firefox,
    webkit
  };

  this.browser = await browsers[browserType].launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
 
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const fileName = scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_');
    const screenshotPath = path.join('screenshots', `${fileName}.png`);

    await this.page.screenshot({ path: screenshotPath, fullPage: true });
    logger.error(`Scenario failed: ${scenario.pickle.name}`);
    logger.error(`Screenshot captured: ${screenshotPath}`);
  } else {
    logger.info(`Scenario passed: ${scenario.pickle.name}`);
  }

  await this.page.close();
  await this.context.close();
});


AfterAll(async function () {
  logger.info('Ending test execution');
  await browser.close();
});


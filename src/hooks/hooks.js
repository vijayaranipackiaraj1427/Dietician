//version1 

// const { Before, After } = require('@cucumber/cucumber');
// const { chromium } = require('playwright');

// Before(async function () {
//   this.browser = await chromium.launch({ headless: false });
//   this.context = await this.browser.newContext();
//   this.page = await this.context.newPage();
// });

// After(async function (scenario) {
//   if (scenario.result.status === 'FAILED') {

//     const fileName = scenario.pickle.name.replace(/\s+/g, '_');

//     const screenshot = await this.page.screenshot({
//       path: `screenshots/${fileName}.png`,
//       type: 'png'
//     });

//     await this.attach(screenshot, 'image/png'); // attach to report
//   }

//   await this.page.close();
//   await this.browser.close();
// });


//version2

// const { Before, After, Status, setDefaultTimeout } = require("@cucumber/cucumber");
// const { chromium } = require("playwright");

// const logger = require('../utils/logger');

// let browser;

// const fs = require("fs");
// const path = require("path");

// setDefaultTimeout(60 * 1000);

// Before(async function () {
//   this.browser = await chromium.launch({ headless: false });
//   this.context = await this.browser.newContext();
//   this.page = await this.context.newPage();
// });

// After(async function ({ result }) {
//   if (result?.status === Status.FAILED) {
//     const screenshotDir = path.join(process.cwd(), "reports", "screenshots");
//     fs.mkdirSync(screenshotDir, { recursive: true });

//     const screenshotPath = path.join(screenshotDir, `failed-${Date.now()}.png`);
//     const screenshot = await this.page.screenshot({
//       path: screenshotPath,
//       fullPage: true
//     });

//     await this.attach(screenshot, "image/png");
//   }

//   await this.page.close();
//   await this.context.close();
//   await this.browser.close();
// });

//version3 

const { Before, After, BeforeAll, AfterAll, Status } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const logger = require('../utils/logger');
const path = require('path');

let browser;

BeforeAll(async function () {
  logger.info('Starting test execution');
  browser = await chromium.launch({ headless: false });
});

Before(async function (scenario) {
  logger.info(`Starting scenario: ${scenario.pickle.name}`);
  this.context = await browser.newContext();
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



// After(async function (scenario) {
//   if (scenario.result?.status === Status.FAILED) {
//     logger.error(`Scenario failed: ${scenario.pickle.name}`);
//   } else {
//     logger.info(`Scenario passed: ${scenario.pickle.name}`);
//   }

//   await this.page.close();
//   await this.context.close();
// });
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


const { Before, After, Status, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

setDefaultTimeout(60 * 1000);

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function ({ result }) {
  if (result?.status === Status.FAILED) {
    const screenshotDir = path.join(process.cwd(), "reports", "screenshots");
    fs.mkdirSync(screenshotDir, { recursive: true });

    const screenshotPath = path.join(screenshotDir, `failed-${Date.now()}.png`);
    const screenshot = await this.page.screenshot({
      path: screenshotPath,
      fullPage: true
    });

    await this.attach(screenshot, "image/png");
  }

  await this.page.close();
  await this.context.close();
  await this.browser.close();
});
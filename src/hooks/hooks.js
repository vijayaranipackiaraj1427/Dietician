const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  if (scenario.result.status === 'FAILED') {

    const fileName = scenario.pickle.name.replace(/\s+/g, '_');

    const screenshot = await this.page.screenshot({
      path: `screenshots/${fileName}.png`,
      type: 'png'
    });

    await this.attach(screenshot, 'image/png'); // attach to report
  }

  await this.page.close();
  await this.browser.close();
});
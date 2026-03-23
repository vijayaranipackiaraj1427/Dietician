const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'reports/json',
  reportPath: 'reports/html',
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'Local machine',
    platform: {
      name: 'macOS'
    }
  },
  customData: {
    title: 'Test Execution Info',
    data: [
      { label: 'Project', value: 'Dietician Automation' },
      { label: 'Execution Time', value: new Date().toLocaleString() }
    ]
  }
});
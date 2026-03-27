const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'reports/json',
  reportPath: 'reports/html',
  reportName: 'Dietician Automation Report',
  pageTitle: 'Dietician Test Report',
  displayDuration: true,
  durationInMS: true,
  openReportInBrowser: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'Local machine',
    platform: {
      name: 'Windows'
    }
  },
  customData: {
    title: 'Test Execution Info',
    data: [
      { label: 'Project', value: 'Dietician Automation' },
      { label: 'Module', value: 'loginUIPage' },
      { label: 'Execution Time', value: new Date().toLocaleString() }
    ]
  }
});
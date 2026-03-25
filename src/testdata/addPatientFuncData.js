module.exports = {
  url: 'https://practicetestautomation.com/',

  valid: {
    firstname: 'Viji',
    lastname: 'Test',
    email: 'viji@test.com',
    contact: '9876543210'
  },

  files: {
    valid: 'tests/files/sample.pdf',
    invalid: 'tests/files/sample.docx',
    large: 'tests/files/large.pdf'
  },

  dob: {
    valid: '01/12/2000',
    invalid: '34/20/2022',
    format: 'ab/cd/efgh'
  }
};
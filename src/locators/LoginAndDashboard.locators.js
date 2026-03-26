module.exports = {

    navBarHomeIcon: 'nav span.material-icons:has-text("home")',
    navigationBar: 'nav',
    username: 'input#username',
    password: 'input#password',
    loginBtn: 'button:has-text("Login")',

  navigationBarTitle: (text) => `nav >> text=${text}`,
  pageHeading: (text) => `role=heading[name="${text}"]`,
  label: (text) => `label:has-text("${text}")`,

  usernameLabel: 'label[for="username"]',
  passwordLabel: 'label[for="password"]',

  //inputFields: 'div input'
  inputFields: 'input[type="text"], input[type="password"]'

};


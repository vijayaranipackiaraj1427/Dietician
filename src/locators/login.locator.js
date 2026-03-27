module.exports = {
  usernameInput: 'input[name="username"]',
  passwordInput: 'input[name="password"]',
  loginButton: 'button[type="submit"]',
  errorMessage: '.oxd-alert-content-text',
  dashboardHeader: '.oxd-topbar-header-breadcrumb h6',


  //login ui page verification additional locators 
  loginBtn: 'button:has-text("Login")',  
  navBarHomeIcon: 'nav span.material-icons:has-text("home")',
  navigationBar: 'nav',
  navigationBarTitle: (text) => `nav >> text=${text}`,
  pageHeading: (text) => `role=heading[name="${text}"]`,
  label: (text) => `label:has-text("${text}")`,
  usernameLabel: 'label[for="username"]',
  passwordLabel: 'label[for="password"]',
  //inputFields: 'div input'
  inputFields: 'input[type="text"], input[type="password"]',


  //loginFunctional locators additional

  //emailInput: '#userEmail',
 // passwordInput: '#userPassword',
  //loginBtn: 'input[type="submit"]',

  dashboardPageIdentifier: 'button[routerlink="/dashboard/"]',
  errorMessage: "[role='alert']"

};



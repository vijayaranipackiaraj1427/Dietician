const { expect } = require('@playwright/test')
const config = require('../config/config');

const logger = require('../utils/logger');
const { text } = require('node:stream/consumers');

class LoginAndDashboardPage{

  constructor(page) {
    this.page = page;     
    this.navBarHomeIcon = page.locator('nav span.material-icons:has-text("home")');
    this.navigationBar = page.locator('nav');
    this.username = page.locator('input#username');
    this.password = page.locator('input#password');
    this.loginBtn = page.locator('button', { hasText: 'Login'});



    
    }

async navigateToLoginPage(){

  await this.page.goto(`${config.baseURL}/login`);
 //await this.page.goto(`${config.baseURL}/practice-test-login`);  
  logger.info('url loadeding and navigate to login page')     
  
  //await this.page.goto('/practice-test-login/');

        //dieitican appl related url         
        //await this.page.goto("/login");
       
    }

    async verifyNavigationBarText(expectedTitle){

        //await expect(this.page.getByText(expectedTitle, { exact: true })).toBeVisible();
        await expect(this.page.getByAltText(expectedTitle, { exact: true})).toBeVisible();
       logger.info(`Validating - Navigation bar text visibility: ${expectedTitle}`);
        
    }

    async verifyNavBarHomeIcon(){

      await expect(this.navBarHomeIcon).toBeVisible();
      logger.info('Validating - Navigation bar home icon visibility');


    }

    async verifyNavBarBgColor(){

      await expect(this.navigationBar).toHaveCSS('background-color', 'rgb(63, 81, 181)');
      logger.info('Validating - Navigation bar color - blue-purple');

    }

    async verifyPageTitle(pageTitle){

      const pageHeading = this.page.getByRole('heading', { name: pageTitle });
      logger.info(`Validating - Navigation bar text visibility: ${pageTitle}`);

      await expect(pageHeading).toBeVisible();
    }

    async verifyLabelText(labelText){

      await expect(this.page.getByLabel(labelText)).toBeVisible();
      logger.info(`Validating - Label text visibility: ${labelText}`);
    }

    async verifyUsernameFieldVisibility(){

      await expect(this.username).toBeVisible();
      logger.info('Username Field is visible');

      }

        async verifyPasswordFieldVisibility(){

      await expect(this.password).toBeVisible();
      logger.info('Password Field is visible');

      }

      async verifyLoginBtnVisibility(){

        await expect(this.loginBtn).toBeVisible();
        logger.info('Login Button is displayed');
      }


        async verifyLoginBtnColor(){

        await expect(this.loginBtn).toBeVisible();
        logger.info('Login Button is displayed');
      }
    
    }

  
module.exports = LoginAndDashboardPage;
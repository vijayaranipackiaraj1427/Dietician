const { expect } = require('@playwright/test')
const config = require('../config/config');

const logger = require('../utils/logger');

class LoginAndDashboardPage{

  constructor(page) {
    this.page = page;     
  }

async navigateToLoginPage(){

  await this.page.goto(`${config.baseURL}/practice-test-login`);  
  logger.info('url loaded and navigated to login page')     
  
  //await this.page.goto('/practice-test-login/');

        //dieitican appl related url         
        //await this.page.goto("/login");
       
    }

    async verifyNavigationBarText(expectedTitle){

        //await expect(this.page.getByText(expectedTitle, { exact: true })).toBeVisible();
        await expect(this.page.getByAltText(expectedTitle, { exact: true})).toBeVisible();
       logger.info(`Validating navigation bar text: ${expectedTitle}`);
        
    }

  }
module.exports = LoginAndDashboardPage;
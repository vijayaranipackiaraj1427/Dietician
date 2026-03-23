const { expect } = require('@playwright/test')
const config = require('../config/config');

class LoginAndDashboardPage{

  constructor(page) {
    this.page = page;     
  }

async navigateToLoginPage(){

  await this.page.goto(`${config.baseURL}/practice-test-login`);       
  
  //await this.page.goto('/practice-test-login/');

        //dieitican appl related url         
        //await this.page.goto("/login");
       
    }

    async verifyNavigationBarText(expectedTitle){

        //await expect(this.page.getByText(expectedTitle, { exact: true })).toBeVisible();
        await expect(this.page.getByAltText(expectedTitle, { exact: true})).toBeVisible();
        
    }

  }
module.exports = LoginAndDashboardPage;
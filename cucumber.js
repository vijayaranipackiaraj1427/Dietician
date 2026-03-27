//const path = require("path");  //added this line as there was an error 


module.exports = {
  default: {
    require: [
      "src/steps/*.js",
      "src/hooks/hooks.js"
    ],
    paths: ["src/features/*.feature"],
    format: [
      "progress",
      "json:reports/json/cucumber_report.json" 
    ]
  },

  //run only specific features 
  loginUIPage: {
    require: [
      "src/steps/loginPageUI.steps.js",
      "src/hooks/hooks.js"
    ],
    paths: ["src/features/LoginPageUI.feature"],
    format: [
      "progress",   //shows exec in terminal

      //"json:reports/json/cucumber_report.json",  //gives machine-readable cucumber output
      "html:reports/html/loginPageUI_report.html", //gives instant Html report 
      //"junit:reports/junit/loginPageUI_junit.xml", //works for jenkins pipelines
      
      "allure-cucumberjs/reporter"

      
    ],

    formatOptions: {
    resultsDir: "allure-results"

    }

  },

//Login functional profile 

loginFunctional: {
    require: [
      "src/steps/loginFunctional.steps.js",
      "src/hooks/hooks.js"
    ],
    paths: ["src/features/LoginPageFunctional.feature"],
    format: [
      "progress",
      "html:reports/html/loginFunctional_report.html",
      "allure-cucumberjs/reporter"
    ],
    formatOptions: {
      resultsDir: "allure-results"
    }
  }

};



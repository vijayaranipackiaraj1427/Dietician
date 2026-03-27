module.exports = {
  default: {
    require: [
      "src/steps/*.js",
      "src/hooks/hooks.js"
    ],
    paths: ["src/features/*.feature"],
    format: [
      "progress",
      "json:reports/json/cucumber_report.json",
      //get allure results 
      "allure-cucumberjs/reporter" 
    ],
     
    formatOptions: {
      resultsDir: "allure-results"   
    },
    retry: 1,
     parallel: 2  

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
     retry: 1,
     parallel: 2  ,

    formatOptions: {
    resultsDir: "allure-results"
    

  }
  

},
 addPatient: {
    require: [
      "src/steps/addPatientSteps.js",
      "src/hooks/hooks.js"
    ],

    paths: [
      "src/features/addPatient.feature"
    ],
    tags: "@addPatient",

    format: [
      "progress",

      "json:reports/json/addPatient_report.json",
      "html:reports/html/addPatient_report.html",
      "junit:reports/junit/addPatient_junit.xml",

      "allure-cucumberjs/reporter"
    ],

    formatOptions: {
      resultsDir: "allure-results"
    },

    // retry failed scenarios 
    retry: 1,
     parallel: 2  

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



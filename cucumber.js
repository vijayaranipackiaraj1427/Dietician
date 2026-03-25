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
      "json:reports/json/cucumber_report.json"  // ✅ IMPORTANT
    ]
  },

  //run only specific features 
  loginAndDashboard: {
    require: [
      "src/steps/loginAndDashboard.steps.js",
      "src/hooks/hooks.js"
    ],
    paths: ["src/features/loginAndDashboard.feature"],
    format: [
      "progress",   //shows exec in terminal

      "json:reports/json/cucumber_report.json",  //gives machine-readable cucumber output
      "html:reports/html/loginAndDashboard_report.html", //gives instant Html report 
      "junit:reports/junit/loginAndDashboard_junit.xml", //works for jenkins pipelines
      
      "allure-cucumberjs/reporter"

      //"./allure.config.js"
      //path.resolve("allure.config.js")  //plugs allure into run  => remove this as  on windows -> D:\PlayWright_NumpyNinja\Dietician\allure.config.js
    ],

    formatOptions: {
    resultsDir: "allure-results"

  }

}

};
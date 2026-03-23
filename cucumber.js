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
  }
};
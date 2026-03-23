const fs = require("fs");
const path = require("path");

const folders = [
  "reports/json",
  "reports/html",
  "reports/junit",
  "allure-results",
  "allure-report"
];

folders.forEach((folder) => {
  const folderPath = path.join(process.cwd(), folder);

  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
  }

  fs.mkdirSync(folderPath, { recursive: true });
});

console.log("Reports cleaned successfully");
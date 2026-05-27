const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "../logs");

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

const log = (message, level = "INFO") => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}`;
  console.log(logMessage);

  const logFile = path.join(logsDir, `${new Date().toISOString().split("T")[0]}.log`);
  fs.appendFileSync(logFile, logMessage + "\n");
};

module.exports = { log };

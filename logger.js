const winston = require("winston");

const { combine, timestamp, json, colorize } = winston.format;

const consoleLogFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.printf(({ level, message, timestamp }) => {
    return `${level} : ${message}`;
  })
);

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: consoleLogFormat,
    }),
    new winston.transports.File({ filename: "app.log" }),
  ],
});

module.exports = logger;

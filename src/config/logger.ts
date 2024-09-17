import winston from "winston";
import { Config } from "./index";

const logger = winston.createLogger({
  level: "info",
  defaultMeta: {
    serviceName: "auth-service",
  },
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  // it is used to send logs to console or cloud
  transports: [
    new winston.transports.File({
      dirname: "logs",
      filename: "app.log",
      level: "info",
      format: winston.format.json(),
      silent: Config.NODE_ENV === "test",
    }),

    new winston.transports.File({
      dirname: "logs",
      filename: "error.log",
      level: "error",
      format: winston.format.json(),
      silent: Config.NODE_ENV === "test",
    }),

    new winston.transports.Console({
      level: "info",
    }),
  ],
});

export default logger;

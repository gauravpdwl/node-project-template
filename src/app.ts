import express, { NextFunction, Request, Response } from "express";
import logger from "./config/logger";
import { HttpError } from "http-errors";

const app = express();

// app.get("/", async (req, res, next) => {
//   const err = createHttpError(401, "You are not allowed to access");
//   return next(err);
//   res.send("Welcome to Workquest Auth Service");
// });

app.get("/", (req, res) => {
  res.send("Welcome to WorkQuest Auth Service");
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    errors: [
      {
        type: err.name,
        msg: err.message,
        path: "",
        location: "",
      },
    ],
  });
});

export default app;

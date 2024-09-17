import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";

const startServer = async () => {
  const PORT = Config.PORT;

  try {
    // throw new Error("something went wrong");
    app.listen(PORT, () => {
      logger.info(`Listening on port ${PORT}`);
    });
  } catch (error) {
    logger.error(`${error}`);
    // process.exit(1);
  }
};

startServer();

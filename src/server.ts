import app from "./app";
import { Config } from "./config";

const startServer = async () => {
  const PORT = Config.PORT;

  try {
    app.listen(PORT, () => {
      console.log("Application running on Port " + PORT);
    });
  } catch (err) {
    console.log("Error - ", err);
  }
};

startServer();

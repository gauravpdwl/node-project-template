import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Workquest Auth Service");
});

export default app;

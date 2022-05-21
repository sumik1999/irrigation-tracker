const express = require("express");
require("express-async-errors");

const errorHandlerMiddleware = require("./middleware/errorHandler");
const powerEventRouter = require("./routes/PowerEvent");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/power-event", powerEventRouter);

app.use(errorHandlerMiddleware);
module.exports = app;

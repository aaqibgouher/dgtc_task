const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const YAML = require("js-yaml");
const swaggerUi = require("swagger-ui-express"); // Add this line for swagger-ui-express
const fs = require("fs");

// importing db & model
require("./database/config");
require("./model");

const app = express();
const PORT = process.env.PORT || 3000;
// importing routes
const router = require("./routes");
const corsOptions = {
  origin: ["http://localhost:3000", "https://dgtc-task.vercel.app"],
};

app.use(cors(corsOptions));

// Serve Swagger UI for your custom Swagger YAML
const swaggerFilePath = path.join(__dirname, "swagger.yaml");
const swaggerDocument = YAML.load(fs.readFileSync(swaggerFilePath, "utf8"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
// using api
app.use("/api", router);

// listen
app.listen(PORT, () => console.log(`Server running at ${PORT}`));

module.exports = app;

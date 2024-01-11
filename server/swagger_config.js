const swaggerUI = require("swagger-ui-express");
const YAML = require("js-yaml");
const fs = require("fs");
const path = require("path");

const swaggerFilePath = path.join(__dirname, "swagger.yaml");
const swaggerJSDocs = YAML.load(fs.readFileSync(swaggerFilePath, "utf8"));

module.exports = {
  swaggerServe: swaggerUI.serve,
  swaggerSetup: swaggerUI.setup(swaggerJSDocs),
};

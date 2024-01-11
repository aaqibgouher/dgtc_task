const swaggerUI = require("swagger-ui-express");
const YAML = require("js-yaml");
const fs = require("fs");
const swaggerJSDocs = YAML.load(fs.readFileSync("./swagger.yaml", "utf8"));

module.exports = {
  swaggerServe: swaggerUI.serve,
  swaggerSetup: swaggerUI.setup(swaggerJSDocs),
};

const express = require("express");
require("dotenv").config();
const { swaggerServe, swaggerSetup } = require("./swagger_config");
const cors = require("cors");

// importing db & model
require("./database/config");
require("./model");

const app = express();
const PORT = process.env.PORT || 3000;
// importing routes
const router = require("./routes");

app.use(cors());
app.use("/api-docs", swaggerServe, swaggerSetup);
app.use(express.json());
// using api
app.use("/api", router);

// listen
app.listen(PORT, () => console.log(`Server running at ${PORT}`));

module.exports = app;

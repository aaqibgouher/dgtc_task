const express = require("express");

const router = express.Router();

// importing all routes here
const authRoutes = require("./authRoutes");
const bookRoutes = require("./bookRoutes");
const authMiddleware = require("../middleware/authMiddleware");

// auth routes (register, login, me & logout)
router.use("/auth", authRoutes);

// books route (authenticated)
router.use("/books", authMiddleware.isAuthenticated, bookRoutes);

// export
module.exports = router;

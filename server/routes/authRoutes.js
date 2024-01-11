const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/logout", authMiddleware.isAuthenticated, authController.logout);
router.get("/me", authMiddleware.isAuthenticated, authController.getMe);

// export
module.exports = router;

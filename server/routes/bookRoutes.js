const express = require("express");
const router = express.Router();
const bookController = require("../controller/bookController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", bookController.getBooks);
router.post("/", authMiddleware.isAdmin, bookController.addBook);
router.get("/:bookId", bookController.getBookById);
router.patch("/:bookId", authMiddleware.isAdmin, bookController.updateBookById);
router.delete(
  "/:bookId",
  authMiddleware.isAdmin,
  bookController.deleteBookById
);

// export
module.exports = router;

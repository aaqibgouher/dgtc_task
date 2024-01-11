const mongoose = require("mongoose");

// book schema
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    authors: {
      type: [String],
      required: true,
    },
    isbn: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      default: "",
    },
    publicationYear: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    description: {
      type: String,
      default: "",
    },
    addedBy: {
      type: mongoose.Types.ObjectId,
      ref: "UserModel",
      required: true,
    },
  },
  { timestamps: true }
);

// model
const BookModel = mongoose.model("BookModel", bookSchema, "books");

// export
module.exports = BookModel;

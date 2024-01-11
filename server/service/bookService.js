const { BookModel } = require("../model");
const { isMongoId } = require("../utils/common");

// get all books
const getBooks = async () => {
  return await BookModel.find()
    .populate({
      path: "addedBy",
      select: "_id email name",
    })
    .exec();
};

// get book by id
const getBookById = async (bookId) => {
  // valid book id
  if (!isMongoId(bookId)) throw "Valid book id required";

  //   get book by id with added by details
  const book = await BookModel.findOne({ _id: bookId })
    .populate({
      path: "addedBy",
      select: "_id email name",
    })
    .exec();

  // if book not found, throw error
  if (!book) throw "Book not found by id";

  //   return book
  return book;
};

// add book
const addBook = async (payload) => {
  // validations
  if (!payload || !payload.addedBy) throw "User id is required";
  if (!payload || !payload.title) throw "Title is required";
  if (!payload || payload.authors.length === 0) throw "Author(s) is required";
  if (!payload || !payload.isbn) throw "ISBN is required";
  if (!payload || !payload.genre) throw "Genre is required";
  if (!payload || !payload.publicationYear)
    throw "Publication year is required";
  if (!payload || !payload.price) throw "Price is required";
  if (!payload || !payload.quantity) throw "Quantity is required";
  if (!payload || !payload.description) throw "Description is required";

  //   taking value
  const {
    addedBy,
    title,
    authors,
    isbn,
    genre,
    publicationYear,
    price,
    quantity,
    description,
  } = payload;

  // check book isbn
  let book = await getBookByISBN(isbn);

  //   book should have unique isbn
  if (book) throw "Book already exists with this ISBN";

  //   if not found, add book
  book = new BookModel({
    title,
    authors,
    isbn,
    genre,
    publicationYear,
    price,
    quantity,
    description,
    addedBy,
  });

  //   add book
  return await book.save();
};

// get book by isbn
const getBookByISBN = async (isbn) => {
  return await BookModel.findOne({ isbn });
};

// update book by id
const updateBookById = async (payload) => {
  // validation
  if (!payload || !payload.bookId) throw "Book id is required";

  // get book by id
  const book = await getBookById(payload.bookId);

  //   taking value
  const {
    bookId,
    title,
    authors,
    genre,
    publicationYear,
    price,
    quantity,
    description,
  } = payload;

  // if provided in payload, take else default
  book.title = title ? title : book.title;
  book.authors = authors && authors.length ? authors : book.authors;
  book.genre = genre ? genre : book.genre;
  book.publicationYear = publicationYear
    ? publicationYear
    : book.publicationYear;
  (book.price = price ? price : book.price),
    (book.quantity = quantity ? quantity : book.quantity);
  book.description = description ? description : book.description;

  //   save
  return await book.save();
};

// delete book by id
const deleteBookById = async (bookId) => {
  // valid book id
  if (!bookId) throw "Book id is required";

  //   check book exists or not
  const book = await getBookById(bookId);

  //   if book found, delete
  return await BookModel.deleteOne({ _id: bookId });
};

module.exports = {
  getBooks,
  addBook,
  getBookByISBN,
  getBookById,
  updateBookById,
  deleteBookById,
};

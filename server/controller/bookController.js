const bookService = require("../service/bookService");

// get books
const getBooks = async (req, res) => {
  try {
    const data = await bookService.getBooks();

    // returning res
    return res.json({
      status: 200,
      message: "Successfully get books",
      data,
    });
  } catch (error) {
    // returning error
    console.log(error, "from get books controller");
    return res.json({ status: 400, error });
  }
};

// add book
const addBook = async (req, res) => {
  try {
    const { _id } = req.user;
    const {
      title,
      authors,
      isbn,
      genre,
      publicationYear,
      price,
      quantity,
      description,
    } = req.body;

    const data = await bookService.addBook({
      addedBy: _id,
      title,
      authors,
      isbn,
      genre,
      publicationYear,
      price,
      quantity,
      description,
    });

    // returning res
    return res.status(201).json({
      status: 201,
      message: "Successfully added a book",
      data,
    });
  } catch (error) {
    // returning error
    console.log(error, "from add book controller");
    return res.json({ status: 400, error });
  }
};

// get book by id
const getBookById = async (req, res) => {
  try {
    const { bookId } = req.params;
    const data = await bookService.getBookById(bookId);

    // returning res
    return res.json({
      status: 200,
      message: "Successfully get book by id",
      data,
    });
  } catch (error) {
    // returning error
    console.log(error, "from get books controller");
    return res.json({ status: 400, error });
  }
};

// udpate book by id
const updateBookById = async (req, res) => {
  try {
    const { bookId } = req.params;
    const {
      title,
      authors,
      genre,
      publicationYear,
      price,
      quantity,
      description,
    } = req.body;
    const data = await bookService.updateBookById({
      bookId,
      title,
      authors,
      genre,
      publicationYear,
      price,
      quantity,
      description,
    });

    // returning res
    return res.json({
      status: 200,
      message: "Successfully updated a book",
      data,
    });
  } catch (error) {
    // returning error
    console.log(error, "from update book controller");
    return res.json({ status: 400, error });
  }
};

// delete book by id
const deleteBookById = async (req, res) => {
  try {
    const { bookId } = req.params;
    const data = await bookService.deleteBookById(bookId);

    // returning res
    return res.json({
      status: 200,
      message: "Successfully deleted a book",
      data,
    });
  } catch (error) {
    // returning error
    console.log(error, "from delete book  controller");
    return res.json({ status: 400, error });
  }
};

module.exports = {
  getBooks,
  addBook,
  getBookById,
  updateBookById,
  deleteBookById,
};

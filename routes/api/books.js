const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);


// Matches with "/api/books/google/:input"
router.route("/:id")
  .get(booksController.findById)
  .delete(booksController.remove);

module.exports = router;

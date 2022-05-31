const Book = require("../models/book.model");

module.exports.bookController = {
  postBook: (req, res) => {
    Book.create({
      name: req.body.name,
      genre: req.body.genre,
    })
      .then(() => {
        res.json("Книга добавлена");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  getBook: (req, res) => {
    Book.find()
      .populate("genre")
      .populate("whoGot")
      .populate("review")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  getBookById: (req, res) => {
    Book.findById(req.params.id)
      .populate("genre")
      .populate("whoGot")
      .populate("review")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  getBookByGenre: (req, res) => {
    Book.findById({ genre: req.params.id })
      .populate("genre")
      .populate("whoGot")
      .populate("review")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  updateBook: (req, res) => {
    Book.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      genre: req.body.genre,
    })
      .then(() => {
        res.json("книга изменена");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  deleteBook: (req, res) => {
    Book.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Удалено");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
};

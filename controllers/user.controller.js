const User = require("../models/user.model");
const Book = require("../models/book.model");

module.exports.userController = {
  postUser: (req, res) => {
    User.create({
      name: req.body.name,
      isBlocked: req.body.isBlocked,
      books: req.body.books,
    })
      .then(() => {
        res.json("добавлен");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },

  blockUser: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $pull: { book: req.body.books },
        isBlocked: true,
      });
      await Book.findByIdAndUpdate(req.body.books, { whoGot: [] });
      res.json("Юзер забанен");
    } catch (err) {
      res.json(err.message);
    }
  },

  returnBook: async (req, res) => {
    try {
      await User.findByIdAndUpdate(
        req.params.id,
        { $pull: { books: req.body.books } },
        await Book.findByIdAndUpdate(req.body.books, { whoGot: null })
      );
      res.json("книга возвращена");
    } catch (err) {
      res.json(err.message);
    }
  },

  takeBook: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const book = await Book.findById(req.body.books);

      if (user.isBlocked === false) {
        if (user.books.length < 3) {
          if (book.books === null) {
            await User.findByIdAndUpdate(req.params.id, {
              $push: { books: req.body.books },
            });
            await Book.findByIdAndUpdate(req.body.books, {
              whoGot: req.params.id,
            });
            res.json("успешно арендовано");
          } else {
            return res.json("Книга уже арендована другим пользователем");
          }
        } else {
          return res.json("Нельзя арендовать больше трех книг");
        }
      } else {
        return res.json("пользователь заблокирован");
      }
    } catch (err) {
      res.json(err.message);
    }
  },
};

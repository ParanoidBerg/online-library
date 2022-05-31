const Genre = require("../models/genre.model");

module.exports.genreController = {
  postGenre: (req, res) => {
    Genre.create({
      name: req.body.name,
    })
      .then(() => {
        res.json("Жанр добавлен");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  getGenre: (req, res) => {
    Genre.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  updateGenre: (req, res) => {
    Genre.findByIdAndUpdate(req.params.id, { name: req.body.name })
      .then(() => {
        res.json("апдейт прошел");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  deleteGenre: (req, res) => {
    Genre.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Удалено");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
};

const Review = require("../models/review.model");

module.exports.reviewController = {
  postReview: (req, res) => {
    Review.create({
      author: req.body.author,
      text: req.body.text,
      book: req.body.text,
    })
      .then(() => {
        res.json("добавлено");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
};

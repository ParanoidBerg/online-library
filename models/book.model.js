const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  gengre: {
    ref: "Genre",
    type: mongoose.SchemaTypes.ObjectId,
  },
  whoGot: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
    default: null,
  },
  review: {
    ref: "Review",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;

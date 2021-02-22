const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  authors: [ String ],
  description: { type: String },
  link: String,
  image: String,
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;

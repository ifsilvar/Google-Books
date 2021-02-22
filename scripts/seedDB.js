const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/GoogleBooks"
);

const bookSeed = [
  {
    title: "The Dead Zone",
    authors: "Stephen King",
    description: "description",
    link: "https://play.google.com/store/books/details?id=ZbUACwAAQBAJ&source=gbs_api",
    image: "http://books.google.com/books/content?id=ZbUACwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

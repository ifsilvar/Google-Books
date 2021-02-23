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
    authors: ["Stephen King"],
    description: "description",
    link: "https://play.google.com/store/books/details?id=ZbUACwAAQBAJ&source=gbs_api",
    image: "http://books.google.com/books/content?id=ZbUACwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
  },
  {
    title: "Becoming",
    authors: ["Michelle Obama"],
    description: "In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. A…",
    link: "http://books.google.com/books?id=hi17DwAAQBAJ&dq=obama&hl=&source=gbs_api",
    image: "http://books.google.com/books/content?id=hi17DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
  },
  {
    title: ["Obama: An Intimate Portrait"],
    authors: ["Pete Souza"],
    description: "description",
    link: "https://play.google.com/store/books/details?id=eJq7DgAAQBAJ&source=gbs_api",
    image: "http://books.google.com/books/content?id=eJq7DgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
  },
  {
    title: "Harry Potter",
    authors: ["S. Gunelius"],
    description: "The Harry Potter books are the bestselling books of all time. In this fascinating study, Susan Gunelius analyzes every aspect of the bran…",
    link: "https://play.google.com/store/books/details?id=ZbUACwAAQBAJ&source=gbs_api",
    image: "http://books.google.com/books/content?id=abYKXvCwEToC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
  },
  {
    title: "Harry Potter and the Cursed Child",
    authors: ["J. K. Rowling", "Jack Thorne", "John Tiffany"],
    description: "The official playscript of the original West End production of Harry Potter and the Cursed Child. It was always difficult being Harr…",
    link: "http://books.google.com/books?id=kLAoswEACAAJ&dq=harry+potter+and&hl=&source=gbs_api",
    image: "http://books.google.com/books/content?id=kLAoswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
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

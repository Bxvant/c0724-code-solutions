'use strict';
const bookshelf = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];
console.log(
  'author of second book descriptive example ||| ',
  `Born on May 6 in the year 1900 author ${bookshelf[1].author} went on to write several books, with his book 'JSON Quick Syntax Reference' being his best selling.`
);
console.log(
  " logging of the first book's ISBN with a descriptive label ||| ",
  `'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON' is regarded as one of the best books for learning about Object Notation in Javascript, you can find it under the ISBN ${bookshelf[0].isbn}. `
);
console.log(
  ' logging of the third books title with a descriptive label ||| ',
  `You've heard about API's, you know you should learn how to build them and what better way to learn that by buying ${bookshelf[2].author}'s new book '${bookshelf[2].title}'. `
);

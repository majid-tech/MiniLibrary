const myLibrary = [];

function Book(title, author,pages,read) {
  // the constructor...
this.title = title,
this.author = author,
this.pages = pages,
this.read = read,
this.info = function() {
  return `${title} by ${author}, ${pages} pages, ${read}`;
}
}

function addBookToLibrary() {
  // do stuff here
}

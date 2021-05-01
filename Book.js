function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => console.log(`${title} by ${author}, ${pages}, ${read ? "Read" : "Not read yet"}`);
}


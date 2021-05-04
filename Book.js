const books = [];
const submitBtn = document.getElementById("submit");

//Show books from storage on load (todo: set up storage)
window.addEventListener("load", () => displayLibrary());

//Add book on submit press
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let book = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("pages").value,
    document.getElementById("read").checked
  );
  addBook(book);
  clearDOM();
  displayLibrary();
  clearForm();
  console.log(books);
});

class Book {
  constructor(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages}, ${
      this.read ? "Read" : "Not read yet"
    }`;
  }
}

function addBook(book) {
  books.push(book);
}

function displayLibrary() {
  const library = document.querySelector("div.book-container");
  books.forEach((book) => {
    library.innerHTML += `<div class="book" id="${books.indexOf(book)}">
      <i class="fas fa-trash f-right"></i>
      <h2 class="lg-text title-card">${book.title}</h2>
      <p class="md-text author-card">${book.author}</p>
      <p class="md-text pages-card">${book.pages}</p>
      <p class="md-text read-card">${book.info()}</p>
    </div>`;
  });
  document.querySelectorAll("i.fa-trash").forEach((card) => {
    card.addEventListener("click", () => removeBook(card.parentElement.id));
  });
}

function clearDOM() {
  const library = document.querySelector("div.book-container");
  library.innerHTML = "";
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false;
}

function removeBook(index) {
  console.log(index);
  books.splice(index,1);
  clearDOM();
  displayLibrary();
}

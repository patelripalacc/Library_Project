console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");
//create Book class
class Book {
  //pass parameters
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}
//create Library class
class Library {
  constructor() {
    this.bookCount = 1;
    this.books = [];
  }
  //create markRead method
  markRead(checkbox) {
    for (let book of library.books) {
      if (book.id == checkbox.id) {
        book.read = true;
        checkbox.checked = true;
        checkbox.disabled = true;
      }
    }
  }
  //create AddBook method that add new book to DOM.
  addBook() {
    //selecting user input to add to new book list
    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;
    let read = document.getElementById("readCheckbox").checked;
    //assign user input to a new book.
    let newBook = new Book(this.bookCount, title, author, read);
    //push newBook books library.
    this.books.push(newBook);

    //creating new element on DOM that can assign new book.
    let newTr = document.createElement("tr");

    let newTitle = document.createElement("td");
    newTitle.textContent = newBook.title;

    let newAuthor = document.createElement("td");
    newAuthor.textContent = newBook.author;

    let newReadCkBox = document.createElement("td");
    let ckBox = document.createElement("input");
    ckBox.id = this.bookCount;
    ckBox.type = "checkbox";
    ckBox.checked = newBook.read;
    ckBox.disabled = newBook.read;
    ckBox.addEventListener("click", () => library.markRead(ckBox));
    newReadCkBox.appendChild(ckBox);

    let newRemoveCkBox = document.createElement("td");
    let ckBox1 = document.createElement("input");
    ckBox1.id = this.bookCount;
    ckBox1.type = "checkbox";
    newRemoveCkBox.appendChild(ckBox1);

    newTr.appendChild(newTitle);
    newTr.appendChild(newAuthor);
    newTr.appendChild(newReadCkBox);
    newTr.appendChild(newRemoveCkBox);
    let tableBody = document.querySelector("tbody");
    tableBody.appendChild(newTr);

    this.bookCount++;

    newTr.classList.add(newBook.id);
    ckBox1.addEventListener("click", () => {
      this.removeBook(newBook.id);
    });
    //resetting value to input after adding a book.
    document.getElementById("titleInput").value = "";
    document.getElementById("authorInput").value = "";
    document.getElementById("readCheckbox").checked = false;
  }
  //create removeBook method to remove book from DOM.
  removeBook(book) {
    this.books = this.books.filter(({ id }) => book !== id);
    const tbody = document.getElementById("tableBody");
    tbody.removeChild(document.getElementsByClassName(book)[0]);
  }
}

let library = new Library();
//selecting add button and add eventListener to add new book to DOM.
let btn = document
  .getElementById("addButton")
  .addEventListener("click", () =>
    library.addBook(library.books, library.bookCount)
  );

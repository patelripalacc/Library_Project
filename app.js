console.log("Hello World!\n==========\n");

// PROJECT Section;
console.log("PROJECT:\n==========\n");

const books = [
    {
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true,
    },
];

//create a class call book
class Book {
    id;
    title;
    author;
    read;
    constructor(id,title,author,read){
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}
//create class of Library
class Library {
    constructor(bookCount,books){
        this.bookCount = bookCount;
        this.books = books;
    }

    addBook(){
        const title = document.getElementById("title");
        const author = document.getElementById("author");
        const read = document.getElementById("read");
        const newBook = new Book(id.value,title.value,author.value,read.value);
        this.book.push(newBook);
    }

    markRead(checkbox,id) {
       this.books.forEach(book => {
        if(id === book.id){
            book.read = true;
            checkbox.checked = true;
            checkbox.disable = true;
        }
       });  
    }
}
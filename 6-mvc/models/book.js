const books = [
    {
        id: 1,
        title: 'Book 1'
    },
    {
        id: 2,
        title: 'Book 2'
    },
    {
        id: 3,
        title: 'Book 3'
    }
];

class Book {
    constructor(title) {
        this.id = books.length + 1;
        this.title = title;
    }

    addBook() {
        books.push(this);
    }

    static getBookById(id) {
        return books.find((book) => book.id === id);
    }
    static getBooks() {
        return books;
    }
}

export default Book;

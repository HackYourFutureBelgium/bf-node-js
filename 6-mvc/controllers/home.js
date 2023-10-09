import Book from '../models/book.js';

const homeControllers = {
    getBooks: (req, res) => {
        res.render('home', {
            title: 'Book',
            path: '/',
            books: Book.getBooks()
        });
    },
    getBook: (req, res) => {
        const id = Number(req.params.id);
        res.render('book', {
            id: id,
            title: 'Books',
            path: '/book',
            book: Book.getBookById(id)
        });
    }
};

export default homeControllers;

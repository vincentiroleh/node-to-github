const router = require('express').Router();
const BookService = require('./books.service');

router.get('/', BookService.entry);
router.get('/books', BookService.getBooks);
router.get('/book/:id', BookService.getBook);

module.exports = router;


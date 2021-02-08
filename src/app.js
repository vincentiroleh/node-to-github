const express = require('express'),
    logger = require('morgan'),
    app = express(),
    PORT = process.env.PORT || 4000,
    router = require('./books/books.route');

// Middleware 
app.use(express.json());
app.use(router);
app.use(logger('dev'));

// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
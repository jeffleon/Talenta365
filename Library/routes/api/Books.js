var express = require('express')
var router = express.Router();
var bookController = require('../../contollers/api/Books')

router.get('/', bookController.getBook)
router.post('/', bookController.createBook)
router.patch('/:id', bookController.updateBook)
router.delete('/:id', bookController.deleteBook)
router.get('/:id', bookController.getBookById)
router.get('/user/:id', bookController.findBooks)

module.exports = router;
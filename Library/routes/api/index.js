var express = require('express')
var router = express.Router()
var apiUserRouter = require('./Users');
var apiBookRouter = require('./Books');

router.use('/books', apiBookRouter);
router.use('/users', apiUserRouter);


module.exports = router;
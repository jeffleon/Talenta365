const Book = require('../models/Books');
const User = require('../models/Users');


User.hasMany(Book);
Book.belongsTo(User);
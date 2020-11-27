const Book = require('../models/Books');
const User = require('../models/Users');

// asociate one to many between one user to many books
User.hasMany(Book);
Book.belongsTo(User);
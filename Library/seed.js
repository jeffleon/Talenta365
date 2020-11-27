require('dotenv').config()
const sequelize = require('./database/db')
const User = require('./models/Users');
const Book = require('./models/Books');
require('./database/asociations')

const users = [
    {"firstName": "Jefferson", "lastName": "Leon", "email": "jeffleon@gmail.com"},
    {"firstName": "Tatiana", "lastName": "Ruiz", "email": "tatianaruiz@gmail.com"},
    {"firstName": "Jhon", "lastName": "Ramos", "email": "jhonramos@gmail.com"},
    {"firstName": "Karen", "lastName": "Montoya", "email": "karenmontoya@gmail.com"},
    {"firstName": "Diego", "lastName": "Abril", "email": "diegoabril@gmail.com"}
]

const books = [
    {"title": "The Ruby on Rails Tutorial", "year": 2020, "author": "Michael Hartl", "borrow": true, "userId": 1},
    {"title": "Mastering Go", "year": "2019", "author": "Mihalis Tsoukalos", "borrow": true, "userId": 2 },
    {"title": "Django for Professionals", "year": "2019", "author": "William S. Vincent", "borrow": true, "userId": 3},
    {"title": "Node.js 8 the Right Way", "year": 2018, "author": "Jim Wilson", "borrow": true, "userId": 4},
    {"title": "Modern Full-Stack Development", "year": 2020, "author": "Frank Zammetti", "borrow": true, "userId": 5}
]

sequelize.sync({force:true}).then(()=>{
    console.log("Nos hemos conectado a la base de datos")
  }).catch(error=>{
    console.log(`Se a producido un error ${error}`)
  }).then(()=>{
      users.forEach((user)=> User.create(user))
  }).then(()=>{
      books.forEach((book)=> Book.create(book))
  })

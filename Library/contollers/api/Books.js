const Book = require('../../models/Books')

exports.createBook = async (req, res) => {
    // controller api to create a new book with attributes title, author, year, borrow, userId
    // if everithing is ok return the book that was create
    try{
        const {title, author, year, borrow, userId} = req.body
        var book = await Book.create({title, author, year, borrow, userId})
        res.status(200).send(book)
    }catch(err){
        return res.status(500).send({"error":err})
    } 
}

exports.deleteBook = async (req, res) => {
    // controller to delete the api if dont find the id return a 404 status
    // if everithing is ok return the book that was delete
    try{
        var id = parseInt(req.params.id)
        var book = await Book.findByPk(id)
        if (book === null){
            res.status(404).send(`i dont find the id ${id} please try a valid id`)
        } else{
            await book.destroy({ force: true })
            res.status(200).send(book)
        }
    }catch(err){
        // if something was wrong send a error message 
        return res.status(500).send({"error":err})
    } 
}
exports.findBooks = async (req,res) =>{
     // controller to view the books asociate with the Books table 
    // if everithing is ok return the books asociate with this specific ID
    try{
        var id = req.params.id
        var books = await Book.findAll({where: {userId: id}})
        res.status(200).send(books)
    }catch(err){
        return res.status(500).send({"error":err})
    }
}

exports.updateBook = async (req, res) => {
    // controller to update the book
    // if everithing it's ok return the book updated
    try{
        var id = parseInt(req.params.id)
        var book = await Book.findByPk(id)
        console.log(book)
        if (book === null){
            res.status(404).send(`please enter a valid id ${id}`)
        } else{
            console.log('entre aca')
            console.log("paso de aqui")
            Book.update(req.body, { where: {id: id} })
            res.status(200).send(book)
        }
    }catch(err){
        console.log(err)
        return res.status(500).send({"error":err})
    } 
}

exports.getBook = async (req, res) => {
    // controller to find all books
    // if everithing it's ok return all books
    try{
        var books = await Book.findAll();
        if (books === null){
            res.status(404).send(`please add one element in the database `)
        } else{
            res.status(200).send(books)
        }
    }catch(err){
        res.status(500).send({"error": err})
    }
}
exports.getBookById = async (req, res) => {
    // controller to find with a especific id if dont find the id return a 404 status
    // if everithing it's ok return the book asociate with this specific id
    try{
        var id = parseInt(req.params.id)
        var book = await Book.findByPk(id)
        if (book === null){
            res.status(404).send(`i dont find the id ${id} please try a valid id`)
        } else{
            res.status(200).send(book)
        }
    }catch(err){
        console.log('entre aqui')
        res.status(500).send({"error": err})
    }
}

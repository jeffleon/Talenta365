const User = require('../../models/Users')
exports.createUser =async (req, res) => {
    // create a user with post method
    try{
        const {firstName, lastName, email} = req.body
        var user = await User.create({firstName, lastName, email})
        res.status(200).send(user)
    }catch(err){
        return res.status(500).send({"error":err})
    } 
}

exports.deleteUser = async (req, res) => {
    // delete a user with a specfic id
    try{
        var id = parseInt(req.params.id)
        var user = await User.findByPk(id)
        if (user === null){
            res.status(404).send(`i dont find the id ${id} please try a valid id`)
        } else{
            await user.destroy({ force: true })
            res.status(200).send(user)
        }
    }catch(err){
        return res.status(500).send({"error":err})
    } 
}

exports.updateUser = async (req, res) => {
    // update a user with a specific id
    try{
        var id = parseInt(req.params.id)
        var user = await User.findByPk(id)
        if (user === null){
            res.status(404).send(`please enter a valid id ${id}`)
        } else{
            const {firstName, lastName, email} = req.body
            user.update({ firstName, lastName, email})
            res.status(200).send(user)
        }
    }catch(err){
        return res.status(500).send({"error":err})
    } 
}

exports.getUsers = async (req, res) => {
    // get the all users
    try{
        var users = await User.findAll();
        if (users === null){
            res.status(404).send(`please add one element in the database `)
        } else{
            res.status(200).send(users)
        }
    }catch(err){
        res.status(500).send({"error": err})
    }
}


exports.getUserById = async (req, res) => {
     // look for a id and then get for the user
    try{
        var id = parseInt(req.params.id)
        var user = await User.findByPk(id)
        if (user === null){
            res.status(404).send(`i dont find the id ${id} please try a valid id`)
        } else{
            res.status(200).send(user)
        }
    }catch(err){
        console.log('entre aqui')
        res.status(500).send({"error": err})
    }
}
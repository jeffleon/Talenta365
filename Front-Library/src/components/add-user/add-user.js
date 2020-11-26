import React from 'react'
import Form_ from '../utils/form'

const AddUser = () => {
    // this component only pass the information to add a new user in the Form component
    var params = ["firstName", "lastName", "email"]
    var placeHol = ["Pepito", "Perez", "pepitoperez@gmail.com"] 
 
    return(
        <Form_ params={params} placeHol={placeHol} title={"users"} method="POST"/>
    )
}

export default AddUser
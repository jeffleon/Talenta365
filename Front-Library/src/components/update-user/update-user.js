import React from 'react';
import Form_ from '../utils/form'
import { useParams } from "react-router";
import useFetch from '../../hooks/usefetch'

const UpdateUser = () => {
    // this component render the data about the form to update the data and fetch the data of the user
    // to change 
    var params = ["firstName", "lastName", "email"]
    var placeHol = ["Pepito", "Perez", "pepitoperez@gmail.com"]
    var {id} = useParams();
    const {data, loading, error} = useFetch(`http://localhost:5000/api/users/${id}`)
    if (loading){
        return(
            <h1>Loading</h1>
        )
    }
    if (error){
        return(
            <h1>Error</h1>
        )
    }
    if (data){
        return(
            <Form_ params={params} placeHol={placeHol} title={"users"} method="PATCH" data2change={data}/>
        )
    }
}

export default UpdateUser;
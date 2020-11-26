import React from 'react';
import Form_ from '../utils/form'
import { useParams } from "react-router";
import useFetch from '../../hooks/usefetch'

const UpdateBook = () => {
    var params = ["title", "author" ,"year"]
    var placeHol = ["The Picture of Doryan Grey", "Oscar Wilde" ,"1891"]
    var {id} = useParams();
    const {data, loading, error} = useFetch(`http://localhost:5000/api/books/${id}`)
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
            <Form_ params={params} placeHol={placeHol} title={"books"} method="PATCH" data2change={data}/>
        )
    }
}

export default UpdateBook
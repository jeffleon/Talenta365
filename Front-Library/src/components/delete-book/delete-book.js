import React from 'react';
import { useParams } from "react-router";
import { Button } from 'semantic-ui-react';
import useFetch from '../../hooks/usefetch';
import Button_ from '../utils/button';
import Loading from '../utils/loading'

const DeleteBook = () => {
    // this component render the view when the book its deleted show a message 
    // that says what book its deleted
    const {id} = useParams()
    var method = 'DELETE'
    const {data, loading, error} = useFetch(`http://localhost:5000/api/books/${id}`,method)
    if (loading){
        return(
            <Loading/>
        )
    }
    if (error){
        return(
            <h1>Error</h1>
        )
    }
    if (data){
        return(
            <div>
                <h1>You Delete the Book {data.title}</h1>
                <Button_ color={"primary"} allow={true} name={" Book Deleted Success "} link={`/Library`}/>
            </div>
        )
    }
}

export default DeleteBook;
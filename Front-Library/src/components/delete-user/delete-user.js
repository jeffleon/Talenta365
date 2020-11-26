import React from 'react'
import { useParams } from "react-router";
import useFetch from '../../hooks/usefetch';
import Button_ from '../utils/button';

const DeleteUser = () => {
    const {id} = useParams()
    var method = 'DELETE'
    const {data, loading, error} = useFetch(`http://localhost:5000/api/users/${id}`,method)
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
            <div>
                <h1>You Delete the User {data.firstName}</h1>
                <Button_ color={"primary"} allow={true} name={" User Deleted Success "} link={`/Library`}/>
            </div>
        )
    }
}

export default DeleteUser
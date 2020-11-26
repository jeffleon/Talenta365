import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

const ResetBook = () => {
    // this component reset the borrow book to return it 
    var {id} = useParams()
    var history = useHistory()
    async function resetbook(){
        var url = `http://localhost:5000/api/books/${id}`
        const requestOptions = {
             method: 'PATCH',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({"borrow":true, "userId": null})
         };
        await fetch(url,requestOptions);
        history.push('/Library')
    }
    resetbook()
    return(
        <h1>ok</h1>
    )
}

export default ResetBook
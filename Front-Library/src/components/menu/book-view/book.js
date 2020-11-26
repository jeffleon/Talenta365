import React from 'react'
import useFetch from '../../../hooks/usefetch'
import Table_ from '../../utils/table'

const Book = () => {
    const {data, loading, error} = useFetch('http://localhost:5000/api/books')
    if (loading){
        return(
            <h1>loading</h1>
        )
    }
    if (error){
        return(
            <h1>Error</h1>
        )
    }
    if (data){
        return(
            <Table_ data={data} title={'book'}/>
         )
    }
}


export default Book
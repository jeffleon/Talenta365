import React from 'react'
import useFetch from '../../../hooks/usefetch'
import Table_ from '../../utils/table'
import Loading from '../../utils/loading'

const Book = () => {
    // this component only catch the information to pass to the table component to render
    const {data, loading, error} = useFetch('http://localhost:5000/api/books')
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
            <Table_ data={data} title={'book'}/>
         )
    }
}


export default Book
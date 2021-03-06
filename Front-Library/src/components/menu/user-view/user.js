import React from 'react'
import useFetch from '../../../hooks/usefetch'
import Table from '../../utils/table'
import Loading from '../../utils/loading'

const User = () => {
    // this component only catch the information to pass to the table component to render
    const {data, loading, error} = useFetch('http://localhost:5000/api/users')
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
            <Table data={data} title={'user'} />
         )
    }
}


export default User
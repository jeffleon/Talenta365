import React from 'react'
import { useParams } from 'react-router-dom'
import User from '../menu/user-view/user'
import Table_ from '../utils/table'
import useFetch from '../../hooks/usefetch'
import Header from '../utils/header'
import { Grid } from 'semantic-ui-react'
import './borrow-books-user.css'
import Loading from '../utils/loading'
const BorrowBooksUser = () => {
    // this component reuse the table component render the data that pass for this component
    const {id} = useParams()
    const {data, loading, error} = useFetch(`http://localhost:5000/api/books/user/${id}`)
    if (loading){
        return <Loading/>
    }
    if (error){
        return <h1>Error</h1>
    }
    if (data){
        return(
            <Grid>
                <Grid.Column width={13} className="table-ok">
                    <Table_ data={data} title={"borrow"}/>
                </Grid.Column>
            </Grid>
        )
    }
}
export default BorrowBooksUser;
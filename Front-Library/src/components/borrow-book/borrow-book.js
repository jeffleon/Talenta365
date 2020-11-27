import React, {useState} from 'react'
import {Button, Row, Col, Label} from 'reactstrap'
import useFetch from '../../hooks/usefetch'
import {LocalForm, Control, Errors} from 'react-redux-form'
import Search from '../utils/search'
import { useHistory, useParams } from "react-router";
import Loading from '../utils/loading'
import Card_ from '../utils/card'

const BorrowBook = () =>{ 
    const {data, loading, error} = useFetch('http://localhost:5000/api/users')
    const [user, setUser] = useState("1");
    const [countBooks, setCount] = useState(0);
    const {id} = useParams()
    const history = useHistory()
    // when choose a user update the state of this book change the atribute borrow and add 
    // the user in the userID attribute to associate with the other table
    async function borrowbook(){
       var url = `http://localhost:5000/api/books/${id}`
       const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"borrow":false, "userId": user})
        };
        await fetch(url,requestOptions);
        history.push('/Library')
    }
    const handleSelector = async (e) => {
        setUser(e.target.value);
        // do a fetch to view how many books has all users
        var users = await fetch(`http://localhost:5000/api/books/user/${e.target.value}`);
        var json = await users.json()
        // has the count of books that has all users
        setCount(json.length)
    }
    console.log(countBooks)
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
        var user_filter = data.filter((element)=>element.id===parseInt(user))
        // this component render a mini form to choose what user want to add the book and then
        // with a little filter show the card to this user
        return(
        <LocalForm >
                <Row>
                    <Label md={2} className="form-label"> <strong>{" User: "}</strong></Label>
                    <Col md={8}>
                        <Control.select defaultValue={data[0].id} onChange={handleSelector} value={user} model=".user" id='user' 
                                name='user'
                                className="form-control">
                            {/* go throught the departamentos array to do the options about this selector*/}
                            {data&&data.map((element, index)=><option value={element.id} key={index}>{element.id}</option>)}
                        </Control.select>
                    </Col>
                </Row>
                {Array.isArray(user_filter) && user_filter.length !== 0 &&
                    <Card_ handleButton={borrowbook} content={user_filter[0].firstName + " " + user_filter[0].lastName} description={user_filter[0].email} extra={countBooks}/> 
                }
            </LocalForm>
        )
    }
}

export default BorrowBook
import React, {useState} from 'react'
import {Button, Row, Col, Label} from 'reactstrap'
import useFetch from '../../hooks/usefetch'
import {LocalForm, Control, Errors} from 'react-redux-form'
import Search from '../utils/search'
import { useHistory, useParams } from "react-router";
import { Card, Icon, Image } from 'semantic-ui-react'

const BorrowBook = () =>{ 
    const {data, loading, error} = useFetch('http://localhost:5000/api/users')
    const [user, setUser] = useState("1");
    const {id} = useParams()
    const history = useHistory()
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
    const handleSelector = (e) => {
        console.log(e.target.value)
        setUser(e.target.value);
    }
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
        var user_filter = data.filter((element)=>element.id===parseInt(user))
        console.log(user_filter, user);
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
                <Card>
                    <Card.Content>
                    <Card.Header>{user_filter[0].firstName + " " + user_filter[0].lastName}</Card.Header>
                    <Card.Description>
                        {user_filter[0].email}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='book' />
                        22 Books
                    </a>
                    </Card.Content>
                    <Button color="primary" onClick={borrowbook}>Borrow Book </Button>
                </Card>
            </LocalForm>
        )
    }
}

export default BorrowBook
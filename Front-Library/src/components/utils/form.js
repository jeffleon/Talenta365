import React, {useState} from 'react'
import {Button ,Row, Col, Label} from 'reactstrap'
import {LocalForm, Control, Errors} from 'react-redux-form'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import './form.css'
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => !(val) || (val.length >= len)

async function fetchData(method, url, values=null){
    var response = null
    if (method === 'get')
    {
        response = await fetch(url);
    }else{
        const requestOptions = {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        response = await fetch(url,requestOptions);
    }
    return response
}

const Form_ = ({params, placeHol, title, method, data2change}) => {
    let history = useHistory();
    const submitForm = async (values) => {
        var url = null
        if(method === 'PATCH')
        {
            url = `http://localhost:5000/api/${title}/${data2change['id']}`
            console.log(url)
        } else{
            url = `http://localhost:5000/api/${title}/`
        }
        await fetchData(method, url, values)
        history.push('/Library')
        if (method === 'PATCH'){
            window.location.reload(false);
        }
    }
    return(
        <LocalForm onSubmit={(values)=>submitForm(values)}>
            {params.map((element, index)=>{
                return(
                    <Row key={index}>
                        <Label md={12} className="form-label"><strong>{element}</strong></Label>
                        <Col md={12}>
                            <Control.text defaultValue={method==='PATCH'?data2change[element]:""} model={`.${element}`} id={`${element}`} 
                                name={`${element}`} placeholder={placeHol[index]}
                                className="form-control"                                 
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(50)
                                }}>
                                    </Control.text>
                            <Errors 
                                className="text-danger"
                                model=".nombre"
                                show="touched"
                                messages={{
                                    required: "Required",
                                    minLength: "Must be greater than 2 characters",
                                    maxLength: "Must be 15 characters or less",
                                }}
                            />                     
                        </Col>
                    </Row>
                )
            })}
            <Row>
                <Col md={12} className="form-submit">
                    <Button className="button-submit" color="primary" type="submit">Send</Button>
                </Col>
            </Row>    
        </LocalForm>
    )
}

export default Form_

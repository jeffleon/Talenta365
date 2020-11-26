import React from 'react'
import { Placeholder } from 'semantic-ui-react'
import Form_ from '../utils/form'

const AddBook = () => {
    var params = ["title", "author" ,"year"]
    var placeHol = ["The Picture of Doryan Grey", "Oscar Wilde" ,"1891"]
    return(
        <Form_ params={params} placeHol={placeHol} title={"books"} method={"POST"}/>
    )
}

export default AddBook
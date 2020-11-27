import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
import Button_ from './button'
import {Link} from 'react-router-dom'

const Table_ = ({data, title}) => {
    // the main use for this component its the render table 
    // go over the data to render the data depends of the title parameter you can change the type of table
    if (data.length > 0)
    {
        console.log(data)
        var headers = Object.keys(data[0]);
        console.log(headers)
        return (
            <Table definition width={10}>
                <Table.Header>
                    <Table.Row>
                        {headers.map((element, index)=><Table.HeaderCell key={index}>{element}</Table.HeaderCell>)}
                        {title === 'user'&&<Table.HeaderCell>Borrow</Table.HeaderCell>}
                        {title === 'borrow'&&<Table.HeaderCell>reset</Table.HeaderCell>}
                        {title === 'user'&&<Table.HeaderCell>Update</Table.HeaderCell>}
                        {title === 'user'&&<Table.HeaderCell>Delete</Table.HeaderCell>}
                        {title === 'book'&&<Table.HeaderCell>Update</Table.HeaderCell>}
                        {title === 'book'&&<Table.HeaderCell>Delete</Table.HeaderCell>}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {data.map((element, index)=>{
                    if (title === 'user'){
                        return(
                            <Table.Row key={index}>
                                <Table.Cell>{element.id}</Table.Cell>
                                <Table.Cell>{element.firstName}</Table.Cell>
                                <Table.Cell>{element.lastName}</Table.Cell>
                                <Table.Cell>{element.email}</Table.Cell>
                                <Table.Cell> <Button_ color={"positive"} allow={true} name={"Borrow Books"} link={`/borrow-books/user/${element.id}`}/> </Table.Cell>
                                <Table.Cell> <Button_ color={"primary"} allow={true} name={"Update User"} link={`/update-user/${element.id}`}/> </Table.Cell>
                                <Table.Cell> <Button_ color={"negative"} name={"Delete User"} link={`/delete-user/${element.id}`}/> </Table.Cell>
                            </Table.Row>
                        )
                    }
                    if (title === 'book')
                    {
                        return(
                            <Table.Row key={index}>
                                <Table.Cell>{element.id}</Table.Cell>
                                <Table.Cell>{element.title}</Table.Cell>
                                <Table.Cell>{element.author}</Table.Cell>
                                <Table.Cell>{element.year}</Table.Cell>
                                <Table.Cell> <Button_ color={"positive"} allow={element.borrow} link={`/borrow-book/${element.id}`} name={"Borrow Book"}/> </Table.Cell>
                                <Table.Cell>{element.userId}</Table.Cell>
                                <Table.Cell> <Button_ color={"primary"} allow={true} link={`/update-book/${element.id}`} name={"Update Book"}/> </Table.Cell>
                                <Table.Cell> <Button_ color={"negative"} name={"Delete Book"} link={`/delete-book/${element.id}`}  /> </Table.Cell>
                            </Table.Row>
                        )
                    }
                    if (title === 'borrow')
                    {
                        return(
                            <Table.Row key={index}>
                                <Table.Cell>{element.id}</Table.Cell>
                                <Table.Cell>{element.title}</Table.Cell>
                                <Table.Cell>{element.author}</Table.Cell>
                                <Table.Cell>{element.year}</Table.Cell>
                                <Table.Cell> <Button_ color={"positive"} allow={element.borrow} link={`/borrow-book/${element.id}`} name={"Borrow Book"}/> </Table.Cell>
                                <Table.Cell>{element.userId}</Table.Cell>
                                <Table.Cell> <Button_ color={"negative"} allow={true} link={`/reset-book/${element.id}`} name={"Return Book"}/> </Table.Cell>
                            </Table.Row>
                        )
                    }
                })}
                </Table.Body>
                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell/>
                        <Table.HeaderCell colSpan='8'>
                            <Button
                                floated='right'
                                icon
                                labelPosition='left'
                                primary
                                size='small'
                            >
                                {title !== "borrow"
                                ?   <Link to={`/add-${title}`}>
                                        <Icon name={title} /> Add {title}
                                    </Link>
                                :
                                    <Link to={`/Library`}>
                                        <Icon name={"arrow alternate circle left outline"} /> Back to Menu
                                    </Link>
                                }
                            </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        )
    } else{
        return(
            <h1>The table is empty</h1>
        )
    }
}

export default Table_;
import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
import Button_ from './button'
import ContentTableBook from './contentTableBook';
import ContentTableUser from './contentTableUser';
import ContentTableBorrow from './contentTableBorrow';
import {Link} from 'react-router-dom';


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
                            <ContentTableUser user={element} key={index} />
                        )
                    }
                    if (title === 'book')
                    {
                        return(
                            <ContentTableBook book={element} key={index} />
                        )
                    }
                    if (title === 'borrow')
                    {
                        return(
                            <ContentTableBorrow book={element} key={index} />
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
        if(title === 'borrow')
        {
            return(
                <h1>This user dont have any Borrow book</h1>
            )
        }else {
            return(
                <h1>The table is empty</h1>
            )
        }
    }
}

export default Table_;
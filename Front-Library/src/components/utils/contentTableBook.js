import React from 'react'
import { Table } from 'semantic-ui-react'
import Button_ from './button'

const ContentTableBook = ({book, key}) => {
    return(
        <Table.Row key={key}>
            <Table.Cell>{book.id}</Table.Cell>
            <Table.Cell>{book.title}</Table.Cell>
            <Table.Cell>{book.author}</Table.Cell>
            <Table.Cell>{book.year}</Table.Cell>
            <Table.Cell> <Button_ color={"positive"} allow={book.borrow} link={`/borrow-book/${book.id}`} name={"Borrow Book"}/> </Table.Cell>
            <Table.Cell>{book.userId}</Table.Cell>
            <Table.Cell> <Button_ color={"primary"} allow={true} link={`/update-book/${book.id}`} name={"Update Book"}/> </Table.Cell>
            <Table.Cell> <Button_ color={"negative"} name={"Delete Book"} link={`/delete-book/${book.id}`}  /> </Table.Cell>
        </Table.Row>
    )
}

export default ContentTableBook;
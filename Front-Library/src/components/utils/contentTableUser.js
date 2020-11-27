import React from 'react'
import { Table } from 'semantic-ui-react'
import Button_ from './button'

const ContentTableBook = ({user, key}) => {
    return(
        <Table.Row key={key}>
            <Table.Cell>{user.id}</Table.Cell>
            <Table.Cell>{user.firstName}</Table.Cell>
            <Table.Cell>{user.lastName}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell> <Button_ color={"positive"} allow={true} name={"Borrow Books"} link={`/borrow-books/user/${user.id}`}/> </Table.Cell>
            <Table.Cell> <Button_ color={"primary"} allow={true} name={"Update User"} link={`/update-user/${user.id}`}/> </Table.Cell>
            <Table.Cell> <Button_ color={"negative"} name={"Delete User"} link={`/delete-user/${user.id}`}/> </Table.Cell>
        </Table.Row>
    )
}

export default ContentTableBook;
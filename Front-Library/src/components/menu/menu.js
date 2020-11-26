import React, { useState } from 'react'
import { Grid, GridColumn, Menu, Segment } from 'semantic-ui-react'
import UserView from './user-view/user'
import BookView from './book-view/book'

const Menu_ = () =>{
    // this component render the first view of the react app and depends of the choice that you want render
    // and table or the other want users or books
    const [activeItem, setItem] = useState('users')
    var handleItemClick = (e, { name }) => setItem(name)
    return (
        <Grid>
            <Grid.Column width={3} >
                <Menu fluid vertical tabular>
                    <Menu.Item
                        name="users"
                        active={activeItem === 'users'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name="books"
                        active={activeItem === 'books'}
                        onClick={handleItemClick}
                    />
                </Menu>
            </Grid.Column>
            <GridColumn stretched width={13}>
                <Segment>
                    {activeItem === 'users'?<UserView />:<BookView/>}
                </Segment>
            </GridColumn>
        </Grid>
    )
}

export default Menu_
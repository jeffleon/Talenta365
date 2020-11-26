import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Menu_ from './menu/menu'
import Header from './utils/header'
import AddUser from './add-user/add-user'
import AddBook from './add-book/add-book'
import UpdateBook from './update-book/update-book'
import UpdateUser from './update-user/update-user'
import DeleteUser from './delete-user/delete-user'
import './index.css'
import DeleteBook from './delete-book/delete-book'
import BorrowBook from './borrow-book/borrow-book'
import BorrowBooksUser from './borrow-books-user/borrow-books-user'
import ResetBook from './reset-book/reset-book'
const Main = () => {
    return(
        <div className="wrapper">
            <Header className="header" title={"Library Manager"}/>
            <div className="menu">
                <Switch>
                    <Route exact path="/library" component={Menu_}/>
                    <Route exact path="/add-user" component={AddUser}/>
                    <Route exact path="/add-book" component={AddBook}/>
                    <Route exact path="/update-book/:id" component={UpdateBook}/>
                    <Route exact path="/update-user/:id" component={UpdateUser}/>
                    <Route exact path="/delete-book/:id" component={DeleteBook}/>
                    <Route exact path="/delete-user/:id" component={DeleteUser}/>
                    <Route exact path="/borrow-book/:id" component={BorrowBook}/>
                    <Route exact path="/borrow-books/user/:id" component={BorrowBooksUser}/>
                    <Route exact path="/reset-book/:id" component={ResetBook}/>
                    <Redirect to="/library"/>
                </Switch>
            </div>
        </div>
    )
}

export default Main
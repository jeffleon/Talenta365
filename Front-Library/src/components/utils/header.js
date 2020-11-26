import React from 'react'
import './css/headers.css'
const Header = ({title}) => {
    // component to render the header page title 
    return(
        <h1 className="header">{title}</h1>
    )
}

export default Header 
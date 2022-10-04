import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar () {
    return(
        <div className="navbar">
            <NavLink exact to ="/"> Home </NavLink>

            <NavLink to="/booklist"> Book List </NavLink>
            <NavLink to="/addbook"> Add Book </NavLink>
            <NavLink to="/bookdiscussion"> Book Discussion </NavLink>
            {/* <NavLink to="/bookdiscussion"> Book Discussion </NavLink>
            <NavLink to="/remembers/user"> User </NavLink>
            <NavLink to="/categories"> Categories </NavLink> */}

        </div>
    )

}
export default NavBar
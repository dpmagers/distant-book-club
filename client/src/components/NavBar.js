import React from 'react'
import { NavLink } from "react-router-dom"





function NavBar({ reader, setReader }) {
function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
    if (r.ok) {
        setReader(null);
    }
    });
}



    return(
        <div className="navbar">
            <NavLink exact to ="/"> Home </NavLink>

            <NavLink to="/booklist"> Book List </NavLink>
            <NavLink to="/addbook"> Add Book </NavLink>
            <NavLink to="/bookdiscussion"> Book Discussion </NavLink>
            <NavLink to="/writereview"> Write a Book Review </NavLink>



            {/* <NavLink to="/bookdiscussion"> Book Discussion </NavLink>
            <NavLink to="/remembers/user"> User </NavLink>
            <NavLink to="/categories"> Categories </NavLink> */}
        <button onClick={handleLogoutClick}>
          Logout
        </button>
        </div>
    )

}
export default NavBar
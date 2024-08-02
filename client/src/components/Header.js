import React from "react";
import "./component.css"

function Header({onLogout}){

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
    }

   return( <>
    <div className="header">
        <h1 className="header-title">Treasure Box! </h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
    </>
)}

export default Header;
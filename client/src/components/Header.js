import React from "react";
import "./component.css"

function Header({onLogout}){
    function handleLogout() {
        console.log("handleLogout called");

        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
    }

   return( <>
    <div className="header">
        <h1 id="header-title">Treasure Box! </h1>
        <button id ="logout" className="action-button" onClick={handleLogout}>Logout</button>
    </div>
    </>
)}

export default Header;
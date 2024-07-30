import React from "react"
import "./component.css"

function LogInForm(){
   return( <>
    <div id="Log-in">
      <form>
        <label htmlFor="username" planceholder= "teacher@adress.com">User name: </label>
        <input type="text" ></input><br/><br/>
        <label htmlFor="pasword">Password: </label>
        <input type="text" ></input><br/><br/>
        <input className= "action-button" type = "submit" value="Log in"/>
      </form>
    </div>
    </>
)}
export default LogInForm;
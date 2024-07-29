import React from "react"
import "./component.css"

function LogInForm(){
   return( <>
    <div id="Log-in">
      <form>
        <label for="username" planceholder= "teacher@adress.com">User name: </label>
        <input type="text" ></input><br/><br/>
        <label for="pasword">Password: </label>
        <input class= "action-button" type = "submit" value="Log in"/>
      </form>
    </div>
    </>
)}
export default LogInForm;
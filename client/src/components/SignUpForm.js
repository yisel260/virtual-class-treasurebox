import React from "react";
import "./component.css"

function SignUpForm(){
   return( <>
    <div id="sign-up">
      <form>
        <label for="Fname">First Name: </label>
        <input type="text" ></input><br/><br/>
        <label for="Lname">Last Name: </label>
        <input type="text" ></input><br/><br/>
        <label for="school">School: </label>
        <input type="text" ></input><br/><br/>
        <label for="email">E-mail </label>
        <input type="text" ></input><br/><br/>
        <label for="Password">Password: </label>
        <input type="text" ></input><br/><br/>
        <label for="PasswordRetype">Retype Password: </label>
        <input type="text" ></input><br/><br/>
        <input class= "action-button" type = "submit" value="Sign Up"/>
      </form>
    </div>
    </>
)}
export default SignUpForm;
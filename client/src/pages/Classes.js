import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';
import "./pages.css";
import StudentCard from "../components/StudentCard"


function Classes (){
    return (
      <>
        <header>
          <Header/>
          <NavBar />
        </header>
        <main>
        <div>
        <label for="cars">Choose a class:</label>
        <select name="classesdrpdwn" id="classdrpdwn">
            <option value="">Class 1 </option>
            <option value="">Class 2 </option>
        </select> 
        </div>
        <div>
            <button type="button"> Add a new class </button>
        </div>
        <table>
            <tr>
                <th>Student Name</th>
                <th>password</th>
            </tr>
        </table>
        <button>Add student</button>
        </main>
      </>
    );
  };
  
  export default Classes;
  
import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';
import "./pages.css"
import LogInForm from '../components/LogInForm';
import StudentCard from '../components/StudentCard';


function HomeLoggedIn (){
    return (
      <>
        <header>
          <Header/>
          <NavBar />
        </header>
        <main>
            <div id="class-button-div">
            <button className= "class-button">Class 1</button>
            <button className= "class-button">Class 2</button>
            </div>
            <StudentCard/>

        </main>
      </>
    );
  };
  
  export default HomeLoggedIn;
  
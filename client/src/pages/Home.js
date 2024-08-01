import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';
import "./pages.css"
import LogInForm from '../components/LogInForm';

function Home (){
  return (
    <>
      <header>
        <Header/>
        <NavBar />
      </header>
      <main>
        <h1>Welcome to Treasure Box! </h1>
        <div className="parent-section">
        <div className="section">
          <div id = "teachers-section" />
             <h2>I am a teacher:</h2> 
            <LogInForm/>
          <div className="section">
             <SignUpForm/>
          </div>
          </div>
      
          <div className="section">
            <h2>I am a student:</h2>
            <form>
              <label>Class code:</label>
              <input type="text" className="form-control" placeholder=""></input>
              <input type="submit" value = "Go!"/>
            </form>
          </div>
        </div>

      </main>
    </>
  );
};

export default Home;

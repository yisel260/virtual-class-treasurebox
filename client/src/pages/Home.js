import React,{useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';
import "./pages.css"
import Login from'../components/Login';

function Home (){

  const [user, setUser] = useState(null);
  //Etrech Goal: Stay logged after login
  // useEffect(() => {
  //   fetch("/check_session").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

 if (user){
    return (
      <>
        <header>
          <Header onLogout={handleLogout}/>
          <NavBar  />
        </header>
        <main>
            <div id="class-button-div">
            <button className= "class-button">Class 1</button>
            <button className= "class-button">Class 2</button>
            </div>
            {/* <StudentCard/> */}

        </main>
      </>
    );
  } else{ return (
    <>
        <header>
          <Header onLogout={handleLogout}/>
        </header>
        <main>
          <h1>Welcome to Treasure Box! </h1>
         {/* <div className="parent-section"> */}
           <div id="student-section">
              <h2>I am a student:</h2>
              <form>
                <label>Class code:</label>
                <input type="text" className="form-control" placeholder=""></input>
                <input className="action-button" type="submit" value = "Go!"/>
              </form>
            </div>
            <h2>I am a teacher:</h2> 
           <div id="teacher-section">
              <div id="log-in-form" className="section">
                  <Login onLogin={handleLogin}/>
              </div>
              <div id= "or">
              <h3>Or</h3>
              </div>
              <div id="sign-up-form"className="section">
                  
                  <SignUpForm/>
              </div>
            {/* </div> */}

      
          </div>

        </main>
      </>

  )}
}

export default Home;

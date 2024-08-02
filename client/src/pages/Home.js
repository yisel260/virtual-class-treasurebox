import React,{useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';
import "./pages.css"
import LogInForm from '../components/LogInForm';
import Login from'../components/Login';

function Home (){

  const [user, setUser] = useState(null);
  
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
          <Header/>
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
          <div className="parent-section">
          <div className="section">
            <div id = "teachers-section" />
              <h2>I am a teacher:</h2> 
              <Login onLogin={handleLogin}/>
            <div className="section">
               <h3>Or</h3>
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

  )}
}

export default Home;

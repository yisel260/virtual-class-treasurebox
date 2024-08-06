import React,{useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';
import "./pages.css"
import Login from'../components/Login';
import { useNavigate } from 'react-router-dom';
import { useFormik, validateYupSchema } from 'formik';


function Home (){

  const [user, setUser] = useState(null);
  const [section, setSection]= useState("");
  const navigate = useNavigate();
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

const formik = useFormik(
  {
    initialValues:{
      sectionCode:"",
    },
    onSubmit: (values)=>{
      console.log(values.sectionCode);
      fetch(`/sections/${values.sectionCode}`)
      .then((res) => res.json())
      .then((data) => {
        setSection(data);
        console.log(data);
        navigate("/studentViewClass")
      })
    }
  }
)
 
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
         <div>
            <h2 className='section-banner'>I am a student:</h2> 
            </div>
           <div id="student-section">
              <form onSubmit={formik.handleSubmit}>
                <label>Class code:</label>
                <input type="text" 
                className="form-control" 
                id="senctionCode"
                name="sectionCode"
                value={formik.values.sectionCode} 
                onChange={formik.handleChange}
                placeholder=""></input>
                <input className="action-button" type="submit" value = "Go!"/>
              </form>
            </div>
            <div>
            <h2 className='section-banner'>I am a teacher:</h2> 
            </div>
           
           <div id="teacher-section">
              <div id="log-in-form" className="section">
                  <Login onLogin={handleLogin}/>
              </div>
              <div id= "or">
              <h3>Or</h3>
              </div>
              <div id="sign-up-form"className="section">
                  <SignUpForm onLogin={handleLogin}/>
              </div>
            {/* </div> */}

      
          </div>

        </main>
      </>

  )}
}

export default Home;

import React,{useState, useEffect} from 'react';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';
import "./pages.css"
import Login from'../components/Login';
import { useFormik, validateYupSchema } from 'formik';
import * as yup from "yup";
import StudentViewClass from './StudenViewClass';
import TeacherHome from "./TeacherHome"
import { useOutletContext } from 'react-router-dom';


function LoginInPage(){
    const [section, setSection]= useState("");
    const [user, setUser] = useState(null);

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
            fetch(`/sections/${values.sectionCode}`)
            .then((res) =>{
              if (res.ok){
                res.json()
                .then((data) => {
                  setSection(data);
                  setSection(data.id)
              })
              }
              else {
                console.log("class not found");
                alert("Ooopsie that class code could not be found. ")
              }
            })
          }
        }
      )
    return (
        <>
            <header>
              <Header />
            </header>
            <main>
              <h1>Welcome to Treasure Box! </h1>
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
    
          
              </div>
    
            </main>
          </>
    
      )
}

export default LoginInPage
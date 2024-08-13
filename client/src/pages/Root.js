import React, { useEffect, useState } from "react";
import {Link, Outlet} from "react-router-dom"

function Root (){

    const [user,setUser]=useState("")
    const [sections, setSections]=useState("")
    const [students,setStudents]=useState("")
    const [sectionSelected,setSectionSelected]=useState("")
    

    useEffect(() => {
     fetch("/check_session").then((response) => {
       if (response.ok) {
         response.json().then((user) => setUser(user));
       }
     });
       }, []);

       useEffect(() => {
        user?(getSections(user.id)):(<p>classes coming</p>)
      },[user])
    
    
    function getSections(userId) {
        fetch(`/sectionsbyteacher/${userId}`)
          .then((response) =>response.json())
          .then(data =>{
            setSections(data)
          })
    
      }
    
    useEffect(() => {
        if (sections){
          if (sectionSelected) {
            console.log('section selected already')
          }
          else {
            const sectionId= sections[0].id
            getStudents(sectionId);
            setSectionSelected(sectionId)
          }
        }
      },[sections] );
      
     
     function getStudents(sectionId){
      fetch(`/studentsbysection/${sectionId}`)
      .then((res)=>res.json())
      .then((data) =>{
        setStudents(data)
      })
     }
    
     function handleSectionChange(e){
      setSectionSelected(e.target.value)
      console.log(e.target.value)
       getStudents(e.target.value)
    }
    
    
    return (
        <>
    <div>
    
        <Link to="/teacherhome">Home</Link>
        <Link to="/classes">Mange Classes</Link>
        <Link to="/prizes">Mangage Prizes</Link>
    </div>
    <Outlet context={{user, setUser,sections, setSections,students,setStudents,sectionSelected,setSectionSelected}}/>
    </>)
}
 
export default Root

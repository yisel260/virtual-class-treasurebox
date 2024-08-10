import React,{useEffect,useState} from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import AddStudentForm from '../components/AddStudentForm';
import SignUpForm from '../components/SignUpForm';
import "./pages.css";
import StudentCard from "../components/StudentCard"
import Home from "./Home"
import AddSectionForm from '../components/AddSectionForm';

function Classes() {

  const [user,setUser]=useState(null)
  const [sections,setSections]=useState(null)
  const [students,setStudents]=useState([])
  const [sectionSelected,setSectionSelected]=useState("")
  const [sectionSelectedId,setSectionSelectedId]=useState("")
  const [addSection,setAddSection]=useState(false)
  const[addStudent, setAddStudent]=useState(false)

// console.log(user)
  useEffect(() => {
    fetch("/check_session")
    .then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    })
  }, []);

  useEffect(() => {
    user?(
      fetch(`/sectionsbyteacher/${user.id}`)
      .then((response) =>response.json())
      .then(data =>{
        setSections(data)
        console.log(data[0].name)
        setSectionSelected(data[0].name)
      })):(<p>classes coming</p>)
  },[user])


function assignSectionId(){
    const sectionListed = sections.filter(section => section.name === sectionSelected)
    const sectionId = sectionListed[0].id
    setSectionSelectedId(sectionId)
  }

  
  useEffect(() =>{
    sectionSelected?(assignSectionId()):(console.log(sectionSelected))
  },[sectionSelected])

 function handleSectionChange(e){
  setSectionSelected(e.target.value)
  console.log(e.target.value)
  const section= sections.filter(section => section.name === e.target.value)
  console.log(section[0].id)
  fetch(`/sections/${section[0].id}`)
  . then((res)=>res.json())
  .then ((data) =>{
    console.log(data) })
    fetch(`/studentsbysection/${section[0].id}`)
    .then((res)=>res.json())
    .then((data) =>{
      setStudents(data)
    })
}


 function handleDeleteStudent(e){
  // console.log(e.target.value)
  fetch(`/studentsById/${e.target.value}`,{
    method: 'delete',
  })
  .then((res)=>{
  if (res.ok) { 
    console.log(sectionSelected)
    const section= sections.filter(section => section.name == sectionSelected)
    console.log(section[0].id)
    fetch(`/sections/${section[0].id}`)
    . then((res)=>res.json())
    .then ((data) =>{
      console.log(data) })
      fetch(`/studentsbysection/${section[0].id}`)
      .then((res)=>res.json())
      .then((data) =>{
        setStudents(data)
      })
  }})

}

function handleAddSection(){
  setStudents([])
  setAddStudent(false)
  setAddSection(true)
}

function handleAddStudentClick(){
  setAddSection(false)
  setAddStudent(true)
}



  return (
    <>
      <Header />
      <NavBar/>

      <main>
      
        {user? (
          <>
          <div>
              <button onClick={handleAddSection}  type="button">Add a new class</button>
            </div>
            <div>
              <button onClick={handleAddStudentClick} type="button">add a student </button>
            </div>

          {addSection?<AddSectionForm user={user}/>  : null}
          {addStudent ? <AddStudentForm sectionSelectedId={sectionSelectedId}/> : null}

          {sections?(
            <div>
              <label htmlFor="section">Choose a class:</label>
              <select value={sectionSelected} onChange={handleSectionChange} name="classesdrpdwn" id="classdrpdwn">
              {sections.map((section)=>{
                  return(
                  <option  key= {section.name} name="section" id="section" >{section.name}</option>
                  )
              })}
              </select>
            </div>):(<p>Classes coming </p>)}
          
            {students.length>0?(
              <table>
              <tbody>
                <tr>
                  <th>Student Name</th>
                  <th>Password</th>
                  <th>Points</th>
                </tr>
                <tr>
              {students.length>0 ? (
                students.map((student) => (
                    <>
                      <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.password}</td>
                        <td>{student.points}</td>
                        <button onClick={handleDeleteStudent} value={student.id} id="delete-student-btn"> delete </button>
                      </tr>
                      </>))) : null
                        }
                          </tr>
                        </tbody>
                    </table>):null}
                    </>
                  ):null }


      </main>
    </>
  );
}

export default Classes;
  
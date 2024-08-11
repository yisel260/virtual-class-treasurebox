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
  const [addSection,setAddSection]=useState(false)
  const[addStudent, setAddStudent]=useState(false)
  const[studentRoster, setStudentRoster]=useState(true)

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


 function handleDeleteStudent(e){
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
  setAddStudent(false)
  setAddSection(true)
  setStudentRoster(false)

}

function handleAddStudentClick(){
  setAddSection(false)
  setAddStudent(true)
  setStudentRoster(false)

}

function handleStudentRosterClick(){
  setAddSection(false)
  setAddStudent(false)
  setStudentRoster(true)
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
            <div>
              <button onClick={handleStudentRosterClick} type="button">Student roster </button>
            </div>

          {addSection?<AddSectionForm user={user}
          setSectionSelected={setSectionSelected}
          getSections={getSections}/>  : null}
          {addStudent ? <AddStudentForm 
          sectionSelected={sectionSelected}
           /> : null}

          {sections?(
            <div>
              <label htmlFor="section">Choose a class:</label>
              <select id="section-selector" value={sectionSelected} onChange={handleSectionChange} name="classesdrpdwn">
              {sections.map((section)=>{
                  return(
                  <option value={section.id} key= {section.name} name="section" id="section" >{section.name}</option>
                  )
              })}
              </select>
              {students.length>0?(
              <table>
              <tbody>
                <tr>
                  <th>Student Name</th>
                  <th>Password</th>
                  <th>Points</th>
                </tr>
                <tr>
                  {students.map((student) => (
                    <>
                      <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.password}</td>
                        <td>{student.points}</td>
                        <button onClick={handleDeleteStudent} value={student.id} id="delete-student-btn"> delete </button>
                      </tr>
                      </>))}
                          </tr>
                        </tbody>
                    </table>):(console.log("no students added yet"))}
            </div>):(<p>Classes coming </p>)}
                </>
                  ):null}


      </main>
    </>
  );
}

export default Classes;
  
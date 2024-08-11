import React,{useEffect,useState} from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import AddStudentForm from '../components/AddStudentForm';
import "./pages.css";
import AddSectionForm from '../components/AddSectionForm';
import StudentDataTable from '../components/StudentDataTable';
import SectionSelector from '../components/SectionSelector';

function Classes() {

  const [user,setUser]=useState(null)
  const [sections,setSections]=useState(null)
  const [students,setStudents]=useState([])
  const [sectionSelected,setSectionSelected]=useState("")
  const [addSection,setAddSection]=useState(false)
  const[addStudent, setAddStudent]=useState(false)
  const[studentRoster, setStudentRoster]=useState(true)
  const[sectionDwn, setSectionDwn]=useState(false)
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



function handleAddSection(){
  setAddStudent(false)
  setAddSection(true)
  setStudentRoster(false)

}

function handleAddStudentClick(){
  setAddSection(false)
  setAddStudent(true)
  setStudentRoster(true)
  setSectionDwn(false)

}

function handleStudentRosterClick(){
  setAddSection(false)
  setAddStudent(false)
  setStudentRoster(true)
  setSectionDwn(true)
}





  return (
    <>
      <Header />
      <NavBar/>
      <br/>
      <main>
      
        {user? (
          <>
          <div id="choice-btn-container">
              <button className="choice-button"onClick={handleAddSection}  type="button">Add a new class</button>
            </div>
            <div>
              <button className="choice-button" onClick={handleAddStudentClick} type="button">add a student </button>
            </div>
            <div>
              <button className="choice-button" onClick={handleStudentRosterClick} type="button">Student roster </button>
            </div>
            <br/>
          {addSection?<AddSectionForm user={user} setSectionSelected={setSectionSelected} getSections={getSections}/>  : null}
          {addStudent ? <AddStudentForm 
              sectionSelected={sectionSelected}
              getStudents={getStudents}/> : null}
          {studentRoster?(
            <>
            <br/>
             {sectionDwn? (<SectionSelector 
              sections={sections}
              sectionSelected={sectionSelected}
              handleSectionChange={handleSectionChange}/>):null}
              <StudentDataTable 
              handleSectionChange={handleSectionChange}
              setStudents={setStudents} 
              sections = {sections} 
              sectionSelected={sectionSelected} 
              students={students}
              getStudents={getStudents}
              />
              </>):null}
                </>
                  ):null}


      </main>
    </>
  );
}

export default Classes;
  
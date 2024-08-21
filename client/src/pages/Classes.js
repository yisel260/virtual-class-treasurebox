import React,{useEffect,useState} from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import AddStudentForm from '../components/AddStudentForm';
import "./pages.css";
import AddSectionForm from '../components/AddSectionForm';
import StudentDataTable from '../components/StudentDataTable';
import SectionSelector from '../components/SectionSelector';
import { useOutletContext } from 'react-router-dom';

function Classes() {

  const context= useOutletContext()

  const [addSection,setAddSection]=useState(false)
  const[addStudent, setAddStudent]=useState(false)
  const[studentRoster, setStudentRoster]=useState(true)
  const[sectionDwn, setSectionDwn]=useState(true)



function handleAddSection(){
  setAddStudent(false)
  setAddSection(!addSection)
  setStudentRoster(false)

}

function handleAddStudentClick(){
  setAddSection(false)
  setAddStudent(!addStudent)
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
      
        {context.user? (
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
          {addSection?<AddSectionForm 
            setAddSection ={setAddSection}
            setStudentRoster={setStudentRoster}
            setAddStudent={setAddStudent}/>  : null}
          {addStudent ? <AddStudentForm /> : null}
          {studentRoster?(
            <>
            <br/>
             {sectionDwn? (<SectionSelector />):null}
              <StudentDataTable  /></>):null}
            </>
              ):null}

      </main>
    </>
  );
}

export default Classes;
  
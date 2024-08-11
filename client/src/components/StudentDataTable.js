import React,{useEffect,useState} from 'react';

function StudentDataTable({students, sections,sectionSelected,handleSectionChange, handleDeleteStudent})
   {
    return (
        <>
        {sections?(
        <div>
        
          {students?(
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
        </>)
}

export default StudentDataTable
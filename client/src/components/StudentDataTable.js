import React,{useEffect,useState} from 'react';
import { useOutletContext } from 'react-router-dom';

function StudentDataTable() {


  const context = useOutletContext()


  function handleDeleteStudent(e) {
    fetch(`/studentsById/${e.target.value}`, {
      method: 'delete',
    })
      .then((res) => {
        if (res.ok) {
          context.getStudents(context.sectionSelected);
        }
      });
  }

  return (
    <>
      {context.sections ? (
        <div>
          {context.students ? (
            <>
            <br/>
            <table>
              <tbody>
                <tr>
                  <th>Student Name</th>
                  <th>Password</th>
                  <th>Points</th>
                  <th></th>
                </tr>
                {context.students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.password}</td>
                    <td>{student.points}</td>
                    <td>
                      <button onClick={handleDeleteStudent} value={student.id} id="delete-student-btn">
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </>) : (
            console.log('no students added yet')
          )}
        </div>
      ) : (
        <p>Classes coming</p>
      )}
    </>
  );
}

export default StudentDataTable;
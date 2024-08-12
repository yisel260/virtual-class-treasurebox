import React,{useEffect,useState} from 'react';

function StudentDataTable({ students, getStudents, setStudents, sections, sectionSelected }) {
  function handleDeleteStudent(e) {
    fetch(`/studentsById/${e.target.value}`, {
      method: 'delete',
    })
      .then((res) => {
        if (res.ok) {
          getStudents(sectionSelected);
        }
      });
  }

  return (
    <>
      {sections ? (
        <div>
          {students ? (
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
                {students.map((student) => (
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
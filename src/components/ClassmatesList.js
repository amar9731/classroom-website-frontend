import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ClassmatesList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClassmatesList;

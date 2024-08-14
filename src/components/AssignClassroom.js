import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function AssignClassroom() {
  const [teacherId, setTeacherId] = useState('');
  const [classroomId, setClassroomId] = useState('');

  const handleAssign = () => {
    console.log('Assign Classroom', teacherId, classroomId);
  };

  return (
    <div>
      <TextField
        label="Teacher ID"
        value={teacherId}
        onChange={(e) => setTeacherId(e.target.value)}
      />
      <TextField
        label="Classroom ID"
        value={classroomId}
        onChange={(e) => setClassroomId(e.target.value)}
      />
      <Button onClick={handleAssign}>Assign Classroom</Button>
    </div>
  );
}

export default AssignClassroom;

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function ClassroomForm() {
  const [classroomName, setClassroomName] = useState('');

  const handleCreate = () => {
    console.log('Create Classroom', classroomName);
    setClassroomName('');
  };

  return (
    <div>
      <TextField
        label="Classroom Name"
        value={classroomName}
        onChange={(e) => setClassroomName(e.target.value)}
      />
      <Button onClick={handleCreate}>Create Classroom</Button>
    </div>
  );
}

export default ClassroomForm;

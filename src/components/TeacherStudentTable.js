import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

function TeacherStudentTable() {
 
  const data = [
    { id: 1, name: 'harsh', role: 'Teacher', email: 'harsh@teacher.com' },
    { id: 2, name: 'mayank', role: 'Student', email: 'mayank@student.com' },
  ];

  const handleEdit = (id) => {
    console.log('Edit', id);
  };

  const handleDelete = (id) => {
    console.log('Delete', id);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.role}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>
              <Button onClick={() => handleEdit(item.id)}>Edit</Button>
              <Button onClick={() => handleDelete(item.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TeacherStudentTable;

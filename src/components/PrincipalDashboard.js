import React from 'react';
import TeacherStudentTable from './TeacherStudentTable';
import ClassroomForm from './ClassroomForm';
import AssignClassroom from './AssignClassroom';

function PrincipalDashboard() {
  return (
    <div>
      <TeacherStudentTable />
      <ClassroomForm />
      <AssignClassroom />
    </div>
  );
}

export default PrincipalDashboard;

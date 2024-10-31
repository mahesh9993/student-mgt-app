import React from "react";
import StudentForm from "../componants/StudentForm";
import StudentTable from "../componants/common/StudentTable";
import Navbar from "../componants/Navbar";

const StudentRegistration = ({ students, onSubmit }) => {
  return (
    <div>
      <Navbar navName={"Student Registration"} />
      <StudentForm onSubmit={onSubmit} />
      <StudentTable students={students} action={false} />
    </div>
  );
};

export default StudentRegistration;

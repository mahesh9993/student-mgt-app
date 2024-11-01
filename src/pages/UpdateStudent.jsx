import React from "react";
import StudentForm from "../componants/StudentForm";
import Navbar from "../componants/Navbar";

const UpdateStudent = ({ currentStudent, onUpdate }) => {
  return (
    <div>
      <Navbar navName={"Update Student"} />
      <StudentForm currentStudent={currentStudent} onUpdate={onUpdate} />
    </div>
  );
};

export default UpdateStudent;

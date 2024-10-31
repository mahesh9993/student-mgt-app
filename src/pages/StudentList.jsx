import React from "react";
import StudentTable from "../componants/common/StudentTable";
import Navbar from "../componants/Navbar";
import { useNavigate } from "react-router-dom";

const StudentList = ({ students, onEdit, onDelete }) => {
  const navigate = useNavigate();

  const handleEditRoute = (student) => {
    onEdit(student);
    navigate("/update");
  };

  return (
    <div>
      <Navbar navName={"Students List"} />
      <StudentTable
        students={students}
        onEdit={handleEditRoute}
        onDelete={onDelete}
        action={true}
      />
    </div>
  );
};

export default StudentList;

import React, { useState, useEffect } from "react";
import StudentTable from "../componants/common/StudentTable";
import Navbar from "../componants/Navbar";
import { useNavigate } from "react-router-dom";
import Search from "../componants/Search";

const StudentList = ({ students, onEdit, onDelete, getStudent }) => {
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredStudents(students);
  }, [students]);

  const handleSearchChange = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm) {
      const result = students.filter((student) =>
        student.phone.includes(searchTerm)
      );
      setFilteredStudents(result);
    } else {
      setFilteredStudents(students);
    }
  };

  const handleSearch = () => {
    getStudent(searchTerm);
  };

  const handleEditRoute = (student) => {
    onEdit(student);
    navigate("/update");
  };

  return (
    <div>
      <Navbar navName={"Students List"} />
      <Search onSearchChange={handleSearchChange} onSearch={handleSearch} />
      <StudentTable
        students={filteredStudents}
        onEdit={handleEditRoute}
        onDelete={onDelete}
        action={true}
      />
    </div>
  );
};

export default StudentList;

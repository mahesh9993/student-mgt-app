import "./App.css";
import React, { useState, useEffect } from "react";
import { getStudents } from "./services/Service";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentRegistration from "./pages/StudentRegistration";
import StudentList from "./pages/StudentList";
import UpdateStudent from "./pages/UpdateStudent";

function App() {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({});
  const [apiTriggerer, setApiTriggerer] = useState(true);

  console.log("students", students);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (error) {
        console.error("fetch students fail", error);
      }
    };
    fetchStudents();
  }, []);

  const handleEdit = (student) => {
    setCurrentStudent(student);
  };

  const handleDelete = (id) => {
    const updatedStudentList = students.filter((s) => s.id !== id);
    setStudents(updatedStudentList);
    //deleteStudent(id);
  };

  const handleSubmit = (student) => {
    //console.log(student);
    const updatedStudentsList = [...students];
    updatedStudentsList.push(student);
    setStudents(updatedStudentsList);
  };

  const handleUpdate = (student) => {
    //console.log(student);
    //updateStudent(student)
  };

  const handleGetStudent = (phone) => {
    if (phone) {
      //getStudentByPhoneNo(phone);
    } else {
      console.log("search term not found");
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <StudentList
              students={students}
              onEdit={handleEdit}
              onDelete={handleDelete}
              getStudent={handleGetStudent}
            />
          }
        />
        <Route
          path="/registration"
          element={
            <StudentRegistration students={students} onSubmit={handleSubmit} />
          }
        />
        <Route
          path="/update"
          element={
            <UpdateStudent
              currentStudent={currentStudent}
              onUpdate={handleUpdate}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

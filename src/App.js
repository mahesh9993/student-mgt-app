import React, { useState, useEffect } from "react";
import {
  createStudents,
  deleteStudent,
  getStudentByPhoneNo,
  getStudents,
  updateStudent,
} from "./services/Service";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentRegistration from "./pages/StudentRegistration";
import StudentList from "./pages/StudentList";
import UpdateStudent from "./pages/UpdateStudent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [students, setStudents] = useState([]);
  const [newStudents, setNewStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({});
  const [apiTriggerer, setApiTriggerer] = useState(true);

  //console.log("students", students);

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
  }, [apiTriggerer]);

  const handleGetStudent = async (phone) => {
    if (phone) {
      try {
        const res = await getStudentByPhoneNo(phone);
        console.log(res);
      } catch (error) {}
    } else {
      console.log("search term not found");
    }
  };

  const handleAdd = (student) => {
    const newStudentsList = [...newStudents];
    newStudentsList.push(student);
    setNewStudents(newStudentsList);
    //console.log(newStudentsList);
  };

  const handleSubmit = async () => {
    try {
      await createStudents(newStudents);
      setApiTriggerer(!apiTriggerer);
    } catch (error) {
      console.error("students creation failed", error);
    }
    //console.log(res);
    //console.log(newStudents);
  };

  const handleEdit = (student) => {
    setCurrentStudent(student);
  };

  const handleUpdate = async (student) => {
    //console.log(student);
    try {
      await updateStudent(student);
      setApiTriggerer(!apiTriggerer);
    } catch (error) {}
  };

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      setApiTriggerer(!apiTriggerer);
    } catch (error) {
      console.error("delete fail", error);
    }
  };

  return (
    <div>
      <ToastContainer />
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
                onSubmit={handleSubmit}
              />
            }
          />
          <Route
            path="/registration"
            element={
              <StudentRegistration
                students={newStudents}
                onAdd={handleAdd}
                onSubmit={handleSubmit}
              />
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
    </div>
  );
}

export default App;

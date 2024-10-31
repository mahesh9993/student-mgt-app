import axios from "axios";

const API_URL = "https://localhost:44381/api/Student";

export const getStudents = async () => {
  try {
    const res = await axios.get(API_URL);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.error("student list:", err);
  }
};

export const createStudent = async (student) => {
  try {
    const res = await axios.post(API_URL, student);
    return res.data;
  } catch (err) {
    console.error("creating student:", err);
  }
};

export const updateStudent = async (id, updatedStudent) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, updatedStudent);
    return res.data;
  } catch (err) {
    console.error("update student:", err);
  }
};

export const deleteStudent = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  } catch (err) {
    console.error("deleting student:", err);
  }
};

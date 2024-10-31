import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://localhost:44381/api/Student";

export const getStudents = () => {
  return axios
    .get(API_URL)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      toast.error("Failed to load students details.");
      console.error("Error fetching student details:", err);
    });
};

export const createStudent = (student) => {
  return axios
    .post(API_URL, student)
    .then((res) => {
      toast.success("Student created successfully!");
      return res.data;
    })
    .catch((err) => {
      toast.error("Error creating student.");
      console.error("Error creating student:", err);
    });
};

export const updateStudent = (id, updatedStudent) => {
  return axios
    .put(`${API_URL}/${id}`, updatedStudent)
    .then((res) => {
      toast.success("Student updated successfully!");
      return res.data;
    })
    .catch((err) => {
      toast.error("Error updating student.");
      console.error("Error updating student:", err);
    });
};

export const deleteStudent = (id) => {
  return axios
    .delete(`${API_URL}/${id}`)
    .then((res) => {
      toast.success("Student deleted successfully!");
      return res.data;
    })
    .catch((err) => {
      toast.error("Error deleting student.");
      console.error("Error deleting student:", err);
    });
};

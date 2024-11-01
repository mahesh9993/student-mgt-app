import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://localhost:44381/api/Student";

export const getStudents = async () => {
  try {
    const res = await axios.get(API_URL);
    //console.log(res.data);
    return res.data;
  } catch (err) {
    toast.error("Data Fetch Error");
  }
};

export const getStudentByPhoneNo = async (phone) => {
  try {
    const res = await axios.get(`${API_URL}/${phone}`);
    return res.data;
  } catch (err) {
    toast.error("Not Found");
  }
};

export const createStudents = async (students) => {
  try {
    const res = await axios.post(API_URL, students);
    toast.success("Students Successfully Created");
    return res;
  } catch (err) {
    toast.error("Student Creation Failed");
  }
};

export const updateStudent = async (student) => {
  console.log(student);
  try {
    const res = await axios.put(API_URL, student);
    toast.success("Successfully Updated");
    return res.data;
  } catch (err) {
    toast.error("Failed to Update");
  }
};

export const deleteStudent = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    toast.success("Delete Successfull");
    return res;
  } catch (err) {
    toast.error("Delete Failed");
  }
};

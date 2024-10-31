import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Stack,
  IconButton,
} from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { getStudents } from "../../services/data";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({});

  useEffect(() => {
    setStudents(getStudents());
  }, []);

  const handleEdit = (student) => {
    setCurrentStudent(student);
  };

  const handleDelete = (id) => {
    const updatedStudentList = students.filter((s) => s.id !== id);
    setStudents(updatedStudentList);
    //deleteStudent(id);
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date Of Birth</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telephone</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.dob.toLocaleDateString()}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.phone}</TableCell>
              <TableCell>
                <Stack direction={"row"} sx={{ maxWidth: "100px" }}>
                  <IconButton
                    aria-label="edit"
                    onClick={() => handleEdit(student)}
                  >
                    <DriveFileRenameOutlineIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(student.id)}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentTable;

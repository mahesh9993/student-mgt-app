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
  Box,
} from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const StudentTable = ({ students, onEdit, onDelete, action }) => {
  return (
    <Box display="flex" justifyContent="center" mt={2}>
      <TableContainer component={Paper} sx={{ maxWidth: 1000 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Date Of Birth</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Telephone</TableCell>
              <TableCell
                sx={action ? { display: "block" } : { display: "none" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.dob.toLocaleDateString()}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell
                  sx={action ? { display: "block" } : { display: "none" }}
                >
                  <Stack direction={"row"} sx={{ maxWidth: "100px" }}>
                    <IconButton
                      aria-label="edit"
                      onClick={() => onEdit(student)}
                    >
                      <DriveFileRenameOutlineIcon />
                    </IconButton>

                    <IconButton
                      aria-label="delete"
                      onClick={() => onDelete(student.id)}
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
    </Box>
  );
};

export default StudentTable;

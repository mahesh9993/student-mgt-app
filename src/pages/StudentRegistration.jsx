import React from "react";
import StudentForm from "../componants/StudentForm";
import StudentTable from "../componants/common/StudentTable";
import Navbar from "../componants/Navbar";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StudentRegistration = ({ students, onSubmit, onAdd }) => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    onSubmit();
    navigate("/");
  };
  return (
    <div>
      <Navbar navName={"Student Registration"} />
      <StudentForm onAdd={onAdd} />
      <StudentTable students={students} action={false} />
      <Box
        sx={
          students.length !== 0
            ? { display: "flex", justifyContent: "flex-end", margin: 2 }
            : { display: "none" }
        }
      >
        <Button
          type="button"
          variant="contained"
          color="primary"
          sx={{ width: "80px" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default StudentRegistration;

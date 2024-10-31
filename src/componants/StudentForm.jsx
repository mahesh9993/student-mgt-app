import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import DateField from "./common/DateField";
import RadioField from "./common/RadioField";
import InputField from "./common/InputField";

const StudentForm = ({ onSubmit, currentStudent, onUpdate }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    gender: null,
    address: "",
    dob: new Date(),
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (currentStudent) {
      setFormData(currentStudent);
    }
  }, [currentStudent]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDobChange = (date) => {
    let dob = date.format("YYYY-MM-DD");
    setFormData({ ...formData, dob: new Date(dob) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { ...formData };
    if (currentStudent) {
      onUpdate(student);
    } else {
      onSubmit(student);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >
      <InputField
        label={"Full Name"}
        variant={"outlined"}
        name={"name"}
        value={formData.name}
        onChange={handleInputChange}
      />
      <InputField
        label={"Address"}
        variant={"outlined"}
        name={"address"}
        value={formData.address}
        onChange={handleInputChange}
      />
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <DateField onChange={handleDobChange} value={null} />
        <RadioField value={formData.gender} onChange={handleInputChange} />
      </Box>
      <InputField
        label={"Email"}
        variant={"outlined"}
        name={"email"}
        value={formData.email}
        onChange={handleInputChange}
      />
      <InputField
        label={"Telephone"}
        variant={"outlined"}
        name={"phone"}
        width={"350px"}
        value={formData.phone}
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ width: "80px", marginLeft: "auto" }}
        onClick={handleSubmit}
      >
        {currentStudent ? "Update" : "Add"}
      </Button>
    </Box>
  );
};

export default StudentForm;

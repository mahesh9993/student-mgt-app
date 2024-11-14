import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import DateField from "./common/DateField";
import RadioField from "./common/RadioField";
import InputField from "./common/InputField";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

const StudentForm = ({ onAdd, currentStudent, onUpdate }) => {
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    gender: null,
    address: "",
    dob: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (currentStudent) {
      setFormData(currentStudent);
    }
  }, [currentStudent]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "gender") {
      setFormData({
        ...formData,
        [name]: Number(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleDobChange = (date) => {
    let dob = date.format("YYYY-MM-DD");
    setFormData({ ...formData, dob: new Date(dob).toISOString() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors || {});

    if (errors) return;

    const student = { ...formData };
    if (currentStudent) {
      onUpdate(student);
      navigate("/");
    } else {
      onAdd(student);
      setFormData({
        id: 0,
        name: "",
        gender: null,
        address: "",
        dob: "",
        email: "",
        phone: "",
      });
    }
  };

  const schema = Joi.object({
    id: Joi.number().integer(),
    name: Joi.string().required().label("Full Name"),
    gender: Joi.number().integer().required().label("Gender"),
    address: Joi.string().required().label("Address"),
    dob: Joi.date().required().label("Date Of Birth"),
    email: Joi.string()
      .email({ tlds: { allow: ["com", "net", "org"] } })
      .required()
      .label("Email"),
    phone: Joi.string().min(10).max(10).required().label("Telephone No"),
  });

  const validate = () => {
    const { error } = schema.validate(formData, { abortEarly: false });
    if (!error) return null;

    const errors = {};
    error.details.forEach((detail) => {
      errors[detail.path[0]] = detail.message;
    });
    return errors;
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
        error={errors.name}
      />
      <InputField
        label={"Address"}
        variant={"outlined"}
        name={"address"}
        value={formData.address}
        onChange={handleInputChange}
        error={errors.address}
      />
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <DateField onChange={handleDobChange} value={null} error={errors.dob} />
        <RadioField value={formData.gender} onChange={handleInputChange} />
      </Box>
      <InputField
        label={"Email"}
        variant={"outlined"}
        name={"email"}
        value={formData.email}
        onChange={handleInputChange}
        error={errors.email}
      />
      <InputField
        label={"Telephone"}
        variant={"outlined"}
        name={"phone"}
        width={"350px"}
        value={formData.phone}
        onChange={handleInputChange}
        error={errors.phone}
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

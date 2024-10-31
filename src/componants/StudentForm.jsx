import React from "react";
import { Box, Button } from "@mui/material";
import DateField from "./common/DateField";
import RadioField from "./common/RadioField";
import InputField from "./common/InputField";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
  });
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
      <InputField label={"Full Name"} variant={"outlined"} name={"name"} />
      <InputField label={"Address"} variant={"outlined"} name={"address"} />
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <DateField />
        <RadioField />
      </Box>
      <InputField label={"Email"} variant={"outlined"} name={"email"} />
      <InputField
        label={"Telephone"}
        variant={"outlined"}
        name={"telephone"}
        width={"350px"}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ width: "50px", marginLeft: "auto" }}
      >
        Add
      </Button>
    </Box>
  );
};

export default StudentForm;

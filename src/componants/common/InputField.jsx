import React from "react";
import { TextField } from "@mui/material";

const InputField = ({ label, variant, name, type, width }) => {
  return (
    <TextField
      label={label}
      variant={variant}
      name={name}
      type={type}
      sx={{ width: width }}
    />
  );
};

export default InputField;

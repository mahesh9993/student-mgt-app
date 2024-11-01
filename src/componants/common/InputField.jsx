import React from "react";
import { TextField } from "@mui/material";

const InputField = ({
  label,
  variant,
  name,
  type,
  width,
  value,
  onChange,
  error,
}) => {
  return (
    <TextField
      label={label}
      variant={variant}
      name={name}
      type={type}
      value={value}
      sx={{ width: width }}
      onChange={onChange}
      error={!!error}
      helperText={error || ""}
    />
  );
};

export default InputField;

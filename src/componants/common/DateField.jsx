import { Stack, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";

const DateField = ({ onChange, value, error }) => {
  //console.log(dob.format("YYYY-MM-DD"));

  return (
    <Stack spacing={2}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date of Birth"
          sx={{ width: "350px" }}
          slots={{
            textField: (params) => (
              <TextField {...params} error={!!error} helperText={error || ""} />
            ),
          }}
          value={value}
          onChange={(newValue) => onChange(newValue)}
        />
      </LocalizationProvider>
    </Stack>
  );
};

export default DateField;

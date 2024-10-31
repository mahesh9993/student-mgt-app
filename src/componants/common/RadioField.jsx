import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box } from "@mui/material";

const RadioField = () => {
  return (
    <FormControl sx={{ marginLeft: "40px" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
        <FormLabel id="select-gender">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="select-gender"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </Box>
    </FormControl>
  );
};

export default RadioField;

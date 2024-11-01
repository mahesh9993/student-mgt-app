import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, FormHelperText } from "@mui/material";

const RadioField = ({ onChange, value, error }) => {
  return (
    <FormControl sx={{ marginLeft: "40px" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
        <FormLabel id="select-gender">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="select-gender"
          name="row-radio-buttons-group"
          value={value}
          onChange={onChange}
        >
          <FormControlLabel
            value="0"
            control={<Radio />}
            label="Female"
            name="gender"
          />
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="Male"
            name="gender"
          />
        </RadioGroup>
      </Box>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default RadioField;

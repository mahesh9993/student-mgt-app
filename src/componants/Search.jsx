import React from "react";
import { Box, TextField, Button } from "@mui/material";

const Search = ({ onSearch, onSearchChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginLeft: 22,
        marginTop: 2,
        marginBottom: 3,
      }}
    >
      <TextField
        label="Telephone"
        variant="outlined"
        placeholder="Telephone"
        onChange={(e) => onSearchChange(e.target.value)}
        sx={{ marginRight: 1 }}
        size="small"
      />
      <Button variant="contained" color="primary" onClick={onSearch}>
        Search
      </Button>
    </Box>
  );
};

export default Search;

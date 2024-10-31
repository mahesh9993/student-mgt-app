import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <Box sx={{ mb: "5px" }}>
      <AppBar position="static" color="gray">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Students List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

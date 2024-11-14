import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = ({ navName }) => {
  return (
    <Box sx={{ mb: "15px", display: "flex", justifyContent: "center" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "lightgray",
          boxShadow: "none",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            {navName}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

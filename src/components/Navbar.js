import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { logo_sm } from "../assets/images/image";



const Logo = styled("img")({
   height: "50px",
});

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">
          <Logo src={logo_sm} alt="Logo" />
        </Typography>
        <StyledButton onClick={handleLogout}>Logout</StyledButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;

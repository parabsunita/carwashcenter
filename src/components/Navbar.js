import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { logo_sm } from "../assets/images/image";
import AccountCircle from "@mui/icons-material/AccountCircle"; // User icon
import Settings from "@mui/icons-material/Settings"; // Settings icon
import ContactMail from "@mui/icons-material/ContactMail"; // Contact Us icon

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
    handleMenuClose(); // Close the menu when opening the drawer
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between",height:"5rem "}}>
        <Typography variant="h6">
          <Logo src={logo_sm} alt="Logo" className="logo" />
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }} onClick={handleMenuClick}>
          <StyledButton style={{ textTransform: 'none',width:'auto',padding:"0px 30px" }} >
          <IconButton color="inherit"  sx={{ fontSize: 40 }}>
            <AccountCircle />
          </IconButton>John Wick</StyledButton>
        </Box>
      </Toolbar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        
      >
        <MenuItem onClick={handleDrawerOpen} sx={{ width: 160 }}>
          <AccountCircle sx={{ marginRight: 1 }} />
          Profile
        </MenuItem>
        <MenuItem onClick={handleDrawerClose} sx={{ width: 160 }}>
          <Settings sx={{ marginRight: 1 }} />
          Settings
        </MenuItem>
        <MenuItem onClick={handleDrawerClose} sx={{ width: 160 }}>
          <ContactMail sx={{ marginRight: 1 }} />
          Contact Us
        </MenuItem>
        <MenuItem onClick={handleLogout} sx={{ width: 160 }}>
          <AccountCircle sx={{ marginRight: 1 }} />
          Logout
        </MenuItem>
      </Menu>
    </StyledAppBar>
  );
};

export default Navbar;

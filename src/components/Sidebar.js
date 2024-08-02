import React from "react";
import { List, ListItem, ListItemText, Drawer } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import carWashLogo from '../images/car-wash-logo-bhUYW2jRQcqLo9UuMyEvew-JHZ_q0K4Qaya3JpzRgX6Mg.jpeg'; // Import the logo

const Sidebar = () => {
  const location = useLocation();
  const theme = useTheme();
  const navbarHeight = "64px"; // Adjust this value to match your Navbar height

  const menuItems = [
    { text: "Dashboard", path: "/dashboard" },
    { text: "Node Service", path: "/node-service" },
    { text: "Contact Details", path: "/contact-details" },
    { text: "Customer Details", path: "/customer-details" },
    { text: "Plan Details", path: "/plan-details" },
  ];

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        mt: navbarHeight, // Set marginTop based on Navbar height
        "& .MuiDrawer-paper": {
          width: 240,
          backgroundColor: theme.palette.custom.firefly,
          color: theme.palette.custom.apache,
          marginTop:7,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }
      }}
      variant="permanent"
    >
      <List>
        {menuItems.map((item) => (
          <Link
            to={item.path}
            key={item.text}
            style={{ textDecoration: "none", color: "inherit" ,fontWeight:700}}
          >
            <ListItem 
              button 
              
              selected={location.pathname === item.path}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: theme.palette.custom.apache,
                  color: theme.palette.custom.firefly,
                  '&:hover': {
                    backgroundColor: theme.palette.custom.cello,
                  },
                },
                '&:hover': {
                  backgroundColor: theme.palette.custom.limedSpruce,
                },
                color: theme.palette.custom.apache, // Default color
              }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

import React from "react";
import { List, ListItem, ListItemText, Drawer } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import carWashLogo from '../images/car-wash-logo-bhUYW2jRQcqLo9UuMyEvew-JHZ_q0K4Qaya3JpzRgX6Mg.jpeg'; // Import the logo
import { Lambo } from "../assets/images/image";
import '../css/Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const theme = useTheme();
  const navbarHeight = "4%"; // Adjust this value to match your Navbar height

  const menuItems = [
    { text: "Dashboard", path: "/dashboard" },
    { text: "Service", path: "/services" },
    { text: "Plan", path: "/plans" },
    { text: "Customers", path: "/customers" },
    { text: "Bookings", path: "/bookings" },
    // { text: "Payments", path: "/payments" },
    { text: "Profile", path: "/contact" }

  ];

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        // Set marginTop based on Navbar height
        "& .MuiDrawer-paper": {
          width: 240,
          height: '100%',
          mt: navbarHeight,
          backgroundImage: `url(${Lambo})`, // Set the background image
          backgroundSize: 'cover', // Cover the entire drawer
          zIndex: 0,
          backgroundPosition: 'center', // Center the background image
          backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
          color: theme.palette.custom.apache,
        }
      }}
      variant="permanent"
      
    >
      <List className="sidebar">
        {menuItems.map((item) => (
          <Link
            to={item.path}
            key={item.text}
            style={{ textDecoration: "none", color: "inherit", fontWeight: 700 }}
          >
            <ListItem
              button
              selected={location.pathname === item.path}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: theme.palette.custom.cello,
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
              className="sidebar-menu-list"
            >
              <ListItemText
                primary={item.text}
                sx={{
                  fontWeight: '600', // Set font weight to bold
                  fontSize: '12px'    // Set the desired font size
                }}
              />
            </ListItem>
          </Link>
        ))}
      </List>

    </Drawer>
  );
};

export default Sidebar;

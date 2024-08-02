import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";

const AuthLayout = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default AuthLayout;

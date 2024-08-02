import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../css/Dashboard.css";
const Root = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
});

const Main = styled(Box)({
  display: "flex",
  flexGrow: 1,
  backgroundColor: "#f4f6f8",
  //   marginTop: "64px", // Adjust based on the Navbar height
});

const Content = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  backgroundColor: "#fff",
  boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)",
}));

const DashboardLayout = () => {
  return (
    <Root>
      <Navbar />
      <Main>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </Main>
    </Root>
  );
};

export default DashboardLayout;

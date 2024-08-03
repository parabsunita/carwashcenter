import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import NodeService from "./pages/NodeService";
import ContactDetails from "./pages/ContactDetails";
import CustomerDetails from "./pages/CustomerDetails";
import PlanDetails from "./pages/PlanDetails";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import AuthLayout from "./components/AuthLayout";
import DashboardLayout from "./components/DashboardLayout";
import Register from "./pages/Register";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/register" element={<Register/>}/>
          </Route>

          {/* Dashboard Routes */}
          <Route
            path="/"
            element={
              <AuthenticatedRoute>
                <DashboardLayout />
              </AuthenticatedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/node-service" element={<NodeService />} />
            <Route path="/contact-details" element={<ContactDetails />} />
            <Route path="/customer-details" element={<CustomerDetails />} />
            <Route path="/plan-details" element={<PlanDetails />} />
          </Route>

          {/* Redirect all other paths to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

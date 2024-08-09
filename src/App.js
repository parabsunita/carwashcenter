import React, { useState, useEffect } from "react";
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
import NodeService from "./pages/Services";
import ContactDetails from "./pages/ContactDetails";
import CustomerDetails from "./pages/Customers";
import PlanDetails from "./pages/PlanDetails";
import PlanList from "./pages/PlanList";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import AuthLayout from "./components/AuthLayout";
import DashboardLayout from "./components/DashboardLayout";
import Register from "./pages/Register";
import Payments from "./pages/Payments";
import Loader from "./components/Loader"; // Import the Loader component
import './App.css'; // Import the App.css for styling

function App() {
  // State to manage loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch or authentication check
    const loadData = async () => {
      // Simulate a delay for the loader
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds delay
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/register" element={<Register />} />
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
            <Route path="/services" element={<NodeService />} />
            <Route path="/contact" element={<ContactDetails />} />
            <Route path="/customers" element={<CustomerDetails />} />
            <Route path="/plan-details" element={<PlanDetails />} />
            <Route path="/plans" element={<PlanList />} />
            <Route path="/payments" element={<Payments />} />
          </Route>

          {/* Redirect all other paths to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
      {loading && (
        <div className="loader-overlay">
          <Loader />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;

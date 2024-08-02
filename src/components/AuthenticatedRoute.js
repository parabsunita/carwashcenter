// src/components/AuthenticatedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const AuthenticatedRoute = ({ children }) => {
  const isAuthenticated = () => {
    return true;
  };

  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default AuthenticatedRoute;

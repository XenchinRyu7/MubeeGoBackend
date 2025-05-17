import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  
  // Check if user exists in context or localStorage
  const isAuthenticated = user || localStorage.getItem('user');

  if (!isAuthenticated) {
    // Save the attempted route to redirect back after login
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;

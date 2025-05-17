import React, { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check authentication status
  const cachedUser = localStorage.getItem('user');
  const isAuthenticated = user || cachedUser;

  // Handle URL changes while component is mounted
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [location.pathname, isAuthenticated, navigate]);

  // Immediately redirect if authenticated
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize user from cache
  useEffect(() => {
    const cachedUser = localStorage.getItem('user');
    if (cachedUser && !user) {
      setUser(JSON.parse(cachedUser));
    }
  }, [user]);

  // Handle route protection
  useEffect(() => {
    const cachedUser = localStorage.getItem('user');
    if (cachedUser || user) {
      const authRoutes = ['/sign-in', '/sign-up', '/forgot-password'];
      if (authRoutes.includes(location.pathname)) {
        navigate('/', { replace: true });
      }
    }
  }, [location.pathname, user, navigate]);

  const login = (email, password, rememberMe = false) => {
    if (email === 'admin@admin.com' && password === 'admin123') {
      const userData = { email };
      setUser(userData);
      
      // Always store in localStorage for consistent behavior
      localStorage.setItem('user', JSON.stringify(userData));
      
      navigate('/');
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/sign-in');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;

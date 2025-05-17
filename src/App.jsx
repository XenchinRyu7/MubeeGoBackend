import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteScrollToTop from './helper/RouteScrollToTop';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

// Import route configurations
import dashboardRoutes from './routes/dashboardRoutes';
import authRoutes from './routes/authRoutes';
import componentRoutes from './routes/componentRoutes';
import featureRoutes from './routes/featureRoutes';
import utilityRoutes from './routes/utilityRoutes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RouteScrollToTop />
        <Routes>
          {/* Auth Routes - Public */}
          {authRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <PublicRoute>
                  {element}
                </PublicRoute>
              }
            />
          ))}

          {/* Dashboard Routes - Protected */}
          {dashboardRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <ProtectedRoute>
                  {element}
                </ProtectedRoute>
              }
            />
          ))}

          {/* Component Routes - Protected */}
          {componentRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <ProtectedRoute>
                  {element}
                </ProtectedRoute>
              }
            />
          ))}

          {/* Feature Routes - Protected */}
          {featureRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <ProtectedRoute>
                  {element}
                </ProtectedRoute>
              }
            />
          ))}

          {/* Utility Routes - Mixed Protection */}
          {utilityRoutes.map(({ path, element }) => {
            // Public error pages
            if (path === '*' || path === '/maintenance' || path === '/coming-soon') {
              return <Route key={path} path={path} element={element} />;
            }
            // Protected utility pages
            return (
              <Route
                key={path}
                path={path}
                element={
                  <ProtectedRoute>
                    {element}
                  </ProtectedRoute>
                }
              />
            );
          })}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

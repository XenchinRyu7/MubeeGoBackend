import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';

const authRoutes = [
  { path: '/sign-in', element: <SignInPage /> },
  { path: '/sign-up', element: <SignUpPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
];

export default authRoutes;

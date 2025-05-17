import ErrorPage from '../pages/ErrorPage';
import AccessDeniedPage from '../pages/AccessDeniedPage';
import MaintenancePage from '../pages/MaintenancePage';
import BlankPagePage from '../pages/BlankPagePage';
import ComingSoonPage from '../pages/ComingSoonPage';
import CompanyPage from '../pages/CompanyPage';
import FaqPage from '../pages/FaqPage';
import LanguagePage from '../pages/LanguagePage';
import NotificationPage from '../pages/NotificationPage';
import NotificationAlertPage from '../pages/NotificationAlertPage';
import PaymentGatewayPage from '../pages/PaymentGatewayPage';
import PricingPage from '../pages/PricingPage';
import TermsConditionPage from '../pages/TermsConditionPage';
import ThemePage from '../pages/ThemePage';
import UsersGridPage from '../pages/UsersGridPage';
import UsersListPage from '../pages/UsersListPage';
import ViewProfilePage from '../pages/ViewProfilePage';
import WalletPage from '../pages/WalletPage';

const utilityRoutes = [
  // Error & Status Pages
  { path: '/access-denied', element: <AccessDeniedPage /> },
  { path: '/maintenance', element: <MaintenancePage /> },
  { path: '/blank-page', element: <BlankPagePage /> },
  { path: '/coming-soon', element: <ComingSoonPage /> },
  
  // User Management
  { path: '/users-grid', element: <UsersGridPage /> },
  { path: '/users-list', element: <UsersListPage /> },
  { path: '/view-profile', element: <ViewProfilePage /> },
  
  // Settings & Configuration
  { path: '/company', element: <CompanyPage /> },
  { path: '/language', element: <LanguagePage /> },
  { path: '/theme', element: <ThemePage /> },
  { path: '/notification', element: <NotificationPage /> },
  { path: '/notification-alert', element: <NotificationAlertPage /> },
  
  // Other Utility Pages
  { path: '/faq', element: <FaqPage /> },
  { path: '/payment-gateway', element: <PaymentGatewayPage /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/terms-condition', element: <TermsConditionPage /> },
  { path: '/wallet', element: <WalletPage /> },
  
  // 404 Route (should be last)
  { path: '*', element: <ErrorPage /> },
];

export default utilityRoutes;

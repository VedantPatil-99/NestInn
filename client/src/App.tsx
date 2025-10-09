import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { useAuth } from '@hooks/useAuth';
import { useTheme } from '@hooks/useTheme';
import { ROUTES } from '@utils/constants';

// Layout Components
import { Layout } from '@components/layout/Layout';

// Page Components
import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/auth/LoginPage';
import { SignupPage } from '@pages/auth/SignupPage';
import { ForgotPasswordPage } from '@pages/auth/ForgotPasswordPage';
import { VerifyOtpPage } from '@pages/auth/VerifyOtpPage';
import { HostelsPage } from '@pages/hostels/HostelsPage';
import { HostelDetailsPage } from '@pages/hostels/HostelDetailsPage';
import { CreateHostelPage } from '@pages/hostels/CreateHostelPage';
import { EditHostelPage } from '@pages/hostels/EditHostelPage';
import { ReservationsPage } from '@pages/reservations/ReservationsPage';
import { CreateReservationPage } from '@pages/reservations/CreateReservationPage';
import { ReservationDetailsPage } from '@pages/reservations/ReservationDetailsPage';
import { UserDashboard } from '@pages/dashboard/UserDashboard';
import { HostDashboard } from '@pages/dashboard/HostDashboard';

// Common Components
import { LoadingSpinner } from '@components/common/LoadingSpinner';
import { ErrorBoundary } from '@components/common/ErrorBoundary';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Protected Route Component
interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requiredRole?: 'user' | 'host' | 'admin';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAuth = true, 
  requiredRole 
}) => {
  const { isAuthenticated, user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (requireAuth && !isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  if (requiredRole && user?.role !== requiredRole && user?.role !== 'admin') {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <>{children}</>;
};

// Public Route Component (redirect if authenticated)
interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <>{children}</>;
};

function App() {
  const { initialize } = useAuth();
  const { initialize: initializeTheme } = useTheme();

  useEffect(() => {
    // Initialize auth and theme on app start
    initialize();
    initializeTheme();
  }, [initialize, initializeTheme]);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors">
            <Routes>
              {/* Public Routes */}
              <Route
                path={ROUTES.LOGIN}
                element={
                  <PublicRoute>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path={ROUTES.SIGNUP}
                element={
                  <PublicRoute>
                    <SignupPage />
                  </PublicRoute>
                }
              />
              <Route
                path={ROUTES.FORGOT_PASSWORD}
                element={
                  <PublicRoute>
                    <ForgotPasswordPage />
                  </PublicRoute>
                }
              />
              <Route
                path={ROUTES.VERIFY_OTP}
                element={
                  <PublicRoute>
                    <VerifyOtpPage />
                  </PublicRoute>
                }
              />

              {/* Protected Routes with Layout */}
              <Route
                path="/*"
                element={
                  <Layout>
                    <Routes>
                      {/* Home */}
                      <Route path={ROUTES.HOME} element={<HomePage />} />

                      {/* Hostels */}
                      <Route path={ROUTES.HOSTELS} element={<HostelsPage />} />
                      <Route path={ROUTES.HOSTEL_DETAILS} element={<HostelDetailsPage />} />
                      <Route
                        path={ROUTES.CREATE_HOSTEL}
                        element={
                          <ProtectedRoute requiredRole="host">
                            <CreateHostelPage />
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path={ROUTES.EDIT_HOSTEL}
                        element={
                          <ProtectedRoute requiredRole="host">
                            <EditHostelPage />
                          </ProtectedRoute>
                        }
                      />

                      {/* Reservations */}
                      <Route
                        path={ROUTES.RESERVATIONS}
                        element={
                          <ProtectedRoute>
                            <ReservationsPage />
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path={ROUTES.CREATE_RESERVATION}
                        element={
                          <ProtectedRoute>
                            <CreateReservationPage />
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path={ROUTES.RESERVATION_DETAILS}
                        element={
                          <ProtectedRoute>
                            <ReservationDetailsPage />
                          </ProtectedRoute>
                        }
                      />

                      {/* Dashboard */}
                      <Route
                        path={ROUTES.DASHBOARD}
                        element={
                          <ProtectedRoute>
                            <DashboardRouter />
                          </ProtectedRoute>
                        }
                      />

                      {/* Catch all - redirect to home */}
                      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
                    </Routes>
                  </Layout>
                }
              />
            </Routes>

            {/* Global Toast Notifications */}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: 'var(--background)',
                  color: 'var(--foreground)',
                  border: '1px solid var(--border)',
                },
                success: {
                  iconTheme: {
                    primary: '#10b981',
                    secondary: '#ffffff',
                  },
                },
                error: {
                  iconTheme: {
                    primary: '#ef4444',
                    secondary: '#ffffff',
                  },
                },
              }}
            />
          </div>
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

// Dashboard Router Component
const DashboardRouter: React.FC = () => {
  const { user } = useAuth();

  if (user?.role === 'host' || user?.role === 'admin') {
    return <HostDashboard />;
  }

  return <UserDashboard />;
};

export default App;
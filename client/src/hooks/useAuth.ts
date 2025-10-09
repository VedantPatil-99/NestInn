import { useAuthStore } from '@store/authStore';
import { User } from '@types/auth';

export const useAuth = () => {
  const {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    login,
    signup,
    logout,
    getCurrentUser,
    updateProfile,
    changePassword,
    forgotPassword,
    resetPassword,
    verifyOtp,
    googleLogin,
    setError,
    clearError,
    initialize,
  } = useAuthStore();

  return {
    // State
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    
    // Computed
    isAdmin: user?.role === 'admin',
    isHost: user?.role === 'host' || user?.role === 'admin',
    isUser: user?.role === 'user',
    
    // Actions
    login,
    signup,
    logout,
    getCurrentUser,
    updateProfile,
    changePassword,
    forgotPassword,
    resetPassword,
    verifyOtp,
    googleLogin,
    setError,
    clearError,
    initialize,
    
    // Utility functions
    hasRole: (role: User['role']) => user?.role === role,
    hasAnyRole: (roles: User['role'][]) => user ? roles.includes(user.role) : false,
  };
};
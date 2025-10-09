import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@types/auth';
import { STORAGE_KEYS } from '@utils/constants';
import { authService } from '@services/authService';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface AuthActions {
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  getCurrentUser: () => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  verifyOtp: (email: string, otp: string) => Promise<void>;
  googleLogin: (token: string) => Promise<void>;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
  initialize: () => Promise<void>;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      login: async (email: string, password: string) => {
        try {
          set({ isLoading: true, error: null });
          
          const response = await authService.login({ email, password });
          
          if (response.success && response.data) {
            const { user, token, refreshToken } = response.data;
            
            // Store tokens
            localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
            if (refreshToken) {
              localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
            }
            
            set({
              user,
              token,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
          } else {
            throw new Error(response.message || 'Login failed');
          }
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.message || 'Login failed',
          });
          throw error;
        }
      },

      signup: async (username: string, email: string, password: string) => {
        try {
          set({ isLoading: true, error: null });
          
          const response = await authService.signup({
            username,
            email,
            password,
            confirmPassword: password,
          });
          
          if (response.success && response.data) {
            const { user, token, refreshToken } = response.data;
            
            // Store tokens
            localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
            if (refreshToken) {
              localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
            }
            
            set({
              user,
              token,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
          } else {
            throw new Error(response.message || 'Signup failed');
          }
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.message || 'Signup failed',
          });
          throw error;
        }
      },

      logout: async () => {
        try {
          await authService.logout();
        } catch (error) {
          // Continue with logout even if API call fails
          console.error('Logout API error:', error);
        } finally {
          // Clear local storage
          localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
          localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
          
          set({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });
        }
      },

      getCurrentUser: async () => {
        try {
          const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
          if (!token) return;

          set({ isLoading: true });
          
          const response = await authService.getCurrentUser();
          
          if (response.success && response.data) {
            set({
              user: response.data,
              token,
              isAuthenticated: true,
              isLoading: false,
            });
          } else {
            // Invalid token, clear auth state
            get().logout();
          }
        } catch (error: any) {
          console.error('Get current user error:', error);
          get().logout();
        }
      },

      updateProfile: async (data: Partial<User>) => {
        try {
          set({ isLoading: true, error: null });
          
          const response = await authService.updateProfile(data);
          
          if (response.success && response.data) {
            set({
              user: response.data,
              isLoading: false,
            });
          } else {
            throw new Error(response.message || 'Profile update failed');
          }
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.message || 'Profile update failed',
          });
          throw error;
        }
      },

      changePassword: async (currentPassword: string, newPassword: string) => {
        try {
          set({ isLoading: true, error: null });
          
          const response = await authService.changePassword({
            currentPassword,
            newPassword,
          });
          
          if (response.success) {
            set({ isLoading: false });
          } else {
            throw new Error(response.message || 'Password change failed');
          }
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.message || 'Password change failed',
          });
          throw error;
        }
      },

      forgotPassword: async (email: string) => {
        try {
          set({ isLoading: true, error: null });
          
          const response = await authService.forgotPassword({ email });
          
          if (response.success) {
            set({ isLoading: false });
          } else {
            throw new Error(response.message || 'Failed to send reset email');
          }
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.message || 'Failed to send reset email',
          });
          throw error;
        }
      },

      resetPassword: async (token: string, password: string) => {
        try {
          set({ isLoading: true, error: null });
          
          const response = await authService.resetPassword({
            token,
            password,
            confirmPassword: password,
          });
          
          if (response.success) {
            set({ isLoading: false });
          } else {
            throw new Error(response.message || 'Password reset failed');
          }
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.message || 'Password reset failed',
          });
          throw error;
        }
      },

      verifyOtp: async (email: string, otp: string) => {
        try {
          set({ isLoading: true, error: null });
          
          const response = await authService.verifyOtp({ email, otp });
          
          if (response.success) {
            set({ isLoading: false });
          } else {
            throw new Error(response.message || 'OTP verification failed');
          }
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.message || 'OTP verification failed',
          });
          throw error;
        }
      },

      googleLogin: async (token: string) => {
        try {
          set({ isLoading: true, error: null });
          
          const response = await authService.googleLogin(token);
          
          if (response.success && response.data) {
            const { user, token: authToken, refreshToken } = response.data;
            
            // Store tokens
            localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, authToken);
            if (refreshToken) {
              localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
            }
            
            set({
              user,
              token: authToken,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
          } else {
            throw new Error(response.message || 'Google login failed');
          }
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.message || 'Google login failed',
          });
          throw error;
        }
      },

      // Utility actions
      setUser: (user: User | null) => set({ user }),
      setToken: (token: string | null) => set({ token }),
      setLoading: (isLoading: boolean) => set({ isLoading }),
      setError: (error: string | null) => set({ error }),
      clearError: () => set({ error: null }),

      // Initialize auth state on app start
      initialize: async () => {
        const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
        if (token) {
          await get().getCurrentUser();
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
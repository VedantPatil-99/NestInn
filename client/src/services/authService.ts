import { apiClient } from './api';
import { 
  LoginCredentials, 
  SignupCredentials, 
  AuthResponse, 
  ForgotPasswordData, 
  ResetPasswordData, 
  VerifyOtpData,
  User 
} from '@types/auth';
import { ApiResponse } from '@types/common';

class AuthService {
  // Login user
  async login(credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> {
    return apiClient.post('/auth/login', credentials);
  }

  // Register user
  async signup(credentials: SignupCredentials): Promise<ApiResponse<AuthResponse>> {
    return apiClient.post('/auth/signup', credentials);
  }

  // Logout user
  async logout(): Promise<ApiResponse> {
    return apiClient.post('/auth/logout');
  }

  // Get current user
  async getCurrentUser(): Promise<ApiResponse<User>> {
    return apiClient.get('/auth/me');
  }

  // Refresh token
  async refreshToken(refreshToken: string): Promise<ApiResponse<{ token: string }>> {
    return apiClient.post('/auth/refresh', { refreshToken });
  }

  // Forgot password
  async forgotPassword(data: ForgotPasswordData): Promise<ApiResponse> {
    return apiClient.post('/auth/forgot-password', data);
  }

  // Reset password
  async resetPassword(data: ResetPasswordData): Promise<ApiResponse> {
    return apiClient.post('/auth/reset-password', data);
  }

  // Verify OTP
  async verifyOtp(data: VerifyOtpData): Promise<ApiResponse> {
    return apiClient.post('/auth/verify-otp', data);
  }

  // Resend OTP
  async resendOtp(email: string): Promise<ApiResponse> {
    return apiClient.post('/auth/resend-otp', { email });
  }

  // Google OAuth login
  async googleLogin(token: string): Promise<ApiResponse<AuthResponse>> {
    return apiClient.post('/auth/google', { token });
  }

  // Update profile
  async updateProfile(data: Partial<User>): Promise<ApiResponse<User>> {
    return apiClient.patch('/auth/profile', data);
  }

  // Change password
  async changePassword(data: { currentPassword: string; newPassword: string }): Promise<ApiResponse> {
    return apiClient.patch('/auth/change-password', data);
  }

  // Delete account
  async deleteAccount(password: string): Promise<ApiResponse> {
    return apiClient.delete('/auth/account', { data: { password } });
  }

  // Upload avatar
  async uploadAvatar(file: File): Promise<ApiResponse<{ url: string }>> {
    const formData = new FormData();
    formData.append('avatar', file);
    return apiClient.upload('/auth/avatar', formData);
  }
}

export const authService = new AuthService();
export default authService;
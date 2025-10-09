export interface User {
  _id: string;
  username: string;
  email: string;
  role: 'user' | 'admin' | 'host';
  createdAt: string;
  avatar?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface VerifyOtpData {
  email: string;
  otp: string;
}

export interface GoogleAuthResponse {
  user: User;
  token: string;
  isNewUser: boolean;
}
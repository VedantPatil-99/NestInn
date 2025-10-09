// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// App Configuration
export const APP_NAME = 'NestInn';
export const APP_DESCRIPTION = 'Modern hostel & food point booking system for students';

// Pagination
export const DEFAULT_PAGE_SIZE = 12;
export const MAX_PAGE_SIZE = 50;

// File Upload
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
export const MAX_IMAGES_PER_HOSTEL = 10;

// Validation
export const PASSWORD_MIN_LENGTH = 8;
export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 30;

// Date Formats
export const DATE_FORMAT = 'MMM dd, yyyy';
export const DATETIME_FORMAT = 'MMM dd, yyyy HH:mm';
export const TIME_FORMAT = 'HH:mm';

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'nestinn_auth_token',
  REFRESH_TOKEN: 'nestinn_refresh_token',
  USER_PREFERENCES: 'nestinn_user_preferences',
  THEME: 'nestinn_theme',
  SEARCH_HISTORY: 'nestinn_search_history',
  VIEWED_HOSTELS: 'nestinn_viewed_hostels',
} as const;

// Theme
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const;

// Hostel Categories
export const FOR_WHOM_OPTIONS = [
  { value: 'Boys', label: 'Boys Only' },
  { value: 'Girls', label: 'Girls Only' },
  { value: 'Co-ed', label: 'Co-ed' },
  { value: 'Parents with Students', label: 'Parents with Students' },
] as const;

// Common Amenities
export const AMENITIES = [
  'WiFi',
  'AC',
  'Laundry',
  'Parking',
  'Security',
  'Mess/Kitchen',
  'Study Room',
  'Recreation Room',
  'Gym',
  'Medical Facility',
  'Power Backup',
  'Water Cooler',
  'CCTV',
  'Housekeeping',
  'Visitor Allowed',
] as const;

// Price Ranges for Filtering
export const PRICE_RANGES = [
  { min: 0, max: 5000, label: 'Under ₹5,000' },
  { min: 5000, max: 10000, label: '₹5,000 - ₹10,000' },
  { min: 10000, max: 15000, label: '₹10,000 - ₹15,000' },
  { min: 15000, max: 20000, label: '₹15,000 - ₹20,000' },
  { min: 20000, max: Infinity, label: 'Above ₹20,000' },
] as const;

// Rating Labels
export const RATING_LABELS = {
  1: 'Poor',
  2: 'Fair',
  3: 'Good',
  4: 'Very Good',
  5: 'Excellent',
} as const;

// Reservation Status
export const RESERVATION_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  CANCELLED: 'cancelled',
  COMPLETED: 'completed',
} as const;

// Payment Status
export const PAYMENT_STATUS = {
  PENDING: 'pending',
  PAID: 'paid',
  REFUNDED: 'refunded',
  FAILED: 'failed',
} as const;

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  VERIFY_OTP: '/verify-otp',
  HOSTELS: '/hostels',
  HOSTEL_DETAILS: '/hostels/:id',
  CREATE_HOSTEL: '/hostels/new',
  EDIT_HOSTEL: '/hostels/:id/edit',
  RESERVATIONS: '/reservations',
  RESERVATION_DETAILS: '/reservations/:id',
  CREATE_RESERVATION: '/reservations/new',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  FORBIDDEN: 'Access denied.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Something went wrong. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  FILE_TOO_LARGE: `File size must be less than ${MAX_FILE_SIZE / (1024 * 1024)}MB`,
  INVALID_FILE_TYPE: 'Please upload a valid image file (JPEG, PNG, WebP)',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Welcome back!',
  SIGNUP_SUCCESS: 'Account created successfully!',
  LOGOUT_SUCCESS: 'Logged out successfully!',
  PROFILE_UPDATED: 'Profile updated successfully!',
  HOSTEL_CREATED: 'Hostel created successfully!',
  HOSTEL_UPDATED: 'Hostel updated successfully!',
  HOSTEL_DELETED: 'Hostel deleted successfully!',
  RESERVATION_CREATED: 'Reservation created successfully!',
  RESERVATION_UPDATED: 'Reservation updated successfully!',
  RESERVATION_CANCELLED: 'Reservation cancelled successfully!',
  REVIEW_ADDED: 'Review added successfully!',
  REVIEW_UPDATED: 'Review updated successfully!',
  REVIEW_DELETED: 'Review deleted successfully!',
} as const;
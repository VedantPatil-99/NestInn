export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
}

export interface Coordinates {
  type: 'Point';
  coordinates: [number, number]; // [longitude, latitude]
}

export interface ImageFile {
  url: string;
  filename: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface FilterOptions {
  city?: string;
  state?: string;
  college?: string;
  minPrice?: number;
  maxPrice?: number;
  forWhom?: 'Boys' | 'Girls' | 'Parents with Students' | 'Co-ed';
  amenities?: string[];
}

export interface SearchParams extends FilterOptions {
  page?: number;
  limit?: number;
  sortBy?: 'price' | 'rating' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
}
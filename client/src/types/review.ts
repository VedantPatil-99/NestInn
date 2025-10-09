import { User } from './auth';

export interface Review {
  _id: string;
  rating: number;
  comment: string;
  author: User | string; // Can be populated or just ID
  hostel: string; // Hostel ID
  createdAt: string;
  updatedAt: string;
  sentiment?: 'positive' | 'negative' | 'neutral';
  isHelpful?: boolean;
  helpfulCount?: number;
  images?: string[];
}

export interface CreateReviewData {
  rating: number;
  comment: string;
  hostelId: string;
  images?: File[];
}

export interface UpdateReviewData {
  _id: string;
  rating?: number;
  comment?: string;
  images?: File[];
}

export interface ReviewStats {
  totalReviews: number;
  averageRating: number;
  ratingDistribution: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
  sentimentAnalysis: {
    positive: number;
    negative: number;
    neutral: number;
  };
}

export interface ReviewFilters {
  rating?: number;
  sentiment?: 'positive' | 'negative' | 'neutral';
  sortBy?: 'newest' | 'oldest' | 'highest' | 'lowest' | 'helpful';
}
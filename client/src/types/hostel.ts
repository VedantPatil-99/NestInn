import { Address, Coordinates, ImageFile } from './common';
import { User } from './auth';
import { Review } from './review';

export interface Hostel {
  _id: string;
  title: string;
  description: string;
  address: Address;
  forWhom: 'Boys' | 'Girls' | 'Parents with Students' | 'Co-ed';
  price: number;
  images: ImageFile[];
  nearbyColleges: string[];
  reviews: Review[] | string[]; // Can be populated or just IDs
  owner: User | string; // Can be populated or just ID
  geometry: Coordinates;
  amenities: string[];
  createdAt: string;
  avgRating?: number;
  reviewCount?: number;
  isBookmarked?: boolean;
}

export interface CreateHostelData {
  title: string;
  description: string;
  address: Address;
  forWhom: 'Boys' | 'Girls' | 'Parents with Students' | 'Co-ed';
  price: number;
  nearbyColleges: string[];
  amenities: string[];
  images?: File[];
}

export interface UpdateHostelData extends Partial<CreateHostelData> {
  _id: string;
}

export interface HostelFilters {
  city?: string;
  state?: string;
  college?: string;
  minPrice?: number;
  maxPrice?: number;
  forWhom?: string;
  amenities?: string[];
  rating?: number;
}

export interface HostelSearchResult extends Hostel {
  distance?: number;
  matchScore?: number;
}

export interface RecommendedHostel extends Hostel {
  score: number;
  reason: string;
}

export interface HostelStats {
  totalHostels: number;
  averagePrice: number;
  topCities: Array<{ city: string; count: number }>;
  popularAmenities: Array<{ amenity: string; count: number }>;
}
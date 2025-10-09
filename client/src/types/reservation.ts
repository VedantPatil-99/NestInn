import { User } from './auth';
import { Hostel } from './hostel';

export interface Reservation {
  _id: string;
  hostel: Hostel | string; // Can be populated or just ID
  user: User | string; // Can be populated or just ID
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  paymentStatus: 'pending' | 'paid' | 'refunded' | 'failed';
  paymentMethod?: 'card' | 'upi' | 'netbanking' | 'wallet';
  specialRequests?: string;
  createdAt: string;
  updatedAt: string;
  cancellationReason?: string;
  refundAmount?: number;
}

export interface CreateReservationData {
  hostelId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  specialRequests?: string;
}

export interface UpdateReservationData {
  _id: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  specialRequests?: string;
  status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}

export interface ReservationFilters {
  status?: string;
  dateRange?: {
    start: string;
    end: string;
  };
  hostelId?: string;
  sortBy?: 'newest' | 'oldest' | 'checkin' | 'checkout';
}

export interface ReservationStats {
  totalReservations: number;
  totalRevenue: number;
  upcomingReservations: number;
  completedReservations: number;
  cancelledReservations: number;
  averageStayDuration: number;
}

export interface PaymentData {
  reservationId: string;
  amount: number;
  method: 'card' | 'upi' | 'netbanking' | 'wallet';
  cardDetails?: {
    number: string;
    expiry: string;
    cvv: string;
    name: string;
  };
  upiId?: string;
}
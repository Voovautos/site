export interface User {
  id: string;
  email: string;
  name: string;
  userType: 'insurance_company' | 'adjustor' | 'contractor';
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  profileImage?: string;
  isVerified: boolean;
  membershipPlan?: 'free' | 'basic' | 'standard' | 'premium';
  membershipExpiry?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  location: {
    city: string;
    state: string;
    zipCode: string;
    counties: string[];
  };
  postedBy: string; // User ID
  postedByName: string;
  contactInfo: {
    phone: string;
    email: string;
  };
  budget?: {
    min: number;
    max: number;
    currency: 'USD';
  };
  urgency: 'low' | 'medium' | 'high' | 'emergency';
  allowOnlineBids: boolean;
  status: 'active' | 'in_progress' | 'completed' | 'cancelled';
  assignedTo?: string; // User ID
  createdAt: Date;
  expiresAt?: Date;
  images?: string[];
  requirements?: string[];
  tags?: string[];
}

export interface Bid {
  id: string;
  jobId: string;
  contractorId: string;
  contractorName: string;
  amount: number;
  description: string;
  estimatedCompletion: Date;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  receiverId: string;
  content: string;
  attachments?: Attachment[];
  isRead: boolean;
  createdAt: Date;
}

export interface Attachment {
  id: string;
  fileName: string;
  fileUrl: string;
  fileType: string;
  fileSize: number;
}

export interface Conversation {
  id: string;
  participants: string[]; // User IDs
  lastMessage?: Message;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContractorProfile {
  userId: string;
  companyName?: string;
  businessLicense?: string;
  insurance: {
    provider: string;
    policyNumber: string;
    coverage: number;
    expiryDate: Date;
  };
  services: {
    categories: string[];
    subcategories: string[];
    description: string;
  };
  serviceAreas: {
    states: string[];
    counties: string[];
  };
  certifications?: string[];
  yearsExperience: number;
  rating: number;
  totalJobs: number;
  completedJobs: number;
  profileCompleteness: number;
}

export interface WeatherAlert {
  id: string;
  type: 'tornado' | 'hurricane' | 'flood' | 'hail' | 'wind' | 'winter' | 'fire';
  severity: 'minor' | 'moderate' | 'severe' | 'extreme';
  title: string;
  description: string;
  areas: string[];
  effectiveDate: Date;
  expiryDate: Date;
  source: 'NWS';
}

export interface SeismicEvent {
  id: string;
  magnitude: number;
  location: {
    latitude: number;
    longitude: number;
    place: string;
  };
  depth: number;
  time: Date;
  significance: number;
  url: string;
}

export interface PlatformStats {
  activeJobs: number;
  registeredContractors: number;
  insuranceCompanies: number;
  adjustors: number;
  successfulConnections: number;
  lastUpdated: Date;
}

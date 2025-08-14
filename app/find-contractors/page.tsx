'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/logo';
import Link from 'next/link';
import { 
  Search, 
  MapPin, 
  Star,
  Filter,
  ArrowLeft,
  Phone,
  Mail,
  Building,
  Calendar,
  Award,
  CheckCircle,
  MessageSquare
} from 'lucide-react';

interface Contractor {
  id: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  location: {
    city: string;
    state: string;
    counties: string[];
  };
  services: {
    categories: string[];
    subcategories: string[];
    description: string;
  };
  rating: number;
  totalJobs: number;
  completedJobs: number;
  yearsExperience: number;
  certifications: string[];
  insurance: {
    provider: string;
    coverage: number;
    expiryDate: string;
  };
  membershipPlan: 'basic' | 'standard' | 'premium';
  profileImage?: string;
  isVerified: boolean;
  lastActive: string;
}

export default function FindContractorsPage() {
  const [contractors, setContractors] = useState<Contractor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Mock contractor data
  useEffect(() => {
    const mockContractors: Contractor[] = [
      {
        id: '1',
        name: 'Mike Johnson',
        companyName: 'Elite Roofing Solutions',
        email: 'mike@eliteroofing.com',
        phone: '(555) 123-4567',
        location: {
          city: 'Houston',
          state: 'TX',
          counties: ['Harris County', 'Montgomery County', 'Fort Bend County']
        },
        services: {
          categories: ['Residential'],
          subcategories: ['Roofing', 'Storm Damage Repair', 'Gutters'],
          description: 'Specialized in storm damage repair and residential roofing with 15+ years experience. Licensed and insured for all major roofing materials including shingles, metal, and tile.'
        },
        rating: 4.9,
        totalJobs: 247,
        completedJobs: 238,
        yearsExperience: 15,
        certifications: ['GAF Master Elite', 'HAAG Certified Inspector', 'OSHA 30'],
        insurance: {
          provider: 'General Liability Plus',
          coverage: 2000000,
          expiryDate: '2025-03-15'
        },
        membershipPlan: 'premium',
        isVerified: true,
        lastActive: '2024-08-13T09:30:00Z'
      },
      {
        id: '2',
        name: 'Sarah Martinez',
        companyName: 'Precision Auto Body',
        email: 'sarah@precisionauto.com',
        phone: '(555) 987-6543',
        location: {
          city: 'Los Angeles',
          state: 'CA',
          counties: ['Los Angeles County', 'Orange County', 'Ventura County', 'Riverside County', 'San Bernardino County']
        },
        services: {
          categories: ['Automotive'],
          subcategories: ['Collision Repair', 'Paint Work', 'Frame Straightening', 'Glass Replacement'],
          description: 'Full-service automotive collision repair shop with state-of-the-art equipment. Certified by major insurance companies for direct repair programs.'
        },
        rating: 4.8,
        totalJobs: 189,
        completedJobs: 185,
        yearsExperience: 12,
        certifications: ['I-CAR Gold Class', 'ASE Certified', 'PPG Certified'],
        insurance: {
          provider: 'Auto Shop Insurance Co',
          coverage: 1500000,
          expiryDate: '2024-12-31'
        },
        membershipPlan: 'standard',
        isVerified: true,
        lastActive: '2024-08-13T14:15:00Z'
      },
      {
        id: '3',
        name: 'Robert Chen',
        companyName: 'Coastal Marine Services',
        email: 'robert@coastalmarine.com',
        phone: '(555) 456-7890',
        location: {
          city: 'Fort Lauderdale',
          state: 'FL',
          counties: ['Broward County']
        },
        services: {
          categories: ['Marine'],
          subcategories: ['Engine Repair', 'Hull Repair', 'Electrical Systems', 'Gel Coat Repair'],
          description: 'Specialized marine repair facility serving South Florida. Expert in yacht and boat restoration, engine rebuilds, and marine electronics.'
        },
        rating: 4.7,
        totalJobs: 156,
        completedJobs: 148,
        yearsExperience: 18,
        certifications: ['ABYC Certified', 'Mercury Marine Certified', 'Yamaha Certified'],
        insurance: {
          provider: 'Marine Contractors Insurance',
          coverage: 3000000,
          expiryDate: '2025-06-30'
        },
        membershipPlan: 'basic',
        isVerified: true,
        lastActive: '2024-08-12T11:45:00Z'
      },
      {
        id: '4',
        name: 'Jennifer Adams',
        companyName: 'Premier Commercial Construction',
        email: 'jennifer@premiercommercial.com',
        phone: '(555) 234-5678',
        location: {
          city: 'Phoenix',
          state: 'AZ',
          counties: ['Maricopa County', 'Pinal County']
        },
        services: {
          categories: ['Commercial'],
          subcategories: ['HVAC', 'Electrical', 'Fire Damage Restoration', 'General Construction'],
          description: 'Large-scale commercial contractor specializing in insurance restoration work. Licensed general contractor with specialized crews for HVAC, electrical, and structural repairs.'
        },
        rating: 4.6,
        totalJobs: 98,
        completedJobs: 94,
        yearsExperience: 10,
        certifications: ['IICRC Certified', 'Licensed General Contractor', 'NATE Certified'],
        insurance: {
          provider: 'Commercial Builders Insurance',
          coverage: 5000000,
          expiryDate: '2025-01-15'
        },
        membershipPlan: 'standard',
        isVerified: true,
        lastActive: '2024-08-13T08:20:00Z'
      },
      {
        id: '5',
        name: 'David Thompson',
        companyName: 'Aerospace Repair Specialists',
        email: 'david@aerospacerepair.com',
        phone: '(555) 345-6789',
        location: {
          city: 'Seattle',
          state: 'WA',
          counties: ['King County', 'Snohomish County']
        },
        services: {
          categories: ['Aerospace'],
          subcategories: ['Avionics', 'Structural Repair', 'Engine Maintenance', 'Composite Repair'],
          description: 'FAA-certified repair station specializing in commercial and general aviation aircraft. Full capabilities for structural, avionics, and powerplant repairs.'
        },
        rating: 4.9,
        totalJobs: 67,
        completedJobs: 66,
        yearsExperience: 20,
        certifications: ['FAA Repair Station', 'A&P License', 'Composite Specialist'],
        insurance: {
          provider: 'Aviation Insurance Specialists',
          coverage: 10000000,
          expiryDate: '2024-11-30'
        },
        membershipPlan: 'premium',
        isVerified: true,
        lastActive: '2024-08-13T16:30:00Z'
      }
    ];

    setContractors(mockContractors);
    setLoading(false);
  }, []);

  const filteredContractors = contractors.filter(contractor => {
    const matchesSearch = searchTerm === '' || 
      contractor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contractor.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contractor.services.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contractor.services.subcategories.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === '' || 
      contractor.services.categories.includes(selectedCategory);
    
    const matchesState = selectedState === '' || contractor.location.state === selectedState;
    
    const matchesCounty = selectedCounty === '' || 
      contractor.location.counties.some(county => county.includes(selectedCounty));
    
    return matchesSearch && matchesCategory && matchesState && matchesCounty;
  });

  const getMembershipColor = (plan: string) => {
    switch (plan) {
      case 'premium': return 'bg-purple-500 text-white';
      case 'standard': return 'bg-blue-500 text-white';
      case 'basic': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getMembershipLabel = (plan: string) => {
    switch (plan) {
      case 'premium': return 'Statewide Pro';
      case 'standard': return 'Multi-County';
      case 'basic': return 'County Listing';
      default: return 'Basic';
    }
  };

  const getCompletionRate = (completed: number, total: number) => {
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  const categories = ['Automotive', 'Residential', 'Commercial', 'Marine', 'Aerospace'];
  const states = ['TX', 'CA', 'FL', 'AZ', 'WA', 'NY'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" />
            <nav className="hidden md:flex space-x-8">
              <Link href="/browse-jobs" className="text-gray-600 hover:text-blue-600 font-medium">
                Browse Jobs
              </Link>
              <Link href="/find-contractors" className="text-blue-600 font-medium">
                Find Contractors
              </Link>
              <Link href="/adjustor-jobs" className="text-gray-600 hover:text-blue-600 font-medium">
                Adjustor Network
              </Link>
            </nav>
            <div className="flex space-x-3">
              <Button variant="outline" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </Button>
              <Button asChild>
                <Link href="/register">Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Qualified Contractors</h1>
          <p className="text-lg text-gray-600">Search our verified contractor database by location, specialty, and experience level</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search contractors, companies, or specialties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {showFilters && (
              <div className="grid md:grid-cols-4 gap-4 pt-4 border-t">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All States</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">County</label>
                  <input
                    type="text"
                    placeholder="Enter county"
                    value={selectedCounty}
                    onChange={(e) => setSelectedCounty(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-end">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('');
                      setSelectedState('');
                      setSelectedCounty('');
                    }}
                    className="w-full"
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Showing {filteredContractors.length} of {contractors.length} verified contractors
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-gray-500">Loading contractors...</div>
          </div>
        ) : filteredContractors.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">No contractors found matching your criteria</div>
            <Button variant="outline" onClick={() => {
              setSearchTerm('');
              setSelectedCategory('');
              setSelectedState('');
              setSelectedCounty('');
            }}>
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredContractors.map((contractor) => (
              <Card key={contractor.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <Building className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{contractor.name}</h3>
                            <p className="text-gray-600">{contractor.companyName}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {contractor.isVerified && (
                            <Badge variant="outline" className="text-green-600 border-green-300">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                          <Badge className={getMembershipColor(contractor.membershipPlan)}>
                            {getMembershipLabel(contractor.membershipPlan)}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {contractor.location.city}, {contractor.location.state}
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-500" />
                          {contractor.rating} ({contractor.totalJobs} jobs)
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {contractor.yearsExperience} years experience
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{contractor.services.description}</p>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {contractor.services.subcategories.map((specialty, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Service Areas</h4>
                          <div className="text-sm text-gray-600">
                            {contractor.location.counties.slice(0, 2).map((county, index) => (
                              <div key={index}>{county}</div>
                            ))}
                            {contractor.location.counties.length > 2 && (
                              <div className="text-blue-600">+{contractor.location.counties.length - 2} more</div>
                            )}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Performance</h4>
                          <div className="text-sm">
                            <div className="text-green-600 font-medium">
                              {getCompletionRate(contractor.completedJobs, contractor.totalJobs)}% completion rate
                            </div>
                            <div className="text-gray-600">
                              {contractor.completedJobs} of {contractor.totalJobs} jobs completed
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <div>
                          <strong>Insurance:</strong> ${contractor.insurance.coverage.toLocaleString()} coverage 
                          with {contractor.insurance.provider}
                        </div>
                        <div>
                          <strong>Last Active:</strong> {new Date(contractor.lastActive).toLocaleDateString()}
                        </div>
                      </div>

                      {contractor.certifications.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                            <Award className="h-4 w-4 mr-1" />
                            Certifications
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {contractor.certifications.map((cert, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="flex space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-1" />
                        {contractor.phone}
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-1" />
                        {contractor.email}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                      <Button size="sm">
                        View Full Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Access Notice for Non-Members */}
        <Card className="mt-12 bg-yellow-50 border-yellow-200">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-yellow-900 mb-4">Contractor Database Access</h2>
            <p className="text-yellow-800 mb-6">
              This contractor database is available exclusively to verified insurance companies and adjustors. 
              Join our professional network to gain full access to contractor profiles and contact information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/register?type=insurance">Join as Insurance Company</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-yellow-300 text-yellow-600" asChild>
                <Link href="/register?type=adjustor">Join as Adjustor</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

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
  DollarSign,
  Clock,
  AlertCircle,
  Filter,
  ArrowLeft,
  Building,
  User,
  Phone,
  Mail
} from 'lucide-react';

interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  location: {
    city: string;
    state: string;
    zipCode: string;
  };
  postedBy: string;
  postedByName: string;
  contactInfo: {
    phone: string;
    email: string;
  };
  budget?: {
    min: number;
    max: number;
  };
  urgency: 'low' | 'medium' | 'high' | 'emergency';
  allowOnlineBids: boolean;
  createdAt: string;
  expiresAt?: string;
  tags: string[];
}

export default function BrowseJobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedUrgency, setSelectedUrgency] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Mock job data
  useEffect(() => {
    const mockJobs: Job[] = [
      {
        id: '1',
        title: 'Roof Repair - Storm Damage',
        description: 'Residential roof repair needed due to recent hail storm. Approximately 1,200 sq ft area affected with missing shingles and minor structural damage. Insurance claim approved.',
        category: 'Residential',
        location: {
          city: 'Houston',
          state: 'TX',
          zipCode: '77001'
        },
        postedBy: 'insurance_company',
        postedByName: 'State Farm Insurance',
        contactInfo: {
          phone: '(555) 123-4567',
          email: 'claims@statefarm.com'
        },
        budget: {
          min: 8000,
          max: 12000
        },
        urgency: 'high',
        allowOnlineBids: true,
        createdAt: '2024-08-13T10:30:00Z',
        expiresAt: '2024-08-20T23:59:59Z',
        tags: ['roofing', 'storm damage', 'residential', 'urgent']
      },
      {
        id: '2',
        title: 'Water Damage Restoration - Commercial',
        description: 'Commercial building water damage restoration required. Flooded basement and first floor due to pipe burst. Need immediate water extraction and mold prevention services.',
        category: 'Commercial',
        location: {
          city: 'Miami',
          state: 'FL',
          zipCode: '33101'
        },
        postedBy: 'adjustor',
        postedByName: 'John Smith - Independent Adjustor',
        contactInfo: {
          phone: '(555) 987-6543',
          email: 'j.smith@adjustor.com'
        },
        budget: {
          min: 15000,
          max: 25000
        },
        urgency: 'emergency',
        allowOnlineBids: true,
        createdAt: '2024-08-13T08:15:00Z',
        tags: ['water damage', 'commercial', 'emergency', 'mold prevention']
      },
      {
        id: '3',
        title: 'Auto Body Repair - Collision',
        description: 'Multiple vehicle collision damage repair needed. Front end damage to 2022 Honda Accord. Parts replacement and paint work required.',
        category: 'Automotive',
        location: {
          city: 'Los Angeles',
          state: 'CA',
          zipCode: '90001'
        },
        postedBy: 'insurance_company',
        postedByName: 'Allstate Insurance',
        contactInfo: {
          phone: '(555) 456-7890',
          email: 'autorepair@allstate.com'
        },
        budget: {
          min: 3500,
          max: 5500
        },
        urgency: 'medium',
        allowOnlineBids: true,
        createdAt: '2024-08-12T14:20:00Z',
        expiresAt: '2024-08-19T23:59:59Z',
        tags: ['automotive', 'collision', 'body work', 'paint']
      },
      {
        id: '4',
        title: 'Marine Engine Repair',
        description: 'Yacht engine repair needed after water intrusion incident. Twin diesel engines require inspection, cleaning, and potential rebuild.',
        category: 'Marine',
        location: {
          city: 'Fort Lauderdale',
          state: 'FL',
          zipCode: '33301'
        },
        postedBy: 'adjustor',
        postedByName: 'Marine Claims Adjustors LLC',
        contactInfo: {
          phone: '(555) 234-5678',
          email: 'marine@claims.com'
        },
        urgency: 'medium',
        allowOnlineBids: false,
        createdAt: '2024-08-11T16:45:00Z',
        tags: ['marine', 'engine repair', 'yacht', 'water damage']
      },
      {
        id: '5',
        title: 'HVAC System Replacement',
        description: 'Complete HVAC system replacement for office building. Fire damage to existing system requires full replacement and ductwork repair.',
        category: 'Commercial',
        location: {
          city: 'Phoenix',
          state: 'AZ',
          zipCode: '85001'
        },
        postedBy: 'insurance_company',
        postedByName: 'Phoenix Insurance Group',
        contactInfo: {
          phone: '(555) 345-6789',
          email: 'commercial@phoenix-ins.com'
        },
        budget: {
          min: 20000,
          max: 35000
        },
        urgency: 'high',
        allowOnlineBids: true,
        createdAt: '2024-08-10T11:30:00Z',
        expiresAt: '2024-08-17T23:59:59Z',
        tags: ['HVAC', 'commercial', 'fire damage', 'replacement']
      }
    ];

    setJobs(mockJobs);
    setLoading(false);
  }, []);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = searchTerm === '' || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === '' || job.category === selectedCategory;
    const matchesUrgency = selectedUrgency === '' || job.urgency === selectedUrgency;
    
    return matchesSearch && matchesCategory && matchesUrgency;
  });

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'emergency': return 'bg-red-500 text-white';
      case 'high': return 'bg-orange-500 text-white';
      case 'medium': return 'bg-yellow-500 text-white';
      case 'low': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getPosterIcon = (postedBy: string) => {
    return postedBy === 'insurance_company' ? 
      <Building className="h-4 w-4" /> : 
      <User className="h-4 w-4" />;
  };

  const formatBudget = (budget?: { min: number; max: number }) => {
    if (!budget) return 'Budget: Contact for details';
    return `$${budget.min.toLocaleString()} - $${budget.max.toLocaleString()}`;
  };

  const categories = ['Automotive', 'Residential', 'Commercial', 'Marine', 'Aerospace'];
  const urgencyLevels = ['low', 'medium', 'high', 'emergency'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" />
            <nav className="hidden md:flex space-x-8">
              <Link href="/browse-jobs" className="text-blue-600 font-medium">
                Browse Jobs
              </Link>
              <Link href="/find-contractors" className="text-gray-600 hover:text-blue-600 font-medium">
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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Available Jobs</h1>
          <p className="text-lg text-gray-600">Find your next project from insurance companies and adjustors nationwide</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search jobs, locations, or keywords..."
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
              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
                  <select
                    value={selectedUrgency}
                    onChange={(e) => setSelectedUrgency(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Urgency Levels</option>
                    {urgencyLevels.map(level => (
                      <option key={level} value={level}>
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('');
                      setSelectedUrgency('');
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
            Showing {filteredJobs.length} of {jobs.length} jobs
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-gray-500">Loading jobs...</div>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">No jobs found matching your criteria</div>
            <Button variant="outline" onClick={() => {
              setSearchTerm('');
              setSelectedCategory('');
              setSelectedUrgency('');
            }}>
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <Badge className={getUrgencyColor(job.urgency)}>
                          {job.urgency === 'emergency' && <AlertCircle className="h-3 w-3 mr-1" />}
                          {job.urgency.toUpperCase()}
                        </Badge>
                        {job.allowOnlineBids && (
                          <Badge variant="outline" className="text-blue-600 border-blue-300">
                            Online Bids Accepted
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          {getPosterIcon(job.postedBy)}
                          <span className="ml-1">{job.postedByName}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location.city}, {job.location.state}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {new Date(job.createdAt).toLocaleDateString()}
                        </div>
                      </div>

                      <p className="text-gray-700 mb-3 line-clamp-3">{job.description}</p>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {job.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-green-600">
                          <DollarSign className="h-4 w-4 inline mr-1" />
                          {formatBudget(job.budget)}
                        </div>
                        {job.expiresAt && (
                          <div className="text-sm text-red-600">
                            <Clock className="h-4 w-4 inline mr-1" />
                            Expires: {new Date(job.expiresAt).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="flex space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-1" />
                        {job.contactInfo.phone}
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-1" />
                        {job.contactInfo.email}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm">
                        Contact Poster
                      </Button>
                      {job.allowOnlineBids && (
                        <Button size="sm">
                          Submit Bid
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Call to Action for Non-Members */}
        <Card className="mt-12 bg-blue-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Ready to Get Started?</h2>
            <p className="text-blue-800 mb-6">
              Join our professional network to contact job posters directly and submit bids on projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/register?type=contractor">Join as Contractor</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-600" asChild>
                <Link href="/membership">View Membership Plans</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

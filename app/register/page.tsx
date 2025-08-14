'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Logo } from '@/components/logo';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  Shield, 
  Users, 
  FileText,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const [userType, setUserType] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    membershipPlan: 'free'
  });

  useEffect(() => {
    const type = searchParams.get('type');
    if (type && ['insurance', 'adjustor', 'contractor'].includes(type)) {
      setUserType(type);
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', { ...formData, userType });
    // Handle registration logic here
    alert('Registration functionality will be implemented with backend integration');
  };

  if (!userType) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Logo size="lg" className="justify-center mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Membership Type</h1>
            <p className="text-lg text-gray-600">Select the membership that best fits your professional role</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Insurance Companies */}
            <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg cursor-pointer"
                  onClick={() => setUserType('insurance')}>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Insurance Company</CardTitle>
                <Badge variant="secondary" className="mx-auto bg-green-100 text-green-800">
                  FREE MEMBERSHIP
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Post unlimited job listings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Access contractor database
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Enable online bidding
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Direct messaging & file sharing
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Adjustors */}
            <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg cursor-pointer"
                  onClick={() => setUserType('adjustor')}>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Insurance Adjustor</CardTitle>
                <Badge variant="secondary" className="mx-auto bg-green-100 text-green-800">
                  FREE MEMBERSHIP
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Browse & apply to adjustor jobs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Post contractor job listings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Claims calculator & tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Access forms library
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contractors */}
            <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg cursor-pointer"
                  onClick={() => setUserType('contractor')}>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Contractor</CardTitle>
                <Badge variant="outline" className="mx-auto">
                  MULTIPLE PLANS
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Browse job listings (free)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-3" />
                    Database listing (paid)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-3" />
                    Direct messaging
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-3" />
                    Bid on projects
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center justify-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Logo size="lg" className="justify-center mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {userType === 'insurance' && 'Insurance Company Registration'}
            {userType === 'adjustor' && 'Insurance Adjustor Registration'}
            {userType === 'contractor' && 'Contractor Registration'}
          </h1>
          <p className="text-lg text-gray-600">Join the professional network today</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create Your Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Street Address"
                  required
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select State</option>
                    <option value="CA">California</option>
                    <option value="TX">Texas</option>
                    <option value="FL">Florida</option>
                    <option value="NY">New York</option>
                    {/* Add more states */}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {userType === 'contractor' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Membership Plan
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="membershipPlan"
                        value="free"
                        checked={formData.membershipPlan === 'free'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div className="flex-1">
                        <div className="font-medium">Free - Browse Only</div>
                        <div className="text-sm text-gray-600">Browse jobs, no database listing</div>
                      </div>
                      <Badge variant="outline">$0</Badge>
                    </label>
                    
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="membershipPlan"
                        value="basic"
                        checked={formData.membershipPlan === 'basic'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div className="flex-1">
                        <div className="font-medium">County Listing</div>
                        <div className="text-sm text-gray-600">1 county database listing</div>
                      </div>
                      <Badge>$10/mo</Badge>
                    </label>
                    
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="membershipPlan"
                        value="standard"
                        checked={formData.membershipPlan === 'standard'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div className="flex-1">
                        <div className="font-medium">Multi-County</div>
                        <div className="text-sm text-gray-600">5 counties database listing</div>
                      </div>
                      <Badge>$20/mo</Badge>
                    </label>
                    
                    <label className="flex items-center p-3 border-2 border-blue-500 rounded-lg cursor-pointer bg-blue-50">
                      <input
                        type="radio"
                        name="membershipPlan"
                        value="premium"
                        checked={formData.membershipPlan === 'premium'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div className="flex-1">
                        <div className="font-medium">Statewide Pro</div>
                        <div className="text-sm text-gray-600">All counties in one state</div>
                      </div>
                      <Badge className="bg-blue-600 text-white">$50/mo</Badge>
                    </label>
                  </div>
                </div>
              )}

              <div className="flex space-x-4">
                <Button type="button" variant="outline" onClick={() => setUserType('')} className="flex-1">
                  Back
                </Button>
                <Button type="submit" className="flex-1">
                  Create Account
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:text-blue-800">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Logo } from '@/components/logo';
import { LiveWeatherWidget, LiveSeismicWidget, LiveStatsWidget } from '@/components/live-widgets';
import Link from 'next/link';
import { 
  Shield, 
  Users, 
  MessageSquare, 
  Search, 
  FileText, 
  DollarSign, 
  MapPin,
  Star,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" />
            <nav className="hidden md:flex space-x-8">
              <Link href="/browse-jobs" className="text-gray-600 hover:text-blue-600 font-medium">
                Browse Jobs
              </Link>
              <Link href="/find-contractors" className="text-gray-600 hover:text-blue-600 font-medium">
                Find Contractors
              </Link>
              <Link href="/adjustor-jobs" className="text-gray-600 hover:text-blue-600 font-medium">
                Adjustor Network
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium">
                About
              </Link>
            </nav>
            <div className="flex space-x-3">
              <Button variant="outline" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Connect. Collaborate. Complete.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The premier platform connecting insurance companies, adjustors, and contractors 
              for efficient claim resolution and project management nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="/register">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
                <Link href="/browse-jobs">Browse Jobs</Link>
              </Button>
            </div>
          </div>

          {/* Live Stats */}
          <LiveStatsWidget />
        </div>
      </section>

      {/* Membership Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Three Professional Networks, One Platform
            </h2>
            <p className="text-lg text-gray-600">
              Choose your membership type and access tailored tools for your industry role
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Insurance Companies */}
            <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Insurance Companies</CardTitle>
                <CardDescription>
                  Post jobs, find contractors, manage claims efficiently
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <Badge variant="secondary" className="text-lg px-4 py-2 bg-green-100 text-green-800">
                    FREE MEMBERSHIP
                  </Badge>
                </div>
                <ul className="space-y-3 text-sm">
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
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Post adjustor opportunities
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/register?type=insurance">Join Free</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Adjustors */}
            <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Insurance Adjustors</CardTitle>
                <CardDescription>
                  Find jobs, access tools, connect with contractors
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <Badge variant="secondary" className="text-lg px-4 py-2 bg-green-100 text-green-800">
                    FREE MEMBERSHIP
                  </Badge>
                </div>
                <ul className="space-y-3 text-sm">
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
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Contractor database access
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/register?type=adjustor">Join Free</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Contractors */}
            <Card className="border-2 border-blue-500 bg-blue-50 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Contractors</CardTitle>
                <CardDescription>
                  Find work, grow your business, get discovered
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-3 border-2 border-dashed border-gray-300">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-sm">Free Membership</h4>
                        <p className="text-xs text-gray-600">Browse jobs only</p>
                      </div>
                      <Badge variant="outline">$0</Badge>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 border">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h4 className="font-semibold text-sm">County Listing</h4>
                        <p className="text-xs text-gray-600">1 county database listing</p>
                      </div>
                      <Badge>$10/mo</Badge>
                    </div>
                    <p className="text-xs text-gray-500">or $96/year</p>
                  </div>

                  <div className="bg-white rounded-lg p-3 border">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h4 className="font-semibold text-sm">Multi-County</h4>
                        <p className="text-xs text-gray-600">5 counties database listing</p>
                      </div>
                      <Badge>$20/mo</Badge>
                    </div>
                    <p className="text-xs text-gray-500">or $190/year</p>
                  </div>

                  <div className="bg-blue-600 text-white rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h4 className="font-semibold text-sm">Statewide Pro</h4>
                        <p className="text-xs opacity-90">All counties in one state</p>
                      </div>
                      <Badge className="bg-white text-blue-600">$50/mo</Badge>
                    </div>
                    <p className="text-xs opacity-75">or $480/year</p>
                  </div>
                </div>

                <div className="text-center text-xs text-gray-600 bg-yellow-50 p-2 rounded">
                  Contact us for regional or nationwide opportunities
                </div>

                <Button className="w-full" asChild>
                  <Link href="/register?type=contractor">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Service Categories
            </h2>
            <p className="text-lg text-gray-600">
              Find contractors across all major repair and restoration categories
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="text-2xl mb-2">🚗</div>
                <h3 className="font-semibold text-sm">Automotive</h3>
                <p className="text-xs text-gray-500 mt-1">Collision, mechanical, glass</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="text-2xl mb-2">🏠</div>
                <h3 className="font-semibold text-sm">Residential</h3>
                <p className="text-xs text-gray-500 mt-1">Roofing, plumbing, electrical</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="text-2xl mb-2">🏢</div>
                <h3 className="font-semibold text-sm">Commercial</h3>
                <p className="text-xs text-gray-500 mt-1">Construction, HVAC, flooring</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="text-2xl mb-2">⛵</div>
                <h3 className="font-semibold text-sm">Marine</h3>
                <p className="text-xs text-gray-500 mt-1">Boat repair, marine electronics</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="text-2xl mb-2">✈️</div>
                <h3 className="font-semibold text-sm">Aerospace</h3>
                <p className="text-xs text-gray-500 mt-1">Aircraft maintenance, avionics</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Data Widgets */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real-Time Industry Intelligence
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed with live weather, seismic activity, and market data
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <LiveWeatherWidget />
            <LiveSeismicWidget />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Logo size="md" className="mb-4" />
              <p className="text-gray-400 mb-4">
                Connecting insurance professionals and contractors for efficient claim resolution nationwide.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us
                </Button>
                <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">For Insurance Companies</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/post-job" className="hover:text-white">Post Jobs</Link></li>
                <li><Link href="/find-contractors" className="hover:text-white">Find Contractors</Link></li>
                <li><Link href="/adjustor-jobs" className="hover:text-white">Hire Adjustors</Link></li>
                <li><Link href="/dashboard" className="hover:text-white">Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">For Adjustors</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/adjustor-jobs" className="hover:text-white">Find Jobs</Link></li>
                <li><Link href="/tools" className="hover:text-white">Claims Tools</Link></li>
                <li><Link href="/forms" className="hover:text-white">Forms Library</Link></li>
                <li><Link href="/calculator" className="hover:text-white">Calculator</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">For Contractors</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/browse-jobs" className="hover:text-white">Browse Jobs</Link></li>
                <li><Link href="/membership" className="hover:text-white">Membership Plans</Link></li>
                <li><Link href="/profile" className="hover:text-white">Build Profile</Link></li>
                <li><Link href="/regional" className="hover:text-white">Regional Opportunities</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 InsuranceConnect Professional Network. All rights reserved.</p>
            <div className="mt-2 space-x-4 text-sm">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
              <Link href="/contact" className="hover:text-white">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

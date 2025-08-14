'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/logo';
import Link from 'next/link';
import { 
  Calculator, 
  FileText, 
  Download,
  DollarSign,
  Home,
  Car,
  Wrench,
  ArrowLeft
} from 'lucide-react';

export default function AdjustorToolsPage() {
  const [claimData, setClaimData] = useState({
    damageType: '',
    propertyValue: '',
    damageExtent: '',
    laborCost: '',
    materialCost: '',
    deductible: ''
  });
  
  const [calculationResult, setCalculationResult] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setClaimData({
      ...claimData,
      [e.target.name]: e.target.value
    });
  };

  const calculateClaim = () => {
    const labor = parseFloat(claimData.laborCost) || 0;
    const materials = parseFloat(claimData.materialCost) || 0;
    const deductible = parseFloat(claimData.deductible) || 0;
    
    const totalDamage = labor + materials;
    const claimAmount = Math.max(0, totalDamage - deductible);
    
    setCalculationResult(claimAmount);
  };

  const resetCalculator = () => {
    setClaimData({
      damageType: '',
      propertyValue: '',
      damageExtent: '',
      laborCost: '',
      materialCost: '',
      deductible: ''
    });
    setCalculationResult(null);
  };

  const commonForms = [
    {
      name: 'Proof of Loss Form',
      description: 'Standard proof of loss documentation',
      type: 'PDF',
      icon: <FileText className="h-5 w-5" />
    },
    {
      name: 'Property Damage Report',
      description: 'Comprehensive property damage assessment',
      type: 'PDF',
      icon: <Home className="h-5 w-5" />
    },
    {
      name: 'Auto Damage Assessment',
      description: 'Vehicle damage evaluation form',
      type: 'PDF',
      icon: <Car className="h-5 w-5" />
    },
    {
      name: 'Equipment Inspection Checklist',
      description: 'Standard equipment inspection form',
      type: 'PDF',
      icon: <Wrench className="h-5 w-5" />
    },
    {
      name: 'Contractor Estimate Template',
      description: 'Template for contractor repair estimates',
      type: 'Excel',
      icon: <Calculator className="h-5 w-5" />
    },
    {
      name: 'Photo Documentation Log',
      description: 'Organized photo documentation template',
      type: 'PDF',
      icon: <FileText className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" />
            <nav className="hidden md:flex space-x-8">
              <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 font-medium">
                Dashboard
              </Link>
              <Link href="/adjustor-jobs" className="text-gray-600 hover:text-blue-600 font-medium">
                Jobs
              </Link>
              <Link href="/tools" className="text-blue-600 font-medium">
                Tools
              </Link>
            </nav>
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Adjustor Tools & Resources</h1>
          <p className="text-lg text-gray-600">Professional tools to streamline your claims processing and field work</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Claims Calculator */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="h-6 w-6 mr-2 text-blue-600" />
                Claims Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Damage Type
                  </label>
                  <select
                    name="damageType"
                    value={claimData.damageType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Type</option>
                    <option value="water">Water Damage</option>
                    <option value="fire">Fire Damage</option>
                    <option value="wind">Wind Damage</option>
                    <option value="hail">Hail Damage</option>
                    <option value="collision">Collision</option>
                    <option value="theft">Theft/Vandalism</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Value ($)
                  </label>
                  <input
                    type="number"
                    name="propertyValue"
                    value={claimData.propertyValue}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Damage Extent (%)
                </label>
                <input
                  type="number"
                  name="damageExtent"
                  value={claimData.damageExtent}
                  onChange={handleInputChange}
                  placeholder="0-100"
                  min="0"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Labor Cost ($)
                  </label>
                  <input
                    type="number"
                    name="laborCost"
                    value={claimData.laborCost}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Material Cost ($)
                  </label>
                  <input
                    type="number"
                    name="materialCost"
                    value={claimData.materialCost}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deductible ($)
                </label>
                <input
                  type="number"
                  name="deductible"
                  value={claimData.deductible}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex space-x-3">
                <Button onClick={calculateClaim} className="flex-1">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Calculate
                </Button>
                <Button onClick={resetCalculator} variant="outline">
                  Reset
                </Button>
              </div>

              {calculationResult !== null && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Calculation Result</h3>
                  <div className="text-2xl font-bold text-green-600">
                    ${calculationResult.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </div>
                  <p className="text-sm text-green-700 mt-1">
                    Estimated claim amount after deductible
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Forms Library */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-6 w-6 mr-2 text-blue-600" />
                Forms & Templates Library
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {commonForms.map((form, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center">
                      <div className="text-blue-600 mr-3">
                        {form.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{form.name}</h4>
                        <p className="text-sm text-gray-600">{form.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {form.type}
                      </span>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Need a Custom Form?</h4>
                <p className="text-sm text-blue-800 mb-3">
                  Can't find the form you need? Request a custom form or template.
                </p>
                <Button size="sm" variant="outline" className="text-blue-600 border-blue-300">
                  Request Custom Form
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Depreciation Calculator</h3>
                <p className="text-sm text-gray-600 mb-4">Calculate asset depreciation for accurate claim assessments</p>
                <Button size="sm" variant="outline">Coming Soon</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Report Generator</h3>
                <p className="text-sm text-gray-600 mb-4">Generate professional claim reports automatically</p>
                <Button size="sm" variant="outline">Coming Soon</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Estimator</h3>
                <p className="text-sm text-gray-600 mb-4">Regional cost database for accurate repair estimates</p>
                <Button size="sm" variant="outline">Coming Soon</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

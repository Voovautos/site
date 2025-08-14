import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount)
}

export function formatDate(date: Date | string): string {
  const d = new Date(date)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(d)
}

export function formatDateTime(date: Date | string): string {
  const d = new Date(date)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d)
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function calculateProfileCompleteness(profile: any): number {
  const requiredFields = [
    'companyName',
    'businessLicense',
    'insurance.provider',
    'insurance.policyNumber',
    'services.categories',
    'services.description',
    'serviceAreas.states',
    'certifications',
    'yearsExperience'
  ]
  
  let completedFields = 0
  
  requiredFields.forEach(field => {
    const keys = field.split('.')
    let value = profile
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key]
      } else {
        value = undefined
        break
      }
    }
    
    if (value && (Array.isArray(value) ? value.length > 0 : true)) {
      completedFields++
    }
  })
  
  return Math.round((completedFields / requiredFields.length) * 100)
}

export function generateRandomStats() {
  return {
    activeJobs: Math.floor(Math.random() * 500) + 1200,
    registeredContractors: Math.floor(Math.random() * 200) + 2800,
    insuranceCompanies: Math.floor(Math.random() * 50) + 150,
    adjustors: Math.floor(Math.random() * 100) + 450,
    successfulConnections: Math.floor(Math.random() * 1000) + 5600,
    lastUpdated: new Date()
  }
}

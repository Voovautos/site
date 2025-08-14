# VoovAutos

A modern car marketplace platform built with Next.js 14, connecting car dealers and individual buyers/sellers.

## Features

- **Dual Portal System**: Separate interfaces for dealers and individuals
- **Flexible Pricing Plans**: Different membership tiers for various needs
- **Modern UI**: Built with Tailwind CSS and custom components
- **Responsive Design**: Works seamlessly on desktop and mobile

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom shadcn/ui-based components

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

```bash
npm run build
npm start
```

## Deployment

This project is optimized for deployment on Vercel:

1. Connect your repository to Vercel
2. Vercel will automatically detect Next.js and configure the build
3. Deploy with zero configuration needed

Alternatively, you can deploy to any platform that supports Node.js applications.

## Project Structure

```
├── app/                 # Next.js app router pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Home page
├── components/
│   └── ui/             # Reusable UI components
├── lib/
│   └── utils.ts        # Utility functions
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Membership Plans

### For Dealers
- **Small Dealer**: $199/month - 15 listings
- **Premium Dealer**: $399/month - 40 listings  
- **Platinum Dealer**: $499/month - 100 listings + videos

### For Individuals
- **Free Listing**: 7 days active
- **Extended Listing**: $20 for 60 days active

## License

Copyright © 2024 VoovAutos. All rights reserved.

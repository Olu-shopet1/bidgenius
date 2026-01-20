# BidGenius - Project README

## Overview

BidGenius is an AI-powered response generation system designed to assist organizations in crafting high-quality, customized bid responses. The platform leverages advanced AI capabilities to generate compelling bid narratives with tone customization and evidence integration.

## Features

- **Generate AI-Powered Responses** - Create tailored bid responses for specific questions
- **Manage Case Studies** - Build and maintain a portfolio of project evidence
- **Track Performance** - Monitor bid success rates and quality improvements
- **Collaborate with Teams** - Review and refine responses with stakeholders
- **Analyze Trends** - Understand which tones and approaches work best

## Tech Stack

- **Frontend**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Package Manager**: npm

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Dashboard page
│   ├── globals.css          # Global styles
│   ├── generate/
│   │   └── page.tsx         # Generate response page
│   ├── case-studies/
│   │   └── page.tsx         # Case studies management
│   └── analytics/
│       └── page.tsx         # Analytics dashboard
├── components/
│   ├── Dashboard.tsx        # Dashboard component
│   ├── Sidebar.tsx          # Navigation sidebar
│   ├── StatCard.tsx         # Statistics card
│   ├── QuickAction.tsx      # Quick action card
│   ├── PortfolioOverview.tsx# Portfolio breakdown
│   └── RecentActivity.tsx   # Recent activity feed
├── types/                   # TypeScript type definitions
└── lib/                     # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Pages

- **Dashboard** (`/`) - Main command center with stats and quick actions
- **Generate Response** (`/generate`) - AI response generation interface
- **Case Studies** (`/case-studies`) - Project portfolio management
- **Analytics** (`/analytics`) - Performance tracking and insights

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_AI_MODEL=claude-haiku
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## API Integration

The application is ready to integrate with Claude API for AI response generation. Update the following:

1. Create API routes in `src/app/api/`
2. Implement response generation endpoint
3. Add authentication middleware
4. Configure rate limiting

## Styling

The project uses Tailwind CSS utility-first approach:
- Custom colors in `tailwind.config.ts`
- Global styles in `src/app/globals.css`
- Component-specific styles using Tailwind classes

## Performance

- Built with Next.js App Router for optimal performance
- Server-side rendering (SSR) by default
- Static generation for dashboards
- Responsive design for all screen sizes

## Security

- Role-based access control (RBAC) ready
- Input validation on all forms
- Protected API routes (to be implemented)
- Secure file upload handling (to be implemented)

## Future Enhancements

- Real-time collaborative editing
- Advanced scoring and feedback
- Multi-language support
- Bid platform integrations
- Mobile app support

## Contributing

1. Create feature branches from `main`
2. Follow TypeScript best practices
3. Keep components small and reusable
4. Add appropriate error handling

## License

Copyright 2026 BidGenius. All rights reserved.

## Support

For issues or questions, please contact the development team.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev              # Start development server (localhost:3000)
npm run dev:turbo        # Start development server with Turbopack

# Production
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint with Next.js config
```

## Architecture Overview

This is a Next.js 15+ marketing website using the App Router architecture with TypeScript and Tailwind CSS.

### Core Structure
- **App Router**: Uses `src/app/` directory for file-based routing
- **Layout System**: Two-layer layout with root layout (`src/app/layout.tsx`) wrapping a custom Layout component (`src/components/Layout.tsx`)
- **Component Architecture**: Shared components in `src/components/` with UI components in `src/components/ui/`

### Key Pages
- `/` - Homepage with hero and value proposition
- `/services` - Three service offerings (workshops, pilots, retainers)
- `/about` - Company mission and founder information
- `/contact` - Contact form (frontend-only, needs backend integration)
- `/case-studies` - Success stories and framework

### Styling System
- **Framework**: Tailwind CSS with minimal custom configuration
- **Typography**: Inter font from Google Fonts
- **Colors**: Uses default Tailwind palette with blue-600/700 as primary brand colors
- **Responsive**: Mobile-first responsive design with hamburger menu

### Component Patterns
- Client components use `'use client'` directive (e.g., Header with mobile menu state)
- Server components are default for pages and static content
- Layout wrapper provides consistent header/footer across all pages
- UI components (Button, Card) follow consistent Tailwind styling patterns

### Configuration Notes
- ESLint extends Next.js core-web-vitals and TypeScript configs
- Custom rule: `"react/no-unescaped-entities": "off"` for marketing copy
- Tailwind configured for `src/` directory structure
- Next.js 15+ with React 19+ using latest features
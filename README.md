# Alongside AI - Marketing Website

A modern, professional Next.js marketing website for Alongside AI, an AI consulting business that helps companies deploy and govern AI tools more effectively.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   ├── case-studies/      # Case studies page
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Layout.tsx         # Page layout wrapper
│   └── ui/                # UI components
│       ├── Button.tsx     # Button component
│       └── Card.tsx       # Card component
└── styles/
    └── globals.css        # Global styles
```

## 🎨 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)
- **Icons**: Heroicons (inline SVG)

## 📄 Pages Overview

### Homepage (`/`)
- Hero section with value proposition
- Key benefits overview
- Call-to-action sections

### Services (`/services`)
- Three main service offerings:
  - AI Opportunity Workshops
  - Rapid Pilot Projects
  - Enablement Retainers
- Process overview
- Pricing information

### About (`/about`)
- Company mission and values
- Founder information
- Approach and methodology

### Contact (`/contact`)
- Contact form (frontend only)
- Contact information
- What to expect section

### Case Studies (`/case-studies`)
- Sample success stories
- Results and outcomes
- Success framework

## 🛠️ Customization

### Content Updates
- Update company information in `src/components/Header.tsx` and `src/components/Footer.tsx`
- Modify service offerings in `src/app/services/page.tsx`
- Update founder bio in `src/app/about/page.tsx`
- Add real case studies in `src/app/case-studies/page.tsx`

### Styling
- Colors can be customized in `tailwind.config.ts`
- Global styles in `src/app/globals.css`
- Component-specific styles using Tailwind classes

### SEO
- Update metadata in each page's `metadata` export
- Modify root layout metadata in `src/app/layout.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy with default settings

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Deploy to Other Platforms
1. Build the project: `npm run build`
2. Upload the `.next` folder to your hosting provider

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📝 Notes

- Contact form is frontend-only. You'll need to add backend integration for form submissions
- Images are placeholder-ready - add your logo and branded images
- All content is customizable and ready for your specific business needs
- Responsive design works on all device sizes

## 🤝 Support

For questions or support, contact the development team or refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

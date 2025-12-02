# Scorpions Tech Site - AI Agent Instructions

## Project Overview
Professional website for Scorpions Tech, showcasing mobile and web app development services. Built with Next.js 14, TypeScript, and Tailwind CSS for modern, responsive design.

## Architecture & Structure
- **Framework**: Next.js 14 with App Router (`app/` directory)
- **Styling**: Tailwind CSS with custom design system
- **Components**: Modular React components in `components/` directory
- **Structure**: Single-page application with smooth scroll navigation
- **Sections**: Header → Hero → Services → Portfolio → About → Contact → Footer

## Development Workflow
```bash
npm install          # Install dependencies
npm run dev         # Development server (localhost:3000)
npm run build       # Production build
npm run lint        # ESLint checks
npm run type-check  # TypeScript validation
```

## Key Patterns & Conventions
- **Design System**: Custom Tailwind classes defined in `globals.css`
  - `.btn-primary` and `.btn-secondary` for consistent buttons
  - `.container-custom` for responsive containers
  - `.section-padding` for consistent section spacing
  - `.gradient-text` for brand gradient text effects
- **Color Scheme**: Primary blue (#3b82f6), Accent orange (#f59e0b), Dark gray (#111827)
- **Responsive Design**: Mobile-first approach with lg:, md:, sm: breakpoints
- **Component Structure**: Each section is a separate component with TypeScript
- **Icons**: Lucide React for consistent iconography

## Important Commands
- **Dependencies**: All packages listed in `package.json` must be installed
- **Development**: Uses `'use client'` directive for interactive components
- **Styling**: Tailwind utilities with custom CSS classes for complex animations
- **Forms**: Contact form with client-side validation (extend with backend integration)

## External Dependencies & Integrations
- **Core**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, Autoprefixer, PostCSS
- **Icons**: Lucide React for all icons
- **Animations**: Framer Motion for smooth interactions
- **Utils**: clsx and tailwind-merge for conditional styling
- **Contact Form**: Ready for backend integration (currently console logs)

## Component-Specific Notes
- **Header**: Sticky navigation with scroll-based transparency effects
- **Hero**: Animated background elements with floating gradients
- **Services**: 6 service cards with hover effects and technology lists
- **Portfolio**: Project showcase with filtering capabilities (static data)
- **About**: Company stats, technology progress bars, and values
- **Contact**: Form validation, contact info, and status indicators
- **Footer**: Company info, quick links, social media, and newsletter signup

## Deployment & Environment
- **Static Export**: Configured for static hosting (`output: 'export'`)
- **Hosting**: Optimized for Vercel, Netlify, or traditional web hosting
- **Images**: Unoptimized for static export compatibility
- **SEO**: Comprehensive metadata in `layout.tsx`
- **Performance**: Tailwind purging, optimized imports, lazy loading ready
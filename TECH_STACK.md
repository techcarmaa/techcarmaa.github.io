# Project Tech Stack & Architecture

## 🏗️ Architecture Overview

This is a modern, premium EdTech website built with Next.js 15 App Router, utilizing server-side rendering, static generation, and client-side interactivity where needed.

### Core Technologies

```
Next.js 15 (App Router)
├── Server Components (Layout, Pages)
├── Client Components (Interactive Sections)
├── Image Optimization
└── API Routes (Ready for backend integration)

TypeScript
├── Full type safety
├── Strict mode enabled
├── Path aliases configured
└── Interface-based architecture

Tailwind CSS 3.4
├── Custom color system
├── Dark/Light theme support
├── Animation utilities
├── Custom plugins (glass effect, glowing shadows)
└── Mobile-first responsive design

Framer Motion 11.0
├── Scroll animations
├── Stagger effects
├── Hover interactions
├── Page transitions
└── Smooth easing functions

GSAP 3.12
├── Advanced timeline animations
├── Parallax effects
└── Complex sequences
```

## 📦 Dependencies

### Production Dependencies

```
react@19.0.0
├── Core UI library
└── Latest features & concurrent rendering

next@15.0.0
├── React framework
├── App Router (latest)
├── Image optimization
├── Built-in API routes
└── SEO optimizations

framer-motion@11.0.0
├── Animations & transitions
├── Scroll detection
├── Gesture animations
└── Layout animations

gsap@3.12.2
├── Advanced animations
├── Timeline control
└── Plugin system

tailwindcss@3.4.0
├── CSS framework
├── Utility-first approach
└── Customizable theming

lucide-react@0.344.0
├── Icon library
├── 344+ optimized icons
└── Tree-shakeable

@radix-ui/*
├── Dialog, Accordion, Tabs
├── Unstyled components
└── Accessibility built-in

react-hook-form@7.51.0
├── Form state management
├── Validation (with Zod)
├── Minimal re-renders
└── Excellent UX

zod@3.22.4
├── Schema validation
├── TypeScript-first
└── Runtime validation

next-seo@6.4.0
├── SEO meta tags
├── Open Graph
├── Twitter cards
└── Structured data

react-intersection-observer@9.8.1
├── Lazy loading
├── Scroll animations
└── Performance optimization

sonner@1.3.1
├── Toast notifications
└── Beautiful UI

axios@1.6.2
├── HTTP client
└── API calls (future use)

class-variance-authority@0.7.0
├── Component variants
├── Type-safe styling
└── CSS-in-JS

clsx & tailwind-merge@2.2.1
├── Class name handling
└── Tailwind conflict resolution
```

### Development Dependencies

```
typescript@5.3.3
├── Type checking
└── IntelliSense

@typescript-eslint/*@6.17.0
├── TypeScript linting
└── Code quality

eslint@8.56.0
├── JavaScript linting
└── Best practices

prettier@3.1.1
├── Code formatting
└── Consistent style

autoprefixer@10.4.16
├── CSS vendor prefixes
└── Cross-browser support

postcss@8.4.32
├── CSS processing
└── Plugin system
```

## 🎨 Design System

### Color Palette

```
Dark Mode (Default):
- Background: #000000 (0° 0% 0%)
- Foreground: #ffffff (0° 0% 100%)
- Card: #1a2a3a (217° 32% 17%)
- Primary: #3b82f6 (217° 91% 60%) - Electric Blue
- Secondary: #a855f7 (280° 85% 67%) - Purple
- Accent: #06b6d4 (186° 100% 50%) - Cyan
- Destructive: #f87171 (0° 84% 60%) - Red

Light Mode:
- Background: #ffffff
- Foreground: #0a0e27
- Card: #f8fafb
- Primary/Secondary/Accent: Same
```

### Typography

```
Font Families:
- Sans (Body): Inter - Clean, modern sans-serif
- Display (Headers): Poppins - Bold, expressive
- Mono (Code): Space Mono - Technical feel

Font Sizes (Tailwind):
- H1: 2.25rem - 3.75rem (mobile to desktop)
- H2: 1.875rem - 3rem
- H3: 1.5rem - 1.875rem
- Body: 1rem (16px)
- Small: 0.875rem - 0.75rem
```

### Animation Principles

```
Performance:
- GPU acceleration (transform, opacity)
- No layout shift animations
- Requestanimationframe optimized
- Reduced motion respected

Duration & Timing:
- Fast: 0.2-0.3s (micro-interactions)
- Standard: 0.5-0.6s (element animations)
- Slow: 1s+ (section transitions, loops)
- Easing: easeOut, easeInOut for smoothness

Stagger Effect:
- 0.05-0.1s delay between items
- Max 0.3s total stagger
- Grouped animations
```

## 🗂️ Project Structure

```
root/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout + metadata
│   │   ├── page.tsx                # Homepage
│   │   └── globals.css             # Global styles
│   │
│   ├── components/
│   │   ├── animations/
│   │   │   └── AnimationComponents.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── CoursesSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── SuccessStoriesSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── ContactSection.tsx
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── ScrollToTop.tsx
│   │
│   ├── lib/
│   │   ├── constants.ts            # Course, testimonial data
│   │   └── utils.ts                # Utility functions
│   │
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   │
│   └── styles/
│       └── globals.css             # Tailwind + custom CSS
│
├── public/
│   ├── robots.txt
│   └── sitemap.xml
│
├── config/
│   ├── next.config.js              # Next.js configuration
│   ├── tailwind.config.ts          # Tailwind configuration
│   ├── tsconfig.json               # TypeScript configuration
│   ├── postcss.config.js           # PostCSS configuration
│   └── .eslintrc.json              # ESLint configuration
│
└── docs/
    └── TECH_STACK.md               # This file
```

## 🔧 Configuration Details

### Next.js Configuration (next.config.js)

```
✓ Image optimization
✓ React strict mode
✓ SWC minification
✓ Security headers
✓ Compression
✓ Source maps disabled (production)
```

### Tailwind Configuration (tailwind.config.ts)

```
✓ Dark mode with 'class' strategy
✓ Custom color system with CSS variables
✓ Extended animation keyframes
✓ Custom box shadows (glow effects)
✓ Backdrop blur utilities
✓ Custom plugins (glass effect, scrollbar)
```

### TypeScript Configuration (tsconfig.json)

```
✓ ES2020 target
✓ Strict mode enabled
✓ Path aliases (@/components, @/lib, etc.)
✓ DOM library included
✓ Module resolution: node
✓ React 19 JSX transform
```

## 📊 SEO Architecture

### Meta Tags

- Dynamic Open Graph tags
- Twitter Card integration
- Canonical URLs
- Mobile-optimized viewport

### Structured Data

- Organization schema
- Instructor schema
- Course schema
- FAQ schema (with FAQS)
- BreadcrumbList schema
- LocalBusiness schema

### Technical SEO

- Sitemap.xml
- Robots.txt
- Mobile-first indexing ready
- Fast Core Web Vitals
- Semantic HTML5 markup

## ⚡ Performance Optimizations

### Image Optimization

```
- Next/Image component
- Responsive sizing
- WEBP/AVIF formats
- Lazy loading
- Blur placeholder ready
```

### Code Splitting

```
- Route-based splitting
- Dynamic imports
- Component lazy loading
- Vendor bundling
```

### Caching Strategies

```
- Static generation where possible
- ISR (Incremental Static Regeneration) ready
- Browser caching headers
- Image CDN optimization
```

### Bundling

```
- Tree shaking enabled
- CSS purging active
- Minification enabled
- Source maps in dev only
```

## 🎯 Performance Targets

- **Lighthouse Score**: 90+
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Total Blocking Time (TBT)**: < 200ms

## 🚀 Deployment

### Vercel (Recommended)

```bash
vercel deploy
# Auto-optimized Next.js hosting
# Zero-config deployment
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm", "start"]
```

### Traditional Hosting

```bash
npm run build
npm start
# Runs on port 3000
```

## 🔐 Security Features

- HTTPS ready
- CSP headers configured
- XSS protection
- Clickjacking prevention
- CORS ready
- Environment variables for secrets

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🧪 Development Workflow

### Running Locally

```bash
npm install
npm run dev
# http://localhost:3000
```

### Building for Production

```bash
npm run build
npm run start
```

### Code Quality

```bash
npm run lint
npm run type-check
npm run format
```

## 📚 Learning Resources

- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- TypeScript: https://www.typescriptlang.org/docs/
- React: https://react.dev

## 🎓 Best Practices Implemented

✓ Server Components by default, Client Components when needed
✓ Semantic HTML structure
✓ Accessible color contrasts
✓ Keyboard navigation support
✓ Loading states and error boundaries
✓ Performance monitoring ready
✓ Analytics integration ready
✓ A/B testing framework ready

---

**Last Updated**: May 2026
**Maintained by**: Anirudh Dobhal

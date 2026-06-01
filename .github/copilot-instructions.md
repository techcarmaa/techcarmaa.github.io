# Anirudh Dobhal EdTech Website - Development Instructions

## Project Overview

Premium, SEO-optimized EdTech website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion for instructor Anirudh Dobhal. The site showcases courses in Cloud Computing, DevOps, AI, and Full Stack Development with a focus on conversion and user experience.

## Tech Stack Summary

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11.0 + GSAP 3.12
- **UI**: Custom components + ShadCN UI utilities
- **Forms**: React Hook Form + Zod
- **SEO**: next-seo + JSON-LD schema markup
- **Icons**: Lucide React (344 icons)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── animations/        # Framer Motion utilities
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Page sections (Hero, About, Courses, etc.)
│   └── ui/               # Reusable UI components
├── lib/
│   ├── constants.ts      # Course, testimonial, FAQ data
│   └── utils.ts          # Utility functions
├── types/                # TypeScript interfaces
└── styles/               # Global CSS + Tailwind
```

## Key Features Implemented

✓ Hero section with animated background & trust badges
✓ Instructor profile with timeline & stats
✓ 5 premium course cards with filters
✓ Features/Benefits section with 8 key points
✓ Testimonials carousel with 6 success stories
✓ Success stories with salary growth graphics
✓ Learning path roadmap (4 stages)
✓ FAQ section with schema markup (SEO)
✓ Contact form with validation & multiple CTAs
✓ Sticky responsive navbar with dark/light mode toggle
✓ Comprehensive footer with social links
✓ Scroll-to-top button
✓ Glassmorphism effects & gradient aesthetics
✓ Smooth animations & scroll reveals
✓ Mobile responsive design
✓ Structured data for Google & social sharing

## SEO Implementation

- Meta tags (title, description, keywords)
- Open Graph & Twitter cards
- Structured data:
  - Organization schema
  - Instructor schema
  - Course schema (ready to expand)
  - FAQ schema
  - BreadcrumbList schema
  - LocalBusiness schema
- Sitemap.xml & robots.txt
- Semantic HTML structure
- Image alt texts
- Performance optimized

## Customization Guide

### Update Courses
Edit `src/lib/constants.ts` - `courses` array:
```typescript
export const courses: Course[] = [
  {
    id: 'course-id',
    title: 'Course Title',
    description: 'Full description...',
    // ... other fields
  }
];
```

### Update Testimonials
Edit `src/lib/constants.ts` - `testimonials` array with student feedback and avatars

### Update Instructor Info
Edit `src/components/sections/AboutSection.tsx` for experience details

### Change Colors/Theme
Edit `tailwind.config.ts` and `src/styles/globals.css` for CSS variables:
```css
:root {
  --primary: 217 91% 60%;  /* Electric Blue */
  --secondary: 280 85% 67%; /* Purple */
  --accent: 186 100% 50%;   /* Cyan */
  /* ... other colors */
}
```

### Update Content
- Hero text: `HeroSection.tsx`
- Features: `FeaturesSection.tsx`
- Course data: `constants.ts`

## Development Commands

```bash
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:3000)
npm run build           # Production build
npm start               # Start production server
npm run lint            # Run ESLint
npm run type-check      # TypeScript type checking
npm run format          # Format with Prettier
```

## Performance Targets

- Lighthouse Score: 90+
- LCP: < 2.5s
- CLS: < 0.1
- FID: < 100ms

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Docker
```bash
docker build -t edtech .
docker run -p 3000:3000 edtech
```

### Traditional Server
```bash
npm run build && npm start
```

## Environment Setup

Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://anirudh.io
NEXT_PUBLIC_GA_ID=your_analytics_id
```

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus visible indicators
- Alt text on all images

## Future Enhancements

- [ ] Blog section with article pages
- [ ] Live course schedule/calendar
- [ ] Student dashboard/login
- [ ] Payment integration (Stripe/Razorpay)
- [ ] Email newsletter signup
- [ ] Video course previews
- [ ] Instructor certification verification
- [ ] Advanced analytics
- [ ] Community forum
- [ ] Mobile app deep linking

## Important Notes

1. **Images**: All images are placeholder URLs. Replace with actual course/instructor images
2. **Email**: Update contact email in `Footer.tsx` and `ContactSection.tsx`
3. **Phone**: Update WhatsApp/phone numbers in contact sections
4. **Analytics**: Add Google Analytics ID to `.env.local`
5. **Deployment**: Configure domain and SSL certificate
6. **Database**: Contact form data needs backend integration

## Support & Maintenance

- Keep dependencies updated: `npm update`
- Run type-check before deployment: `npm run type-check`
- Monitor performance: Use Next.js Analytics
- SEO monitoring: Google Search Console
- Error tracking: Integrate Sentry (optional)

## Documentation Files

- `README.md` - Main project documentation
- `TECH_STACK.md` - Detailed technology documentation
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration

## Contact & Support

- **Site Email**: hello@anirudh.io
- **Phone**: +91 9876543210
- **GitHub**: [Repository URL]

---

**Last Updated**: May 27, 2026
**Project Status**: ✓ Production Ready
**Maintainer**: Anirudh Dobhal

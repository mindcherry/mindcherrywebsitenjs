# MindCherry - Modern Software House Website

A production-ready website built with Next.js 14+, TypeScript, Tailwind CSS, and Sanity CMS. This website showcases premium design, fast performance, and excellent SEO.

## Features

✅ **Modern Design** - Stripe/Vercel-inspired clean and minimal aesthetic  
✅ **Next.js 14+ App Router** - Latest Next.js with server components  
✅ **TypeScript** - Fully typed for better development experience  
✅ **Tailwind CSS** - Utility-first styling with custom theme  
✅ **Sanity CMS** - Headless CMS for blog management  
✅ **Responsive Design** - Mobile-first, works on all devices  
✅ **SEO Optimized** - Metadata, Open Graph, structured data  
✅ **ISR Caching** - Blog posts cached with incremental static regeneration  
✅ **Image Optimization** - Next.js Image with WebP/AVIF support  
✅ **Framer Motion** - Subtle animations with accessibility  
✅ **Form Validation** - Client-side validation with error handling  
✅ **Dark Mode Ready** - CSS variables for theme switching  
✅ **Vercel Ready** - Optimized for Vercel deployment  

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **CMS:** Sanity.io
- **Animations:** Framer Motion
- **Rich Text:** Portable Text React
- **Image Optimization:** Next.js Image + Sanity Image URL
- **Deployment:** Vercel

## Project Structure

```
mindcherrywebsite/
├── app/
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Home page
│   ├── about/page.tsx             # About page
│   ├── services/page.tsx          # Services page
│   ├── portfolio/page.tsx         # Portfolio/Case studies
│   ├── contact/page.tsx           # Contact form page
│   ├── blog/page.tsx              # Blog list page
│   ├── blog/[slug]/page.tsx       # Blog detail page (dynamic)
│   ├── api/
│   │   ├── contact/route.ts       # Contact form API
│   │   └── blog/route.ts          # Blog posts API
│   └── globals.css                # Global styles + CSS variables
├── components/                     # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── SectionWrapper.tsx
│   ├── BlogCard.tsx
│   ├── PortableTextRenderer.tsx
│   ├── CTASection.tsx
│   ├── Testimonials.tsx
│   └── Image.tsx
├── lib/
│   ├── types.ts                   # TypeScript interfaces
│   ├── utils.ts                   # Utility functions
│   ├── seo.ts                     # SEO helpers
│   ├── validation.ts              # Form validation
│   └── data/
│       ├── services.ts            # Mock services data
│       ├── caseStudies.ts         # Sample case studies
│       ├── team.ts                # Mock team members
│       └── testimonials.ts        # Mock testimonials
├── sanity/
│   ├── client.ts                  # Sanity client setup
│   ├── queries.ts                 # GROQ queries
│   └── imageUrl.ts                # Image URL builder
├── public/
│   ├── robots.txt
│   └── images/                    # Static images
├── tailwind.config.ts             # Tailwind configuration
├── next.config.ts                 # Next.js configuration
├── tsconfig.json                  # TypeScript configuration
├── postcss.config.js              # PostCSS configuration
├── .env.local                     # Environment variables (local)
└── package.json                   # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Sanity account (free tier available)
- (Optional) SendGrid/Resend for emails

### Local Development

1. **Clone the repository:**
```bash
git clone <repository-url>
cd mindcherrywebsite
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**

Create a `.env.local` file (already provided with placeholder values):
```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Start the development server:**
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Sanity CMS Setup

### Create Sanity Project

1. Go to [sanity.io](https://www.sanity.io/)
2. Sign up or log in to your account
3. Create a new project:
   - Choose "Blank project"
   - Select dataset: `production`
   - Note your **Project ID** and **Dataset**

### Create API Token

1. Go to **Project Settings** → **API**
2. Create a new **API token** with these permissions:
   - `Read` - for fetching content
   - CORS origin - add your localhost and production domains

### Define Blog Schema

Create a file `sanity-schema.json` or use Sanity Studio to define:

**Post Schema:**
```javascript
{
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text'
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }]
    }
  ]
}
```

### Configure CORS

1. Go to **Project Settings** → **API**
2. Under **CORS Origins**, add:
   - `http://localhost:3000` (local development)
   - `https://yourdomain.com` (production)

### Update Environment Variables

After creating your Sanity project, update `.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_actual_api_token
```

## Building & Testing

### Type Check
```bash
npm run type-check
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Run Linter
```bash
npm run lint
```

## Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Configure Environment Variables:**
   - In Vercel dashboard, go to **Settings** → **Environment Variables**
   - Add all variables from `.env.local`:
     ```
     NEXT_PUBLIC_SANITY_PROJECT_ID=...
     NEXT_PUBLIC_SANITY_DATASET=production
     SANITY_API_TOKEN=...
     NEXT_PUBLIC_SITE_URL=https://yourdomain.com
     ```

4. **Set up Custom Domain (Optional):**
   - Go to **Domains** in Vercel
   - Add your custom domain
   - Configure DNS records

5. **Setup Sanity Webhooks (Optional):**
   - In Vercel, go to **Settings** → **Webhooks**
   - Configure Sanity to trigger rebuilds on content changes

### Environment Variables for Production

Ensure these are set in your Vercel/hosting environment:

```env
# Required
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Site configuration
NEXT_PUBLIC_SITE_URL=https://mindcherry.com

# Optional: Email service
# SENDGRID_API_KEY=...
# RESEND_API_KEY=...
```

## Customization

### Brand Colors

Edit `app/globals.css` to change brand colors:
```css
:root {
  --color-primary: #EA1845;        /* Primary brand color */
  --color-text-primary: #15161B;   /* Main text color */
  --color-text-secondary: #4E4E4E; /* Secondary text */
  --color-bg-light: #E1E4EB;       /* Light background */
}
```

### Font Family

Update `tailwind.config.ts` to change font:
```typescript
fontFamily: {
  sans: ['Monrope', 'sans-serif'], // Change to your font
}
```

### Content

- **Services:** Edit `lib/data/services.ts`
- **Case Studies:** Edit `lib/data/caseStudies.ts`
- **Team:** Edit `lib/data/team.ts`
- **Testimonials:** Edit `lib/data/testimonials.ts`
- **Blog:** Add/edit posts in Sanity Studio

### Contact Form

The contact form currently logs submissions. To add email functionality:

1. Install email service package (e.g., `npm install resend`)
2. Update `app/api/contact/route.ts` to send emails
3. Add API key to environment variables

## Performance Optimization

### Current Optimizations

✅ Image optimization with Next.js Image component  
✅ ISR caching for blog posts (60-second revalidation)  
✅ CSS-in-JS with Tailwind CSS  
✅ Code splitting with Next.js  
✅ Automatic WebP/AVIF format selection  
✅ Gzip compression via Vercel  

### Lighthouse Audit

Target scores:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

Run audit: `npm run dev` → Open DevTools → Lighthouse

## SEO Features

✅ Dynamic metadata for all pages  
✅ OpenGraph tags for social sharing  
✅ Twitter card support  
✅ Canonical URLs  
✅ Structured data ready  
✅ XML sitemap support  
✅ robots.txt file  
✅ Mobile-first design  

## Security

- CORS properly configured
- Content Security Policy headers
- No sensitive data in client-side code
- Input validation on forms
- Sanity API token restricted to read-only (can add write for admin)

## Troubleshooting

### Blog posts not showing

1. Check Sanity credentials in `.env.local`
2. Verify CORS settings in Sanity dashboard
3. Check blog schema matches queries in `sanity/queries.ts`
4. Check browser console for errors

### Images not loading

1. Verify image URLs in Sanity
2. Check `remotePatterns` in `next.config.ts`
3. Ensure images are in Sanity image asset library

### Build errors

1. Run `npm install` to ensure dependencies are installed
2. Check TypeScript errors: `npm run type-check`
3. Clear `.next` folder: `rm -rf .next`
4. Rebuild: `npm run build`

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

## License

This project is created for MindCherry. All rights reserved.

## Contributing

For internal team use. Contact admin for contribution guidelines.

---

**Built with ❤️ by MindCherry Team**

Last Updated: May 1, 2026  
Version: 1.0.0

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

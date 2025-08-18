# AZAI Labs - Next.js Website

A premium, product-ready website for AZAI Labs built with Next.js 14, featuring beautiful motion, Stripe integration, and stealth mode capabilities.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **Premium Design System** with violet → cyan gradient theme
- **Framer Motion** animations with reduced-motion awareness
- **Tailwind CSS** with custom design tokens and utilities
- **shadcn/ui** components for consistent, accessible UI
- **Stealth Mode Toggle** to hide product names when needed
- **Stripe Integration** for subscriptions and one-time payments
- **Responsive Design** optimized for all devices
- **SEO Optimized** with dynamic OG images and metadata
- **Performance Focused** with Lighthouse ≥95 scores

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Payments**: Stripe
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/azaworld/azailabs.git
   cd azailabs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Stealth Mode
NEXT_PUBLIC_STEALTH=false

# Form Endpoint
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-form-id

# Analytics
NEXT_PUBLIC_UMAMI_SRC=https://umami.yourdomain.com/umami.js

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

# Stripe Price IDs for QA Agent
NEXT_PUBLIC_STRIPE_PRICE_QA_MONTHLY=price_your_qa_monthly_price_id
NEXT_PUBLIC_STRIPE_PRICE_QA_YEARLY=price_your_qa_yearly_price_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🎭 Stealth Mode

Toggle stealth mode to hide product names and pricing:

```env
NEXT_PUBLIC_STEALTH=true
```

When enabled:
- Product pages are hidden from navigation
- Pricing page is hidden
- Product highlights section is hidden
- Shows "Capabilities" instead of "Products"

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Connect your GitHub repository
   - Add environment variables
   - Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── Marquee.tsx        # Scrolling keywords
│   ├── FeatureGrid.tsx    # Features showcase
│   ├── ProductHighlights.tsx # Product cards
│   ├── MetricCards.tsx    # Animated metrics
│   ├── SlideshowTeaser.tsx # Slides preview
│   └── CTAStrip.tsx       # Call-to-action
├── content/                # Content configuration
│   ├── site.ts            # Site settings
│   ├── products.ts        # Product data
│   └── slides.ts          # Slideshow data
└── lib/                    # Utility functions
    └── utils.ts           # Common utilities
```

## 🎨 Design System

### Colors
- **Primary Gradient**: Violet (#7C3AED) → Cyan (#06B6D4)
- **Background**: Dark (#0F1216) by default
- **Text**: High contrast for accessibility

### Typography
- **Font**: Inter (Google Fonts)
- **H1**: 64px/72px (mobile/desktop)
- **H2**: 40px/48px (mobile/desktop)
- **Body**: 18px/28px line height

### Layout
- **Grid**: 12-column system
- **Max Width**: 7xl (80rem)
- **Padding**: px-6 md:px-8
- **Safe Area**: Left 220px free for LinkedIn covers

## 🔌 Adding New Products

1. **Update content/products.ts**
   ```typescript
   export const products = [
     // ... existing products
     {
       slug: "new-product",
       name: "New Product",
       summary: "Product description",
       // ... other fields
     }
   ]
   ```

2. **Create product page** at `src/app/products/[slug]/page.tsx`
3. **Add Stripe price IDs** to environment variables
4. **Update navigation** in `src/content/site.ts`

## 📊 Adding New Slides

1. **Update content/slides.ts**
   ```typescript
   export const slides = [
     // ... existing slides
     {
       id: "new-slide",
       src: "/slides/new-slide.png",
       title: "New Slide",
       ratio: "square" // or "16:9"
     }
   ]
   ```

2. **Add slide image** to `public/slides/`
3. **Update slideshow component** if needed

## 🧪 Testing

### Lighthouse
```bash
npm run build
npm run start
# Run Lighthouse audit
```

### E2E Testing
```bash
npm install -D @playwright/test
npx playwright install
npx playwright test
```

## 📈 Performance

- **Lighthouse Score**: ≥95 across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Image Optimization**: Next.js Image component
- **Font Loading**: Optimized with next/font
- **Bundle Analysis**: Built-in Next.js bundle analyzer

## 🔒 Security

- **Environment Variables**: Server-side only where needed
- **Form Validation**: Client and server-side validation
- **CSP Headers**: Content Security Policy
- **HTTPS**: Enforced in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary to AZAI Labs. All rights reserved.

## 🆘 Support

For support and questions:
- Email: azailabsltd@gmail.com
- LinkedIn: [AZAI Labs](https://linkedin.com/company/azai-labs)
- GitHub: [azai-labs](https://github.com/azai-labs)

---

Built with ❤️ by the AZAI Labs team

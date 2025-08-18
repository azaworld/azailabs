# AZAI Labs Website - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Complete AZAI Labs website with Next.js 14"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables (see below)
   - Deploy!

### Option 2: Deploy from Local

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## 🔧 Environment Variables

Set these in your Vercel dashboard:

### Required Variables
```env
# Stealth Mode (true/false)
NEXT_PUBLIC_STEALTH=false

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### Optional Variables
```env
# Form Endpoint
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-form-id

# Analytics
NEXT_PUBLIC_UMAMI_SRC=https://umami.yourdomain.com/umami.js

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_your_stripe_public_key
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PRICE_QA_MONTHLY=price_your_qa_monthly_price_id
NEXT_PUBLIC_STRIPE_PRICE_QA_YEARLY=price_your_qa_yearly_price_id
```

## 🌐 Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain

2. **Update Environment Variables**
   ```env
   NEXT_PUBLIC_SITE_URL=https://azailabs.com
   ```

3. **Update content/site.ts**
   ```typescript
   export const seo = {
     url: "https://azailabs.com",
     // ... other config
   };
   ```

## 📱 Performance Optimization

### Lighthouse Score Target: ≥95

1. **Build Optimization**
   ```bash
   npm run build
   npm run start
   ```

2. **Image Optimization**
   - Use Next.js Image component
   - Optimize logo files in `/public/brand/`
   - Compress slide images in `/public/slides/`

3. **Font Optimization**
   - Inter font is already optimized with `next/font`
   - Preload critical fonts

## 🔒 Security & Compliance

1. **HTTPS Enforcement**
   - Vercel automatically provides SSL certificates
   - Force HTTPS redirects

2. **Content Security Policy**
   - Add CSP headers in `next.config.ts`
   - Restrict external resources

3. **Environment Variables**
   - Never commit sensitive keys to GitHub
   - Use Vercel's encrypted environment variables

## 📊 Analytics Setup

### Option 1: Umami (Privacy-First)
1. Deploy Umami to your server
2. Add tracking code to environment variables
3. Update `src/app/layout.tsx` with script

### Option 2: Google Analytics 4
1. Create GA4 property
2. Add tracking ID to environment variables
3. Implement gtag in `src/app/layout.tsx`

## 🎭 Stealth Mode Toggle

### Enable Stealth Mode
```env
NEXT_PUBLIC_STEALTH=true
```

**What gets hidden:**
- Product pages from navigation
- Pricing page
- Product highlights section
- Docs and Blog links

**What remains visible:**
- Home page
- Capabilities page
- How We Work page
- Results page
- About page
- Contact page

### Disable Stealth Mode
```env
NEXT_PUBLIC_STEALTH=false
```

**Everything becomes visible:**
- Full product catalog
- Pricing information
- Documentation
- Blog posts

## 🔄 Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🧪 Testing Before Deploy

1. **Local Testing**
   ```bash
   npm run dev
   # Test all pages and functionality
   ```

2. **Build Testing**
   ```bash
   npm run build
   npm run start
   # Test production build
   ```

3. **Lighthouse Audit**
   - Run Lighthouse in Chrome DevTools
   - Target: ≥95 across all metrics
   - Fix any issues before deploying

## 📈 Post-Deployment

1. **Monitor Performance**
   - Vercel Analytics
   - Core Web Vitals
   - Error tracking

2. **SEO Verification**
   - Google Search Console
   - Bing Webmaster Tools
   - Test meta tags and OG images

3. **User Feedback**
   - Monitor contact form submissions
   - Track user engagement
   - Gather feedback for improvements

## 🆘 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (18+ required)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Styling Issues**
   - Verify Tailwind CSS is working
   - Check CSS variables in `globals.css`
   - Ensure shadcn/ui components are properly installed

3. **Environment Variables**
   - Verify variables are set in Vercel
   - Check for typos in variable names
   - Ensure `NEXT_PUBLIC_` prefix for client-side variables

### Support

- **Documentation**: Check README.md
- **Issues**: GitHub repository issues
- **Contact**: azailabsltd@gmail.com

---

**Happy Deploying! 🚀**

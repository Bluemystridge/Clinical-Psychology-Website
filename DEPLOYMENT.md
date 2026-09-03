# Deployment Guide for alvaroridge.com

## Quick Start - Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js website. It's free and takes just 5 minutes.

### Step 1: Create a Vercel Account
1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Project
1. After signing in, click "Add New..." → "Project"
2. Find and select `Bluemystridge/Clinical-Psychology-Website`
3. Click "Import"
4. Vercel will auto-detect Next.js settings (all defaults are correct)
5. Click "Deploy"

**That's it! Your site will be live in 1-2 minutes at a Vercel URL.**

### Step 3: Connect Your Domain (alvaroridge.com)

1. In Vercel dashboard, go to your project → "Settings" → "Domains"
2. Click "Add Domain"
3. Enter `alvaroridge.com`
4. Vercel will show you DNS records to add

#### Option A: If domain registrar allows NS records (Easiest)
1. Copy the 4 Vercel nameservers
2. Go to your domain registrar (GoDaddy, Namecheap, etc.)
3. Find "DNS Settings" or "Nameservers"
4. Replace nameservers with Vercel's
5. Wait 24-48 hours for DNS to propagate

#### Option B: Add CNAME records (If Option A doesn't work)
1. Go to your domain registrar's DNS settings
2. Add CNAME record pointing to Vercel's provided URL
3. Wait 24-48 hours

### Step 4: SSL Certificate
Vercel automatically provides free SSL (HTTPS) - no action needed!

---

## Alternative Deployment Options

### Netlify
1. Go to https://netlify.com
2. Click "Add new site"
3. "Connect to Git" → Select your GitHub repo
4. Build settings auto-detected, click "Deploy"
5. Add domain in Netlify settings

### Self-Hosted (VPS/Dedicated Server)
```bash
# On your server
git clone https://github.com/Bluemystridge/Clinical-Psychology-Website.git
cd Clinical-Psychology-Website
npm install
npm run build
npm start
```

Use PM2 to keep it running:
```bash
npm install -g pm2
pm2 start npm --name "psychology-site" -- start
pm2 startup
pm2 save
```

---

## Environment Variables (if needed for contact form)

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_SITE_URL=https://alvaroridge.com
# Add API keys for contact form backend here
```

---

## After Deployment - Important Steps

### 1. Connect Contact Form Backend
The contact form currently doesn't send emails. Choose one:

**Option A: Formspree (Easiest)**
- Go to https://formspree.io
- Create free account
- Create new form for alvaroridge.com
- Update form in `app/contact/page.tsx`:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* form fields */}
</form>
```

**Option B: SendGrid**
```bash
npm install @sendgrid/mail
```

**Option C: Nodemailer**
```bash
npm install nodemailer
```

### 2. Add Google Analytics
Edit `app/layout.tsx` and add:
```jsx
<Script 
  strategy="afterInteractive"
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
/>
```

### 3. Customize Content
- Update phone, email, address in `app/contact/page.tsx`
- Add your bio in `app/about/page.tsx`
- Update testimonials in `components/Testimonials.tsx`

### 4. Add Professional Images
- Replace placeholders with professional photos
- Add photos to `public/` folder
- Update components to use them

---

## Monitoring & Maintenance

### Check Build Status
1. Go to your Vercel project dashboard
2. See deployment status and logs
3. Each Git push automatically redeploys

### View Site Analytics
1. Vercel dashboard → "Analytics"
2. See traffic, performance metrics

### Custom Domain Email (Optional)
Use Google Workspace or similar to get professional email:
- info@alvaroridge.com
- appointments@alvaroridge.com

---

## Troubleshooting

**Site shows "404 Not Found"**
- Wait 24-48 hours for DNS propagation
- Check domain settings in Vercel/Netlify

**Contact form not sending emails**
- Verify backend service is configured
- Check console for errors

**Slow performance**
- Check Vercel Analytics
- Optimize images with Next.js Image component

**Build fails**
- Check Vercel deployment logs
- Verify all dependencies installed locally

---

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: https://github.com/Bluemystridge/Clinical-Psychology-Website/issues

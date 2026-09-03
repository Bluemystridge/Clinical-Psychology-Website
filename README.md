# Dr. Alvaro Ridge - Clinical Psychology Website

A modern, professional website for clinical counseling services built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design** - Mobile-friendly layout that works on all devices
- **SEO Optimized** - Built-in metadata and open graph tags
- **Professional UI** - Clean, modern design with Tailwind CSS
- **Multiple Pages** - Home, About, Services, and Contact pages
- **Contact Form** - Ready-to-implement appointment request form
- **Performance** - Optimized for fast loading and excellent performance

## Pages

- **Home** - Hero section with services overview and testimonials
- **About** - Background and credentials of Dr. Alvaro Ridge
- **Services** - Detailed list of clinical psychology services
- **Contact** - Contact information and appointment request form

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components
- **Deployment**: Ready for Vercel, Netlify, or self-hosted

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed
- Git for version control

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Bluemystridge/Clinical-Psychology-Website.git
cd Clinical-Psychology-Website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Development

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Customization

### Update Personal Information

- Edit `app/layout.tsx` to update metadata and domain
- Update contact information in `app/contact/page.tsx`
- Modify credentials in `app/about/page.tsx`
- Customize services in `app/services/page.tsx`

### Styling

- Modify colors in `tailwind.config.js`
- Edit component styles in individual component files
- Update global styles in `app/globals.css`

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel will automatically deploy on push
4. Connect your domain `alvaroridge.com` in Vercel settings

### Custom Domain

To use your paid domain:
1. Point your domain's DNS to Vercel
2. Add domain in Vercel project settings
3. Update `metadataBase` in `app/layout.tsx`

## Project Structure

```
.
├── app/                    # App router pages and layouts
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services preview
│   ├── Testimonials.tsx   # Client testimonials
│   └── CallToAction.tsx   # CTA section
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies and scripts
```

## Next Steps

1. **Update Contact Information** - Add your actual phone number, email, and office address
2. **Add Contact Form Backend** - Integrate with email service (Nodemailer, SendGrid, etc.)
3. **Add More Content** - Add testimonials, case studies, or blog posts
4. **Set Up Analytics** - Add Google Analytics for tracking
5. **Implement Scheduling** - Consider Calendly or similar for appointment booking
6. **Add Images** - Replace placeholder content with professional photography

## License

Private project for Dr. Alvaro Ridge

## Support

For questions or issues, please contact the development team.

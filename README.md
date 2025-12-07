# BrightSpark Electrical Website

A modern, professional website for BrightSpark Electrical Services built with Next.js, TypeScript, and Tailwind CSS. This website showcases electrical services, customer testimonials, project galleries, and provides a contact form for potential clients.

## 📋 Description

BrightSpark Electrical Website is a fully responsive, SEO-optimized website designed for an electrical services business. It features a clean, modern design with smooth animations, a comprehensive service catalog, customer testimonials, project gallery, FAQ section, and an integrated contact form.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **UI Shells**: [Aceternity UI](https://ui.aceternity.com/) components
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) for dark mode support
- **Code Quality**: ESLint + Prettier

## 🚀 Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### 1. Clone the Repository

```bash
git clone <repository-url>
cd electrician-website
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Variables

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values. Currently, no environment variables are required for basic functionality, but you'll need them for email integration and other features.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## 🔧 How To

### Add New Services

Edit `/constants/services.ts` to add, remove, or modify services:

```typescript
export const services: ServiceItem[] = [
  {
    id: "service-1",
    title: "Your Service Name",
    shortDescription: "Description of the service...",
  },
  // Add more services...
];
```

The services will automatically appear on the Services page and in the contact form dropdown.

### Update Branding

Edit `/constants/branding.ts` to update business information:

```typescript
export const siteBranding: SiteBranding = {
  businessName: "Your Business Name",
  tagline: "Your Tagline",
  phoneNumber: "555-123-4567",
  email: "info@yourbusiness.com",
  address: "Your Business Address",
  primaryColor: "#FFA500",
  secondaryColor: "#1E3A8A",
  socialLinks: {
    facebook: "https://facebook.com/your-page",
    instagram: "https://instagram.com/your-page",
    yelp: "https://yelp.com/biz/your-business",
    googleBusiness: "https://g.page/your-business",
  },
  serviceAreas: ["City 1", "City 2", "City 3"],
};
```

This updates the business name, contact information, colors, social links, and service areas throughout the site.

### Update Navigation

Edit `/constants/navigation.ts` to modify navigation links:

```typescript
export const mainNavLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // Add or modify links...
];

export const footerLinks: NavLink[] = [
  // Footer navigation links...
];
```

Changes will be reflected in both the main navigation and footer.

### Update Gallery

Edit `/constants/gallery.ts` to add or modify gallery items:

```typescript
export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    src: "https://your-image-url.com/image.jpg",
    alt: "Description of the image",
    category: "Residential", // or "Commercial", "Outdoor"
  },
  // Add more gallery items...
];
```

You can use your own image URLs or continue using Unsplash images. Make sure images are optimized for web use.

### Update Testimonials

Edit `/constants/testimonials.ts` to add or modify customer testimonials:

```typescript
export const testimonials: TestimonialItem[] = [
  {
    id: "testimonial-1",
    name: "Customer Name",
    location: "City, State",
    rating: 5,
    quote: "Customer testimonial text...",
  },
  // Add more testimonials...
];
```

There are separate arrays for general testimonials, residential testimonials, and commercial testimonials that you can customize.

### Wire Up Real Email Sending

The contact form currently logs submissions to the console. To enable real email sending, you'll need to integrate an email service provider.

#### Option 1: Resend (Recommended)

1. Sign up at [Resend](https://resend.com/)
2. Get your API key
3. Install Resend:

```bash
npm install resend
```

4. Update `/app/api/contact/route.ts`:

```typescript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  // ... validation code ...

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // Use your verified domain
      to: process.env.CONTACT_EMAIL || siteBranding.email,
      subject: `New Contact Form: ${body.serviceType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Service Type:</strong> ${body.serviceType}</p>
        <p><strong>Preferred Time:</strong> ${body.preferredTime || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "..." });
  } catch (error) {
    // Error handling...
  }
}
```

5. Add to `.env.local`:

```
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=info@yourbusiness.com
```

#### Option 2: SendGrid

1. Sign up at [SendGrid](https://sendgrid.com/)
2. Get your API key
3. Install SendGrid:

```bash
npm install @sendgrid/mail
```

4. Update the API route similarly to Resend

#### Option 3: Nodemailer

For self-hosted solutions, you can use [Nodemailer](https://nodemailer.com/) with SMTP.

## 🚢 Deployment

### Vercel (Recommended)

Vercel is the recommended deployment platform for Next.js applications:

1. **Via Vercel CLI**:

```bash
npm install -g vercel
vercel
```

2. **Via GitHub Integration**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will automatically detect Next.js and configure the build settings
   - Add your environment variables in the Vercel dashboard
   - Deploy!

3. **Environment Variables**:

   Make sure to add all environment variables from `.env.local` to your Vercel project settings:
   - Go to Project Settings → Environment Variables
   - Add each variable for Production, Preview, and Development environments

4. **Custom Domain**:
   - In Vercel project settings, go to Domains
   - Add your custom domain
   - Follow the DNS configuration instructions

### Other Deployment Options

- **Netlify**: Similar to Vercel, supports Next.js out of the box
- **AWS Amplify**: Good for AWS-integrated projects
- **Docker**: Build a container and deploy to any container platform
- **Self-hosted**: Use `npm run build && npm run start` and serve with a reverse proxy like Nginx

## 📁 Project Structure

```
electrician-website/
├── app/
│   ├── about/              # About page
│   ├── api/
│   │   └── contact/        # Contact form API endpoint
│   ├── contact/            # Contact page
│   ├── faq/                # FAQ page
│   ├── gallery/            # Gallery page
│   ├── services/           # Services page
│   ├── testimonials/       # Testimonials page
│   ├── robots.txt/         # Robots.txt route
│   ├── sitemap.xml/        # Sitemap route
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── aceternity/         # Aceternity UI components
│   ├── cards/              # Card components
│   ├── forms/              # Form components
│   ├── layout/             # Layout components (Navbar, Footer, etc.)
│   ├── sections/           # Page section components
│   ├── seo/                # SEO components (JSON-LD, etc.)
│   └── ui/                 # shadcn/ui components
├── constants/
│   ├── branding.ts         # Business branding constants
│   ├── faqs.ts             # FAQ data
│   ├── gallery.ts          # Gallery items
│   ├── navigation.ts       # Navigation links
│   ├── services.ts         # Services data
│   └── testimonials.ts     # Testimonials data
├── hooks/                  # Custom React hooks
├── lib/
│   └── utils.ts            # Utility functions
├── types/
│   └── content.ts          # TypeScript type definitions
└── public/                 # Static assets
```

## 🎨 Customization

### Colors

Update the primary and secondary colors in `/constants/branding.ts`. The colors are used throughout the site via CSS variables defined in `app/globals.css`.

### Fonts

The project uses the default Next.js fonts (Geist Sans & Geist Mono). To change fonts, update `app/layout.tsx` and import your preferred font from `next/font`.

### Images

Replace placeholder images in the gallery and throughout the site with your own project photos. Ensure images are optimized for web (WebP format recommended).

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Aceternity UI](https://ui.aceternity.com)
- [React Hook Form](https://react-hook-form.com/get-started)
- [Zod Documentation](https://zod.dev/)

## 📝 License

MIT License - feel free to use this template for your projects.

---

**Built with ⚡ for electricians by developers**

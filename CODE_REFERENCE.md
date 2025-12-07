# 📄 Complete Code Reference

## Core Application Files

### `app/layout.tsx` - Root Layout

```typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BRANDING } from "@/constants/branding";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${BRANDING.businessName} - ${BRANDING.tagline}`,
  description:
    "Professional electrical services for residential and commercial properties. Licensed and insured electricians.",
  keywords: [
    "electrician",
    "electrical services",
    "residential electrician",
    "commercial electrician",
    "electrical repair",
    "electrical installation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

---

### `app/page.tsx` - Home Page

```typescript
"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Home Page
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Welcome to our electrician services website. This is a placeholder
            for the home page content.
          </p>
        </div>
      </div>
    </main>
  );
}
```

---

### `app/about/page.tsx` - About Page

```typescript
"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Learn more about our electrician services and our team. This is a
            placeholder for the about page content.
          </p>
        </div>
      </div>
    </main>
  );
}
```

---

### `app/services/page.tsx` - Services Page

```typescript
"use client";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Explore our comprehensive electrical services for residential and
            commercial properties. This is a placeholder for the services page
            content.
          </p>
        </div>
      </div>
    </main>
  );
}
```

---

### `app/testimonials/page.tsx` - Testimonials Page

```typescript
"use client";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Read what our satisfied customers have to say about our electrical
            services. This is a placeholder for the testimonials page content.
          </p>
        </div>
      </div>
    </main>
  );
}
```

---

### `app/gallery/page.tsx` - Gallery Page

```typescript
"use client";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Browse through our portfolio of completed electrical projects. This
            is a placeholder for the gallery page content.
          </p>
        </div>
      </div>
    </main>
  );
}
```

---

### `app/contact/page.tsx` - Contact Page

```typescript
"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Get in touch with us for all your electrical needs. This is a
            placeholder for the contact page content.
          </p>
        </div>
      </div>
    </main>
  );
}
```

---

### `app/faq/page.tsx` - FAQ Page

```typescript
"use client";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Find answers to common questions about our electrical services. This
            is a placeholder for the FAQ page content.
          </p>
        </div>
      </div>
    </main>
  );
}
```

---

### `app/api/contact/route.ts` - Contact API Endpoint

```typescript
import { NextRequest, NextResponse } from "next/server";
import type { ContactFormData } from "@/types/content";

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.serviceType || !body.message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the contact form submission to console
    console.log("=== Contact Form Submission ===");
    console.log("Name:", body.name);
    console.log("Email:", body.email);
    console.log("Phone:", body.phone);
    console.log("Service Type:", body.serviceType);
    console.log("Message:", body.message);
    console.log("Preferred Time:", body.preferredTime || "Not specified");
    console.log("Timestamp:", new Date().toISOString());
    console.log("===============================");

    // In the future, you can integrate with email services like Resend, SendGrid, etc.
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New Contact Form: ${body.serviceType}`,
    //   html: `<p>Name: ${body.name}</p>...`
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting us! We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process your request" },
      { status: 500 }
    );
  }
}
```

---

## Utility Files

### `lib/utils.ts` - Utility Functions

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

### `constants/branding.ts` - Business Branding

```typescript
export const BRANDING = {
  businessName: "ElectricPro Services",
  tagline: "Your Trusted Electrical Experts",
  phone: "(555) 123-4567",
  email: "info@electricpro.com",
  address: "123 Main Street, Your City, ST 12345",
  hours: {
    weekday: "Monday - Friday: 8:00 AM - 6:00 PM",
    weekend: "Saturday: 9:00 AM - 4:00 PM",
    sunday: "Sunday: Closed (Emergency Services Available)",
  },
  social: {
    facebook: "https://facebook.com/electricpro",
    instagram: "https://instagram.com/electricpro",
    linkedin: "https://linkedin.com/company/electricpro",
  },
} as const;
```

---

### `constants/navigation.ts` - Navigation Links

```typescript
export const NAVIGATION_LINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Testimonials",
    href: "/testimonials",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "Contact",
    href: "/contact",
  },
] as const;
```

---

## Custom Hooks

### `hooks/useMediaQuery.ts` - Media Query Hook

```typescript
"use client";

import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}
```

---

### `hooks/useScrollActiveSection.ts` - Scroll Tracking Hook

```typescript
"use client";

import { useState, useEffect } from "react";

export function useScrollActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return activeSection;
}
```

---

## TypeScript Types

### `types/content.ts` - Type Definitions

```typescript
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
  date?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  preferredTime?: string;
}
```

---

## Configuration Files

### `.prettierrc` - Prettier Configuration

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false
}
```

---

### `.prettierignore` - Prettier Ignore

```
node_modules
.next
out
build
dist
*.lock
package-lock.json
yarn.lock
pnpm-lock.yaml
```

---

## Usage Examples

### Using the cn() utility

```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-class",
  isActive && "active-class",
  "another-class"
)} />
```

### Using constants

```tsx
import { BRANDING } from "@/constants/branding";
import { NAVIGATION_LINKS } from "@/constants/navigation";

<h1>{BRANDING.businessName}</h1>
<nav>
  {NAVIGATION_LINKS.map(link => (
    <a key={link.href} href={link.href}>{link.name}</a>
  ))}
</nav>
```

### Using hooks

```tsx
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useScrollActiveSection } from "@/hooks/useScrollActiveSection";

const isMobile = useMediaQuery("(max-width: 768px)");
const activeSection = useScrollActiveSection(["hero", "services", "contact"]);
```

### Calling the Contact API

```tsx
const response = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@example.com",
    phone: "(555) 123-4567",
    serviceType: "Residential Repair",
    message: "Need help with electrical outlet",
    preferredTime: "Morning",
  }),
});

const result = await response.json();
console.log(result); // { success: true, message: "..." }
```

---

**All files are ready to use! Start the dev server with `npm run dev` 🚀**


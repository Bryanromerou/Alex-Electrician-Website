"use client";

import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Container } from "./Container";
import { siteBranding } from "@/constants/branding";
import { footerLinks } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <Container>
        <div className="py-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Business Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{siteBranding.businessName}</h3>
            <p className="text-sm text-muted-foreground">{siteBranding.tagline}</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${siteBranding.phoneNumber}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`Call us at ${siteBranding.phoneNumber}`}
              >
                <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                <span>{siteBranding.phoneNumber}</span>
              </a>
              <a
                href={`mailto:${siteBranding.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`Email us at ${siteBranding.email}`}
              >
                <MailIcon className="h-4 w-4" aria-hidden="true" />
                <span>{siteBranding.email}</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPinIcon className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{siteBranding.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Quick Links</h4>
            <nav className="flex flex-col space-y-2" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm text-muted-foreground hover:text-foreground transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-1 py-0.5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Follow Us</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href={siteBranding.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Visit our Facebook page"
              >
                Facebook
              </a>
              <a
                href={siteBranding.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Visit our Instagram page"
              >
                Instagram
              </a>
              <a
                href={siteBranding.socialLinks.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Visit our Yelp page"
              >
                Yelp
              </a>
              <a
                href={siteBranding.socialLinks.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Visit our Google Business page"
              >
                Google Business
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {siteBranding.businessName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

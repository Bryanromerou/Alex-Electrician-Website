"use client";

import * as React from "react";
import Link from "next/link";
import { MenuIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "./Container";
import { siteBranding } from "@/constants/branding";
import { mainNavLinks } from "@/constants/navigation";
import Logo from "@/images/ClimaVoltLogoTrans.png";

import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-lg hover:opacity-80 transition-opacity"
            aria-label={`${siteBranding.businessName} - Home`}
          >
            <img src={Logo.src} alt={siteBranding.businessName} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex md:items-center">
            <Button asChild size="sm">
              <a href={`tel:${siteBranding.phoneNumber}`}>
                <PhoneIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">{siteBranding.businessName}</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col space-y-4" aria-label="Mobile navigation">
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-base font-medium text-foreground/80 hover:text-foreground transition-colors py-2",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <Button asChild className="w-full" size="sm">
                    <a href={`tel:${siteBranding.phoneNumber}`}>
                      <PhoneIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </Container>
    </header>
  );
}

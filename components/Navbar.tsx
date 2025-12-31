"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { mainNavLinks } from "@/constants/navigation";
import Logo from "@/images/ClimaVoltIcon.png";

export function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="px-4 md:px-0 md:pl-4 ">
        {/* MOBILE HEADER */}
        <div className="md:hidden">
          <div className="grid grid-cols-3 items-center py-5">
            {/* Left: Hamburger */}
            <div className="justify-self-start">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-11 w-11">
                    <Menu className="h-6 w-6 text-brand-primary" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="left" className="w-80">
                  <nav className="mt-6 flex flex-col gap-2">
                    {mainNavLinks.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="rounded-md px-3 py-2 text-sm font-semibold text-brand-secondary hover:bg-brand-secondary/10"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            {/* Center: Logo + tagline */}
            <div className="justify-self-center text-center">
              <Link href="/" className="inline-flex flex-col items-center gap-2">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src={Logo.src}
                    alt="Climavolt"
                    fill
                    className="object-contain w-full h-full"
                  />
                </div>

                <span className="text-xs font-semibold text-brand-primary">Climavolt</span>
              </Link>
            </div>

            {/* Right: Phone icon */}
            <div className="justify-self-end">
              <Button asChild variant="ghost" size="icon" className="h-11 w-11">
                <a href="tel:6265050596" aria-label="Call">
                  <Phone className="h-6 w-6 text-brand-primary" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* DESKTOP HEADER (your previous layout) */}
        <div className="hidden md:flex items-stretch gap-6 ">
          {/* Left: logo block */}
          <div className="flex shrink-0 items-center py-4">
            <Link href="/" className="flex flex-col items-center gap-2">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={Logo.src}
                  alt="Climavolt"
                  fill
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-xs font-semibold text-brand-secondary">Climavolt</span>
            </Link>
          </div>

          {/* Right: top strip + nav */}
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="relative flex items-center justify-end gap-4 overflow-hidden bg-brand-primary px-4 py-3 text-white">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-white [clip-path:polygon(0_0,100%_0,35%_100%,0_100%)]" />

              <div className="ml-16 flex items-center gap-3 text-sm">
                <span className="opacity-90">CA ST LIC # 1121119</span>
                <Button
                  asChild
                  variant="secondary"
                  className="h-10 rounded-md bg-brand-primary/20 px-5 text-base font-semibold text-white ring-1 ring-white/40 hover:bg-brand-primary/30"
                >
                  <a href="tel:6265050596">626-505-0596</a>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center py-4 flex-grow-1">
              <nav className="flex items-center gap-8">
                {mainNavLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="relative text-sm font-semibold tracking-wide text-brand-secondary hover:text-brand-secondary/90"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gray-200" />
    </header>
  );
}

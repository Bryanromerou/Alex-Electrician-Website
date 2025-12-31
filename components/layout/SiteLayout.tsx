"use client";

import * as React from "react";
// import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import InformationalFooter from "../cards/InformationalFooter";
import { Navbar } from "../Navbar";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Navbar /> */}
      <Navbar />
      <main className="flex-1">{children}</main>
      <InformationalFooter />
      <Footer />
    </div>
  );
}

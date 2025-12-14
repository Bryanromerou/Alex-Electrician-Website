import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brightspark-electrical.com"),
  title: "BrightSpark Electrical Services",
  description:
    "Licensed electricians offering residential and commercial electrical services, panel upgrades, lighting, EV chargers, and more in Los Angeles.",
  openGraph: {
    title: "BrightSpark Electrical Services",
    description:
      "Licensed electricians offering residential and commercial electrical services, panel upgrades, lighting, EV chargers, and more in Los Angeles.",
    url: "https://www.brightspark-electrical.com",
    siteName: "BrightSpark Electrical Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrightSpark Electrical Services",
    description:
      "Licensed electricians offering residential and commercial electrical services, panel upgrades, lighting, EV chargers, and more in Los Angeles.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LocalBusinessJsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SiteLayout>{children}</SiteLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

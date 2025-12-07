import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | BrightSpark Electrical Services",
  description:
    "Browse our portfolio of completed electrical projects. See examples of our quality workmanship for residential and commercial electrical installations in Los Angeles.",
  openGraph: {
    title: "Gallery | BrightSpark Electrical Services",
    description:
      "Browse our portfolio of completed electrical projects. See examples of our quality workmanship for residential and commercial electrical installations in Los Angeles.",
    url: "https://www.brightspark-electrical.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Container className="py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl">Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our portfolio of completed electrical projects. We take pride in
            delivering quality workmanship for both residential and commercial clients.
          </p>
        </div>
        <GalleryGrid />
      </Container>
    </main>
  );
}

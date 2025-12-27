import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Climavolt",
  description:
    "Frequently asked questions about electrical services, pricing, licensing, and what to expect when working with Climavolt in Los Angeles.",
  openGraph: {
    title: "FAQ | Climavolt",
    description:
      "Frequently asked questions about electrical services, pricing, licensing, and what to expect when working with Climavolt in Los Angeles.",
    url: "https://www.brightspark-electrical.com/faq",
  },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Find answers to common questions about our electrical services. This is a placeholder
            for the FAQ page content.
          </p>
        </div>
      </div>
    </main>
  );
}

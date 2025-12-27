import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Climavolt",
  description:
    "Learn about Climavolt, our experienced team of licensed electricians, and our commitment to quality electrical work in Los Angeles.",
  openGraph: {
    title: "About Us | Climavolt",
    description:
      "Learn about Climavolt, our experienced team of licensed electricians, and our commitment to quality electrical work in Los Angeles.",
    url: "https://www.brightspark-electrical.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Learn more about our electrician services and our team. This is a placeholder for the
            about page content.
          </p>
        </div>
      </div>
    </main>
  );
}

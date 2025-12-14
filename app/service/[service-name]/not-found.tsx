import Link from "next/link";

export default function ServiceNotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          The service you're looking for doesn't exist or has been removed.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/services"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Services
          </Link>
          <Link
            href="/"
            className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}

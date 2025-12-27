import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/constants/services";
import { slugify } from "@/lib/utils";
import { ServiceCard } from "@/components/cards/ServiceCard";

// Generate static params for all services at build time
export async function generateStaticParams() {
  return services.map((service) => ({
    "service-name": slugify(service.title),
  }));
}

// Generate metadata for each service page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ "service-name": string }>;
}): Promise<Metadata> {
  const { "service-name": serviceName } = await params;
  const service = services.find((s) => slugify(s.title) === serviceName.toLowerCase());

  if (!service) {
    return {
      title: "Service Not Found | Climavolt",
    };
  }

  return {
    title: `${service.title} | Climavolt`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Climavolt`,
      description: service.shortDescription,
      url: `https://www.brightspark-electrical.com/service/${serviceName}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ "service-name": string }>;
}) {
  const { "service-name": serviceName } = await params;

  // Find the service by matching the slug
  const service = services.find((s) => slugify(s.title) === serviceName.toLowerCase());

  // If service not found, show 404
  if (!service) {
    notFound();
  }

  // Get related services (exclude current service)
  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Service Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{service.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">{service.shortDescription}</p>
        </div>

        {/* Service Details Section */}
        <div className="mb-16">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">About This Service</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">{service.shortDescription}</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our experienced team of licensed electricians provides professional
              {service.title.toLowerCase()} services with a commitment to quality workmanship and
              customer satisfaction. We ensure all work meets local building codes and safety
              standards.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">Contact us today for a free consultation and quote.</p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Free Quote
          </a>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => (
                <a
                  key={relatedService.id}
                  href={`/service/${slugify(relatedService.title)}`}
                  className="block"
                >
                  <ServiceCard
                    title={relatedService.title}
                    description={relatedService.shortDescription}
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

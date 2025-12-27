import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { residentialTestimonials, commercialTestimonials } from "@/constants/testimonials";

export const metadata: Metadata = {
  title: "Testimonials | Climavolt",
  description:
    "Read customer reviews and testimonials from satisfied residential and commercial clients. See why Climavolt is trusted for quality electrical work in Los Angeles.",
  openGraph: {
    title: "Testimonials | Climavolt",
    description:
      "Read customer reviews and testimonials from satisfied residential and commercial clients. See why Climavolt is trusted for quality electrical work in Los Angeles.",
    url: "https://www.brightspark-electrical.com/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Container className="py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl">Testimonials</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read what our satisfied customers have to say about our electrical services. We're proud
            to serve both residential and commercial clients with quality workmanship and
            exceptional service.
          </p>
        </div>

        <div className="space-y-16">
          {/* Residential Testimonials */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 md:text-3xl">
              Residential Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {residentialTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  location={testimonial.location}
                  rating={testimonial.rating}
                  quote={testimonial.quote}
                />
              ))}
            </div>
          </section>

          {/* Commercial Testimonials */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 md:text-3xl">
              Commercial Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {commercialTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  location={testimonial.location}
                  rating={testimonial.rating}
                  quote={testimonial.quote}
                />
              ))}
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}

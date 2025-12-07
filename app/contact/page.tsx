import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | BrightSpark Electrical Services",
  description:
    "Get in touch with BrightSpark Electrical Services for all your electrical needs. Request a free quote for residential or commercial electrical services in Los Angeles.",
  openGraph: {
    title: "Contact Us | BrightSpark Electrical Services",
    description:
      "Get in touch with BrightSpark Electrical Services for all your electrical needs. Request a free quote for residential or commercial electrical services in Los Angeles.",
    url: "https://www.brightspark-electrical.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Heading and Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground">
                Get in touch with us for all your electrical needs. Fill out the form and we'll get
                back to you as soon as possible.
              </p>
            </div>
            <div className="pt-4 space-y-3 text-muted-foreground">
              <p>We typically respond to all inquiries within 24 hours during business days.</p>
              <p>
                For urgent matters, please call us directly and we'll do our best to assist you
                immediately.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:pl-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  );
}

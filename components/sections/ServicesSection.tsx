"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "./SectionHeader";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/constants/services";

export function ServicesSection() {
  return (
    <section className="pt-16 md:pb-24">
      <Container>
        <SectionHeader
          eyebrow="Our Services"
          title="Professional Electrical Solutions"
          subtitle="Comprehensive electrical services for residential and commercial properties. Trusted expertise you can count on."
          align="center"
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

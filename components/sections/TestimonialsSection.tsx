"use client";

import * as React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "./SectionHeader";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/constants/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Customers Say"
          subtitle="Don't just take our word for it. Here's what our satisfied customers have to say about our electrical services."
          align="center"
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

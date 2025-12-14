"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "./SectionHeader";
import { StatCard } from "@/components/cards/StatCard";

const stats = [
  {
    value: "15+",
    label: "Years Experience",
    subtext: "Trusted expertise since 2009",
  },
  {
    value: "500+",
    label: "Completed Projects",
    subtext: "Successfully delivered",
  },
  {
    value: "24/7",
    label: "Support Available",
    subtext: "Emergency service ready",
  },
  {
    value: "100%",
    label: "Satisfaction Rate",
    subtext: "Customer guaranteed",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Our Track Record"
          title="Proven Excellence"
          subtitle="Numbers that speak to our commitment to quality and customer satisfaction."
          align="center"
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} subtext={stat.subtext} />
          ))}
        </div>
      </Container>
    </section>
  );
}

import { siteBranding } from "@/constants/branding";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.brightspark-electrical.com/#organization",
    name: siteBranding.businessName,
    description:
      "Licensed electricians offering residential and commercial electrical services, panel upgrades, lighting, EV chargers, and more in Los Angeles.",
    image: "https://www.brightspark-electrical.com/og-image.jpg",
    url: "https://www.brightspark-electrical.com",
    telephone: siteBranding.phoneNumber,
    email: siteBranding.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteBranding.address.split(",")[0]?.trim() || "",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "34.0522",
      longitude: "-118.2437",
    },
    areaServed: siteBranding.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [
      siteBranding.socialLinks.facebook,
      siteBranding.socialLinks.instagram,
      siteBranding.socialLinks.yelp,
      siteBranding.socialLinks.googleBusiness,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

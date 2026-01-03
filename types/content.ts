// Navigation Types
export interface NavLink {
  href: string;
  label: string;
}

// Branding Types
export interface SiteBranding {
  businessName: string;
  tagline: string;
  phoneNumber: string;
  email: string;
  address: string;
  primaryColor: string;
  secondaryColor: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    yelp: string;
    googleBusiness: string;
  };
  serviceAreas: string[];
}

// Content Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
  date?: string;
}

// Content model interfaces
export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  iconName?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location?: string;
  rating: number;
  quote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  preferredTime?: string;
}

export interface ImageOption {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}

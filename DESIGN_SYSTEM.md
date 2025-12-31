# 🎨 Climavolt Brand Design System

## Overview

Your entire site now runs on a **centralized brand token system** that propagates through Tailwind utilities, shadcn components, and custom section variants.

---

## 🎯 Brand Colors

Defined in `app/globals.css`:

```css
--brand-primary: 28 100% 50%;         /* #FFA500 Orange */
--brand-secondary: 221 83% 53%;       /* Deep Blue */
```

### Available Tailwind Utilities

These work **everywhere** with full opacity support:

#### Text
```tsx
<h1 className="text-brand-primary">Climavolt</h1>
<p className="text-brand-secondary">Electrical Services</p>
```

#### Backgrounds
```tsx
<div className="bg-brand-primary" />
<div className="bg-brand-secondary" />
```

#### Borders & Rings
```tsx
<button className="border-brand-primary ring-brand-secondary" />
```

#### Hover & Focus States
```tsx
<button className="hover:bg-brand-primary focus:ring-brand-secondary" />
```

#### Opacity Modifiers
```tsx
<div className="bg-brand-primary/90" />
<div className="text-brand-secondary/70" />
```

#### Gradients
```tsx
<div className="bg-gradient-to-r from-brand-primary to-brand-secondary">
  Hero Section
</div>

<div className="bg-gradient-to-br from-brand-primary/90 to-brand-primary/60">
  Subtle Gradient
</div>
```

---

## 📦 Section Component Variants

The `<Section>` component now has semantic variants:

### Usage

```tsx
import { Section } from "@/components/ui/section";

// Default white background
<Section variant="default">
  <h2>Regular Content</h2>
</Section>

// Light gray (muted)
<Section variant="muted">
  <h2>Subtle Background</h2>
</Section>

// Brand Orange
<Section variant="primary">
  <h2 className="text-white">Call to Action</h2>
</Section>

// Deep Blue
<Section variant="secondary">
  <h2 className="text-white">Trust Section</h2>
</Section>

// Orange Accent
<Section variant="accent">
  <h2 className="text-white">Limited Time Offer</h2>
</Section>
```

### Variant Mapping

| Variant | Color | Use Case |
|---------|-------|----------|
| `default` | White | Standard content sections |
| `muted` | Light gray | Alternating sections for visual rhythm |
| `primary` | Orange | Urgent CTAs, special offers, highlight sections |
| `secondary` | Deep Blue | Trust builders, professional services, footer |
| `accent` | Orange | Promotional banners, announcements |

---

## 🔧 shadcn Component Integration

Because we mapped:

```css
--primary: var(--brand-secondary);  /* Deep Blue */
--accent: var(--brand-primary);     /* Orange */
```

All shadcn components now auto-match your brand:

```tsx
import { Button } from "@/components/ui/button";

<Button>Default (Deep Blue)</Button>
<Button variant="secondary">Accent (Orange)</Button>
<Button variant="outline">Outlined</Button>
```

---

## 🎨 Example Patterns

### Hero Section with Gradient

```tsx
<Section 
  variant="default" 
  className="bg-gradient-to-br from-brand-secondary via-brand-secondary/90 to-brand-primary/20"
>
  <h1 className="text-white text-5xl font-bold">
    24/7 Emergency Electrical Services
  </h1>
  <Button className="bg-brand-primary hover:bg-brand-primary/90">
    Call Now
  </Button>
</Section>
```

### Alternating Content Sections

```tsx
<Section variant="default">
  <h2>Our Services</h2>
</Section>

<Section variant="muted">
  <h2>Why Choose Us</h2>
</Section>

<Section variant="secondary">
  <h2 className="text-white">Emergency Services</h2>
  <Button variant="secondary" className="bg-brand-primary">
    Contact Us
  </Button>
</Section>
```

### CTA Section with Brand Colors

```tsx
<Section variant="primary" className="text-center">
  <h2 className="text-4xl font-bold mb-4 text-white">
    Ready to Get Started?
  </h2>
  <p className="text-white/90 mb-6">
    Professional electrical services you can trust
  </p>
  <Button className="bg-brand-secondary hover:bg-brand-secondary/90">
    Schedule Service
  </Button>
</Section>
```

### Card with Brand Accent

```tsx
<div className="border-l-4 border-brand-primary bg-white p-6">
  <h3 className="text-brand-secondary font-bold">Emergency Service</h3>
  <p>Available 24/7 for urgent electrical issues</p>
</div>
```

---

## 🎨 Color Psychology Guide

### When to Use Orange (Primary)

- **CTAs**: "Call Now", "Book Service", "Get Quote"
- **Urgency**: Emergency banners, limited-time offers
- **Highlights**: Key features, awards, certifications
- **Accents**: Icon colors, hover states, active nav items

### When to Use Deep Blue (Secondary)

- **Trust**: About sections, credentials, testimonials
- **Professional**: Service descriptions, technical details
- **Headers/Footers**: Navigation, contact information
- **Buttons**: Primary actions that need authority

---

## 🔄 Future: Theme Switching

To add seasonal themes or promotions:

### 1. Add theme variants in `globals.css`

```css
[data-theme="winter"] {
  --brand-primary: 200 100% 50%; /* Winter Blue */
  --brand-accent: 0 0% 100%;     /* Snow White */
}

[data-theme="summer"] {
  --brand-primary: 45 100% 50%;  /* Sun Yellow */
  --brand-accent: 180 50% 50%;   /* Ocean Blue */
}
```

### 2. Apply theme via data attribute

```tsx
<body data-theme="winter">
  {/* All brand colors update automatically */}
</body>
```

---

## 📝 Migration Notes

### Old → New

```diff
- <Section variant="blue">
+ <Section variant="secondary">

- <Section variant="red">
+ <Section variant="accent">

- className="bg-blue-600"
+ className="bg-brand-secondary"

- className="text-orange-500"
+ className="text-brand-primary"
```

---

## ✅ Best Practices

1. **Use semantic variants** (`variant="primary"`) instead of color names
2. **Leverage opacity modifiers** for subtle effects (`bg-brand-primary/10`)
3. **Combine with gradients** for modern hero sections
4. **Maintain hierarchy**: Primary Orange for CTAs, Secondary Blue for content
5. **Test contrast**: Always ensure text is readable (use foreground colors)

---

## 🚀 Quick Reference

```tsx
// Text
text-brand-primary
text-brand-secondary

// Backgrounds
bg-brand-primary
bg-brand-secondary

// Sections
<Section variant="primary" />    // Orange
<Section variant="secondary" />  // Blue
<Section variant="accent" />     // Orange

// Gradients
bg-gradient-to-r from-brand-primary to-brand-secondary

// Opacity
bg-brand-primary/90
text-brand-secondary/70

// Hover
hover:bg-brand-primary
hover:text-brand-secondary
```

---

**Questions?** All tokens live in `app/globals.css` — change once, update everywhere! 🎉


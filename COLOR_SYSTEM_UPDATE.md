# 🎨 Color System Update — Corrected Naming

## ✅ What Changed

The brand token naming has been corrected to follow industry conventions:

### Before (Confusing)

- `brand-primary` = Orange (accent color)
- `brand-secondary` = Blue (main brand color)

### After (Correct) ✅

- `brand-primary` = **Blue** (#1E3A8A) — Main professional brand color
- `brand-secondary` = **Orange** (#FFA500) — Accent/CTA color

---

## 🎯 New Color Hierarchy

### Brand Tokens

```css
--brand-primary: 221 83% 53%; /* Blue - main brand color */
--brand-secondary: 28 100% 50%; /* Orange - accent/CTA color */
```

### Section Variants

| Variant               | Color      | Use Case                          |
| --------------------- | ---------- | --------------------------------- |
| `variant="primary"`   | Blue       | Main professional sections        |
| `variant="secondary"` | Blue       | Secondary professional sections   |
| `variant="accent"`    | Orange     | CTA banners, promotional sections |
| `variant="muted"`     | Light gray | Alternating background sections   |
| `variant="default"`   | White      | Standard content sections         |

---

## 🎨 Usage Guidelines

### Blue (Primary) — Professional & Trust

Use for:

- ✅ Main headings and titles
- ✅ Navigation bars
- ✅ Professional service sections
- ✅ Icons and branding elements
- ✅ Trust-building content

```tsx
<h1 className="text-brand-primary">Professional HVAC Services</h1>
<Section variant="secondary">
  <div className="bg-brand-primary text-white">
    Trust & Reliability
  </div>
</Section>
```

### Orange (Secondary) — Action & Urgency

Use for:

- ✅ Call-to-action buttons
- ✅ Promotional banners
- ✅ Accent text and highlights
- ✅ Emergency/urgent messaging
- ✅ Special offers

```tsx
<span className="text-brand-secondary">Call Now for 24/7 Service!</span>
<Section variant="accent">
  <button className="bg-brand-secondary hover:bg-brand-secondary/90">
    Get Quote
  </button>
</Section>
```

---

## 📊 Typical Layout Pattern

```tsx
// Header: Blue for professionalism
<nav className="bg-brand-primary text-white">
  <Link className="text-white">Home</Link>
  <Link className="text-brand-secondary">Services</Link>
</nav>

// Hero: Blue heading + Orange CTA
<Section variant="default">
  <h1 className="text-brand-primary text-5xl">
    Expert HVAC Services
  </h1>
  <p className="text-brand-secondary font-bold">
    Available 24/7 for Emergencies
  </p>
  <button className="bg-brand-secondary text-white">
    Schedule Service
  </button>
</Section>

// Content: Blue professional section
<Section variant="secondary">
  <h2 className="text-white">Our Services</h2>
  <p className="text-white/90">Professional installation and repair</p>
</Section>

// CTA: Orange for action
<Section variant="accent">
  <p className="text-center">
    Call us at <span className="font-bold">626-505-0596</span>
  </p>
</Section>
```

---

## 🔧 shadcn Component Mapping

```css
--primary: var(--brand-primary); /* Blue - main buttons */
--accent: var(--brand-secondary); /* Orange - accent elements */
```

This means:

```tsx
<Button>Default</Button>                    // Blue button
<Button variant="secondary">Accent</Button> // Orange button
<Button variant="outline">Outline</Button>  // Outlined
```

---

## ✅ All Files Updated

The following files have been updated to use the new naming convention:

### Core Config

- ✅ `app/globals.css` — Token definitions and mappings

### Pages

- ✅ `app/page.tsx`
- ✅ `app/heating/page.tsx`
- ✅ `app/air-conditioning/page.tsx`
- ✅ `app/hvac-maintenance-plans/page.tsx`

### Components

- ✅ `components/ui/section.tsx`
- ✅ `components/ui/two-color-heading.tsx`
- ✅ `components/Navbar.tsx`

---

## 🎨 Color Psychology Reference

### Blue (Primary)

- **Meaning**: Trust, professionalism, reliability, expertise
- **Industry Use**: Banking, healthcare, technology, **HVAC/electrical**
- **Effect**: Calms, builds confidence, establishes authority

### Orange (Secondary)

- **Meaning**: Energy, urgency, action, warmth
- **Industry Use**: Calls-to-action, promotions, emergency services
- **Effect**: Motivates action, creates urgency, draws attention

---

## 📝 Quick Reference

### Text Colors

```tsx
text - brand - primary; // Blue text
text - brand - secondary; // Orange text
```

### Backgrounds

```tsx
bg - brand - primary; // Blue background
bg - brand - secondary; // Orange background
```

### Sections

```tsx
<Section variant="primary">    {/* Blue */}
<Section variant="secondary">  {/* Blue */}
<Section variant="accent">     {/* Orange */}
```

### Hover States

```tsx
hover: bg - brand - primary; // Hover to blue
hover: text - brand - secondary; // Hover to orange
```

### Opacity

```tsx
bg - brand - primary / 90; // Blue at 90%
text - brand - secondary / 70; // Orange at 70%
```

---

## ✅ Summary

Your brand colors now follow industry-standard naming:

- **Primary (Blue)** = Your main professional brand color
- **Secondary (Orange)** = Your accent/CTA color

This makes your design system:

- ✅ More intuitive
- ✅ Easier to maintain
- ✅ Industry-standard
- ✅ Semantically correct

**All existing styles remain visually identical** — only the naming has been corrected! 🎉

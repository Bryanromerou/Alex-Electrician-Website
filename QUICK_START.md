# 🚀 Quick Start — Brand Design System

## TL;DR

Your site now has **centralized brand colors** that work everywhere.

---

## 🎨 Use Brand Colors

### In any component:

```tsx
// Text
<h1 className="text-brand-primary">Orange</h1>
<h1 className="text-brand-secondary">Blue</h1>

// Backgrounds
<div className="bg-brand-primary">Orange section</div>
<div className="bg-brand-secondary">Blue section</div>

// Gradients
<div className="bg-gradient-to-r from-brand-primary to-brand-secondary">
  Gradient
</div>

// Opacity
<div className="bg-brand-primary/10">Subtle orange tint</div>
<div className="text-brand-secondary/70">Muted blue text</div>

// Hover
<button className="bg-brand-primary hover:bg-brand-primary/90">
  Hover me
</button>
```

---

## 📦 Use Section Variants

```tsx
import { Section } from "@/components/ui/section";

<Section variant="default">White background</Section>
<Section variant="muted">Light gray</Section>
<Section variant="primary">Orange (CTA)</Section>
<Section variant="secondary">Blue (professional)</Section>
<Section variant="accent">Orange (promotion)</Section>
```

---

## 🔧 Change Brand Colors

Edit **one file** to update the entire site:

**`app/globals.css`** (lines 49-50):

```css
--brand-primary: 28 100% 50%;      /* Your orange */
--brand-secondary: 221 83% 53%;    /* Your blue */
```

Change these → everything updates automatically! 🎉

---

## 📚 Full Documentation

- **Complete Guide**: `DESIGN_SYSTEM.md`
- **All Utilities**: `BRAND_UTILITIES.md`
- **Visual Examples**: `components/BrandShowcase.tsx`
- **Implementation Details**: `IMPLEMENTATION_COMPLETE.md`

---

## ✅ What Works

✅ Text colors  
✅ Backgrounds  
✅ Borders  
✅ Rings (focus states)  
✅ Gradients  
✅ Hover/focus states  
✅ Opacity modifiers  
✅ Section variants  
✅ shadcn components  

**Everything** that accepts a color now works with your brand tokens! 🚀


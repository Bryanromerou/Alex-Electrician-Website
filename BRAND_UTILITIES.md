# 🎨 Complete Brand Utility Reference

## All Available Tailwind Classes

Your brand tokens now power **every Tailwind utility** — here's the complete list:

---

## 🎯 Text Colors

```tsx
text-brand-primary          // Orange text
text-brand-secondary        // Blue text
text-brand-primary/90       // Orange text at 90% opacity
text-brand-secondary/50     // Blue text at 50% opacity

text-section-primary        // Same as brand-primary (semantic alias)
text-section-secondary      // Same as brand-secondary (semantic alias)
```

---

## 🎨 Background Colors

```tsx
bg-brand-primary           // Orange background
bg-brand-secondary         // Blue background
bg-brand-primary/95        // Orange at 95% opacity
bg-brand-secondary/10      // Blue tint (10% opacity)

bg-section-primary         // Semantic: Orange
bg-section-secondary       // Semantic: Blue
bg-section-accent          // Semantic: Orange
```

---

## 📦 Border Colors

```tsx
border-brand-primary       // Orange border
border-brand-secondary     // Blue border
border-brand-primary/50    // Semi-transparent orange border

border-l-4 border-brand-primary    // Left accent border
border-t-2 border-brand-secondary  // Top border
```

---

## 💍 Ring Colors (Focus States)

```tsx
ring-brand-primary         // Orange focus ring
ring-brand-secondary       // Blue focus ring
ring-brand-primary/50      // Subtle orange ring

focus:ring-2 focus:ring-brand-primary
focus-visible:ring-brand-secondary
```

---

## 🌈 Gradients

### Linear Gradients

```tsx
bg-gradient-to-r from-brand-primary to-brand-secondary
bg-gradient-to-br from-brand-primary to-brand-secondary
bg-gradient-to-t from-brand-secondary to-brand-primary
```

### With Opacity

```tsx
bg-gradient-to-r from-brand-primary/90 to-brand-primary/60
bg-gradient-to-br from-brand-secondary via-brand-secondary/80 to-brand-primary/20
```

### Three-Color Gradients

```tsx
bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary
bg-gradient-to-br from-brand-secondary via-blue-600 to-brand-primary
```

---

## ✨ Hover States

```tsx
hover:bg-brand-primary
hover:text-brand-secondary
hover:border-brand-primary
hover:ring-brand-secondary

hover:bg-brand-primary/90      // Subtle hover effect
hover:scale-105 hover:bg-brand-primary  // Combined effects
```

---

## 🎯 Focus States

```tsx
focus:bg-brand-primary
focus:text-brand-secondary
focus:border-brand-primary
focus:ring-2 focus:ring-brand-primary

focus-visible:ring-brand-secondary
focus-within:border-brand-primary
```

---

## 🌓 Active States

```tsx
active:bg-brand-primary
active:text-brand-secondary
active:scale-95 active:bg-brand-primary/80
```

---

## 📱 Group Hover (Parent-Child Interactions)

```tsx
<div className="group">
  <div className="group-hover:bg-brand-primary">
    Hover parent to change this
  </div>
</div>

<div className="group">
  <h3 className="group-hover:text-brand-secondary">
    Hover card to change heading color
  </h3>
</div>
```

---

## 🎨 Divide Colors (Between Elements)

```tsx
<div className="divide-y divide-brand-primary">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<div className="divide-x divide-brand-secondary/30">
  <span>Left</span>
  <span>Right</span>
</div>
```

---

## 🔲 Outline Colors

```tsx
outline-brand-primary
outline-brand-secondary
outline-2 outline-brand-primary
focus:outline-brand-secondary
```

---

## 🎭 Decoration Colors (Underlines)

```tsx
decoration-brand-primary
decoration-brand-secondary
underline decoration-brand-primary decoration-2
hover:decoration-brand-secondary
```

---

## 🌊 Shadow Colors (Custom Shadows)

```tsx
shadow-brand-primary/50
shadow-lg shadow-brand-secondary/20
hover:shadow-xl hover:shadow-brand-primary/30
```

---

## 📊 Caret Color (Text Input Cursor)

```tsx
caret-brand-primary
caret-brand-secondary
focus:caret-brand-primary
```

---

## 🎨 Accent Color (Checkboxes, Radio Buttons)

```tsx
accent-brand-primary
accent-brand-secondary
```

---

## 🔥 Real-World Component Examples

### Button Variants

```tsx
// Primary CTA
<button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 rounded-lg">
  Call Now
</button>

// Secondary Button
<button className="bg-brand-secondary hover:bg-brand-secondary/90 text-white px-6 py-3 rounded-lg">
  Learn More
</button>

// Outline Button
<button className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-6 py-3 rounded-lg transition-colors">
  Get Quote
</button>

// Ghost Button
<button className="text-brand-secondary hover:bg-brand-secondary/10 px-6 py-3 rounded-lg">
  View Details
</button>
```

### Cards

```tsx
// Accent Card
<div className="border-l-4 border-brand-primary bg-white p-6 shadow-lg">
  <h3 className="text-brand-secondary font-bold">24/7 Emergency</h3>
  <p>We're always here when you need us</p>
</div>

// Hover Card
<div className="group border border-gray-200 hover:border-brand-primary p-6 transition-all hover:shadow-lg">
  <h3 className="group-hover:text-brand-primary transition-colors">
    Residential Services
  </h3>
</div>

// Gradient Card
<div className="bg-gradient-to-br from-brand-secondary to-brand-secondary/80 text-white p-8 rounded-xl">
  <h3 className="text-2xl font-bold">Premium Service</h3>
  <p className="text-white/90">Professional electrical solutions</p>
</div>
```

### Navigation

```tsx
// Active Nav Link
<a className="text-brand-primary border-b-2 border-brand-primary">
  Home
</a>

// Hover Nav Link
<a className="text-gray-700 hover:text-brand-primary hover:border-b-2 hover:border-brand-primary transition-colors">
  Services
</a>

// Mobile Nav with Gradient
<nav className="bg-gradient-to-b from-brand-secondary to-brand-secondary/95">
  <a className="text-white hover:text-brand-primary">Services</a>
</nav>
```

### Hero Sections

```tsx
// Gradient Hero
<section className="bg-gradient-to-br from-brand-secondary via-brand-secondary/90 to-brand-primary/20 text-white py-20">
  <h1 className="text-5xl font-bold">Expert Electrical Services</h1>
  <button className="bg-brand-primary hover:bg-brand-primary/90 px-8 py-4 rounded-lg">
    Get Started
  </button>
</section>

// Angled Background (with pseudo-elements)
<section className="relative bg-brand-secondary text-white py-20">
  <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-90"></div>
  <div className="relative z-10">
    <h1>Your content here</h1>
  </div>
</section>
```

### Forms

```tsx
// Input with Brand Focus
<input 
  className="border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 rounded-lg px-4 py-2"
  placeholder="Your email"
/>

// Checkbox with Brand Accent
<input 
  type="checkbox" 
  className="accent-brand-primary w-5 h-5"
/>

// Submit Button
<button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-3 rounded-lg font-semibold">
  Submit
</button>
```

### Badges & Tags

```tsx
// Status Badge
<span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
  New
</span>

// Solid Badge
<span className="bg-brand-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
  Featured
</span>
```

### Alerts & Notifications

```tsx
// Info Alert
<div className="bg-brand-secondary/10 border-l-4 border-brand-secondary text-brand-secondary p-4 rounded">
  <p className="font-semibold">Important Notice</p>
  <p className="text-sm">Your service is scheduled for tomorrow</p>
</div>

// Success Alert
<div className="bg-brand-primary/10 border-l-4 border-brand-primary text-brand-primary p-4 rounded">
  <p className="font-semibold">Success!</p>
  <p className="text-sm">Your appointment has been confirmed</p>
</div>
```

### Dividers

```tsx
// Gradient Divider
<div className="h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent my-8"></div>

// Accent Divider
<hr className="border-t-2 border-brand-primary/20 my-8" />
```

---

## 🎨 Opacity Scale Reference

```tsx
/10  → 10% opacity  (very subtle tint)
/20  → 20% opacity  (light tint)
/30  → 30% opacity  (subtle)
/40  → 40% opacity  (moderate)
/50  → 50% opacity  (half transparent)
/60  → 60% opacity  (more opaque)
/70  → 70% opacity  (mostly opaque)
/80  → 80% opacity  (strong)
/90  → 90% opacity  (very strong)
/95  → 95% opacity  (almost solid)
```

---

## ✅ Pro Tips

1. **Combine utilities** for rich effects:
   ```tsx
   hover:scale-105 hover:shadow-xl hover:shadow-brand-primary/20 transition-all
   ```

2. **Use opacity for depth**:
   ```tsx
   bg-brand-primary/10  // Subtle background
   bg-brand-primary/90  // Strong background
   ```

3. **Layer gradients**:
   ```tsx
   bg-gradient-to-br from-brand-secondary via-brand-secondary/80 to-brand-primary/20
   ```

4. **Group interactions**:
   ```tsx
   <div className="group">
     <div className="group-hover:text-brand-primary group-hover:scale-105">
       Interactive element
     </div>
   </div>
   ```

5. **Smooth transitions**:
   ```tsx
   transition-colors duration-200
   transition-all duration-300
   ```

---

**Remember:** Every utility that accepts a color now works with `brand-primary`, `brand-secondary`, `section-primary`, `section-secondary`, and `section-accent`! 🎉


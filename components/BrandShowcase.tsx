/**
 * Brand Showcase Component
 * 
 * This component demonstrates all available brand utilities.
 * Use this as a reference for implementing brand colors throughout the site.
 * 
 * To view: Import and render in any page during development.
 */

import { Section } from "@/components/ui/section";

export function BrandShowcase() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Brand Design System Showcase</h1>
        <p className="text-muted-foreground">
          All examples below use the centralized brand tokens
        </p>
      </div>

      {/* Text Colors */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Text Colors</h2>
        <div className="space-y-2">
          <p className="text-brand-primary text-xl font-semibold">
            Primary Text (Orange)
          </p>
          <p className="text-brand-secondary text-xl font-semibold">
            Secondary Text (Blue)
          </p>
          <p className="text-brand-primary/70 text-xl">
            Primary at 70% opacity
          </p>
          <p className="text-brand-secondary/50 text-xl">
            Secondary at 50% opacity
          </p>
        </div>
      </div>

      {/* Backgrounds */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Background Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-brand-primary text-white p-6 rounded-lg">
            <h3 className="font-bold">Primary Background</h3>
            <p>Orange background with white text</p>
          </div>
          <div className="bg-brand-secondary text-white p-6 rounded-lg">
            <h3 className="font-bold">Secondary Background</h3>
            <p>Blue background with white text</p>
          </div>
          <div className="bg-brand-primary/10 text-brand-primary p-6 rounded-lg border border-brand-primary/20">
            <h3 className="font-bold">Subtle Primary (10%)</h3>
            <p>Light tint for cards and alerts</p>
          </div>
          <div className="bg-brand-secondary/10 text-brand-secondary p-6 rounded-lg border border-brand-secondary/20">
            <h3 className="font-bold">Subtle Secondary (10%)</h3>
            <p>Light tint for info sections</p>
          </div>
        </div>
      </div>

      {/* Gradients */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Gradients</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold">Horizontal Gradient</h3>
            <p>Orange to Blue</p>
          </div>
          <div className="bg-gradient-to-br from-brand-secondary via-brand-secondary/90 to-brand-primary/20 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold">Diagonal Gradient with Opacity</h3>
            <p>Perfect for hero sections</p>
          </div>
          <div className="bg-gradient-to-r from-brand-primary/90 to-brand-primary/60 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold">Subtle Gradient</h3>
            <p>Same color with varying opacity</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Primary CTA
          </button>
          <button className="bg-brand-secondary hover:bg-brand-secondary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Secondary CTA
          </button>
          <button className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all">
            Outline Button
          </button>
          <button className="text-brand-secondary hover:bg-brand-secondary/10 px-6 py-3 rounded-lg font-semibold transition-colors">
            Ghost Button
          </button>
          <button className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-opacity">
            Gradient Button
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Card Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-l-4 border-brand-primary bg-white p-6 shadow-lg rounded-r-lg">
            <h3 className="text-brand-secondary font-bold text-lg mb-2">
              Accent Card
            </h3>
            <p className="text-gray-600">
              Left border accent with brand colors
            </p>
          </div>
          <div className="group border border-gray-200 hover:border-brand-primary p-6 rounded-lg transition-all hover:shadow-lg cursor-pointer">
            <h3 className="group-hover:text-brand-primary transition-colors font-bold text-lg mb-2">
              Hover Card
            </h3>
            <p className="text-gray-600">
              Hover to see brand color transition
            </p>
          </div>
          <div className="bg-gradient-to-br from-brand-secondary to-brand-secondary/80 text-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg mb-2">
              Gradient Card
            </h3>
            <p className="text-white/90">
              Premium look with gradient background
            </p>
          </div>
        </div>
      </div>

      {/* Borders & Rings */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Borders & Focus Rings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-2 border-brand-primary p-6 rounded-lg">
            <h3 className="font-bold">Primary Border</h3>
            <p>2px orange border</p>
          </div>
          <div className="border-2 border-brand-secondary p-6 rounded-lg">
            <h3 className="font-bold">Secondary Border</h3>
            <p>2px blue border</p>
          </div>
        </div>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Focus me (primary ring)"
            className="w-full border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 rounded-lg px-4 py-2 outline-none transition-all"
          />
          <input
            type="text"
            placeholder="Focus me (secondary ring)"
            className="w-full border border-gray-300 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 rounded-lg px-4 py-2 outline-none transition-all"
          />
        </div>
      </div>

      {/* Badges */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Badges & Tags</h2>
        <div className="flex flex-wrap gap-3">
          <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
            New
          </span>
          <span className="bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </span>
          <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            Hot Deal
          </span>
          <span className="bg-brand-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
            Premium
          </span>
          <span className="border border-brand-primary text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
            Outline
          </span>
        </div>
      </div>

      {/* Alerts */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Alerts & Notifications</h2>
        <div className="space-y-3">
          <div className="bg-brand-secondary/10 border-l-4 border-brand-secondary text-brand-secondary p-4 rounded">
            <p className="font-semibold">Information</p>
            <p className="text-sm">This is an informational message using secondary brand color</p>
          </div>
          <div className="bg-brand-primary/10 border-l-4 border-brand-primary text-brand-primary p-4 rounded">
            <p className="font-semibold">Success</p>
            <p className="text-sm">Action completed successfully using primary brand color</p>
          </div>
        </div>
      </div>

      {/* Section Variants */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Section Component Variants</h2>
        
        <Section variant="default" className="!py-8">
          <h3 className="text-xl font-bold mb-2">Default Section</h3>
          <p>White background for standard content</p>
        </Section>

        <Section variant="muted" className="!py-8">
          <h3 className="text-xl font-bold mb-2">Muted Section</h3>
          <p>Light gray for alternating sections</p>
        </Section>

        <Section variant="primary" className="!py-8">
          <h3 className="text-xl font-bold mb-2">Primary Section</h3>
          <p>Orange background for CTAs and highlights</p>
        </Section>

        <Section variant="secondary" className="!py-8">
          <h3 className="text-xl font-bold mb-2">Secondary Section</h3>
          <p>Blue background for trust and professionalism</p>
        </Section>

        <Section variant="accent" className="!py-8">
          <h3 className="text-xl font-bold mb-2">Accent Section</h3>
          <p>Orange accent for promotions and announcements</p>
        </Section>
      </div>

      {/* Dividers */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Dividers</h2>
        <div className="h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent"></div>
        <div className="h-1 bg-gradient-to-r from-transparent via-brand-secondary to-transparent"></div>
        <hr className="border-t-2 border-brand-primary/20" />
        <hr className="border-t-2 border-brand-secondary/20" />
      </div>

      {/* Interactive Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Interactive Elements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group cursor-pointer">
            <div className="border-2 border-gray-200 group-hover:border-brand-primary p-6 rounded-lg transition-all group-hover:shadow-xl">
              <h3 className="font-bold text-lg mb-2 group-hover:text-brand-primary transition-colors">
                Hover Me
              </h3>
              <p className="text-gray-600">
                Border and text change on hover
              </p>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="bg-white border-2 border-gray-200 group-hover:bg-gradient-to-br group-hover:from-brand-secondary group-hover:to-brand-secondary/80 p-6 rounded-lg transition-all group-hover:shadow-xl group-hover:text-white">
              <h3 className="font-bold text-lg mb-2">
                Hover for Gradient
              </h3>
              <p className="group-hover:text-white/90">
                Background transforms to gradient
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Elements */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Form Elements</h2>
        <div className="space-y-3 max-w-md">
          <div>
            <label className="block text-sm font-medium mb-1">
              Text Input with Primary Focus
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 rounded-lg px-4 py-2 outline-none transition-all"
              placeholder="Enter text..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Text Input with Secondary Focus
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 rounded-lg px-4 py-2 outline-none transition-all"
              placeholder="Enter text..."
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="checkbox-primary"
              className="accent-brand-primary w-5 h-5 cursor-pointer"
            />
            <label htmlFor="checkbox-primary" className="cursor-pointer">
              Checkbox with primary accent
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="checkbox-secondary"
              className="accent-brand-secondary w-5 h-5 cursor-pointer"
            />
            <label htmlFor="checkbox-secondary" className="cursor-pointer">
              Checkbox with secondary accent
            </label>
          </div>
        </div>
      </div>

      {/* Usage Note */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h3 className="font-bold text-lg mb-2 text-blue-900">
          💡 Usage Note
        </h3>
        <p className="text-blue-800 mb-2">
          All examples above use the centralized brand tokens defined in <code className="bg-blue-100 px-2 py-1 rounded">app/globals.css</code>
        </p>
        <p className="text-blue-800">
          Change the brand colors once, and every component updates automatically! 🎉
        </p>
      </div>
    </div>
  );
}


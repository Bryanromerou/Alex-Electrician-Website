# Quick Start Guide - Electrician Website

## 🚀 CLI Commands Used to Initialize Project

### 1. Create Next.js App
```bash
npx create-next-app@latest electrician-website --typescript --tailwind --eslint --app --no-src-dir --yes
```

**Flags explained:**
- `--typescript` - Enable TypeScript
- `--tailwind` - Include Tailwind CSS
- `--eslint` - Include ESLint
- `--app` - Use App Router (not Pages Router)
- `--no-src-dir` - Don't use `/src` directory (use `/app` at root)
- `--yes` - Skip all prompts with default options

### 2. Install Prettier and ESLint Integration
```bash
cd electrician-website
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

### 3. Install Utility Packages
```bash
npm install clsx tailwind-merge
```

## 📝 Configuration Files Created

### Prettier Configuration (`.prettierrc`)
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false
}
```

### Prettier Ignore (`.prettierignore`)
```
node_modules
.next
out
build
dist
*.lock
package-lock.json
yarn.lock
pnpm-lock.yaml
```

### ESLint Config (`eslint.config.mjs`)
Added Prettier integration:
```javascript
import prettier from "eslint-plugin-prettier/recommended";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier, // Added this line
  globalIgnores([...])
]);
```

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,css,md}\"",
    "format:check": "prettier --check \"**/*.{ts,tsx,js,jsx,json,css,md}\""
  }
}
```

## 🏃 Running the Project

### Start Development Server
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm run start
```

### Lint & Format
```bash
npm run lint          # Check for linting errors
npm run format        # Format all files with Prettier
npm run format:check  # Check if files are formatted
```

## 📂 Project Structure Created

```
electrician-website/
├── app/
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── testimonials/page.tsx
│   ├── gallery/page.tsx
│   ├── contact/page.tsx
│   ├── faq/page.tsx
│   ├── api/contact/route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   ├── cards/
│   ├── forms/
│   └── aceternity/
├── constants/
│   ├── branding.ts
│   └── navigation.ts
├── lib/
│   └── utils.ts
├── hooks/
│   ├── useMediaQuery.ts
│   └── useScrollActiveSection.ts
├── types/
│   └── content.ts
├── .prettierrc
├── .prettierignore
├── .env.example
└── README.md
```

## 🔥 Key Features Implemented

### ✅ All Pages (Client Components)
- Home (`/`)
- About (`/about`)
- Services (`/services`)
- Testimonials (`/testimonials`)
- Gallery (`/gallery`)
- Contact (`/contact`)
- FAQ (`/faq`)

### ✅ API Route
- POST `/api/contact` - Contact form handler
  - Accepts: name, email, phone, serviceType, message, preferredTime
  - Returns: `{ success: true }`
  - Logs to console (ready for email integration)

### ✅ Utility Functions
- `cn()` - Class name merger (clsx + tailwind-merge)
- `useMediaQuery()` - Responsive behavior hook
- `useScrollActiveSection()` - Scroll tracking hook

### ✅ Constants
- `BRANDING` - Business information
- `NAVIGATION_LINKS` - Site navigation

### ✅ TypeScript Types
- `Service`, `Testimonial`, `GalleryItem`, `FAQItem`, `ContactFormData`

## 🎨 Styling Setup

Tailwind CSS is configured with:
- CSS Variables for theming
- Dark mode support (prefers-color-scheme)
- Geist font family
- Custom color scheme ready

## 📦 Installed Dependencies

### Dependencies
- `next@16.0.7` - React framework
- `react@19.2.0` - React library
- `react-dom@19.2.0` - React DOM
- `clsx@2.1.1` - Conditional classnames
- `tailwind-merge@3.4.0` - Merge Tailwind classes

### Dev Dependencies
- `typescript@5` - TypeScript
- `@types/node`, `@types/react`, `@types/react-dom` - Type definitions
- `eslint@9` - Linting
- `eslint-config-next@16.0.7` - Next.js ESLint config
- `prettier@3.7.4` - Code formatting
- `eslint-config-prettier@10.1.8` - Prettier + ESLint integration
- `eslint-plugin-prettier@5.5.4` - Prettier as ESLint plugin
- `tailwindcss@4` - Tailwind CSS
- `@tailwindcss/postcss@4` - Tailwind PostCSS plugin

## 🚀 Next Steps

1. **Run the development server**:
   ```bash
   npm run dev
   ```

2. **Test all routes**:
   - http://localhost:3000/
   - http://localhost:3000/about
   - http://localhost:3000/services
   - http://localhost:3000/testimonials
   - http://localhost:3000/gallery
   - http://localhost:3000/contact
   - http://localhost:3000/faq

3. **Test API endpoint**:
   ```bash
   curl -X POST http://localhost:3000/api/contact \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "email": "test@example.com",
       "phone": "555-1234",
       "serviceType": "Residential",
       "message": "Test message"
     }'
   ```

4. **Start building**:
   - Replace placeholder content in pages
   - Add navigation component
   - Build contact form
   - Add shadcn/ui components
   - Implement actual content

## 📚 Useful Commands

```bash
# Install shadcn/ui
npx shadcn@latest init
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add form

# Format all code
npm run format

# Check for issues
npm run lint
npm run format:check

# Build and test production
npm run build
npm run start
```

---

**Your Next.js electrician website is ready! 🎉**


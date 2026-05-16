# React + TypeScript + Tailwind CSS Setup Guide

## Project Structure
```
my-project/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Setup Steps

### 1. Create React + TypeScript Project
```bash
npm create vite@latest my-project -- --template react-ts
cd my-project
```

### 2. Install Dependencies
```bash
npm install
```

**Important:** Check `package.json` and remove any unwanted packages like `"init"` from dependencies.

### 3. Install Tailwind CSS v4 + PostCSS
```bash
npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer
```

### 4. Create Configuration Files (Manual - No CLI)

**Why manual?** Tailwind CSS v4 removed the CLI tool (`tailwindcss init`), so you must create config files manually.

#### Create `tailwind.config.js` in project root:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Create `postcss.config.js` in project root:
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

### 5. Update `src/index.css`

Add this at the very top of your `index.css` file:
```css
@import "tailwindcss";
```

Keep your existing CSS below it.

### 6. Update `vite.config.ts`

Ensure PostCSS is configured:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### 7. Update `package.json` (Optional but Recommended)

Add this script for future reference:
```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "tailwind:init": "tailwindcss init -p"
}
```

(Note: The `tailwind:init` script won't work with v4, but it's here for reference if upgrading in future)

### 8. Start Development Server
```bash
npm run dev
```

## Troubleshooting

### `npx tailwindcss init -p` doesn't work
✓ **Solution:** This command doesn't exist in Tailwind CSS v4. Create config files manually instead.

### `npm error could not determine executable to run`
✓ **Solution:** Run `npm install` first to populate node_modules

### Tailwind classes not applying
✓ **Solution:** 
- Ensure `@import "tailwindcss";` is at the top of `index.css`
- Check that `content` paths in `tailwind.config.js` match your file structure
- Restart dev server

## Useful Tailwind Classes for React Landing Pages

```jsx
// Hero section
<div className="h-screen bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
  <h1 className="text-5xl font-bold text-white">Welcome</h1>
</div>

// Navigation
<nav className="fixed top-0 w-full bg-white shadow-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
    </div>
  </div>
</nav>

// Cards
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-bold mb-2">Title</h3>
    <p className="text-gray-600">Description</p>
  </div>
</div>

// Buttons
<button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition">
  Click Me
</button>
```

## Key Files to Remember

| File | Purpose |
|------|---------|
| `tailwind.config.js` | Configure Tailwind theme and content paths |
| `postcss.config.js` | Enable Tailwind CSS plugin |
| `src/index.css` | Import Tailwind with `@import "tailwindcss";` |
| `package.json` | Verify tailwindcss and @tailwindcss/postcss are in devDependencies |

## Notes

- Tailwind CSS v4 uses PostCSS bundling, not a CLI
- Always restart dev server after config changes
- Use `npm run build` before deploying
- Tailwind purges unused CSS in production builds automatically

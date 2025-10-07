# Global Creations & IT - Next.js Website

This is the official website for Global Creations & IT, converted from Laravel to Next.js with TypeScript and Tailwind CSS.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Hook Form** with **Zod** validation for forms
- **Lucide React** icons (replacing Font Awesome)
- **Responsive design** optimized for all devices
- **SEO optimized** with proper meta tags

## Pages

- **Home** (`/`) - Hero section, approach, why choose us, and process steps
- **Services** (`/services`) - Service offerings and proven process
- **About** (`/about`) - Company vision and why choose us
- **Contact** (`/contact`) - Contact information and details
- **Start a Project** (`/start-a-project`) - Contact form with validation

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── services/
│   ├── start-a-project/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── layout/            # Header and Footer components
├── lib/
│   ├── data.ts           # Static data (services, process steps, etc.)
│   └── validations.ts    # Zod schemas for form validation
└── public/
    └── assets/           # Images and static assets
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Dependencies

- **next**: ^15.5.4
- **react**: ^19.1.0
- **react-hook-form**: ^7.48.2
- **@hookform/resolvers**: ^3.3.2
- **zod**: ^3.22.4
- **lucide-react**: ^0.294.0
- **framer-motion**: ^10.16.16
- **tailwindcss**: ^4

## Conversion Notes

This project was converted from a Laravel Blade template to Next.js while maintaining:
- Exact same visual design and layout
- All original functionality
- Responsive behavior
- SEO optimization
- Form validation (now using React Hook Form + Zod instead of Alpine.js)
- Icons (now using Lucide React instead of Font Awesome)

## Build and Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## License

© 2024 Global Creations & IT. All rights reserved.

# Iqra | The Subac Circle

A modern, elegant marketing website for the Iqra iOS app — connecting the Somali Muslim community through technology.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://iqra-subac.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8)](https://tailwindcss.com/)

## Overview

Iqra is an iOS app designed for the Somali Muslim community, featuring:

- **Subac Circle Management** — Organize and track communal Quran recitation circles
- **Prayer Times** — Accurate prayer times based on your location
- **Qibla Compass** — Find the direction of the Kaaba from anywhere
- **Mosque Finder** — Discover nearby mosques and prayer spaces

This repository contains the marketing website built with Next.js 14, featuring a refined design system with elegant typography and a teal/gold color palette.

## Live Demo

Visit the live site: **[iqra-subac.vercel.app](https://iqra-subac.vercel.app)**

## Features

- **Responsive Design** — Optimized for all devices from mobile to desktop
- **Dark/Light Mode** — System-aware theme with manual toggle
- **Smooth Animations** — Framer Motion powered interactions
- **Accessibility** — Keyboard navigation and screen reader support
- **SEO Optimized** — Meta tags, Open Graph, and structured data
- **Performance** — Optimized images, fonts, and code splitting

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Theme | [next-themes](https://github.com/pacocoursey/next-themes) |
| Icons | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| Fonts | Playfair Display, DM Sans, Amiri (Arabic) |

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:jabrayare/iqra-subac-circle.git
   cd iqra-subac-circle
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
iqra-subac-circle/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Navbar, Footer, Providers)
│   ├── page.tsx                  # Home page
│   ├── about/                    # About page
│   ├── app/                      # App features page
│   ├── community/                # Community page
│   ├── privacy/                  # Privacy policy
│   ├── support/                  # Support & contact
│   ├── terms/                    # Terms of service
│   └── globals.css               # Global styles & CSS variables
│
├── components/
│   ├── layout/                   # Navbar, Footer
│   ├── sections/                 # Homepage sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   └── DownloadSection.tsx
│   ├── pages/                    # Page-specific content
│   ├── ui/                       # Reusable UI components
│   ├── theme/                    # ThemeProvider
│   └── analytics/                # Analytics integration
│
├── public/                       # Static assets
├── tailwind.config.js            # Tailwind configuration
├── next.config.js                # Next.js configuration
└── tsconfig.json                 # TypeScript configuration
```

## Design System

### Color Palette

The site uses CSS custom properties for theming:

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|-------|
| `--color-primary` | `#0d4f4f` | `#3d9a9a` | Primary brand color (teal) |
| `--color-accent` | `#c9a227` | `#dbb84a` | Accent color (gold) |
| `--color-bg` | `#faf8f5` | `#0f0f0f` | Background |
| `--color-text-primary` | `#1a1a1a` | `#f5f5f5` | Primary text |

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: DM Sans (sans-serif)
- **Arabic**: Amiri (serif)

## Environment Variables

Create a `.env.local` file for local development:

```env
# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy automatically on every push

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jabrayare/iqra-subac-circle)

### Other Platforms

Build the production bundle:

```bash
npm run build
```

The output will be in the `.next` directory. You can deploy to any platform that supports Node.js.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary. All rights reserved.

## Contact

For questions about the Iqra app or this website:

- **Email**: support@iqra-subac.com
- **Website**: [iqra-subac.vercel.app](https://iqra-subac.vercel.app)

---

<p align="center">
  <em>Built with intention for the Ummah</em>
</p>

<p align="center" dir="rtl">
  <strong>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</strong>
</p>

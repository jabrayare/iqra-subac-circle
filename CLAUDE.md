# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Iqra | The Subac Circle is a Next.js 14 marketing website for an iOS app targeting the Somali Muslim community. The app features Subac (communal Quran recitation circle) management, prayer times, Qibla compass, and mosque finder.

**Live URL:** https://iqra-subac.vercel.app

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Architecture

### Tech Stack
- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS with custom Islamic theme colors
- **Animations:** Framer Motion
- **Theme:** next-themes for dark/light mode
- **Icons:** lucide-react, react-icons

### Directory Structure

```
app/                    # Next.js App Router pages
├── layout.tsx          # Root layout with Navbar, Footer, ThemeProvider
├── page.tsx            # Home page (Hero, Features, Download sections)
├── about/              # About page
├── app/                # App features page
├── community/          # Community page
├── privacy/            # Privacy policy
├── support/            # Support page
└── terms/              # Terms of service

components/
├── layout/             # Navbar, Footer
├── sections/           # Homepage sections (HeroSection, FeaturesSection, etc.)
├── pages/              # Page-specific content components
├── ui/                 # Reusable UI components (Logo, Toast)
├── theme/              # ThemeProvider wrapper
└── analytics/          # Google Analytics component
```

### Import Alias
Use `@/*` for imports from project root (configured in tsconfig.json).

### Tailwind Theme
Custom colors are defined in `tailwind.config.js`:
- Brand colors: `deep-ocean-blue`, `warm-sunset-orange`, `midnight-navy`
- Islamic theme: `islamic-gold`, `mosque-teal`, `prayer-blue`, `quran-green`
- Dark mode: Uses `class` strategy via next-themes

### Environment Variables
- `NEXT_PUBLIC_GA_ID` - Google Analytics tracking ID

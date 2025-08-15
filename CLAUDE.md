# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack for faster builds
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run Next.js linting
- `npm run test` - Run Vitest tests
- `npm run test:ui` - Run tests with UI interface

## Architecture Overview

**Shinobi** is a Next.js 15 blog application built as a Claude Code learning project. The architecture follows modern React patterns with App Router.

### Key Technologies

- **Next.js 15** with App Router and Turbopack
- **React 19** with TypeScript
- **Tailwind CSS v4** with custom CSS variables for theming
- **Vitest** for testing with JSDOM environment
- **DOMPurify** for HTML sanitization
- **GraphQL** for content management via Hygraph CMS

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with header and dark mode toggle
│   ├── page.tsx           # Homepage with navigation to blog/preview
│   ├── blog/              # Blog listing and individual posts
│   └── preview/           # Component preview page
├── components/            # Reusable React components
│   ├── ui/Button/         # Button component with variants
│   ├── BlogSidebar.tsx    # Blog page sidebar
│   └── DarkModeToggle.tsx # Theme switching component
├── hooks/                 # Reusable hooks
└── lib/                   # Utility functions and types
    ├── queries.ts         # GraphQL queries for blog data
    ├── types.ts           # TypeScript type definitions
    └── sanitize.ts        # HTML sanitization utilities
```

### Data Architecture

- **External CMS**: Uses Hygraph (GraphQL CMS) for blog content
- **Environment Variables**: Requires `HYGRAPH_ENDPOINT` for GraphQL API
- **Data Fetching**: Server-side rendering with 1-hour revalidation
- **Content Security**: HTML content is sanitized using DOMPurify with strict allowlists

### Styling System

- **Custom Theme System**: CSS variables in `globals.css` with light/dark mode support
- **Tailwind Integration**: Custom color tokens mapped to CSS variables
- **Component Styling**: Mix of Tailwind classes and inline styles
- **Typography**: Uses Rubik (headings) and Merriweather (body) from Google Fonts

### Testing Setup

- **Vitest** configured with React Testing Library
- **JSDOM environment** for DOM testing
- **Setup file**: `src/test/setup.ts` for test configuration
- **Type definitions**: Custom vitest types in `src/test/vitest.d.ts`

## Development Notes

- Uses `@/*` path alias for src imports
- Blog posts require GraphQL endpoint configuration
- Dark mode state is managed via CSS classes on root element
- Component testing follows React Testing Library patterns
- HTML sanitization is critical for security when displaying CMS content

- when making new page components, always add a link to that page in the header. Only do this for page components, not UI or other drop-in components.

- Use Context7 to check up-to-date docs when needed for implementing new libraries or frameworks, or adding features using them.
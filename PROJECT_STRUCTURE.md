# Project Structure

This document outlines the core setup and structure of the Vidos Responsible AI Parent Website.

## Core Setup Complete ✅

### Configuration Files
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.mjs` - PostCSS configuration
- `eslint.config.mjs` - ESLint configuration (ESLint 9 flat config)
- `.gitignore` - Git ignore rules

### Directory Structure
```
RAI-Parentpage/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page (placeholder)
│   └── globals.css         # Global styles with Tailwind
├── components/             # React components (to be created)
├── lib/
│   └── utils.ts           # Utility functions (cn helper)
├── public/                # Static assets (images, etc.)
├── PARENT_WEBSITE.md      # Project documentation
├── PROJECT_STRUCTURE.md   # This file
└── README.md              # Project README
```

## Tech Stack

- **Next.js**: 16.1.0 (App Router)
- **React**: 19.0.0
- **TypeScript**: 5.x
- **Tailwind CSS**: 3.4.1
- **ESLint**: 9.x (with Next.js config)

## Next Steps

1. ✅ Core setup complete
2. ⏳ Create component structure
3. ⏳ Build landing page sections
4. ⏳ Add styling and design system
5. ⏳ Implement navigation
6. ⏳ Add links to sub-platforms

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Notes

- The project uses Next.js App Router (app directory)
- Tailwind CSS is configured and ready
- TypeScript is set up with strict mode
- ESLint is configured with Next.js rules
- Utility function `cn()` is available in `lib/utils.ts` for className merging


# Copilot Instructions for Code Spheres

## Project Architecture

This is a **React + TypeScript SPA** built for a fiber internet provider company, using Vite, shadcn/ui, and Tailwind CSS. The project follows a component-based architecture with a custom dark theme design system.

### Core Structure
- **Pages**: Located in `src/pages/` - handle routing and page-level composition  
- **Components**: Split between custom business components (`src/components/`) and reusable UI primitives (`src/components/ui/`)
- **Layout Pattern**: All pages follow `Header + Main Content + Footer + BackToTop` structure (see `src/pages/Index.tsx`)

### Key Technical Patterns

**1. Design System**
- Custom CSS variables defined in `src/index.css` for brand colors: `--onyx-base`, `--neon-orange`, `--violet-rim`, etc.
- Glass morphism effects using `glass-card`, `glass-bg`, `glass-border` classes
- Consistent gradient and glow animations (`animate-glow-pulse`, `bg-gradient-neon`)

**2. Component Conventions**
- All components use shadcn/ui patterns with `cn()` utility for className merging
- Import paths use `@/` alias for src directory (configured in `vite.config.ts`)
- State management with React hooks - no external state library
- Lucide React for icons throughout

**3. Routing & Navigation**
- React Router with catch-all route (`*` path) for 404 handling
- Navigation items centralized in Header component (`navItems` array)
- All routes must be added ABOVE the catch-all route in `App.tsx`

### Development Workflow

**Build Commands:**
- `npm run dev` - Development server on port 8080
- `npm run build` - Production build to `dist/` folder  
- `npm run build:deploy` - Build + copy to root for GitHub Pages
- `npm run deploy` - Deploy to GitHub Pages via gh-pages

**Key Files to Modify:**
- Add new routes: Update both `App.tsx` and `Header.tsx` navigation
- New UI components: Use shadcn/ui generator or extend existing patterns
- Styling: Extend design system in `tailwind.config.ts` and `src/index.css`

### Business Domain Context

This is a **fiber internet provider website** with focus on:
- Service plans and pricing
- Coverage areas and technical specs  
- Customer testimonials and blog content
- Contact/support functionality

When adding features, maintain the tech-forward, premium internet service branding with dark theme and neon accents.

### Critical Implementation Notes

1. **Preloader**: Index page shows 3-second loading animation - modify `src/components/Preloader.tsx`
2. **Custom Domain**: Configured for codespheres.com via CNAME file and vite.config.ts base path
3. **Mobile-First**: All components implement responsive design with mobile menu patterns
4. **Toast System**: Dual toast setup (shadcn + sonner) configured in App.tsx root
5. **Footer Links**: Centralized in Footer component - update `footerLinks` object for sitemap changes
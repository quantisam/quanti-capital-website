# Quanti Capital Website

## Project Overview
Corporate website for **Quanti Capital** - a critical minerals and rare earth elements trading company. 
- **Tagline:** "Critical Materials. Global Reach."
- **Focus:** Breaking bottlenecks in critical materials trade
- **Headquarters:** Winter Park, Florida, USA

## Tech Stack
- **Framework:** React 18 + Vite 5
- **Routing:** React Router v6 (multi-page SPA)
- **Styling:** Tailwind CSS with dark glassmorphism theme
- **Icons:** Lucide React
- **Deployment:** Vercel (with serverless functions)
- **Email Service:** Resend API for contact form

## Project Structure
```
├── src/
│   ├── App.jsx              # Router setup and page routes
│   ├── main.jsx             # React entry point
│   ├── index.css            # Tailwind imports + custom animations
│   ├── components/
│   │   └── shared.jsx       # Reusable components (GlassCard, Header, Footer, etc.)
│   ├── pages/
│   │   ├── HomePage.jsx     # Interactive hero with mouse-following effects
│   │   ├── BrokeragePage.jsx
│   │   ├── LogisticsPage.jsx
│   │   ├── HedgingPage.jsx
│   │   ├── MarketsPage.jsx
│   │   ├── MaterialsPage.jsx # Critical materials grid (static)
│   │   ├── DivisionsPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── PrivacyPage.jsx
│   │   ├── TermsPage.jsx
│   │   └── DisclaimerPage.jsx
│   ├── hooks/               # (Legacy hooks - not actively used)
│   ├── services/            # (Legacy services - not actively used)
│   └── lib/
├── api/
│   ├── contact.js           # Vercel serverless - contact form emails
│   └── commodities.js       # Vercel serverless - commodity price proxy (legacy)
├── public/
│   └── QUANTII.svg          # Official logo (golden sphere + text)
├── index.html
├── vite.config.js
├── tailwind.config.js
└── vercel.json
```

## Design System

### Theme: Dark Glassmorphism
- **Background:** `bg-[#050505]` (near-black)
- **Glass Cards:** Semi-transparent with blur, subtle borders
- **Accent:** White/gold gradients, emerald for highlights
- **Typography:** White with opacity variations (`text-white/40`, `text-white/60`)

### Key Components (`src/components/shared.jsx`)
```jsx
// Glass card with optional glow effect
<GlassCard glow className="p-8">Content</GlassCard>

// Page header with eyebrow, title, subtitle
<PageHeader 
  eyebrow="Section Name"
  title="Main Heading"
  subtitle="Description text"
  backLink="/divisions"
  backLabel="Back to Divisions"
/>

// Logo component
<QuantiLogo />  // Uses /QUANTII.svg

// Navigation header
<Header variant="dark" />

// Footer with links
<Footer />

// Gradient background orbs
<GradientOrbs />

// CTA section
<CTASection 
  title="Ready to Connect?"
  subtitle="Description"
  buttonText="Get in Touch"
/>
```

### CSS Utilities (`src/index.css`)
```css
.glow-lg        /* Large glow effect */
.glow-button    /* Button-specific glow */
.text-shadow-lg /* Text depth shadow */
.border-glow    /* Glowing border effect */
.glass-premium  /* Enhanced glass effect */
```

### Tailwind Patterns
```jsx
// Glass card styling
"bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-2xl border border-white/[0.08] rounded-3xl"

// Glow shadow
"shadow-[0_0_40px_rgba(255,255,255,0.08)]"

// Premium button
"bg-white text-black rounded-full shadow-[0_0_40px_rgba(255,255,255,0.25)]"

// Centered section
"max-w-6xl mx-auto text-center"
```

## Business Context

### Four Divisions
1. **Brokerage** - Matching mines/suppliers with OEMs, refiners, buyers
2. **Logistics** - Freight brokerage, traceability, compliance documentation
3. **Hedging** - Risk management via FCM partnerships
4. **Markets** - Global operations with Africa focus

### Critical Materials Traded
- Rare Earth Elements (Nd, Pr, Dy, Tb)
- Copper, Tungsten, Titanium
- Gallium, Germanium, Antimony
- Lithium, Cobalt, Nickel
- Graphite, Tantalum

### Geographic Focus
- **Primary:** Africa (Zambia, Angola, DRC, Tanzania, South Africa)
- **Markets:** Connecting Western resources to global supply chains
- **Compliance:** US-friendly jurisdictions only

## Pages Overview

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, company overview, divisions preview |
| About/Divisions | `/divisions` | Overview of all four divisions |
| Brokerage | `/brokerage` | Offtake structuring, counterparty vetting |
| Logistics | `/logistics` | Freight brokerage, traceability |
| Hedging | `/hedging` | FCM partnerships, price protection |
| Markets | `/markets` | Global footprint, Africa focus |
| Materials | `/materials` | Critical materials we trade |
| Contact | `/contact` | Contact form |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |
| Disclaimer | `/disclaimer` | Legal disclaimer |

## Commands
```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build to /dist
npm run preview  # Preview production build locally
```

## Environment Variables
```bash
# .env.local (local development only)
FIGMA_ACCESS_TOKEN=xxx          # Figma MCP integration

# Vercel Environment Variables
RESEND_API_KEY=xxx              # Contact form emails
ALPHA_VANTAGE_API_KEY=xxx       # (Legacy) Commodity prices
```

## Logo
- **File:** `/public/QUANTII.svg`
- **Component:** `<QuantiLogo />` in shared.jsx
- **Size:** `h-14` (56px height)
- **Style:** Golden 3D sphere with "QUANTI" text and "CAPITAL" underneath

## Contact
- **Email:** info@quanticapital.org
- **Website:** quanticapital.org
- **Response Time:** Within 24 hours

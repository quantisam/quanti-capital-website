# Quanti Capital Website

Professional corporate website for Quanti Capital - Breaking bottlenecks in critical materials trade.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (download from nodejs.org)
- npm (comes with Node.js)

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
quanti-capital-website/
├── src/
│   ├── components/      # Shared UI components
│   │   └── shared.jsx   # GlassCard, Header, Footer, etc.
│   ├── hooks/           # React hooks
│   │   └── useCommodityPrices.js  # Live commodity data hook
│   ├── pages/           # Page components
│   ├── services/        # API services
│   │   └── commodityApi.js  # Alpha Vantage API client
│   ├── main.jsx         # Application entry point with routing
│   └── index.css        # Global styles (Tailwind)
├── api/                 # Vercel serverless functions
│   ├── contact.js       # Contact form handler
│   └── commodities.js   # Commodity price API proxy
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS config
└── postcss.config.js    # PostCSS config
```

## 🎨 Technology Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Commodity Data:** Alpha Vantage API (free tier)

## 💹 Live Commodity Prices

The website displays live commodity prices for Copper and Aluminum using the Alpha Vantage free API (25 requests/day). Other critical materials (Lithium, Cobalt, Nickel, Rare Earths) display indicative prices.

### Setup API Key

1. Get a free API key from [Alpha Vantage](https://www.alphavantage.co/support/#api-key)
2. Copy `.env.example` to `.env.local`
3. Add your API key: `ALPHA_VANTAGE_API_KEY=your_key_here`

For production deployment on Vercel:
- Add `ALPHA_VANTAGE_API_KEY` as an environment variable in your Vercel project settings

**Note:** Without an API key, the site will display demo data with appropriate disclaimers.

## 📝 Making Changes

### Update Content

Edit `src/App.jsx` to change:
- Text content
- Section layout
- Navigation items
- Colors and styling

### Add New Sections

Add sections in `src/App.jsx` following the existing pattern:

```jsx
<section className="py-24 px-6 lg:px-12">
  <div className="max-w-7xl mx-auto">
    {/* Your content */}
  </div>
</section>
```

## 🌐 Deployment

This site is configured for Vercel deployment.

See `DEPLOYMENT-GUIDE.md` for detailed instructions.

## 📧 Contact

For questions or support: info@quanticapital.org

## 📄 License

Copyright © 2024 Quanti Capital. All rights reserved.

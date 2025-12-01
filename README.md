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
│   ├── App.jsx          # Main website component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles (Tailwind)
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

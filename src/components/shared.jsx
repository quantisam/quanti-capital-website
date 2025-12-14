import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react';
import { useTickerCommodities } from '../hooks/useCommodityPrices';

// Reusable Glass Card Component with enhanced shadows
export function GlassCard({ children, className = "", hover = true, glow = false }) {
  return (
    <div className={`
      bg-gradient-to-br from-white/[0.04] to-white/[0.01]
      backdrop-blur-2xl
      border border-white/[0.08]
      rounded-3xl
      shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]
      transition-all duration-500
      ${hover ? 'hover:bg-gradient-to-br hover:from-white/[0.06] hover:to-white/[0.02] hover:border-white/[0.12] hover:shadow-[0_12px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]' : ''}
      ${glow ? 'shadow-[0_0_40px_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.4)]' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}

// Format price for display
function formatPrice(price) {
  if (price >= 1000) {
    return `$${price.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
  } else if (price >= 100) {
    return `$${price.toFixed(0)}`;
  } else {
    return `$${price.toFixed(2)}`;
  }
}

// Format change percentage
function formatChange(change) {
  const prefix = change >= 0 ? '+' : '';
  return `${prefix}${change.toFixed(1)}%`;
}

// Commodity Ticker Component with Live Data
export function CommodityTicker() {
  const { commodities, loading } = useTickerCommodities();

  // Fallback data while loading
  const fallbackData = [
    { symbol: 'Cu', name: 'Copper', price: 9500, change: 1.2, unit: 'USD/mt', isSimulated: true },
    { symbol: 'Al', name: 'Aluminum', price: 2500, change: 0.5, unit: 'USD/mt', isSimulated: true },
    { symbol: 'Li', name: 'Lithium', price: 10500, change: -2.3, unit: 'USD/mt', isSimulated: true },
    { symbol: 'Co', name: 'Cobalt', price: 24200, change: 1.2, unit: 'USD/mt', isSimulated: true },
    { symbol: 'Ni', name: 'Nickel', price: 15800, change: 0.8, unit: 'USD/mt', isSimulated: true },
    { symbol: 'REE', name: 'Rare Earths', price: 285, change: -0.5, unit: 'Index', isSimulated: true },
  ];

  const tickerData = loading ? fallbackData : commodities;

  return (
    <div className="relative w-full border-t border-b border-white/[0.06] bg-gradient-to-r from-black/60 via-black/50 to-black/60 backdrop-blur-2xl shadow-[0_-1px_0_rgba(255,255,255,0.05),0_1px_0_rgba(255,255,255,0.05)] overflow-hidden">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-10" />
      
      {/* Ticker animation */}
      <div className="flex animate-ticker py-4">
        {[...tickerData, ...tickerData, ...tickerData].map((item, index) => (
          <div key={`${item.symbol}-${index}`} className="flex items-center gap-6 mx-8 whitespace-nowrap">
            <div className="flex items-center gap-2">
              <span className="text-white/40 text-xs font-semibold">{item.symbol}</span>
              <span className="text-white/60 text-sm">{item.name}</span>
              {!item.isSimulated && (
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" title="Live data" />
              )}
            </div>
            <span className="text-white text-sm font-medium">
              {formatPrice(item.price)}
            </span>
            <span className={`text-sm font-medium flex items-center gap-1 ${item.change >= 0 ? 'text-emerald-400/80' : 'text-red-400/80'}`}>
              {item.change >= 0 ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {formatChange(item.change)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Quanti Logo Component - using official SVG logo
export function QuantiLogo({ dark = false, className = "" }) {
  return (
    <img 
      src="/QUANTII.svg" 
      alt="Quanti Capital" 
      className={`h-14 w-auto ${className}`}
      style={dark ? { filter: 'brightness(0) saturate(100%)' } : {}}
    />
  );
}

// Navigation Header - matching original site design
export function Header({ variant = 'dark' }) {
  const navItems = [
    { label: 'About', href: '/divisions' },
    { label: 'Brokerage', href: '/brokerage' },
    { label: 'Logistics', href: '/logistics' },
    { label: 'Hedging', href: '/hedging' },
    { label: 'Markets', href: '/markets' },
    { label: 'Materials', href: '/materials' },
  ];

  const isDark = variant === 'dark';

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`px-6 py-4 ${isDark ? 'bg-[#050505]/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.4)]' : 'bg-white/90 backdrop-blur-2xl border-b border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.08)]'}`}>
        <div className="max-w-6xl mx-auto w-full">
          <nav className="flex items-center justify-between">
            <RouterLink to="/">
              <QuantiLogo dark={!isDark} />
            </RouterLink>
            
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <RouterLink
                  key={item.label}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {item.label}
                </RouterLink>
              ))}
            </div>
            
            <RouterLink
              to="/contact"
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 ${isDark ? 'bg-white text-black hover:bg-white/90' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
            >
              Contact
            </RouterLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

// Page Header Component (for subpages) with enhanced styling
export function PageHeader({ eyebrow, title, subtitle, backLink = "/", backLabel = "Back to Home" }) {
  return (
    <>
      <Header />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Back link - centered */}
          <div className="mb-10 flex justify-center">
            <RouterLink to={backLink} className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-all duration-300 text-sm group px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1]">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {backLabel}
            </RouterLink>
          </div>
          
          {/* Centered content with enhanced typography */}
          <div className="space-y-6">
            {eyebrow && (
              <p className="text-white/50 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                {eyebrow}
              </p>
            )}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

// Footer Component with enhanced styling
export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/[0.06] bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 mb-16">
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <QuantiLogo />
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              Integrating global resources. Connecting mines to manufacturers.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            {/* Divisions */}
            <div>
              <h4 className="text-white/60 text-sm font-semibold mb-4">Divisions</h4>
              <div className="flex flex-col gap-3">
                <RouterLink to="/brokerage" className="text-sm text-white/40 hover:text-white transition-colors">Brokerage</RouterLink>
                <RouterLink to="/logistics" className="text-sm text-white/40 hover:text-white transition-colors">Logistics</RouterLink>
                <RouterLink to="/hedging" className="text-sm text-white/40 hover:text-white transition-colors">Hedging</RouterLink>
                <RouterLink to="/markets" className="text-sm text-white/40 hover:text-white transition-colors">Markets</RouterLink>
              </div>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="text-white/60 text-sm font-semibold mb-4">Company</h4>
              <div className="flex flex-col gap-3">
                <RouterLink to="/divisions" className="text-sm text-white/40 hover:text-white transition-colors">About</RouterLink>
                <RouterLink to="/materials" className="text-sm text-white/40 hover:text-white transition-colors">Materials</RouterLink>
                <RouterLink to="/contact" className="text-sm text-white/40 hover:text-white transition-colors">Contact</RouterLink>
              </div>
            </div>
            
            {/* Legal */}
            <div>
              <h4 className="text-white/60 text-sm font-semibold mb-4">Legal</h4>
              <div className="flex flex-col gap-3">
                <RouterLink to="/privacy" className="text-sm text-white/40 hover:text-white transition-colors">Privacy Policy</RouterLink>
                <RouterLink to="/terms" className="text-sm text-white/40 hover:text-white transition-colors">Terms of Service</RouterLink>
                <RouterLink to="/disclaimer" className="text-sm text-white/40 hover:text-white transition-colors">Disclaimer</RouterLink>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Quanti Capital Ltd. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Registered in England & Wales. Company No. 00000000
          </p>
        </div>
      </div>
    </footer>
  );
}

// Gradient Orbs Background Component with enhanced effects
export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-gradient-radial from-white/[0.03] to-transparent rounded-full blur-[150px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-white/[0.025] to-transparent rounded-full blur-[130px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-white/[0.015] via-transparent to-white/[0.01] rounded-full blur-[180px]"></div>
      <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-emerald-500/[0.02] to-transparent rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
    </div>
  );
}

// CTA Section Component with premium styling
export function CTASection({ 
  title = "Ready to Transform Your Supply Chain?",
  subtitle = "Join the platform connecting critical material stakeholders worldwide.",
  buttonText = "Contact Our Team",
  buttonLink = "/contact"
}) {
  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <GlassCard className="p-12 md:p-20" glow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{title}</h2>
          <p className="text-white/50 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          <RouterLink
            to={buttonLink}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full text-base font-semibold shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.35)] hover:bg-white/95 transition-all duration-300 hover:scale-[1.03]"
          >
            {buttonText}
          </RouterLink>
        </GlassCard>
      </div>
    </section>
  );
}

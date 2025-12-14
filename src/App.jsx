import React from 'react';
import { ArrowRight, ArrowUpRight, Link, Truck, BarChart3, MapPin, Sparkles } from 'lucide-react';

// ============================================================================
// QUANTI CAPITAL - PREMIUM MARKETING SITE
// Ultra-modern dark theme with advanced glassmorphism
// ============================================================================

// Quanti Logo Component
const QuantiLogo = ({ showText = true }) => (
  <div className="flex items-center gap-3">
    <div className="relative w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
      <svg className="w-4 h-4 text-black" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="4" y1="8" x2="36" y2="8" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="4" y1="16" x2="36" y2="16" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="4" y1="8" x2="36" y2="16" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="36" y1="8" x2="4" y2="16" stroke="currentColor" strokeWidth="2.5"/>
      </svg>
    </div>
    {showText && (
      <span className="text-white font-semibold text-lg tracking-wide">
        QUANTI
      </span>
    )}
  </div>
);

// Premium Glass Card Component
const GlassCard = ({ children, className = "", hover = true }) => (
  <div className={`
    relative overflow-hidden
    bg-gradient-to-br from-white/[0.08] to-white/[0.02]
    backdrop-blur-2xl
    border border-white/[0.08]
    rounded-3xl
    shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]
    ${hover ? 'hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-[0_16px_48px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] hover:-translate-y-1' : ''}
    transition-all duration-500 ease-out
    ${className}
  `}>
    {/* Shimmer effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    {children}
  </div>
);

// Commodity Ticker Data
const commodities = [
  { name: "LITHIUM CARBONATE", price: "$13,250", change: "+2.4%", positive: true },
  { name: "COBALT (99.8%)", price: "$28,500", change: "-0.8%", positive: false },
  { name: "NICKEL SULFATE", price: "$16,100", change: "+1.2%", positive: true },
  { name: "COPPER (LME)", price: "$8,450", change: "+0.5%", positive: true },
  { name: "GRAPHITE (FLAKE)", price: "$780", change: "0.0%", positive: null },
  { name: "RARE EARTHS (NdPr)", price: "$52,000", change: "-1.5%", positive: false },
  { name: "SPODUMENE (6%)", price: "$950", change: "+3.1%", positive: true },
];

// Premium Commodity Ticker
const CommodityTicker = () => (
  <div className="w-full bg-black/70 backdrop-blur-xl border-y border-white/[0.06] py-4 overflow-hidden">
    <div className="flex animate-ticker">
      {[...commodities, ...commodities, ...commodities].map((commodity, index) => (
        <div key={index} className="flex items-center gap-4 px-10 whitespace-nowrap">
          <span className="text-white/40 text-xs font-medium tracking-wide uppercase">{commodity.name}</span>
          <span className="text-white text-sm font-bold tabular-nums">{commodity.price}</span>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
            commodity.positive === true 
              ? 'text-emerald-400 bg-emerald-400/10' 
              : commodity.positive === false 
                ? 'text-rose-400 bg-rose-400/10' 
                : 'text-white/40 bg-white/5'
          }`}>
            {commodity.change}
          </span>
        </div>
      ))}
    </div>
  </div>
);

// Premium Glassmorphic Header
const Header = () => {
  const navLinks = [
    { href: "#about", label: "Platform" },
    { href: "#divisions", label: "Divisions" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <nav className="
        bg-black/50 backdrop-blur-2xl 
        border border-white/[0.08] 
        rounded-full 
        px-3 py-2
        shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.1)]
      ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center pl-2">
            <QuantiLogo />
          </a>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  px-5 py-2.5 
                  text-sm font-medium text-white/60 
                  hover:text-white 
                  rounded-full 
                  hover:bg-white/[0.06]
                  transition-all duration-300
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="
              relative overflow-hidden
              bg-white text-black 
              px-6 py-2.5 
              rounded-full 
              text-sm font-semibold 
              hover:bg-white/95
              shadow-[0_0_20px_rgba(255,255,255,0.25),0_0_40px_rgba(255,255,255,0.1)]
              hover:shadow-[0_0_30px_rgba(255,255,255,0.4),0_0_60px_rgba(255,255,255,0.15)]
              transition-all duration-300
            "
          >
            <span className="relative z-10">Connect</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

// Premium Hero Section
const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#050505]">
    {/* Advanced Background Effects */}
    <div className="absolute inset-0">
      {/* Primary gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.02)_0%,transparent_50%)]" />
      
      {/* Animated orbs */}
      <div 
        className="absolute -left-[20%] -top-[10%] w-[800px] h-[800px] rounded-full animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div 
        className="absolute -right-[10%] top-[20%] w-[600px] h-[600px] rounded-full animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
          filter: 'blur(120px)',
          animationDelay: '1s',
          animationDuration: '4s',
        }}
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>

    {/* Hero Content - Centered */}
    <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-6 pt-32 pb-24">
      {/* Eyebrow Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] mb-8 backdrop-blur-xl">
        <Sparkles className="w-4 h-4 text-white/60" />
        <span className="text-white/60 text-sm font-medium tracking-wide">Operational in 5 Continents</span>
      </div>

      {/* Main Headline */}
      <h1 className="mb-8">
        <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[96px] font-bold text-white tracking-tighter leading-[0.95]">
          INTEGRATING
        </span>
        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white/20 to-white/40 tracking-tighter leading-[0.95] mt-2">
          GLOBAL RESOURCES
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-light">
        Quanti Capital connects mines to manufacturers. We solve offtake challenges, secure supply, and bridge the gap between Western resources and global markets.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <a 
          href="#divisions" 
          className="
            group inline-flex items-center gap-3 
            bg-white text-black 
            px-8 py-4 
            rounded-full 
            text-base font-semibold 
            shadow-[0_0_30px_rgba(255,255,255,0.2)]
            hover:shadow-[0_0_50px_rgba(255,255,255,0.35)]
            hover:scale-[1.02]
            transition-all duration-300
          "
        >
          Explore Divisions
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
        <a 
          href="#contact" 
          className="
            inline-flex items-center gap-3 
            bg-white/[0.05] backdrop-blur-xl
            border border-white/[0.1]
            text-white 
            px-8 py-4 
            rounded-full 
            text-base font-medium 
            hover:bg-white/[0.08] hover:border-white/[0.15]
            transition-all duration-300
          "
        >
          Contact Us
        </a>
      </div>

      {/* Stats Bar */}
      <GlassCard className="w-full max-w-3xl p-8" hover={false}>
        <div className="grid grid-cols-3 divide-x divide-white/[0.08]">
          <div className="text-center px-6">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">4</div>
            <div className="text-white/40 text-sm font-medium tracking-wide">Core Divisions</div>
          </div>
          <div className="text-center px-6">
            <div className="flex items-baseline justify-center mb-2">
              <span className="text-white/40 text-xl mr-1">$</span>
              <span className="text-4xl md:text-5xl font-bold text-white">500</span>
              <span className="text-white/40 text-xl ml-1">M+</span>
            </div>
            <div className="text-white/40 text-sm font-medium tracking-wide">Volume Structured</div>
          </div>
          <div className="text-center px-6">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">100<span className="text-white/40 text-2xl">%</span></div>
            <div className="text-white/40 text-sm font-medium tracking-wide">Mission Driven</div>
          </div>
        </div>
      </GlassCard>
    </div>

    {/* Commodity Ticker */}
    <CommodityTicker />
  </section>
);

// Premium Platform Section
const PlatformSection = () => (
  <section id="about" className="relative bg-[#050505] py-32 overflow-hidden">
    {/* Background accent */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.01] rounded-full blur-[150px]" />
    
    <div className="relative z-10 max-w-6xl mx-auto px-6">
      {/* Section Header - Centered */}
      <div className="text-center mb-20">
        <p className="text-white/40 text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Platform</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Bridging the Critical Gap
        </h2>
        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light">
          We sit between government incentives and private sector realities.
        </p>
      </div>

      {/* Value Props Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: BarChart3,
            title: "Market Makers",
            description: "We create liquidity in traditionally illiquid markets. By stepping in as a principal, we ensure mines have a buyer and OEMs have a seller."
          },
          {
            icon: Link,
            title: "First Offtake",
            description: "Solving the \"chicken and egg\" problem for new mines by securing initial commercial agreements that unlock project financing."
          },
          {
            icon: MapPin,
            title: "Western Aligned",
            description: "Strict adherence to IRA, CRMA, and global compliance standards for secure, friendly-nation supply chains."
          }
        ].map((prop, index) => (
          <GlassCard key={index} className="group p-8">
            <div className="mb-6">
              <div className="
                w-14 h-14 
                rounded-2xl 
                bg-gradient-to-br from-white/[0.1] to-white/[0.02]
                border border-white/[0.08]
                flex items-center justify-center 
                group-hover:scale-110 group-hover:border-white/[0.15]
                transition-all duration-500
              ">
                <prop.icon className="w-6 h-6 text-white/70" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{prop.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{prop.description}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

// Premium Divisions Section
const DivisionsSection = () => {
  const divisions = [
    {
      name: "Brokerage",
      description: "Connecting mines with manufacturers through strategic offtake agreements and market intelligence.",
      icon: Link,
      href: "#brokerage"
    },
    {
      name: "Logistics & Traceability",
      description: "End-to-end supply chain visibility with integrated tracking and compliance documentation.",
      icon: Truck,
      href: "#logistics"
    },
    {
      name: "Hedging & Risk",
      description: "Price risk management through FCM partnerships and customized hedging programs.",
      icon: BarChart3,
      href: "#hedging"
    },
    {
      name: "Global Markets",
      description: "Operations spanning Africa, Europe, Asia, and the Americas with local expertise.",
      icon: MapPin,
      href: "#markets"
    },
  ];

  return (
    <section id="divisions" className="relative bg-[#050505] py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[200px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header - Centered */}
        <div className="text-center mb-16">
          <p className="text-white/40 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Integrated Service Divisions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Specialized units working in concert.
          </h2>
        </div>

        {/* Divisions Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {divisions.map((division) => (
            <a
              key={division.name}
              href={division.href}
              className="group"
            >
              <GlassCard className="p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="
                    w-14 h-14 
                    rounded-2xl 
                    bg-gradient-to-br from-white/[0.1] to-white/[0.02]
                    border border-white/[0.08]
                    flex items-center justify-center 
                    group-hover:scale-110 group-hover:border-white/[0.15]
                    transition-all duration-500
                  ">
                    <division.icon className="w-6 h-6 text-white/70" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{division.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{division.description}</p>
              </GlassCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Premium CTA Section
const CTASection = () => (
  <section id="contact" className="relative bg-[#050505] py-32 overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] via-transparent to-transparent" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[150px]" />

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <GlassCard className="p-12 md:p-16" hover={false}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Ready to Integrate?
        </h2>
        <p className="text-white/50 text-lg md:text-xl max-w-xl mx-auto mb-10 font-light">
          Join the network of mines and manufacturers securing the future of critical materials.
        </p>
        <a 
          href="mailto:info@quanticapital.org" 
          className="
            group inline-flex items-center gap-3 
            bg-white text-black 
            px-10 py-5 
            rounded-full 
            text-lg font-semibold 
            shadow-[0_0_40px_rgba(255,255,255,0.25)]
            hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]
            hover:scale-[1.03]
            transition-all duration-300
          "
        >
          Start the Conversation
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
        </a>
      </GlassCard>
    </div>
  </section>
);

// Premium Footer
const Footer = () => {
  const footerLinks = {
    divisions: [
      { label: "Brokerage", href: "#brokerage" },
      { label: "Logistics & Traceability", href: "#logistics" },
      { label: "Hedging & Risk", href: "#hedging" },
      { label: "Global Markets", href: "#markets" },
    ],
    resources: [
      { label: "Material Catalog", href: "#materials" },
      { label: "Industries", href: "#industries" },
      { label: "Contact", href: "#contact" },
    ],
    contact: [
      { label: "info@quanticapital.org", href: "mailto:info@quanticapital.org" },
    ],
  };

  return (
    <footer className="relative bg-[#030303] border-t border-white/[0.05] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <QuantiLogo />
            <p className="text-white/30 text-sm mt-6 leading-relaxed max-w-xs">
              Breaking bottlenecks in critical materials trade. Integrating American resources into global supply chains.
            </p>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="text-white/60 font-semibold text-sm uppercase tracking-wider mb-5">Divisions</h4>
            <ul className="space-y-3">
              {footerLinks.divisions.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 text-sm hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white/60 font-semibold text-sm uppercase tracking-wider mb-5">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 text-sm hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/60 font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 text-sm hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <span className="text-white/20 text-sm">Response within 24 hours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/[0.05]">
          <p className="text-white/20 text-sm">
            © 2025 Quanti Capital. All rights reserved.
          </p>
          <div className="flex items-center gap-8 mt-4 md:mt-0">
            <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans antialiased selection:bg-white/20 selection:text-white">
      <Header />
      <main>
        <HeroSection />
        <PlatformSection />
        <DivisionsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

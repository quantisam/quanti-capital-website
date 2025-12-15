import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Link, Truck, BarChart3, MapPin, ChevronDown } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { GlassCard, QuantiLogo, CommodityTicker, Header, Footer } from '../components/shared';

// Animated typing effect for hero
const TypewriterText = ({ words, className }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Premium Hero Section with interactive features
export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#050505]">
      {/* Interactive Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.025)_0%,transparent_50%)]" />
        
        {/* Mouse-following gradient orb - hidden on touch devices */}
        <div 
          className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] rounded-full transition-transform duration-1000 ease-out pointer-events-none hidden sm:block"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px))`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Static orb for mobile */}
        <div 
          className="absolute w-[300px] h-[300px] rounded-full pointer-events-none sm:hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        
        <div 
          className="absolute -left-[20%] -top-[10%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[900px] rounded-full animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
            filter: 'blur(120px)',
          }}
        />
        <div 
          className="absolute -right-[10%] top-[20%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] rounded-full animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
            filter: 'blur(140px)',
            animationDelay: '2s',
          }}
        />
        <div 
          className="absolute left-1/2 bottom-1/4 -translate-x-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.03) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24 text-center">
        {/* Animated gradient text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 max-w-5xl">
          <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Critical Materials.
          </span>
          <br />
          <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
            Global Reach.
          </span>
        </h1>

        <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl leading-relaxed mb-8 sm:mb-12 px-2">
          Connecting Western resources to global supply chains for critical minerals and rare earths.
        </p>

        {/* Interactive CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <RouterLink 
            to="/divisions" 
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 text-black font-semibold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white hover:bg-white/90 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105"
          >
            Explore Divisions
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </RouterLink>
          
          <RouterLink 
            to="/contact" 
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 text-white/80 hover:text-white font-medium text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </RouterLink>
        </div>
      </div>

      <CommodityTicker />
    </section>
  );
};

// Stats Section with enhanced styling
export const StatsSection = () => (
  <section className="relative bg-[#050505] py-16 sm:py-20 md:py-28 overflow-hidden border-t border-white/[0.06]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <GlassCard className="p-6 sm:p-8 md:p-10 text-center" glow>
          <p className="text-white/50 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-5">INTEGRATED PLATFORM</p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">4 Divisions</h3>
          <p className="text-white/50 text-sm sm:text-base">Brokerage, Logistics, Hedging, Markets</p>
        </GlassCard>
        <GlassCard className="p-6 sm:p-8 md:p-10 text-center" glow>
          <p className="text-white/50 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-5">GLOBAL REACH</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">5 Continents</h3>
          <p className="text-white/50 text-sm sm:text-base">Connecting mines to manufacturers worldwide</p>
        </GlassCard>
        <GlassCard className="p-6 sm:p-8 md:p-10 text-center sm:col-span-2 md:col-span-1" glow>
          <p className="text-white/50 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-5">MISSION</p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">Future-Ready</h3>
          <p className="text-white/50 text-sm sm:text-base">Building resilient supply chains for tomorrow's industries</p>
        </GlassCard>
      </div>
    </div>
  </section>
);

// Why Quanti Section with enhanced styling
export const WhyQuantiSection = () => (
  <section className="relative bg-[#050505] py-16 sm:py-20 md:py-28 overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-10 sm:mb-16">
        <p className="text-white/50 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6">WHY QUANTI</p>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight px-2">
          The Bridge Between Supply and Demand
        </h2>
        
        <p className="text-white/50 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-2">
          Mines need offtake. Manufacturers need diversified supply. We connect compliant counterparties and create private-sector demand for strategic materials.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-12">
        <GlassCard className="p-6 sm:p-8 md:p-10" glow>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-5">Solving Offtake Challenges</h3>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed">
            We build pipelines of qualified buyers—OEMs, refiners, and strategic partners—translating technical product into tangible offtake.
          </p>
        </GlassCard>
        <GlassCard className="p-6 sm:p-8 md:p-10" glow>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-5">Western Integration</h3>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed">
            Connecting mines, processors, and manufacturers through transparent, traceable, and compliant pathways.
          </p>
        </GlassCard>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        <GlassCard className="p-6 sm:p-8 md:p-10" glow>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-5">For Suppliers</h3>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed">
            Access international markets while maintaining operational control. Connect with private sector buyers across multiple regions.
          </p>
        </GlassCard>
        <GlassCard className="p-6 sm:p-8 md:p-10" glow>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-5">For Buyers</h3>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed">
            Diversify your critical mineral supply from verified global sources. Reduce concentration risk in a complex geopolitical landscape.
          </p>
        </GlassCard>
      </div>
    </div>
  </section>
);

// Three Pillars Section with enhanced styling
export const PillarsSection = () => (
  <section className="relative bg-[#050505] py-16 sm:py-20 md:py-28 overflow-hidden border-t border-white/[0.06]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <GlassCard className="p-6 sm:p-8 md:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-5">Balanced</h3>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed">Giving suppliers control while diversifying buyer risks</p>
        </GlassCard>
        <GlassCard className="p-6 sm:p-8 md:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-5">Connected</h3>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed">Integrating American Resources into global supply chains</p>
        </GlassCard>
        <GlassCard className="p-6 sm:p-8 md:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-5">Sustainable</h3>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed">Market-driven demand beyond government programs</p>
        </GlassCard>
      </div>
    </div>
  </section>
);

// Our Divisions Section - matching original design
export const DivisionsPreviewSection = () => {
  const divisions = [
    {
      name: "Brokerage",
      subtitle: "SERVICES",
      description: "Many new mines and processing plants are coming online, but demand must match supply. Quanti helps balance the market by locating offtake, integrating suppliers and buyers, while connecting only compliant counterparties in friendly countries.",
      bullets: [
        "Identify and secure diversified offtake for mines and processing facilities",
        "Connect producers with OEMs, refiners, and private-sector buyers",
        "Balance supply with real commercial demand as new projects come online",
        "Integrate compliant, friendly-country partners into critical material supply chains"
      ],
      icon: Link,
      href: "/brokerage"
    },
    {
      name: "Logistics",
      subtitle: "FREIGHT & TRACEABILITY",
      description: "Specialized logistics solutions with flexible traceability integration. We work with any traceability application the parties prefer, partnering with software companies, data analytics firms, and buyers to track materials from source to destination.",
      bullets: [
        "Freight brokerage for critical materials transportation",
        "Integration with preferred traceability systems",
        "Flexible technology partnerships for supply chain visibility",
        "Compliance documentation and chain of custody"
      ],
      icon: Truck,
      href: "/logistics"
    },
    {
      name: "Hedging",
      subtitle: "RISK MANAGEMENT",
      description: "We partner with Futures Commission Merchants (FCMs) to provide hedging solutions for both buyers and sellers in the critical materials market, helping manage price volatility and market uncertainties.",
      bullets: [
        "Partnership with FCMs for comprehensive hedging solutions",
        "Price risk mitigation for buyers and sellers",
        "Market volatility management strategies",
        "Customized hedging programs for critical materials"
      ],
      icon: BarChart3,
      href: "/hedging"
    },
    {
      name: "Markets",
      subtitle: "GLOBAL OPERATIONS",
      description: "Connecting global markets across Europe, Asia, Africa and the Americas to critical mineral sources.",
      bullets: [
        "Global footprint across multiple continents",
        "Operations in African markets such as Zambia, Angola, DRC, Tanzania, South Africa",
        "Integrating American, European and African markets into supply chains",
        "Connecting global demand with alternative resources"
      ],
      icon: MapPin,
      href: "/markets"
    },
  ];

  return (
    <section id="divisions" className="relative bg-[#050505] py-16 sm:py-20 md:py-28 overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-white/50 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-5">OUR DIVISIONS</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight px-2">
            Four divisions working together to serve the global critical mineral and rare earth element market.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {divisions.map((division) => (
            <GlassCard key={division.name} className="p-5 sm:p-7 md:p-10 group">
              <div className="mb-5 sm:mb-8">
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.1] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <division.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white/70" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1 sm:mb-2">{division.name}</h3>
              <p className="text-[10px] sm:text-xs font-semibold text-white/40 uppercase tracking-wider mb-3 sm:mb-5">{division.subtitle}</p>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-5 sm:mb-8">{division.description}</p>
              <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-8">
                {division.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3 text-white/45 text-xs sm:text-sm">
                    <span className="text-emerald-400/60 mt-0.5">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <RouterLink 
                to={division.href}
                className="inline-flex items-center gap-2 text-white text-sm sm:text-base font-medium hover:gap-3 transition-all px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15]"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </RouterLink>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// Premium CTA Section with enhanced effects
export const CTASection = () => (
  <section className="relative bg-[#050505] py-20 sm:py-28 md:py-36 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-white/[0.025] via-transparent to-transparent" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] md:w-[1000px] h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-radial from-white/[0.03] to-transparent rounded-full blur-[180px]" />

    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <GlassCard className="p-8 sm:p-12 md:p-20" hover={false} glow>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-5 sm:mb-8 tracking-tight leading-tight">
          Ready to Integrate?
        </h2>
        <p className="text-white/50 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
          Join the network of mines and manufacturers securing the future of critical materials.
        </p>
        <RouterLink 
          to="/contact" 
          className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-black px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full text-base sm:text-lg font-semibold shadow-[0_0_50px_rgba(255,255,255,0.25),0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_0_70px_rgba(255,255,255,0.35),0_12px_48px_rgba(0,0,0,0.4)] hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto"
        >
          Start the Conversation
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
        </RouterLink>
      </GlassCard>
    </div>
  </section>
);

// Home Page Component
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <HeroSection />
      <StatsSection />
      <WhyQuantiSection />
      <PillarsSection />
      <DivisionsPreviewSection />
      <CTASection />
      <Footer />
    </div>
  );
}

import React from 'react';
import { ArrowRight, ChevronDown, Shield, Globe, TrendingUp, Link, Truck, FileCheck, BarChart3, Boxes, MapPin, Package, Anchor } from 'lucide-react';

// Quanti Capital Symbol Component
const QuantiSymbol = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Two parallel horizontal lines (equals sign) */}
    <line x1="4" y1="8" x2="36" y2="8" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="4" y1="16" x2="36" y2="16" stroke="currentColor" strokeWidth="1.5"/>
    
    {/* X - diagonal lines connecting the endpoints */}
    <line x1="4" y1="8" x2="36" y2="16" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="36" y1="8" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5"/>
    
    {/* + Cross in the middle */}
    <line x1="20" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="12" y1="12" x2="28" y2="12" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export default function QuantiCapitalComplete() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const divisions = [
    {
      name: "Quanti Capital",
      tagline: "Brokerage Services",
      description: "Breaking single-source bottlenecks by connecting buyers with multiple verified suppliers and suppliers with diverse buyer networks. We create resilient, market-driven supply chains that don't depend on government programs alone.",
      icon: Link,
      link: "#brokerage",
      highlights: [
        "Multiple suppliers for each material—no single-source dependencies",
        "Diverse buyer access beyond government stockpile programs",
        "Creating market-driven commercial demand",
        "Preserving mine control while opening new markets"
      ]
    },
    {
      name: "Quanti Logistics Group",
      tagline: "Freight & Traceability",
      description: "Specialized logistics solutions and complete supply chain traceability for critical materials. We partner with mines, software companies, data analytics firms, and buyers to track materials from source to destination.",
      icon: Truck,
      link: "#logistics",
      highlights: [
        "Freight brokerage for critical materials transportation",
        "Mine-to-facility logistics coordination",
        "End-to-end traceability through technology partnerships",
        "Compliance documentation and chain of custody"
      ]
    },
    {
      name: "Quanti Hedging",
      tagline: "Risk Management",
      description: "Sophisticated hedging strategies and risk mitigation solutions designed specifically for mining operations. We help mines protect against price volatility, currency fluctuations, and market uncertainties.",
      icon: BarChart3,
      link: "#hedging",
      highlights: [
        "Price risk hedging for mining operations",
        "Currency and commodity derivatives strategies",
        "Market volatility protection",
        "Customized risk management programs for mines"
      ]
    },
    {
      name: "Quanti Africa",
      tagline: "Regional Operations",
      description: "Dedicated focus on African mining operations, connecting the continent's rich mineral resources with global markets while supporting local development and sustainable practices.",
      icon: MapPin,
      link: "#africa",
      highlights: [
        "Deep expertise in African mining regions",
        "Local partnerships and market knowledge",
        "Sustainable sourcing practices",
        "Connecting African suppliers to global buyers"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-12">
              <a href="#" className="flex items-center space-x-3">
                <span className="text-xl font-light tracking-tight">QUANTI</span>
                <QuantiSymbol className="h-5 w-5" />
                <span className="text-xl font-light tracking-tight">CAPITAL</span>
              </a>
              <div className="hidden lg:flex space-x-8 text-sm">
                <a href="#about" className="text-zinc-600 hover:text-black transition-colors">About</a>
                <a href="#brokerage" className="text-zinc-600 hover:text-black transition-colors">Brokerage</a>
                <a href="#logistics" className="text-zinc-600 hover:text-black transition-colors">Logistics</a>
                <a href="#hedging" className="text-zinc-600 hover:text-black transition-colors">Hedging</a>
                <a href="#africa" className="text-zinc-600 hover:text-black transition-colors">Africa</a>
                <a href="#materials" className="text-zinc-600 hover:text-black transition-colors">Materials</a>
                <a href="#insights" className="text-zinc-600 hover:text-black transition-colors">Insights</a>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#careers" className="hidden md:block text-sm text-zinc-600 hover:text-black transition-colors">Careers</a>
              <a href="#contact" className="text-sm bg-black text-white px-6 py-2.5 hover:bg-zinc-800 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
              Breaking Bottlenecks in Critical Materials Trade
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 font-light leading-relaxed max-w-3xl">
              We create diverse sourcing networks that eliminate supply chain bottlenecks, reduce dependence on single suppliers or government programs, and build balanced, market-driven demand for critical materials.
            </p>
          </div>
          
          <div className="mt-16">
            <a href="#divisions" className="inline-flex items-center text-sm font-medium group">
              <span className="mr-2">Explore Our Divisions</span>
              <ChevronDown className="group-hover:translate-y-1 transition-transform" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-12 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider mb-3">Integrated Platform</div>
              <div className="text-4xl font-light mb-2">4 Divisions</div>
              <div className="text-sm text-zinc-600 font-light">Brokerage, Logistics, Hedging, Regional</div>
            </div>
            <div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider mb-3">Global Reach</div>
              <div className="text-4xl font-light mb-2">50+ Countries</div>
              <div className="text-sm text-zinc-600 font-light">Mine-to-manufacturer connections worldwide</div>
            </div>
            <div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider mb-3">Philosophy</div>
              <div className="text-4xl font-light mb-2">Mine-First</div>
              <div className="text-sm text-zinc-600 font-light">Preserving supplier control and integrity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Quanti Capital - Value Proposition */}
      <section className="py-24 px-6 lg:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-16">
            <h2 className="text-sm text-zinc-400 uppercase tracking-wider mb-6">Why Quanti Capital</h2>
            <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Creating a balanced, market-driven ecosystem for critical materials.
            </h3>
            <p className="text-xl text-zinc-300 font-light leading-relaxed">
              Traditional supply chains create dangerous dependencies—single-source suppliers, government-dependent demand, and bottlenecks that threaten entire industries. We're building something better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-l-2 border-zinc-700 pl-8">
              <h4 className="text-2xl font-light mb-4">Diverse Sourcing: No More Bottlenecks</h4>
              <p className="text-zinc-300 font-light leading-relaxed mb-6">
                For buyers, relying on a single supplier is a critical vulnerability. We connect you with multiple verified sources across different regions, creating redundancy and resilience in your supply chain. When one source faces challenges, your operations continue uninterrupted.
              </p>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-start">
                  <span className="text-zinc-600 mr-2">•</span>
                  <span>Multiple verified suppliers for each critical material</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-600 mr-2">•</span>
                  <span>Geographic diversification across mining regions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-600 mr-2">•</span>
                  <span>Elimination of single points of failure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-600 mr-2">•</span>
                  <span>Competitive pricing through market alternatives</span>
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-zinc-700 pl-8">
              <h4 className="text-2xl font-light mb-4">Market-Driven Demand: Beyond Government Programs</h4>
              <p className="text-zinc-300 font-light leading-relaxed mb-6">
                Mines shouldn't depend solely on government stockpile programs or subsidies. We create genuine commercial demand by connecting suppliers directly with manufacturers who need these materials for production—building sustainable, market-driven revenue streams.
              </p>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-start">
                  <span className="text-zinc-600 mr-2">•</span>
                  <span>Direct connections to EV battery manufacturers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-600 mr-2">•</span>
                  <span>Semiconductor and electronics industry access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-600 mr-2">•</span>
                  <span>Defense contractor and aerospace relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-600 mr-2">•</span>
                  <span>Renewable energy supply chain integration</span>
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-zinc-700 pl-8">
              <h4 className="text-2xl font-light mb-4">For Suppliers: Diversified Customer Base</h4>
              <p className="text-zinc-300 font-light leading-relaxed">
                We open doors to multiple buyers across different industries and geographies, reducing your dependency on any single customer or market. This creates stability, pricing power, and long-term sustainability for mining operations.
              </p>
            </div>

            <div className="border-l-2 border-zinc-700 pl-8">
              <h4 className="text-2xl font-light mb-4">For Buyers: Supply Security</h4>
              <p className="text-zinc-300 font-light leading-relaxed">
                Access multiple verified sources for every critical material you need. When geopolitical events, natural disasters, or operational issues affect one supplier, your alternative sources keep production running.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl font-light mb-3">Balanced</div>
                <div className="text-sm text-zinc-500 font-light">Neither buyers nor suppliers hold disproportionate power</div>
              </div>
              <div>
                <div className="text-5xl font-light mb-3">Resilient</div>
                <div className="text-sm text-zinc-500 font-light">Supply chains that withstand disruptions and uncertainties</div>
              </div>
              <div>
                <div className="text-5xl font-light mb-3">Sustainable</div>
                <div className="text-sm text-zinc-500 font-light">Market-driven demand that doesn't rely on government intervention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Divisions Section */}
      <section id="divisions" className="py-24 px-6 lg:px-12 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Our Divisions</h2>
            <h3 className="text-4xl md:text-5xl font-light leading-tight max-w-3xl">
              Four specialized divisions working in concert to serve the global critical materials market.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {divisions.map((division, index) => {
              const Icon = division.icon;
              return (
                <a
                  key={index}
                  href={division.link}
                  className="bg-white border border-zinc-200 p-8 hover:border-zinc-400 transition-all group"
                >
                  <div className="mb-6">
                    <Icon className="text-zinc-400 group-hover:text-black transition-colors" size={36} strokeWidth={1.5} />
                  </div>
                  
                  <h4 className="text-2xl font-light mb-2">{division.name}</h4>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider mb-4">{division.tagline}</div>
                  
                  <p className="text-zinc-600 font-light leading-relaxed mb-6">
                    {division.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {division.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-zinc-600 flex items-start">
                        <span className="text-zinc-400 mr-2">•</span>
                        <span className="font-light">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-sm font-medium group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brokerage Deep Dive */}
      <section id="brokerage" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Quanti Capital</h2>
              <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                Diverse sourcing networks that eliminate dependencies.
              </h3>
              <p className="text-lg text-zinc-600 font-light leading-relaxed mb-8">
                We connect verified buyers with multiple trusted suppliers across the global critical materials market. No single-source bottlenecks. No over-reliance on one customer. Our approach creates resilient supply chains where mines retain control while accessing diverse markets, and buyers gain security through multiple verified sources.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Breaking Single-Source Dependencies</h4>
                  <p className="text-sm text-zinc-600 font-light">We connect buyers with multiple suppliers for each critical material, eliminating dangerous reliance on single sources.</p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Market Diversification</h4>
                  <p className="text-sm text-zinc-600 font-light">Suppliers gain access to multiple buyers across industries—EV manufacturers, semiconductor companies, defense contractors, and more.</p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Preserving Mine Control</h4>
                  <p className="text-sm text-zinc-600 font-light">Mines maintain decision-making authority over their operations and supply chains while we facilitate market access.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-zinc-50 p-8 border border-zinc-200">
                <h4 className="text-lg font-light mb-4">Brokerage Services</h4>
                <ul className="space-y-3 text-sm text-zinc-600">
                  <li className="flex items-start">
                    <Shield className="mr-3 flex-shrink-0 text-zinc-400 mt-0.5" size={16} />
                    <span className="font-light">Multiple verified suppliers for each material—no single-source bottlenecks</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="mr-3 flex-shrink-0 text-zinc-400 mt-0.5" size={16} />
                    <span className="font-light">Diverse buyer connections beyond government stockpile programs</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="mr-3 flex-shrink-0 text-zinc-400 mt-0.5" size={16} />
                    <span className="font-light">MoU structuring and contract negotiation support</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="mr-3 flex-shrink-0 text-zinc-400 mt-0.5" size={16} />
                    <span className="font-light">Real-time market intelligence across multiple sourcing regions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black text-white p-8">
                <div className="text-3xl font-light mb-2">Resilient Networks</div>
                <div className="text-sm text-zinc-400 mb-4">ELIMINATING BOTTLENECKS</div>
                <p className="text-sm text-zinc-300 font-light">
                  When one supplier faces disruption, your alternative sources keep production running. When government programs change, market-driven demand remains stable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Deep Dive */}
      <section id="logistics" className="py-24 px-6 lg:px-12 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-sm text-zinc-400 uppercase tracking-wider mb-6">Quanti Logistics Group</h2>
              <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                Moving critical materials with complete traceability.
              </h3>
              <p className="text-lg text-zinc-300 font-light leading-relaxed mb-8">
                Our specialized freight brokerage handles the complex logistics of transporting rare earth elements, metals, and critical materials from mines to processing centers and manufacturing facilities worldwide—with full chain of custody tracking.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-light mb-2">Global</div>
                  <div className="text-sm text-zinc-500 font-light">Freight network across all continents</div>
                </div>
                <div>
                  <div className="text-3xl font-light mb-2">100%</div>
                  <div className="text-sm text-zinc-500 font-light">End-to-end traceability</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-zinc-800 p-8">
                <h4 className="text-xl font-light mb-6">Logistics Capabilities</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Truck className="mr-4 flex-shrink-0 text-zinc-500 mt-1" size={20} />
                    <div>
                      <div className="font-light mb-1">Mine-to-Processing Transportation</div>
                      <div className="text-sm text-zinc-500 font-light">Coordinating movement from extraction sites to refineries</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Package className="mr-4 flex-shrink-0 text-zinc-500 mt-1" size={20} />
                    <div>
                      <div className="font-light mb-1">Processing-to-Manufacturing</div>
                      <div className="text-sm text-zinc-500 font-light">Delivering refined materials to end manufacturers</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Anchor className="mr-4 flex-shrink-0 text-zinc-500 mt-1" size={20} />
                    <div>
                      <div className="font-light mb-1">International Freight Brokerage</div>
                      <div className="text-sm text-zinc-500 font-light">Managing customs, documentation, and compliance</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="mr-4 flex-shrink-0 text-zinc-500 mt-1" size={20} />
                    <div>
                      <div className="font-light mb-1">Secure Handling Protocols</div>
                      <div className="text-sm text-zinc-500 font-light">Protecting high-value critical materials in transit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Traceability Partnership Section */}
          <div className="border-t border-zinc-800 pt-16">
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-light leading-tight mb-6">
                Complete Supply Chain Traceability
              </h3>
              <p className="text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
                We partner with mines, software companies, data analytics firms, and buyers to trace all materials throughout the entire supply chain—ensuring compliance, transparency, and accountability from source to destination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-zinc-800 p-6 border border-zinc-700">
                <div className="text-lg font-light mb-3">Mines</div>
                <p className="text-sm text-zinc-400 font-light">
                  Source verification and extraction documentation at point of origin
                </p>
              </div>
              <div className="bg-zinc-800 p-6 border border-zinc-700">
                <div className="text-lg font-light mb-3">Software Partners</div>
                <p className="text-sm text-zinc-400 font-light">
                  Digital tracking platforms for real-time material movement and chain of custody
                </p>
              </div>
              <div className="bg-zinc-800 p-6 border border-zinc-700">
                <div className="text-lg font-light mb-3">Data Analytics</div>
                <p className="text-sm text-zinc-400 font-light">
                  Advanced analytics for compliance reporting and supply chain insights
                </p>
              </div>
              <div className="bg-zinc-800 p-6 border border-zinc-700">
                <div className="text-lg font-light mb-3">Buyers</div>
                <p className="text-sm text-zinc-400 font-light">
                  Complete visibility into material provenance and compliance verification
                </p>
              </div>
            </div>

            <div className="mt-12 bg-zinc-800 border border-zinc-700 p-8">
              <h4 className="text-xl font-light mb-4">Why Traceability Matters</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Regulatory Compliance</div>
                  <p className="text-sm text-zinc-300 font-light">Meeting ESG requirements, conflict mineral regulations, and international standards</p>
                </div>
                <div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Supply Chain Integrity</div>
                  <p className="text-sm text-zinc-300 font-light">Preventing fraud, ensuring authenticity, and maintaining quality throughout the chain</p>
                </div>
                <div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Market Access</div>
                  <p className="text-sm text-zinc-300 font-light">Enabling access to premium markets that require verified sustainable sourcing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hedging Deep Dive */}
      <section id="hedging" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Quanti Hedging</h2>
              <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                Risk mitigation strategies designed for mining operations.
              </h3>
              <p className="text-lg text-zinc-600 font-light leading-relaxed mb-8">
                Mining operations face unique risks—from commodity price volatility to currency fluctuations and geopolitical uncertainties. Our specialized hedging division provides sophisticated risk management solutions tailored specifically for the critical materials sector.
              </p>

              <div className="space-y-6">
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Price Risk Hedging</h4>
                  <p className="text-sm text-zinc-600 font-light">Protect mining revenue against commodity price volatility through futures, options, and structured products.</p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Currency Risk Management</h4>
                  <p className="text-sm text-zinc-600 font-light">Mitigate foreign exchange exposure for international operations and cross-border transactions.</p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Custom Hedge Programs</h4>
                  <p className="text-sm text-zinc-600 font-light">Tailored strategies that align with your mine's production schedule, cash flow needs, and risk tolerance.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-black text-white p-8">
                <h4 className="text-xl font-light mb-6">Hedging Solutions for Mines</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <BarChart3 className="mr-4 flex-shrink-0 text-zinc-500 mt-1" size={20} />
                    <div>
                      <div className="font-light mb-1">Commodity Price Protection</div>
                      <div className="text-sm text-zinc-500 font-light">Lock in favorable prices and protect against downside risk</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp className="mr-4 flex-shrink-0 text-zinc-500 mt-1" size={20} />
                    <div>
                      <div className="font-light mb-1">Market Volatility Shields</div>
                      <div className="text-sm text-zinc-500 font-light">Reduce exposure to rapid market swings and price shocks</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="mr-4 flex-shrink-0 text-zinc-500 mt-1" size={20} />
                    <div>
                      <div className="font-light mb-1">FX and Currency Hedging</div>
                      <div className="text-sm text-zinc-500 font-light">Manage currency risk for global operations</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="mr-4 flex-shrink-0 text-zinc-500 mt-1" size={20} />
                    <div>
                      <div className="font-light mb-1">Production-Linked Strategies</div>
                      <div className="text-sm text-zinc-500 font-light">Hedges aligned with your extraction and delivery schedule</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 p-8">
                <h4 className="text-lg font-light mb-4">Risk Management Instruments</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium mb-1">Futures Contracts</div>
                    <div className="text-zinc-600 font-light">Standard exchange-traded derivatives</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Options Strategies</div>
                    <div className="text-zinc-600 font-light">Calls, puts, collars, and spreads</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Forward Agreements</div>
                    <div className="text-zinc-600 font-light">Customized OTC contracts</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Swaps</div>
                    <div className="text-zinc-600 font-light">Price and currency swaps</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-zinc-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-4xl font-light mb-3">Stability</div>
                <p className="text-sm text-zinc-600 font-light">Predictable cash flows even in volatile markets</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light mb-3">Flexibility</div>
                <p className="text-sm text-zinc-600 font-light">Strategies that adapt to changing market conditions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light mb-3">Expertise</div>
                <p className="text-sm text-zinc-600 font-light">Specialized knowledge of critical materials markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Africa Deep Dive */}
      <section id="africa" className="py-24 px-6 lg:px-12 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="order-2 lg:order-1">
              <div className="bg-white border border-zinc-200 p-8">
                <h4 className="text-xl font-light mb-6">Regional Expertise</h4>
                <div className="space-y-4 mb-8">
                  <div>
                    <div className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Focus Regions</div>
                    <div className="font-light">Democratic Republic of Congo, South Africa, Zimbabwe, Tanzania, Namibia, and emerging mining regions</div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Key Materials</div>
                    <div className="font-light">Cobalt, copper, tantalum, rare earths, lithium, platinum group metals</div>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-zinc-600">
                  <li className="flex items-start">
                    <span className="text-zinc-400 mr-2">•</span>
                    <span className="font-light">Local partnerships with African mining operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-400 mr-2">•</span>
                    <span className="font-light">Cultural understanding and language capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-400 mr-2">•</span>
                    <span className="font-light">Regulatory compliance and export facilitation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-400 mr-2">•</span>
                    <span className="font-light">Sustainable sourcing and community development</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Quanti Africa</h2>
              <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                Connecting Africa's mineral wealth to global markets.
              </h3>
              <p className="text-lg text-zinc-600 font-light leading-relaxed mb-8">
                Africa holds some of the world's richest deposits of critical materials. Quanti Africa bridges the gap between African suppliers and international buyers with deep regional expertise, local relationships, and a commitment to sustainable development.
              </p>

              <div className="space-y-6">
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Local Market Knowledge</h4>
                  <p className="text-sm text-zinc-600 font-light">On-the-ground presence and relationships in key mining regions across the continent.</p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Sustainable Practices</h4>
                  <p className="text-sm text-zinc-600 font-light">Supporting responsible mining and community development initiatives.</p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Export Facilitation</h4>
                  <p className="text-sm text-zinc-600 font-light">Navigating complex regulatory environments and international trade requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Materials Section */}
      <section id="materials" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Critical Materials</h2>
          <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8 max-w-3xl">
            Essential elements for technology, defense, and clean energy.
          </h3>
          <p className="text-xl text-zinc-600 font-light leading-relaxed max-w-3xl mb-16">
            We specialize in materials designated as critical by major economies due to their economic importance and supply risk.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-200">
            {[
              { name: 'Rare Earth Elements', subtitle: 'Nd, Pr, Dy, Tb, and others' },
              { name: 'Copper', subtitle: 'High-grade and specialty' },
              { name: 'Tungsten', subtitle: 'APT, concentrate, alloys' },
              { name: 'Titanium', subtitle: 'Sponge, rutile, alloys' },
              { name: 'Gallium', subtitle: 'High-purity semiconductor' },
              { name: 'Germanium', subtitle: 'Optical and electronic' },
              { name: 'Antimony', subtitle: 'Metal and compounds' },
              { name: 'Lithium', subtitle: 'Carbonate, hydroxide, metal' },
              { name: 'Cobalt', subtitle: 'Metal and compounds' },
              { name: 'Nickel', subtitle: 'Class 1 and sulfate' },
              { name: 'Graphite', subtitle: 'Natural and synthetic' },
              { name: 'Tantalum', subtitle: 'Concentrate and powder' }
            ].map((material, index) => (
              <div
                key={index}
                className="bg-white p-6 hover:bg-zinc-50 transition-colors group cursor-default"
              >
                <div className="text-base font-light mb-1 group-hover:text-zinc-600 transition-colors">
                  {material.name}
                </div>
                <div className="text-xs text-zinc-500">{material.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market-Driven Demand Section */}
      <section className="py-24 px-6 lg:px-12 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Creating Sustainable Demand</h2>
              <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                Beyond government programs: Building market-driven demand for critical materials.
              </h3>
              <p className="text-lg text-zinc-600 font-light leading-relaxed mb-8">
                Government stockpile programs and subsidies are important, but they're not enough. Mines need genuine commercial demand from manufacturers who are actually using these materials in production. We create those connections.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 p-8">
              <h4 className="text-xl font-light mb-6">Our Buyer Network Includes:</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium mb-1">Electric Vehicle & Battery Manufacturers</div>
                    <div className="text-zinc-600 font-light">Lithium, cobalt, nickel, graphite, rare earths for motors and batteries</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium mb-1">Semiconductor & Electronics Companies</div>
                    <div className="text-zinc-600 font-light">Gallium, germanium, rare earths for chips and devices</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium mb-1">Defense & Aerospace Contractors</div>
                    <div className="text-zinc-600 font-light">Tungsten, titanium, rare earths for advanced systems</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium mb-1">Renewable Energy Manufacturers</div>
                    <div className="text-zinc-600 font-light">Rare earths for wind turbines, solar panel components</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium mb-1">Industrial Manufacturing</div>
                    <div className="text-zinc-600 font-light">Copper, antimony, titanium for specialized applications</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-200">
                <div className="text-sm text-zinc-600 font-light">
                  <strong className="text-black font-medium">The Result:</strong> Mines develop sustainable revenue streams from actual production demand, not just strategic reserves or government mandates. This creates long-term stability and real market validation for critical materials operations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-24 px-6 lg:px-12 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Latest Insights</h2>
            <h3 className="text-4xl font-light">Market Intelligence & Industry Analysis</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                date: 'November 25, 2024',
                source: 'Quanti Africa',
                title: 'The Strategic Importance of African Cobalt in the EV Supply Chain'
              },
              {
                date: 'November 18, 2024',
                source: 'Quanti Logistics',
                title: 'Best Practices for Transporting High-Value Critical Materials'
              },
              {
                date: 'November 10, 2024',
                source: 'Market Analysis',
                title: 'Rare Earth Element Pricing Trends and Supply Dynamics'
              }
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="group bg-white border border-zinc-200 hover:border-zinc-400 transition-colors p-6"
              >
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">{item.source}</div>
                <div className="text-sm text-zinc-400 mb-4">{item.date}</div>
                <h4 className="text-xl font-light group-hover:text-zinc-600 transition-colors leading-snug">
                  {item.title}
                </h4>
                <div className="mt-6 text-sm flex items-center group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
            Ready to connect with our global platform?
          </h2>
          <p className="text-xl text-zinc-600 font-light mb-12">
            Whether you need brokerage services, logistics solutions, or access to African markets, our integrated platform can support your critical materials needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-black text-white px-8 py-4 hover:bg-zinc-800 transition-colors group"
            >
              <span className="mr-2">Contact Our Team</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center border-2 border-zinc-300 text-black px-8 py-4 hover:border-zinc-400 transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-200 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-light tracking-tight">QUANTI</span>
                <QuantiSymbol className="h-5 w-5" />
                <span className="text-xl font-light tracking-tight">CAPITAL</span>
              </div>
              <p className="text-sm text-zinc-600 font-light mb-6">
                Global infrastructure for critical materials trade through integrated brokerage, logistics, hedging, and regional expertise.
              </p>
              <div className="text-sm text-zinc-600 font-light">
                <div>info@quanticapital.org</div>
                <div className="mt-1">Global Operations</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-4">Quanti Capital</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li><a href="#" className="hover:text-black transition-colors">Brokerage Services</a></li>
                <li><a href="#" className="hover:text-black transition-colors">MoU Structuring</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Market Intelligence</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Buyer-Seller Matching</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4">Quanti Logistics</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li><a href="#" className="hover:text-black transition-colors">Freight Brokerage</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Supply Chain Traceability</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Mine Transportation</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Processing & Manufacturing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4">Quanti Hedging</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li><a href="#" className="hover:text-black transition-colors">Price Risk Management</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Currency Hedging</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Commodity Derivatives</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Custom Programs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-4">Quanti Africa</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li><a href="#" className="hover:text-black transition-colors">Regional Operations</a></li>
                <li><a href="#" className="hover:text-black transition-colors">African Markets</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Local Partnerships</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Sustainable Sourcing</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
            <p>&copy; 2024 Quanti Capital. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-black transition-colors">Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

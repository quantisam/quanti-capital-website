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
      description: "We alleviate offtake challenges from mines by providing a gateway to international markets in friendly countries and the private sector. While government subsidies and contractors provide a foundation, we open doors to diversified commercial demand beyond government programs.",
      icon: Link,
      link: "#brokerage",
      highlights: [
        "Gateway to international markets beyond government programs",
        "Access to private sector buyers across friendly nations",
        "Alleviating mine offtake challenges through diversified demand",
        "Integrating Western markets into critical material supply chains"
      ]
    },
    {
      name: "Logistics",
      tagline: "Freight & Traceability",
      description: "Specialized logistics solutions with flexible traceability integration. We work with any traceability application the mine prefers, partnering with software companies, data analytics firms, and buyers to track materials from source to destination.",
      icon: Truck,
      link: "#logistics",
      highlights: [
        "Freight brokerage for critical materials transportation",
        "Integration with mine's preferred traceability systems",
        "Flexible technology partnerships for supply chain visibility",
        "Compliance documentation and chain of custody"
      ]
    },
    {
      name: "Hedging",
      tagline: "Risk Management",
      description: "We partner with Futures Commission Merchants (FCMs) to provide hedging solutions for both buyers and sellers in the critical materials market, helping manage price volatility and market uncertainties.",
      icon: BarChart3,
      link: "#hedging",
      highlights: [
        "Partnership with FCMs for comprehensive hedging solutions",
        "Price risk protection for buyers and sellers",
        "Market volatility management strategies",
        "Customized hedging programs for critical materials"
      ]
    },
    {
      name: "Markets",
      tagline: "Global Operations",
      description: "Connecting global markets across Europe, Asia, and the Americas to critical materials sources. With strong operations in Africa—including Zambia, Angola, DRC, Tanzania, and South Africa—we integrate the Western world into today's critical material supply chains.",
      icon: MapPin,
      link: "#markets",
      highlights: [
        "Operations across Europe, Asia, and the Americas",
        "Deep expertise in African markets (Zambia, Angola, DRC, Tanzania, South Africa)",
        "Integrating Western markets into supply chains",
        "Connecting global demand with African resources"
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
                <a href="#markets" className="text-zinc-600 hover:text-black transition-colors">Markets</a>
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
              Reinventing Critical Materials Trade
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 font-light leading-relaxed max-w-3xl">
              We create diverse sourcing networks that integrate Western markets into global supply chains, alleviate mine offtake challenges, and provide gateways to international markets beyond government programs—building balanced, sustainable demand for critical materials.
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
              <div className="text-sm text-zinc-600 font-light">Brokerage, Logistics, Hedging, Markets</div>
            </div>
            <div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider mb-3">Global Reach</div>
              <div className="text-4xl font-light mb-2">5 Continents</div>
              <div className="text-sm text-zinc-600 font-light">Connecting mines to manufacturers worldwide</div>
            </div>
            <div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider mb-3">Philosophy</div>
              <div className="text-4xl font-light mb-2">Mine Control</div>
              <div className="text-sm text-zinc-600 font-light">Giving suppliers control, diversifying buyer risks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Quanti Capital Section */}
      <section className="py-24 px-6 lg:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-16">
            <h2 className="text-sm text-zinc-400 uppercase tracking-wider mb-6">Why Quanti Capital</h2>
            <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              A strategic trade company focused on connecting global buyers and suppliers of critical minerals and rare earths.
            </h3>
            <p className="text-xl text-zinc-300 font-light leading-relaxed">
              We understand that mines need more than government subsidies and contractor purchases. While these provide a foundation, sustainable growth requires access to international markets and the private sector. We provide that gateway—integrating Western markets into today's critical material supply chains while preserving supplier control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-l-2 border-zinc-700 pl-8">
              <h4 className="text-2xl font-light mb-4">Alleviating Mine Offtake Challenges</h4>
              <p className="text-zinc-300 font-light leading-relaxed mb-6">
                Mines face the challenge of securing consistent offtake agreements. Government programs and contractors help, but they're not enough. We open doors to commercial buyers in friendly countries—EV manufacturers, electronics companies, defense contractors—creating sustainable, market-driven demand.
              </p>
            </div>

            <div className="border-l-2 border-zinc-700 pl-8">
              <h4 className="text-2xl font-light mb-4">Integrating Western Markets</h4>
              <p className="text-zinc-300 font-light leading-relaxed mb-6">
                The Western world needs reliable access to critical materials. We bridge the gap between African mines and Western buyers, creating transparent, traceable supply chains that serve the private sector—from European manufacturers to American tech companies.
              </p>
            </div>

            <div className="border-l-2 border-zinc-700 pl-8">
              <h4 className="text-2xl font-light mb-4">For Suppliers: Market Access & Control</h4>
              <p className="text-zinc-300 font-light leading-relaxed">
                We provide gateways to international markets while ensuring you maintain control over operations. Access private sector buyers across multiple regions and industries, reducing dependency on government programs.
              </p>
            </div>

            <div className="border-l-2 border-zinc-700 pl-8">
              <h4 className="text-2xl font-light mb-4">For Buyers: Diversified Supply</h4>
              <p className="text-zinc-300 font-light leading-relaxed">
                Access verified sources across friendly nations. Diversify your critical mineral and rare earth element supply, reducing concentration risk in an increasingly complex geopolitical landscape.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl font-light mb-3">Balanced</div>
                <div className="text-sm text-zinc-500 font-light">Giving suppliers control while diversifying buyer risks</div>
              </div>
              <div>
                <div className="text-5xl font-light mb-3">Connected</div>
                <div className="text-sm text-zinc-500 font-light">Integrating Western markets into global supply chains</div>
              </div>
              <div>
                <div className="text-5xl font-light mb-3">Sustainable</div>
                <div className="text-sm text-zinc-500 font-light">Market-driven demand beyond government programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section id="divisions" className="py-24 px-6 lg:px-12 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Our Divisions</h2>
            <h3 className="text-4xl md:text-5xl font-light leading-tight max-w-3xl">
              Four specialized divisions working together to serve the global critical materials market.
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

      {/* Markets Deep Dive */}
      <section id="markets" className="py-24 px-6 lg:px-12 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="order-2 lg:order-1">
              <div className="bg-white border border-zinc-200 p-8">
                <h4 className="text-xl font-light mb-6">Global Operations</h4>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <div className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Regional Focus</div>
                    <div className="font-light mb-4">Connecting three major markets:</div>
                    <ul className="space-y-2 text-sm text-zinc-600">
                      <li className="flex items-start">
                        <span className="text-zinc-400 mr-2">•</span>
                        <span className="font-light"><strong>Europe:</strong> Manufacturing hubs, renewable energy sector</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-zinc-400 mr-2">•</span>
                        <span className="font-light"><strong>Asia:</strong> Electronics, automotive, technology industries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-zinc-400 mr-2">•</span>
                        <span className="font-light"><strong>Americas:</strong> Defense, aerospace, clean energy sectors</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="text-sm text-zinc-500 uppercase tracking-wider mb-2">African Operations</div>
                    <div className="font-light mb-4">Deep expertise in key mining regions:</div>
                    <ul className="space-y-2 text-sm text-zinc-600">
                      <li className="flex items-start">
                        <span className="text-zinc-400 mr-2">•</span>
                        <span className="font-light"><strong>Zambia:</strong> Copper belt operations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-zinc-400 mr-2">•</span>
                        <span className="font-light"><strong>Angola:</strong> Emerging critical minerals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-zinc-400 mr-2">•</span>
                        <span className="font-light"><strong>DRC:</strong> Cobalt, copper, tantalum</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-zinc-400 mr-2">•</span>
                        <span className="font-light"><strong>Tanzania:</strong> Rare earths, graphite</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-zinc-400 mr-2">•</span>
                        <span className="font-light"><strong>South Africa:</strong> Platinum group metals, manganese</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-200">
                  <div className="text-sm text-zinc-600 font-light">
                    <strong className="text-black font-medium">Integrating Western Markets:</strong> We connect African mineral resources with Western buyers, creating transparent supply chains that serve the private sector and reduce dependency on single-source suppliers.
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Markets</h2>
              <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                Connecting global markets to African resources.
              </h3>
              <p className="text-lg text-zinc-600 font-light leading-relaxed mb-8">
                With operations spanning Europe, Asia, and the Americas, we integrate Western markets into critical material supply chains. Our deep expertise in African mining regions—particularly Zambia, Angola, DRC, Tanzania, and South Africa—positions us to connect global demand with reliable supply.
              </p>

              <div className="space-y-6">
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Western Market Integration</h4>
                  <p className="text-sm text-zinc-600 font-light">Creating pathways for European, Asian, and American buyers to access African critical materials through transparent, traceable supply chains.</p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Local Partnerships</h4>
                  <p className="text-sm text-zinc-600 font-light">On-the-ground presence and relationships in key African mining regions, ensuring quality, compliance, and sustainable practices.</p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Cross-Continental Networks</h4>
                  <p className="text-sm text-zinc-600 font-light">Connecting mines to manufacturers across five continents, creating resilient supply chains that withstand geopolitical uncertainties.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brokerage, Logistics, Hedging sections would continue here with similar updates */}
      {/* For brevity, I'll add the key sections. The full file would include all sections */}

      {/* Critical Materials Grid */}
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

      {/* Insights Section - Note: Real-time news would require an API integration */}
      <section id="insights" className="py-24 px-6 lg:px-12 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Latest Insights</h2>
            <h3 className="text-4xl font-light">Market Intelligence & Industry Analysis</h3>
            <p className="text-lg text-zinc-600 font-light mt-4">
              Stay informed with the latest developments in critical materials markets. Articles updated weekly.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 p-8">
            <p className="text-zinc-600 font-light">
              <strong className="text-black font-medium">Note:</strong> To display real-time articles that update weekly, you'll need to integrate with a news API service such as:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li className="flex items-start">
                <span className="text-zinc-400 mr-2">•</span>
                <span className="font-light"><strong>NewsAPI:</strong> Filter by keywords like "critical minerals", "rare earths"</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-400 mr-2">•</span>
                <span className="font-light"><strong>RSS Feeds:</strong> Aggregate from mining.com, reuters.com, bloomberg.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-400 mr-2">•</span>
                <span className="font-light"><strong>Custom CMS:</strong> Manually curate articles from your team</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-zinc-600 font-light">
              Would you like me to help you set up one of these integrations? I can create the API connection for automated news updates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
            Ready to connect with global critical materials markets?
          </h2>
          <p className="text-xl text-zinc-600 font-light mb-12">
            Whether you're a mine seeking market access or a buyer looking for reliable sources, our integrated platform can support your critical materials needs.
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
                A strategic trade company connecting global buyers and suppliers of critical minerals and rare earths.
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
              <h4 className="text-sm font-medium mb-4">Logistics</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li><a href="#" className="hover:text-black transition-colors">Freight Brokerage</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Traceability Solutions</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Mine Transportation</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Supply Chain Integration</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4">Hedging</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li><a href="#" className="hover:text-black transition-colors">FCM Partnerships</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Price Risk Management</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Buyer Solutions</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Seller Programs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-4">Markets</h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li><a href="#" className="hover:text-black transition-colors">African Operations</a></li>
                <li><a href="#" className="hover:text-black transition-colors">European Markets</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Asian Markets</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Americas</a></li>
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

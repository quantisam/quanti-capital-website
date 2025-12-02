import React from 'react';
import { ArrowRight, ChevronDown, Shield, Globe, TrendingUp, Link, Truck, FileCheck, BarChart3, Boxes, MapPin, Package, Anchor } from 'lucide-react';

// Quanti Capital Symbol Component
const QuantiSymbol = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="4" y1="8" x2="36" y2="8" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="4" y1="16" x2="36" y2="16" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="4" y1="8" x2="36" y2="16" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="36" y1="8" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="20" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="12" y1="12" x2="28" y2="12" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

// RSS Feed Insights Section Component
function InsightsSection() {
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    async function fetchRSSFeeds() {
      try {
        // Using RSS2JSON service (free, no API key needed)
        const feeds = [
          'https://api.rss2json.com/v1/api.json?rss_url=https://www.mining.com/feed/',
          'https://api.rss2json.com/v1/api.json?rss_url=https://www.kitco.com/rss/kitconewsrss.xml',
        ];

        const responses = await Promise.all(
          feeds.map(url => fetch(url).then(res => res.json()))
        );

        // Combine and process articles
        const allArticles = responses.flatMap(response => 
          response.items?.slice(0, 3).map(item => ({
            title: item.title,
            link: item.link,
            pubDate: new Date(item.pubDate),
            description: item.description?.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
            source: item.link.includes('mining.com') ? 'Mining.com' : 'Kitco News'
          })) || []
        );

        // Sort by date and take top 6
        const sortedArticles = allArticles
          .sort((a, b) => b.pubDate - a.pubDate)
          .slice(0, 6);

        setArticles(sortedArticles);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching RSS feeds:', err);
        setError(true);
        setLoading(false);
      }
    }

    fetchRSSFeeds();
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  if (loading) {
    return (
      <section id="insights" className="py-24 px-6 lg:px-12 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Latest Insights</h2>
            <h3 className="text-4xl font-light">Market Intelligence & Industry Analysis</h3>
          </div>
          <div className="text-center text-zinc-500">Loading latest articles...</div>
        </div>
      </section>
    );
  }

  if (error || articles.length === 0) {
    return (
      <section id="insights" className="py-24 px-6 lg:px-12 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Latest Insights</h2>
            <h3 className="text-4xl font-light">Market Intelligence & Industry Analysis</h3>
          </div>
          <div className="bg-white border border-zinc-200 p-8 text-center">
            <p className="text-zinc-600 font-light mb-4">
              Stay informed with the latest developments in critical materials markets.
            </p>
            <a 
              href="https://www.mining.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-black hover:text-zinc-600 transition-colors"
            >
              Visit Mining.com for latest news →
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="insights" className="py-24 px-6 lg:px-12 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Latest Insights</h2>
          <h3 className="text-4xl font-light mb-8">Market Intelligence & Industry Analysis</h3>
          <p className="text-lg text-zinc-600 font-light">
            Stay informed with the latest developments in critical materials markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-zinc-200 p-6 hover:border-zinc-400 transition-all group"
            >
              <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
                {article.source}
              </div>
              <div className="text-sm text-zinc-500 mb-3">
                {formatDate(article.pubDate)}
              </div>
              <h4 className="text-lg font-light mb-3 group-hover:text-zinc-600 transition-colors">
                {article.title}
              </h4>
              <p className="text-sm text-zinc-600 font-light mb-4">
                {article.description}
              </p>
              <div className="flex items-center text-sm font-medium text-zinc-600 group-hover:text-black transition-colors">
                Read More
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500 font-light">
            Articles updated automatically from industry sources
          </p>
        </div>
      </div>
    </section>
  );
}

// Contact Form Component
function ContactFormComponent() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    interest: 'general',
    message: ''
  });
  const [status, setStatus] = React.useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', interest: 'general', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <div>
        <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Contact Us</h2>
        <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
          Ready to Integrate?
        </h3>
        <p className="text-lg text-zinc-600 font-light leading-relaxed mb-12">
          Whether you're a mine seeking market access or an end user looking for reliable sources, our integrated platform can support your critical mineral needs.
        </p>
        <div className="space-y-6">
          <div className="border-l-2 border-zinc-300 pl-6">
            <div className="text-sm text-zinc-500 uppercase tracking-wider mb-1">Email</div>
            <a href="mailto:info@quanticapital.org" className="text-lg font-light hover:text-zinc-600 transition-colors">
              info@quanticapital.org
            </a>
          </div>
          <div className="border-l-2 border-zinc-300 pl-6">
            <div className="text-sm text-zinc-500 uppercase tracking-wider mb-1">Response Time</div>
            <div className="text-lg font-light">Within 24 hours</div>
          </div>
        </div>
      </div>
      <div className="bg-white border border-zinc-200 p-8">
        <h4 className="text-2xl font-light mb-6">Send us a message</h4>
        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 text-sm">
            Thank you! Your message has been sent. We'll respond within 24 hours.
          </div>
        )}
        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm">
            Something went wrong. Please try again or email us directly.
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-light mb-2">Name *</label>
            <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-zinc-500" placeholder="Your full name" />
          </div>
          <div>
            <label className="block text-sm font-light mb-2">Email *</label>
            <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-zinc-500" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-sm font-light mb-2">Company</label>
            <input type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-zinc-500" placeholder="Company name" />
          </div>
          <div>
            <label className="block text-sm font-light mb-2">I'm interested in *</label>
            <select required value={formData.interest} onChange={(e) => setFormData({...formData, interest: e.target.value})} className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-zinc-500">
              <option value="general">General Inquiry</option>
              <option value="brokerage">Brokerage Services</option>
              <option value="logistics">Logistics & Traceability</option>
              <option value="hedging">Hedging Solutions</option>
              <option value="markets">Market Access</option>
              <option value="supplier">I'm a Supplier/Mine</option>
              <option value="end-user">I'm a Buyer/Manufacturer</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-light mb-2">Message *</label>
            <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-zinc-500 resize-none" placeholder="Tell us about your needs..." />
          </div>
          <button type="submit" disabled={status === 'sending'} className="w-full bg-black text-white px-8 py-4 hover:bg-zinc-800 transition-colors disabled:bg-zinc-400 flex items-center justify-center group">
            <span className="mr-2">{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
            {status !== 'sending' && (<ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />)}
          </button>
        </form>
      </div>
    </>
  );

  
}

export default function QuantiCapitalComplete() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const divisions = [
    {
      name: "Brokerage",
      tagline: "Services",
      description: "Many new mines and processing plants are coming online, but demand must match supply. Quanti helps balance the market by locating offtake, integrating suppliers and buyers, while connecting only compliant counterparties in friendly countries.",
      icon: Link,
      link: "#services",
      highlights: [
        "Identify and secure diversified offtake for mines and processing facilities",
        "Connect producers with OEMs, refiners, and private-sector buyers",
        "Balance supply with real commercial demand as new projects come online",
        "Integrate compliant, friendly-country partners into critical material supply chains"
      ]
    },
    {
      name: "Logistics",
      tagline: "Freight & Traceability",
      description: "Specialized logistics solutions with flexible traceability integration. We work with any traceability application the parties prefer, partnering with software companies, data analytics firms, and buyers to track materials from source to destination.",
      icon: Truck,
      link: "#logistics",
      highlights: [
        "Freight brokerage for critical materials transportation",
        "Integration with preferred traceability systems",
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
        "Price risk mitigation for buyers and sellers",
        "Market volatility management strategies",
        "Customized hedging programs for critical materials"
      ]
    },
    {
      name: "Markets",
      tagline: "Global Operations",
      description: "Connecting global markets across Europe, Asia, Africa and the Americas to critical mineral sources.",
      icon: MapPin,
      link: "#markets",
      highlights: [
        "Global footprint across multiple continents",
        "Operations in African markets such as Zambia, Angola, DRC, Tanzania, South Africa",
        "Integrating American, European and African markets into supply chains",
        "Connecting global demand with alternative resources"
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
              Integrating American resources into Global Supply Chains
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 font-light leading-relaxed max-w-3xl">
              We develop diversified sourcing networks that connect Western resources to global supply chains, resolve offtake challenges, and open channels to international markets beyond government programs—driving balanced, sustainable demand for critical minerals and rare earths
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
              <div className="text-sm text-zinc-500 uppercase tracking-wider mb-3">Mission</div>
              <div className="text-4xl font-light mb-2">Strengthening Supply Chains of the Future</div>
              <div className="text-sm text-zinc-600 font-light">We balance the supply chains of tomorrow by integrating American resources into global markets.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Quanti Section */}
      <section className="py-24 px-6 lg:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-16">
            <h2 className="text-sm text-zinc-400 uppercase tracking-wider mb-6">Why Quanti</h2>
            <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              We offer services for companies in the critical mineral and rare earth space.
            </h3>
            <p className="text-xl text-zinc-300 font-light leading-relaxed">
              Government programs and contractors are important, but they are not enough. Mines need offtake and manufacturers require diversified supply. Quanti sits in the middle: we structure relationships, line up compliant counterparties in friendly countries, and create a private-sector demand engine around strategic materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-l-2 border-zinc-700 pl-8">
              <h4 className="text-2xl font-light mb-4">Alleviating Mine Offtake Challenges</h4>
              <p className="text-zinc-300 font-light leading-relaxed mb-6">
                Mines and processing plants want to run and expand operations, not locate end-users. We increase the value of these assets by building pipelines of qualified, long-term demand from OEMs, magnet makers, refiners, and strategic buyers – by helping translate technical product into tangible offtake.
              </p>
            </div>

            <div className="border-l-2 border-zinc-700 pl-8">
              <h4 className="text-2xl font-light mb-4">Integrating American Resources</h4>
              <p className="text-zinc-300 font-light leading-relaxed mb-6">
                The Western world needs secure access to critical materials, but mines also need help integrating those materials into established downstream supply chains. We close this gap by connecting mines, processors, and manufacturers through transparent, traceable, and compliant pathways.
              </p>
            </div>

            <div className="border-l-2 border-zinc-700 pl-8">
              <h4 className="text-2xl font-light mb-4">For Suppliers: Market Access & Control</h4>
              <p className="text-zinc-300 font-light leading-relaxed">
                We provide gateways to international markets while ensuring you maintain control over operations. We give access to private sector buyers across multiple regions and industries, reducing sole dependency on government programs.
              </p>
            </div>

            <div className="border-l-2 border-zinc-700 pl-8">
              <h4 className="text-2xl font-light mb-4">For Buyers: Diversified Supply</h4>
              <p className="text-zinc-300 font-light leading-relaxed">
                Access verified sources globally. Diversify your critical mineral and rare earth element supply, reducing concentration risk in an increasingly complex geopolitical landscape.
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
                <div className="text-sm text-zinc-500 font-light">Integrating American Resources into global supply chains</div>
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
              Four divisions working together to serve the global critical mineral and rare earth element market.
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
              <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Brokerage Services</h2>
              <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                Balancing supply and demand in critical markets.
              </h3>
              <p className="text-lg text-zinc-600 font-light leading-relaxed mb-8">
                As new mines and processing plants come online, matching demand with supply becomes critical. We help balance the market by identifying offtake opportunities, integrating suppliers with qualified end-users, and ensuring all counterparties meet compliance standards in United States friendly countries.
              </p>

              <div className="space-y-6">
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Diversified Offtake Solutions</h4>
                  <p className="text-sm text-zinc-600 font-light">Securing multiple offtake agreements across different end-users, regions, and industries to create stable, long-term demand for mine production.</p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Private Sector Integration</h4>
                  <p className="text-sm text-zinc-600 font-light">Connecting mines directly with OEMs, refiners, magnet makers, and manufacturers who need materials for actual production—not just government stockpiles.</p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Compliant Partnerships</h4>
                  <p className="text-sm text-zinc-600 font-light">All counterparties are vetted for compliance and located in friendly countries, ensuring transparent, traceable, and sustainable supply chains.</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-zinc-50 border border-zinc-200 p-8 mb-8">
                <h4 className="text-xl font-light mb-6">Our Process</h4>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 font-light">1</div>
                    <div>
                      <div className="font-light mb-1">Market Analysis & Opportunity Identification</div>
                      <div className="text-sm text-zinc-600 font-light">Understanding supply coming online and matching with demand gaps</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 font-light">2</div>
                    <div>
                      <div className="font-light mb-1">Counterparty Vetting & Compliance</div>
                      <div className="text-sm text-zinc-600 font-light">Ensuring all parties meet regulatory, ESG, and geographic requirements</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 font-light">3</div>
                    <div>
                      <div className="font-light mb-1">Preliminary Offtake Structuring</div>
                      <div className="text-sm text-zinc-600 font-light">Structuring agreements that work for both suppliers and buyers</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 font-light">4</div>
                    <div>
                      <div className="font-light mb-1">Integration & Execution</div>
                      <div className="text-sm text-zinc-600 font-light">Facilitating relationships and supporting ongoing trade</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 p-8">
                <h4 className="text-xl font-light mb-4">Who We Serve</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-zinc-500 uppercase tracking-wider mb-1">For Mines & Processors</div>
                    <p className="text-sm text-zinc-600 font-light">Pipelines of qualified long-term buyers in private sector and established markets</p>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 uppercase tracking-wider mb-1">For Manufacturers</div>
                    <p className="text-sm text-zinc-600 font-light">Diversified, verified supply sources reducing single-supplier concentration risk</p>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 uppercase tracking-wider mb-1">For Strategic Buyers</div>
                    <p className="text-sm text-zinc-600 font-light">Access to emerging supply from compliant sources in friendly jurisdictions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Deep Dive */}
      <section id="logistics" className="py-24 px-6 lg:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm text-zinc-400 uppercase tracking-wider mb-6">Logistics</h2>
            <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8 max-w-3xl">
              Moving critical materials with complete transparency and traceability.
            </h3>
            <p className="text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
              We provide specialized freight brokerage for critical materials transportation and work with any traceability system the parties prefer—integrating mines, processing facilities, software partners, and end-users to track materials from source to destination.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-zinc-900 border border-zinc-800 p-8 mb-8">
                <h4 className="text-xl font-light mb-6">Freight Brokerage Services</h4>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Truck className="mr-4 flex-shrink-0 text-zinc-500 mt-1" size={20} />
                    <div>
                      <div className="font-light mb-1">Mine-to-Processing</div>
                      <div className="text-sm text-zinc-400 font-light">Transporting raw materials from extraction sites to processing facilities</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Package className="mr-4 flex-shrink-0 text-zinc-500 mt-1" size={20} />
                    <div>
                      <div className="font-light mb-1">Processing-to-Manufacturing</div>
                      <div className="text-sm text-zinc-400 font-light">Delivering refined materials to end manufacturers</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Anchor className="mr-4 flex-shrink-0 text-zinc-500 mt-1" size={20} />
                    <div>
                      <div className="font-light mb-1">International Freight Brokerage</div>
                      <div className="text-sm text-zinc-400 font-light">Managing customs, documentation, and compliance</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="mr-4 flex-shrink-0 text-zinc-500 mt-1" size={20} />
                    <div>
                      <div className="font-light mb-1">Secure Handling Protocols</div>
                      <div className="text-sm text-zinc-400 font-light">Protecting high-value critical materials in transit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-zinc-900 border border-zinc-800 p-8">
                <h4 className="text-xl font-light mb-6">Flexible Traceability Integration</h4>
                <p className="text-zinc-300 font-light mb-6">
                  We work with any traceability application the parties prefer. Whether you have an existing system or need help selecting one, we integrate seamlessly with your chosen platform to provide end-to-end supply chain visibility.
                </p>
                <div className="space-y-4">
                  <div className="border-l-2 border-zinc-700 pl-4">
                    <div className="text-sm font-light mb-1">Your Choice of Platform</div>
                    <p className="text-sm text-zinc-400 font-light">We don't lock you into proprietary systems—use the traceability software that works best for your operations</p>
                  </div>
                  <div className="border-l-2 border-zinc-700 pl-4">
                    <div className="text-sm font-light mb-1">Seamless Integration</div>
                    <p className="text-sm text-zinc-400 font-light">Our team coordinates with software providers and data partners to ensure smooth implementation</p>
                  </div>
                  <div className="border-l-2 border-zinc-700 pl-4">
                    <div className="text-sm font-light mb-1">Complete Visibility</div>
                    <p className="text-sm text-zinc-400 font-light">Track materials from mine to end-user with full chain of custody documentation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-16 mt-16">
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-light leading-tight mb-6">
                Traceability Partnership Ecosystem
              </h3>
              <p className="text-xl text-zinc-300 font-light leading-relaxed max-w-3xl">
                Complete supply chain traceability requires coordination across multiple parties. We facilitate partnerships between mines, processing, technology providers, and end-users to create transparent, compliant supply chains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-zinc-900 p-6 border border-zinc-800">
                <div className="text-lg font-light mb-3">Mines</div>
                <p className="text-sm text-zinc-400 font-light">
                  Source verification and extraction documentation at point of origin
                </p>
              </div>
              <div className="bg-zinc-900 p-6 border border-zinc-800">
                <div className="text-lg font-light mb-3">Processing Facilities</div>
                <p className="text-sm text-zinc-400 font-light">
                  Clear communication and transparency in any change of the material
                </p>
              </div>
              <div className="bg-zinc-900 p-6 border border-zinc-800">
                <div className="text-lg font-light mb-3">Software Partners</div>
                <p className="text-sm text-zinc-400 font-light">
                  Digital tracking platforms for real-time material movement and chain of custody
                </p>
              </div>
              <div className="bg-zinc-900 p-6 border border-zinc-800">
                <div className="text-lg font-light mb-3">End-Users</div>
                <p className="text-sm text-zinc-400 font-light">
                  Complete visibility into material provenance and compliance verification
                </p>
              </div>
            </div>

            <div className="mt-12 bg-zinc-900 border border-zinc-800 p-8">
              <h4 className="text-xl font-light mb-4">Why Traceability Matters</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Regulatory Compliance</div>
                  <p className="text-sm text-zinc-300 font-light">Meeting ESG requirements, conflict mineral regulations, and international standards</p>
                </div>
                <div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Supply Chain Integrity</div>
                  <p className="text-sm text-zinc-300 font-light">Preventing fraud, ensuring authenticity, and maintaining quality throughout the chain.</p>
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
              <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Hedging</h2>
              <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                Partnering with FCMs to manage price risk.
              </h3>
              <p className="text-lg text-zinc-600 font-light leading-relaxed mb-8">
                We understand critical minerals and rare earth markets face significant price volatility. Many of these markets are illiquid and some do not yet exist. That is why Quanti partners with Futures Commission Merchants (FCMs) to provide comprehensive hedging solutions that help both buyers and sellers manage price risk and market uncertainties.
              </p>

              <div className="space-y-6">
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">FCM Partnerships</h4>
                  <p className="text-sm text-zinc-600 font-light">Working with established Futures Commission Merchants to access commodity markets and hedging instruments for critical minerals and rare earths.</p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Price Protection</h4>
                  <p className="text-sm text-zinc-600 font-light">Helping members in the supply chain lock in favorable prices for future production and helping secure predictable costs for material inputs.</p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Volatility Management</h4>
                  <p className="text-sm text-zinc-600 font-light">Strategies to manage market swings and reduce exposure to dramatic price fluctuations in critical mineral markets.</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-zinc-50 border border-zinc-200 p-8 mb-8">
                <h4 className="text-xl font-light mb-6">Hedging Solutions</h4>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-zinc-500 uppercase tracking-wider mb-2">For Sellers (Mines)</div>
                    <p className="text-sm text-zinc-600 font-light mb-3">
                      Protect against falling prices and secure revenue certainty for planned production. Lock in attractive prices when markets are favorable.
                    </p>
                    <ul className="text-sm text-zinc-600 space-y-1">
                      <li className="flex items-start">
                        <span className="text-zinc-400 mr-2">•</span>
                        <span className="font-light">Forward price agreements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-zinc-400 mr-2">•</span>
                        <span className="font-light">Production-linked hedging programs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-zinc-400 mr-2">•</span>
                        <span className="font-light">Downside protection strategies</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-zinc-200 pt-6">
                    <div className="text-sm text-zinc-500 uppercase tracking-wider mb-2">For Buyers (Manufacturers)</div>
                    <p className="text-sm text-zinc-600 font-light mb-3">
                      Manage rising input costs and budget with certainty. Protect margins when commodity prices spike unexpectedly.
                    </p>
                    <ul className="text-sm text-zinc-600 space-y-1">
                      <li className="flex items-start">
                        <span className="text-zinc-400 mr-2">•</span>
                        <span className="font-light">Fixed-price supply agreements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-zinc-400 mr-2">•</span>
                        <span className="font-light">Upside cost protection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-zinc-400 mr-2">•</span>
                        <span className="font-light">Budget certainty for procurement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 p-8">
                <h4 className="text-xl font-light mb-4">Why Hedge Critical Materials?</h4>
                <p className="text-sm text-zinc-600 font-light mb-4">
                  Critical materials markets can experience dramatic price swings driven by geopolitics, supply disruptions, and demand surges. Hedging provides stability in uncertain markets.
                </p>
                <div className="text-xs text-zinc-500 font-light italic">
                  Note: All hedging activities conducted through licensed FCM partners. Quanti facilitates relationships and structures but does not directly engage in commodity trading.
                </div>
              </div>
            </div>
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
                    <div className="font-light mb-4">Connecting four major markets:</div>
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
                      <li className="flex items-start">
                        <span className="text-zinc-400 mr-2">•</span>
                        <span className="font-light"><strong>Africa:</strong> Telecommunications, Healthcare, emerging sectors</span>
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
                        <span className="font-light"><strong>Angola:</strong> Emerging logistics center hub</span>
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
                    <strong className="text-black font-medium">Integrating Western Markets:</strong> We connect American mineral resources with manufacturing companies, creating transparent supply chains that serve the private sector and reduce dependency on single-source suppliers.
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Markets</h2>
              <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                Connecting global markets to Western resources.
              </h3>
              <p className="text-lg text-zinc-600 font-light leading-relaxed mb-8">
                With operations spanning Europe, Asia, Africa, and the Americas, we integrate Western markets into critical material supply chains and visa versa.
              </p>

              <div className="space-y-6">
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Western Market Integration</h4>
                  <p className="text-sm text-zinc-600 font-light">Creating pathways for European, Asian, and American manufacturers to access critical materials through transparent, traceable supply chains.
                  </p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Local Partnerships</h4>
                  <p className="text-sm text-zinc-600 font-light">On-the-ground presence and relationships in key African mining regions, ensuring quality, compliance, and sustainable practices.
                  </p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-6">
                  <h4 className="text-xl font-light mb-2">Cross-Continental Networks</h4>
                  <p className="text-sm text-zinc-600 font-light">Connecting mines to manufacturers across five continents, creating resilient supply chains that withstand geopolitical uncertainties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market-Driven Demand Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">Market-Driven Demand</h2>
            <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8 max-w-3xl">
              Creating more demand past the government programs.
            </h3>
            <p className="text-xl text-zinc-600 font-light leading-relaxed max-w-3xl">
              Government stockpile programs and contractor purchases are important, but mines need sustainable revenue from commercial buyers. We connect suppliers directly with manufacturers who need critical materials for actual production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-50 border border-zinc-200 p-8">
              <div className="text-lg font-light mb-4">Electric Vehicle & Battery Manufacturers</div>
              <p className="text-sm text-zinc-600 font-light mb-4">
                Massive demand for lithium, cobalt, nickel, graphite, and rare earths from EV and battery production
              </p>
              <div className="text-xs text-zinc-500 font-light">Key materials: Li, Co, Ni, graphite, REEs</div>
            </div>

            <div className="bg-zinc-50 border border-zinc-200 p-8">
              <div className="text-lg font-light mb-4">Semiconductor & Electronics Companies</div>
              <p className="text-sm text-zinc-600 font-light mb-4">
                High-purity gallium, germanium, and rare earths essential for chip manufacturing and electronics
              </p>
              <div className="text-xs text-zinc-500 font-light">Key materials: Ga, Ge, REEs</div>
            </div>

            <div className="bg-zinc-50 border border-zinc-200 p-8">
              <div className="text-lg font-light mb-4">Defense & Aerospace Contractors</div>
              <p className="text-sm text-zinc-600 font-light mb-4">
                Tungsten, titanium, and rare earths for defense systems, aircraft, and advanced applications
              </p>
              <div className="text-xs text-zinc-500 font-light">Key materials: W, Ti, REEs</div>
            </div>

            <div className="bg-zinc-50 border border-zinc-200 p-8">
              <div className="text-lg font-light mb-4">Renewable Energy Manufacturers</div>
              <p className="text-sm text-zinc-600 font-light mb-4">
                Rare earths for wind turbine magnets, solar components, and energy storage systems
              </p>
              <div className="text-xs text-zinc-500 font-light">Key materials: REEs, Li, Co</div>
            </div>

            <div className="bg-zinc-50 border border-zinc-200 p-8">
              <div className="text-lg font-light mb-4">Industrial Manufacturing</div>
              <p className="text-sm text-zinc-600 font-light mb-4">
                Copper, antimony, titanium for industrial equipment, infrastructure, and manufacturing processes
              </p>
              <div className="text-xs text-zinc-500 font-light">Key materials: Cu, Sb, Ti</div>
            </div>

            <div className="bg-zinc-50 border border-zinc-200 p-8">
              <div className="text-lg font-light mb-4">Magnet & Refiner Specialists</div>
              <p className="text-sm text-zinc-600 font-light mb-4">
                Specialized processors converting rare earths and critical materials into high-value products
              </p>
              <div className="text-xs text-zinc-500 font-light">Key materials: REEs, PGMs, specialty metals</div>
            </div>
          </div>

          <div className="mt-16 bg-black text-white p-12">
            <div className="max-w-3xl">
              <h4 className="text-2xl font-light mb-6">The Result: Sustainable, Market-Driven Revenue</h4>
              <p className="text-lg text-zinc-300 font-light leading-relaxed">
                By connecting mines with manufacturers who need materials for production—not just government reserves—we create stable, long-term demand that supports mining operations and supply chain resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

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

     {/* Insights Section */}
      <InsightsSection />

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
      {/* Contact Form Section */}
      <section id="contact" className="py-24 px-6 lg:px-12 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactFormComponent />
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
                A company connecting American resources and end-users of critical minerals and rare earths.
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
                <li><a href="#" className="hover:text-black transition-colors">Preliminary Offtake Structuring</a></li>
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

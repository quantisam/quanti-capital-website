import React from 'react';
import { MapPin, Globe, Building, Users, Truck, TrendingUp } from 'lucide-react';
import { GlassCard, PageHeader, Footer, CTASection, GradientOrbs } from '../components/shared';

const continents = [
  {
    name: "North America",
    description: "Serving major industrial consumers, OEMs, and commodity traders across the United States, Canada, and Mexico with reliable supply chain solutions.",
    icon: Building
  },
  {
    name: "South America",
    description: "Partnering with mining operations and producers across Chile, Peru, Brazil, and Argentina—key sources of copper, lithium, and other essential materials.",
    icon: Globe
  },
  {
    name: "Europe",
    description: "Supporting European manufacturers with compliant supply chains and regulatory expertise for critical materials sourcing.",
    icon: Users
  },
  {
    name: "Africa",
    description: "Deep relationships across the DRC, Zambia, South Africa, and other resource-rich nations with critical mineral deposits including cobalt and rare earths.",
    icon: MapPin,
    highlight: true
  },
  {
    name: "Asia",
    description: "Connecting with refiners, processors, and end-users across China, Japan, South Korea, and Southeast Asia to complete global supply chains.",
    icon: TrendingUp
  }
];

export default function MarketsPage() {
  return (
    <div className="min-h-screen bg-[#050505] relative">
      <GradientOrbs />
      
      <div className="relative">
        <PageHeader 
          eyebrow="Global Markets"
          title="5 Continents"
          subtitle="A truly global operation connecting producers with consumers across every major market."
          backLink="/divisions"
          backLabel="Back to Divisions"
        />

        {/* Hero Statement */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <GlassCard glow className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Global Reach, Local Expertise
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Our network spans five continents, giving us unique insight into regional market dynamics, 
                regulatory environments, and supply chain challenges. We leverage this global footprint to 
                create efficient, compliant trading relationships.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Continents Grid */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Regional Operations</h2>
              <p className="text-white/40 max-w-2xl mx-auto">
                Strategic presence in every major market of the critical materials supply chain.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {continents.map((continent) => {
                const Icon = continent.icon;
                return (
                  <GlassCard 
                    key={continent.name}
                    glow
                    className={`p-8 ${continent.highlight ? 'border-emerald-500/20' : ''}`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${continent.highlight ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-white/5 border-white/10'} border flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${continent.highlight ? 'text-emerald-400' : 'text-white/60'}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{continent.name}</h3>
                        {continent.highlight && (
                          <span className="text-xs text-emerald-400 font-medium">Primary Focus</span>
                        )}
                      </div>
                    </div>
                    <p className="text-white/40 leading-relaxed">{continent.description}</p>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Africa Focus */}
        <section className="py-24 px-6 border-t border-white/[0.05]">
          <div className="max-w-4xl mx-auto">
            <GlassCard glow className="p-8 md:p-12 border-emerald-500/20">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Africa?</h3>
                  <p className="text-white/40 leading-relaxed mb-6">
                    Africa holds approximately 30% of the world's mineral reserves and is home to vast deposits of 
                    cobalt, rare earth elements, lithium, and other critical materials essential for the energy transition. 
                    Our deep relationships and on-the-ground presence enable responsible sourcing from friendly jurisdictions.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Cobalt - 70%", "Rare Earths", "Lithium", "Copper", "Graphite"].map((item) => (
                      <div key={item} className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                        <span className="text-sm text-emerald-400/80 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        <CTASection 
          title="Explore Partnership Opportunities"
          subtitle="Connect with our global markets team to discuss regional opportunities."
          buttonText="Contact Markets Team"
        />
        
        <Footer />
      </div>
    </div>
  );
}

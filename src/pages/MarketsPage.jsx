import React from 'react';
import { MapPin, Globe, Building, Users, Truck, TrendingUp } from 'lucide-react';
import { GlassCard, PageHeader, Footer, CTASection, GradientOrbs } from '../components/shared';

const continents = [
 {
  name: "North America",
  description: "Supporting U.S. national security and economic interests through reliable critical material sourcing. We serve federal agencies, defense contractors, and domestic manufacturers to reduce dependency on foreign supply chains and strengthen North American production capabilities under USMCA partnerships.",
  icon: Building,
  highlight: true
},
{
  name: "Middle East",
  description: "Leveraging strategic U.S.-UAE partnerships and Abraham Accords momentum to develop secure critical material supply chains. Supporting Gulf allies' economic diversification goals while ensuring stable resource access for American industries.",
  icon: Globe
},
{
  name: "Europe",
  description: "Aligning with NATO allies and EU partners to build resilient Western supply chains. Supporting the U.S.-EU Trade and Technology Council initiatives on critical materials while helping European manufacturers meet both EU and U.S. regulatory standards.",
  icon: Users
},
{
  name: "Africa",
  description: "Quanti Africa Ventures Limited advances U.S. interests through the Lobito Corridor initiative and Partnership for Global Infrastructure. Creating sustainable economic opportunities in Angola, Zambia, and South Africa while developing ethical alternatives to Chinese-dominated mineral extraction in the Copperbelt.",
  icon: MapPin,
  secondary: true
},
{
  name: "Asia",
  description: "Strengthening Indo-Pacific partnerships through the Minerals Security Partnership (MSP) with Japan, South Korea, and ASEAN allies. Building supply chain resilience that supports the CHIPS Act goals and reduces regional dependence on adversarial sources.",
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
          title="4 Continents"
          subtitle="We are a global operation connecting producers with consumers across every major market."
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
                Our network spans four continents, giving us unique insight into regional market dynamics, 
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
                    className={`p-8 ${continent.highlight ? 'border-emerald-500/20' : continent.secondary ? 'border-amber-500/20' : ''}`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${continent.highlight ? 'bg-emerald-500/10 border-emerald-500/20' : continent.secondary ? 'bg-amber-500/10 border-amber-500/20' : 'bg-white/5 border-white/10'} border flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${continent.highlight ? 'text-emerald-400' : continent.secondary ? 'text-amber-400' : 'text-white/60'}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{continent.name}</h3>
                        {continent.highlight && (
                          <span className="text-xs text-emerald-400 font-medium">Primary Focus</span>
                        )}
                        {continent.secondary && (
                          <span className="text-xs text-amber-400 font-medium">Secondary Focus</span>
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

import React from 'react';
import { GlassCard, PageHeader, Footer, GradientOrbs } from '../components/shared';

// Material definitions matching the original site
const materials = [
  {
    name: "Rare Earth Elements",
    description: "Nd, Pr, Dy, Tb, and others"
  },
  {
    name: "Copper",
    description: "High-grade and specialty"
  },
  {
    name: "Tungsten",
    description: "APT, concentrate, alloys"
  },
  {
    name: "Titanium",
    description: "Sponge, rutile, alloys"
  },
  {
    name: "Gallium",
    description: "High-purity semiconductor"
  },
  {
    name: "Germanium",
    description: "Optical and electronic"
  },
  {
    name: "Antimony",
    description: "Metal and compounds"
  },
  {
    name: "Lithium",
    description: "Carbonate, hydroxide, metal"
  },
  {
    name: "Cobalt",
    description: "Metal and compounds"
  },
  {
    name: "Nickel",
    description: "Class 1 and sulfate"
  },
  {
    name: "Graphite",
    description: "Natural and synthetic"
  },
  {
    name: "Tantalum",
    description: "Concentrate and powder"
  },
];

export default function MaterialsPage() {
  return (
    <div className="min-h-screen bg-[#050505] relative">
      <GradientOrbs />
      
      <div className="relative">
        <PageHeader 
          eyebrow="Critical Materials"
          title="Essential elements for technology, defense, and clean energy."
          subtitle="We specialize in materials designated as critical by major economies due to their economic importance and supply risk."
        />

        {/* Materials Grid */}
        <section className="py-10 sm:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-white/[0.06] rounded-xl sm:rounded-2xl overflow-hidden">
              {materials.map((material) => (
                <div 
                  key={material.name} 
                  className="bg-[#0a0a0a] p-4 sm:p-6 hover:bg-white/[0.03] transition-colors"
                >
                  <h3 className="text-white font-medium text-sm sm:text-base mb-0.5 sm:mb-1">{material.name}</h3>
                  <p className="text-white/40 text-xs sm:text-sm">{material.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why These Materials */}
        <section className="py-10 sm:py-16 px-4 sm:px-6 border-t border-white/[0.05]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Why Critical Materials?</h2>
            <p className="text-white/50 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12 px-2">
              These materials are essential for the technologies powering the energy transition, national defense, 
              and advanced manufacturing. Supply chains are often concentrated in a few countries, creating 
              strategic vulnerabilities that drive demand for diversified, Western-aligned sources.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <GlassCard glow className="p-5 sm:p-6 text-center">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-2">Clean Energy</h3>
                <p className="text-white/40 text-xs sm:text-sm">EVs, batteries, wind turbines, solar panels</p>
              </GlassCard>
              <GlassCard glow className="p-5 sm:p-6 text-center">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-2">Defense</h3>
                <p className="text-white/40 text-xs sm:text-sm">Aerospace, munitions, advanced systems</p>
              </GlassCard>
              <GlassCard glow className="p-5 sm:p-6 text-center">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-2">Technology</h3>
                <p className="text-white/40 text-xs sm:text-sm">Semiconductors, electronics, communications</p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <GlassCard glow className="p-8 sm:p-12 md:p-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Need Access to Critical Materials?</h2>
              <p className="text-white/50 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                Whether you're sourcing for manufacturing, building strategic reserves, or developing new supply chains, 
                we can help connect you with verified sources.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black text-sm sm:text-base font-semibold rounded-full hover:bg-white/90 transition-all shadow-[0_0_40px_rgba(255,255,255,0.25)] w-full sm:w-auto"
              >
                Discuss Your Requirements
              </a>
            </GlassCard>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
}

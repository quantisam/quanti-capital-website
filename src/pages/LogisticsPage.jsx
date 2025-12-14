import React from 'react';
import { Truck, Shield, FileCheck, Globe, Package, Lock, Box, Settings, Eye } from 'lucide-react';
import { GlassCard, PageHeader, Footer, CTASection, GradientOrbs } from '../components/shared';

const freightServices = [
  {
    icon: Box,
    title: "Mine-to-Processing",
    description: "Transporting raw materials from extraction sites to processing facilities"
  },
  {
    icon: Settings,
    title: "Processing-to-Manufacturing",
    description: "Delivering refined materials to end manufacturers"
  },
  {
    icon: Globe,
    title: "International Freight Brokerage",
    description: "Managing customs, documentation, and compliance"
  },
  {
    icon: Shield,
    title: "Secure Handling Protocols",
    description: "Protecting high-value critical materials in transit"
  }
];

const traceabilityFeatures = [
  {
    title: "Your Choice of Platform",
    description: "We don't lock you into proprietary systems—use the traceability software that works best for your operations"
  },
  {
    title: "Seamless Integration",
    description: "Our team coordinates with software providers and data partners to ensure smooth implementation"
  },
  {
    title: "Complete Visibility",
    description: "Track materials from mine to end-user with full chain of custody documentation"
  }
];

const ecosystemParties = [
  { name: "Mines", description: "Source verification and extraction documentation at point of origin" },
  { name: "Processing Facilities", description: "Clear communication and transparency in any change of the material" },
  { name: "Software Partners", description: "Digital tracking platforms for real-time material movement and chain of custody" },
  { name: "End-Users", description: "Complete visibility into material provenance and compliance verification" }
];

const whyTraceability = [
  { title: "REGULATORY COMPLIANCE", description: "Meeting ESG requirements, conflict mineral regulations, and international standards" },
  { title: "SUPPLY CHAIN INTEGRITY", description: "Preventing fraud, ensuring authenticity, and maintaining quality throughout the chain." },
  { title: "MARKET ACCESS", description: "Enabling access to premium markets that require verified sustainable sourcing" }
];

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-[#050505] relative">
      <GradientOrbs />
      
      <div className="relative">
        <PageHeader 
          eyebrow="Logistics"
          title="Moving critical materials with complete transparency and traceability."
          subtitle="We provide specialized freight brokerage for critical materials transportation and work with any traceability system the parties prefer—integrating mines, processing facilities, software partners, and end-users to track materials from source to destination."
          backLink="/divisions"
          backLabel="Back to Divisions"
        />

        {/* Two Column Layout: Freight & Traceability */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-white/50 max-w-2xl mx-auto">Comprehensive logistics and traceability solutions for critical materials.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Freight Brokerage Services */}
              <GlassCard glow className="p-8">
                <h2 className="text-xl font-bold text-white mb-8 text-center">Freight Brokerage Services</h2>
                <div className="space-y-6">
                  {freightServices.map((service) => (
                    <div key={service.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 text-white/50" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">{service.title}</h3>
                        <p className="text-white/40 text-sm">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Flexible Traceability Integration */}
              <GlassCard glow className="p-8">
                <h2 className="text-xl font-bold text-white mb-4 text-center">Flexible Traceability Integration</h2>
                <p className="text-white/50 mb-8">
                  We work with any traceability application the parties prefer. Whether you have an existing system or need help selecting one, we integrate seamlessly with your chosen platform to provide end-to-end supply chain visibility.
                </p>
                <div className="space-y-6">
                  {traceabilityFeatures.map((feature) => (
                    <div key={feature.title} className="border-l-2 border-white/20 pl-4">
                      <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                      <p className="text-white/40 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Traceability Partnership Ecosystem */}
        <section className="py-16 px-6 border-t border-white/[0.05]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Traceability Partnership Ecosystem</h2>
              <p className="text-white/50 max-w-3xl mx-auto">
                Complete supply chain traceability requires coordination across multiple parties. We facilitate partnerships between mines, processing, technology providers, and end-users to create transparent, compliant supply chains.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ecosystemParties.map((party) => (
                <GlassCard key={party.name} glow className="p-6 text-center">
                  <h3 className="text-white font-semibold mb-2">{party.name}</h3>
                  <p className="text-white/40 text-sm">{party.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Why Traceability Matters */}
        <section className="py-16 px-6 border-t border-white/[0.05]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-8 text-center">Why Traceability Matters</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {whyTraceability.map((item) => (
                <GlassCard key={item.title} glow className="p-6 text-center">
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-2">{item.title}</p>
                  <p className="text-white/60">{item.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <CTASection 
          title="Need Logistics Support?"
          subtitle="Let's discuss how we can streamline your critical materials supply chain."
          buttonText="Contact Logistics Team"
        />
        
        <Footer />
      </div>
    </div>
  );
}

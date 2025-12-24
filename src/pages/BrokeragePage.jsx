import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GlassCard, PageHeader, Footer, CTASection, GradientOrbs } from '../components/shared';

const processSteps = [
  {
    number: "1",
    title: "Market Analysis & Opportunity Identification",
    description: "Understanding supply coming online and matching with demand gaps"
  },
  {
    number: "2",
    title: "Counterparty Vetting & Compliance",
    description: "Ensuring all parties meet regulatory, ESG, and geographic requirements"
  },
  {
    number: "3",
    title: "Preliminary Offtake Structuring",
    description: "Structuring agreements that work for both suppliers and buyers"
  },
  {
    number: "4",
    title: "Integration & Execution",
    description: "Facilitating relationships and supporting ongoing trade"
  }
];

const whoWeServe = [
  {
    category: "FOR MINES & PROCESSORS",
    description: "Pipelines of qualified long-term buyers in private sector and established markets"
  },
  {
    category: "FOR MANUFACTURERS",
    description: "Diversified, verified supply sources reducing single-supplier concentration risk"
  },
  {
    category: "FOR STRATEGIC BUYERS",
    description: "Access to emerging supply from compliant sources in friendly jurisdictions"
  }
];

const capabilities = [
  {
    title: "Diversified Offtake Solutions",
    description: "Securing multiple offtake agreements across different end-users, regions, and industries to create stable, long-term demand for mine production."
  },
  {
    title: "Private Sector Integration",
    description: "Connecting mines directly with OEMs, refiners, and manufacturers who need materials for production in addition to government stockpiles."
  },
  {
    title: "Compliant Partnerships",
    description: "All counterparties are vetted for compliance and located in friendly countries, ensuring transparent, traceable, and sustainable supply chains."
  }
];

export default function BrokeragePage() {
  return (
    <div className="min-h-screen bg-[#050505] relative">
      <GradientOrbs />
      
      <div className="relative">
        <PageHeader 
          eyebrow="Brokerage Services"
          title="Balancing supply and demand in critical markets."
          subtitle="As new mines and processing plants come online, matching demand with supply becomes critical. We help balance the market by identifying offtake opportunities, integrating suppliers with qualified end-users, and ensuring all counterparties meet compliance standards in United States friendly countries."
          backLink="/divisions"
          backLabel="Back to Divisions"
        />

        {/* Main content */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Capabilities - Centered intro */}
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Capabilities</h2>
              <p className="text-white/50 max-w-2xl mx-auto">Comprehensive brokerage services designed to connect critical materials markets</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {capabilities.map((cap) => (
                <GlassCard key={cap.title} glow className="p-8 text-center">
                  <h3 className="text-lg font-semibold text-white mb-4">{cap.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{cap.description}</p>
                </GlassCard>
              ))}
            </div>

            {/* Process & Who We Serve - Two column layout */}
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Our Process */}
              <GlassCard className="p-10" glow>
                <h3 className="text-xl font-semibold text-white mb-8 text-center">Our Process</h3>
                <div className="space-y-8">
                  {processSteps.map((step) => (
                    <div key={step.number} className="flex gap-5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-white/90 text-black flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-[0_4px_16px_rgba(255,255,255,0.2)]">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                        <p className="text-white/45 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Who We Serve */}
              <GlassCard className="p-10" glow>
                <h3 className="text-xl font-semibold text-white mb-8 text-center">Who We Serve</h3>
                <div className="space-y-8">
                  {whoWeServe.map((item) => (
                    <div key={item.category} className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                      <p className="text-xs font-semibold text-emerald-400/70 uppercase tracking-wider mb-3">{item.category}</p>
                      <p className="text-white/60 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        <CTASection 
          title="Ready to Discuss Offtake?"
          subtitle="Connect with our brokerage team to explore partnership opportunities."
          buttonText="Get in Touch"
        />
        
        <Footer />
      </div>
    </div>
  );
}

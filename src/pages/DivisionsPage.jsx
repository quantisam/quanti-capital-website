import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Link, Truck, BarChart3, MapPin, Check } from 'lucide-react';
import { GlassCard, PageHeader } from '../components/shared';

const divisions = [
  {
    name: "Brokerage",
    tagline: "Balancing supply and demand",
    description: "We secure diversified offtake for mines and connect producers with OEMs and refiners, balancing new supply with real commercial demand.",
    icon: Link,
    href: "/brokerage",
    features: ["Offtake Structuring", "Commercial Strategy", "Counterparty Vetting"]
  },
  {
    name: "Logistics & Traceability",
    tagline: "Secure freight & integration",
    description: "Specialized logistics for critical materials combined with flexible traceability integration across your preferred platforms.",
    icon: Truck,
    href: "/logistics",
    features: ["Freight Brokerage", "Chain of Custody", "Regulatory Compliance"]
  },
  {
    name: "Hedging",
    tagline: "Risk management solutions",
    description: "Managing price volatility through licensed FCM partnerships, offering programs for both sellers (revenue stability) and buyers (budget certainty).",
    icon: BarChart3,
    href: "/hedging",
    features: ["Price Protection", "Volatility Management", "FCM Partnerships"]
  },
  {
    name: "Global Markets",
    tagline: "Operations & footprint",
    description: "A global operation with a specific focus on Africa, linking Western demand with critical mineral sources in friendly jurisdictions.",
    icon: MapPin,
    href: "/markets",
    features: ["African Focus", "Global Sourcing", "Market Access"]
  }
];

export default function DivisionsPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <PageHeader 
        eyebrow="Our Divisions"
        title="A Unified Platform for Critical Trade"
        subtitle="Quanti Capital operates four specialized divisions that work in concert to solve the complex challenges of the critical materials supply chain."
      />

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-10">
            {divisions.map((division, index) => (
              <RouterLink key={division.name} to={division.href} className="group">
                <GlassCard glow className="p-10 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center gap-10">
                    {/* Icon */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/[0.1] to-white/[0.02] border border-white/[0.1] flex items-center justify-center group-hover:scale-110 group-hover:border-white/[0.2] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500">
                        <division.icon className="w-9 h-9 text-white/70" />
                      </div>
                      <div className="mt-4 text-[10px] text-white/30 font-semibold uppercase tracking-widest">Division {index + 1}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">{division.name}</h3>
                          <p className="text-white/50">{division.tagline}</p>
                        </div>
                        <ArrowUpRight className="w-7 h-7 text-white/20 group-hover:text-white/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 hidden md:block" />
                      </div>

                      <p className="text-white/45 text-base leading-relaxed mb-8">{division.description}</p>

                      {/* Features */}
                      <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        {division.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-full group-hover:bg-white/[0.06] group-hover:border-white/[0.12] transition-all">
                            <Check className="w-4 h-4 text-emerald-400/80" />
                            <span className="text-sm text-white/60 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </RouterLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

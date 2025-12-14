import React from 'react';
import { Shield, TrendingDown, TrendingUp, BarChart3, AlertTriangle, CheckCircle } from 'lucide-react';
import { GlassCard, PageHeader, Footer, GradientOrbs } from '../components/shared';

const sellerSolutions = {
  intro: "Protect against falling prices and secure revenue certainty for planned production. Lock in attractive prices when markets are favorable.",
  bullets: [
    "Forward price agreements",
    "Production-linked hedging programs",
    "Downside protection strategies"
  ]
};

const buyerSolutions = {
  intro: "Manage rising input costs and budget with certainty. Protect margins when commodity prices spike unexpectedly.",
  bullets: [
    "Fixed-price supply agreements",
    "Upside cost protection",
    "Budget certainty for procurement"
  ]
};

const capabilities = [
  {
    title: "FCM Partnerships",
    description: "Working with established Futures Commission Merchants to access commodity markets and hedging instruments for critical minerals and rare earths."
  },
  {
    title: "Price Protection",
    description: "Helping members in the supply chain lock in favorable prices for future production and helping secure predictable costs for material inputs."
  },
  {
    title: "Volatility Management",
    description: "Strategies to manage market swings and reduce exposure to dramatic price fluctuations in critical mineral markets."
  }
];

export default function HedgingPage() {
  return (
    <div className="min-h-screen bg-[#050505] relative">
      <GradientOrbs />
      
      <div className="relative">
        <PageHeader 
          eyebrow="Hedging"
          title="Partnering with FCMs to manage price risk."
          subtitle="We understand critical minerals and rare earth markets face significant price volatility. Many of these markets are illiquid and some do not yet exist. That is why Quanti partners with Futures Commission Merchants (FCMs) to provide comprehensive hedging solutions that help both buyers and sellers manage price risk and market uncertainties."
          backLink="/divisions"
          backLabel="Back to Divisions"
        />

        {/* Two Column Layout */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How We Help</h2>
              <p className="text-white/50 max-w-2xl mx-auto">Comprehensive hedging solutions for both sides of the supply chain.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Capabilities */}
              <GlassCard glow className="p-8">
                <h3 className="text-xl font-bold text-white mb-6 text-center">Our Capabilities</h3>
                <div className="space-y-8">
                {capabilities.map((cap) => (
                  <div key={cap.title} className="border-b border-white/[0.05] pb-8 last:border-0">
                    <h3 className="text-lg font-semibold text-white mb-3">{cap.title}</h3>
                    <p className="text-white/50 leading-relaxed">{cap.description}</p>
                  </div>
                ))}
                </div>
              </GlassCard>

              {/* Right Column - Hedging Solutions */}
              <div className="space-y-6">
                <GlassCard glow className="p-8">
                  <h2 className="text-xl font-bold text-white mb-6">Hedging Solutions</h2>
                  
                  {/* For Sellers */}
                  <div className="mb-8">
                    <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">FOR SELLERS (MINES)</p>
                    <p className="text-white/60 mb-4">{sellerSolutions.intro}</p>
                    <ul className="space-y-2">
                      {sellerSolutions.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-white/50 text-sm">
                          <span className="text-white/30">•</span> {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* For Buyers */}
                  <div className="pt-6 border-t border-white/[0.08]">
                    <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">FOR BUYERS (MANUFACTURERS)</p>
                    <p className="text-white/60 mb-4">{buyerSolutions.intro}</p>
                    <ul className="space-y-2">
                      {buyerSolutions.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-white/50 text-sm">
                          <span className="text-white/30">•</span> {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>

                {/* Why Hedge */}
                <GlassCard glow className="p-8">
                  <h3 className="text-lg font-bold text-white mb-4 text-center">Why Hedge Critical Materials?</h3>
                  <p className="text-white/50 leading-relaxed mb-4">
                    Critical materials markets can experience dramatic price swings driven by geopolitics, supply disruptions, and demand surges. Hedging provides stability in uncertain markets.
                  </p>
                  <p className="text-white/30 text-xs italic">
                    Note: All hedging activities conducted through licensed FCM partners. Quanti facilitates introductions and strategy design but does not execute trades directly.
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <GlassCard glow className="p-12 md:p-16">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/[0.1] to-white/[0.02] border border-white/[0.08] flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white/70" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Manage Your Price Risk</h2>
              <p className="text-white/40 text-lg mb-8">
                Let's discuss a hedging strategy tailored to your specific needs and risk profile.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full text-base font-semibold hover:bg-white/90 transition-all hover:scale-105"
              >
                Schedule a Consultation
              </a>
            </GlassCard>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
}

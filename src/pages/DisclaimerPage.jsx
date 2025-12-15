import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { PageHeader, Footer, GradientOrbs, GlassCard } from '../components/shared';

const sections = [
  {
    title: "1. General Disclaimer",
    content: `The information contained on this website and in any materials provided by Quanti Capital LLC ("Quanti Capital," "we," "us," or "our"), a Florida limited liability company, is for general informational purposes only. Nothing on this website constitutes, or is intended to constitute, financial, investment, legal, tax, or other professional advice.

You should not act or refrain from acting based on any information on this website without first seeking independent professional advice from a qualified advisor who is aware of your particular circumstances. Your use of this website and reliance on any information herein is solely at your own risk.

Quanti Capital makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website for any purpose.`
  },
  {
    title: "2. No Investment Advice",
    content: `**IMPORTANT: THE CONTENT ON THIS WEBSITE DOES NOT CONSTITUTE INVESTMENT ADVICE.**

Quanti Capital is not a registered investment advisor, broker-dealer, or investment manager under U.S. federal or Florida state law. We are not registered with the Securities and Exchange Commission (SEC), the Commodity Futures Trading Commission (CFTC), or any state securities regulator. We do not provide personalized investment recommendations.

Any discussion of commodities, materials, market trends, or trading strategies is provided for educational and informational purposes only.

Past performance of any investment, commodity, or trading strategy is not indicative of future results. The value of investments can go down as well as up, and you may lose some or all of your invested capital.

Before making any investment decision, you should:
• Consult with a qualified financial advisor
• Consider your own financial situation, objectives, and risk tolerance
• Conduct your own research and due diligence
• Understand the risks involved in commodity trading and investment`
  },
  {
    title: "3. Hedging and Derivatives Disclaimer",
    content: `**FUTURES AND OPTIONS TRADING INVOLVES SUBSTANTIAL RISK OF LOSS AND IS NOT SUITABLE FOR ALL INVESTORS.**

Quanti Capital provides hedging advisory services and introductions to licensed Futures Commission Merchants (FCMs) registered with the CFTC. We do not directly execute, clear, or settle any futures, options, or derivative transactions. We are not a registered Commodity Trading Advisor (CTA) or Commodity Pool Operator (CPO).

**Important Risk Disclosures:**

• Trading futures and options involves substantial risk of loss and is not appropriate for all investors
• You could lose more than your initial investment
• Past hedging performance does not guarantee future results
• Market conditions can change rapidly and without warning
• Leverage can amplify both gains and losses

Any hedging strategies discussed are general in nature and may not be suitable for your specific situation. Before entering into any hedging arrangement, you should:
• Consult with your own financial, legal, and tax advisors
• Carefully review all disclosures provided by the FCM
• Understand the terms and risks of the specific instruments
• Only commit capital you can afford to lose`
  },
  {
    title: "4. Forward-Looking Statements",
    content: `This website may contain forward-looking statements regarding future events, market conditions, business prospects, or anticipated results. These statements are based on current expectations and assumptions that are subject to risks, uncertainties, and other factors that could cause actual results to differ materially.

Forward-looking statements can be identified by words such as "anticipate," "believe," "estimate," "expect," "intend," "may," "plan," "potential," "predict," "project," "will," or similar expressions.

We do not undertake any obligation to update or revise any forward-looking statements, whether as a result of new information, future events, or otherwise. You should not place undue reliance on forward-looking statements.`
  },
  {
    title: "5. Market Data and Pricing Information",
    content: `Any market data, pricing information, indices, or other financial information displayed on this website is provided for informational purposes only and should not be relied upon for trading or investment decisions.

**Data Limitations:**
• Prices may be delayed and not reflect current market conditions
• Historical data may be incomplete or contain errors
• Price movements shown are illustrative and may not represent actual transactions
• Market data is sourced from third parties and we do not guarantee its accuracy

For actual trading decisions, you should rely on real-time data from authoritative sources and consult with qualified professionals.`
  },
  {
    title: "6. Critical Materials Market Risks",
    content: `Trading in critical materials involves unique risks that may not be present in other commodity markets:

**Geopolitical Risk:** Critical materials supply chains are concentrated in specific regions and may be subject to political instability, trade restrictions, sanctions, or nationalization.

**Regulatory Risk:** Environmental regulations, export controls, and critical materials legislation (such as the U.S. Inflation Reduction Act, Defense Production Act, and EU Critical Raw Materials Act) can significantly impact supply, demand, and pricing.

**Supply Chain Risk:** Many critical materials have limited production sources and long development timelines for new projects, creating potential supply vulnerabilities.

**Price Volatility:** Critical materials markets may experience extreme price volatility due to supply/demand imbalances, speculation, or geopolitical events.

**Counterparty Risk:** Transactions in critical materials often involve counterparties in various jurisdictions with differing legal frameworks and enforcement mechanisms.`
  },
  {
    title: "7. Regulatory Compliance",
    content: `Quanti Capital operates in compliance with applicable U.S. federal and Florida state laws. Our services are subject to various regulatory requirements including:

• U.S. sanctions regulations administered by OFAC
• Anti-money laundering requirements under the Bank Secrecy Act
• Export control regulations (EAR, ITAR where applicable)
• State of Florida business regulations

We only work with counterparties in jurisdictions that comply with U.S. legal requirements and do not engage with sanctioned entities or individuals.`
  },
  {
    title: "8. No Guarantee of Results",
    content: `We make no representations or guarantees regarding:

• The profitability or success of any transaction
• The availability of counterparties or market liquidity
• The accuracy of market forecasts or analysis
• The performance of any hedging strategy
• The suitability of our services for your needs

All business decisions should be made after careful consideration and consultation with your own professional advisors.`
  },
  {
    title: "9. Limitation of Liability",
    content: `TO THE MAXIMUM EXTENT PERMITTED BY FLORIDA LAW:

Quanti Capital shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:

• Your use of or inability to use our website or services
• Any errors or omissions in our content
• Any unauthorized access to your information
• Any third-party conduct or content
• Any loss of profits, data, or business opportunities

Our total liability shall not exceed the amount you paid us in the twelve (12) months preceding the claim, or one hundred dollars ($100), whichever is greater.`
  },
  {
    title: "10. Governing Law",
    content: `This Disclaimer shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any disputes arising from this Disclaimer shall be resolved in the state or federal courts located in Orange County, Florida.`
  },
  {
    title: "11. Contact Information",
    content: `If you have questions about this Disclaimer, please contact us at:

**Quanti Capital LLC**
Winter Park, Florida 32789
United States
Email: legal@quanticapital.com

This Disclaimer was last updated in December 2024.`
  }
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#050505] relative">
      <GradientOrbs />
      
      <div className="relative">
        <PageHeader 
          eyebrow="Legal"
          title="Disclaimer"
          subtitle="Important legal notices and risk disclosures"
        />

        {/* Warning Banner */}
        <section className="px-6 -mt-8 mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-amber-400 font-semibold mb-2">Important Notice</h3>
                <p className="text-amber-200/70 text-sm leading-relaxed">
                  Trading in critical materials and commodities involves substantial risk. This website does not constitute investment advice. 
                  Please read this disclaimer carefully and consult with qualified professionals before making any financial decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                {sections.map((section, index) => (
                  <div key={index} className="mb-10 last:mb-0">
                    <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
                    <div className="text-white/60 leading-relaxed whitespace-pre-line text-sm">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
}

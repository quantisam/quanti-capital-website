import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { PageHeader, Footer, GradientOrbs, GlassCard } from '../components/shared';

const sections = [
  {
    title: "1. General Disclaimer",
    content: `The information contained on this website and in any materials provided by Quanti Capital Ltd. ("Quanti Capital," "we," "us," or "our") is for general informational purposes only. Nothing on this website constitutes, or is intended to constitute, financial, investment, legal, tax, or other professional advice.

You should not act or refrain from acting based on any information on this website without first seeking independent professional advice from a qualified advisor who is aware of your particular circumstances. Your use of this website and reliance on any information herein is solely at your own risk.

Quanti Capital makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website for any purpose.`
  },
  {
    title: "2. No Investment Advice",
    content: `**IMPORTANT: THE CONTENT ON THIS WEBSITE DOES NOT CONSTITUTE INVESTMENT ADVICE.**

Quanti Capital is not a registered investment advisor, broker-dealer, or investment manager. We do not provide personalized investment recommendations. Any discussion of commodities, materials, market trends, or trading strategies is provided for educational and informational purposes only.

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

Quanti Capital provides hedging advisory services and introductions to licensed Futures Commission Merchants (FCMs). We do not directly execute, clear, or settle any futures, options, or derivative transactions.

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

**Regulatory Risk:** Environmental regulations, export controls, and critical materials legislation (such as the US Inflation Reduction Act and EU Critical Raw Materials Act) can significantly impact supply, demand, and pricing.

**Supply Chain Risk:** Many critical materials have limited production sources and long development timelines for new projects, creating potential supply vulnerabilities.

**Price Volatility:** Critical materials markets may experience extreme price volatility due to supply/demand imbalances, speculation, or geopolitical events.

**Counterparty Risk:** Transactions in critical materials often involve counterparties in various jurisdictions with differing legal frameworks and enforcement mechanisms.

**Physical Delivery Risk:** Physical commodity transactions involve risks related to quality, quantity, storage, transportation, and insurance.`
  },
  {
    title: "7. Third-Party Content",
    content: `This website may include content, data, or links from third-party sources. Such content is provided for convenience only, and Quanti Capital:

• Does not control or endorse third-party content
• Makes no representations about the accuracy or completeness of third-party content
• Is not responsible for the content, policies, or practices of third-party websites
• Does not guarantee the availability or functionality of third-party services

Inclusion of third-party content does not imply any affiliation, sponsorship, endorsement, or recommendation by Quanti Capital.`
  },
  {
    title: "8. Regulatory Status",
    content: `Quanti Capital Ltd. is a company registered in England and Wales. Our regulatory status varies by service and jurisdiction:

**Brokerage Services:** Our brokerage activities are conducted in accordance with applicable commercial law. We are not regulated as a broker-dealer for securities transactions.

**Hedging Services:** We provide hedging advisory and introduction services. All hedging transactions are executed through regulated Futures Commission Merchants. We do not hold client funds for hedging purposes.

**Logistics Services:** Our logistics services are provided as a commercial freight broker.

This website is not directed at any jurisdiction where the publication or availability of its contents would be unlawful. Users are responsible for ensuring compliance with their local laws.`
  },
  {
    title: "9. Anti-Money Laundering and Sanctions",
    content: `Quanti Capital maintains robust compliance programs to prevent money laundering, terrorist financing, and sanctions violations. We are committed to:

• Conducting appropriate due diligence on clients and counterparties
• Screening against applicable sanctions lists
• Reporting suspicious activities as required by law
• Maintaining records in accordance with regulatory requirements

We reserve the right to decline or terminate any business relationship if we are unable to satisfactorily complete our due diligence or if we have concerns about the nature or purpose of a transaction.

**Sanctions Compliance:** We do not engage in transactions involving sanctioned persons, entities, or jurisdictions. Users are responsible for ensuring their activities do not violate applicable sanctions laws.`
  },
  {
    title: "10. Limitation of Liability",
    content: `TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, QUANTI CAPITAL, ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:

• Loss of profits, revenue, or anticipated savings
• Loss of data or business interruption
• Loss arising from investment or trading decisions
• Loss arising from reliance on information provided
• Any other pecuniary loss

ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THIS WEBSITE OR OUR SERVICES, WHETHER BASED IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you.`
  },
  {
    title: "11. Indemnification",
    content: `You agree to indemnify and hold harmless Quanti Capital and its directors, officers, employees, agents, and affiliates from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from:

• Your use of this website or our services
• Your violation of these disclaimers or our Terms of Service
• Your violation of any applicable laws or regulations
• Any reliance you place on information provided on this website
• Any transaction you enter into based on information obtained through our services`
  },
  {
    title: "12. Governing Law",
    content: `These disclaimers shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with these disclaimers shall be subject to the exclusive jurisdiction of the courts of England and Wales.`
  },
  {
    title: "13. Contact Information",
    content: `If you have any questions about these disclaimers or require clarification on any matter, please contact:

**Compliance Department**
Quanti Capital Ltd.
London, United Kingdom
Email: compliance@quanticapital.com

For general inquiries: contact@quanticapital.com`
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

        {/* Important Notice Banner */}
        <section className="px-6 -mt-8 mb-8">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-6 border-amber-500/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">Important Notice</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Trading in commodities and critical materials involves substantial risk of loss. Past performance is not indicative of future results. 
                    The information on this website is not investment advice. Consult qualified professionals before making any investment or trading decisions.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                {sections.map((section, index) => (
                  <div key={index} className="mb-10 last:mb-0">
                    <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
                    <div className="text-white/50 text-sm leading-relaxed whitespace-pre-line">
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

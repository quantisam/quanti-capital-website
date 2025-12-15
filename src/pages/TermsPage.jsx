import React from 'react';
import { PageHeader, Footer, GradientOrbs, GlassCard } from '../components/shared';

const sections = [
  {
    title: "1. Agreement to Terms",
    content: `These Terms of Service ("Terms") constitute a legally binding agreement between you ("you," "your," or "User") and Quanti Capital LLC ("Quanti Capital," "we," "us," or "our"), a Florida limited liability company with its principal place of business in Winter Park, Florida, governing your access to and use of our website, platform, and services.

By accessing our website or using our services, you represent that you have the legal capacity to enter into these Terms and agree to be bound by them. If you are accessing our services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.

If you do not agree with any part of these Terms, you must not access our website or use our services. We reserve the right to modify these Terms at any time, and your continued use of our services following any changes constitutes acceptance of those changes.`
  },
  {
    title: "2. Description of Services",
    content: `Quanti Capital provides a comprehensive platform for critical materials trading, encompassing:

**Brokerage Services:** Facilitation of offtake agreements, counterparty matching, and commercial strategy advisory for critical materials transactions between miners, refiners, manufacturers, and other market participants.

**Logistics & Traceability:** Coordination of freight services, chain of custody documentation, and integration with traceability platforms for critical materials shipments.

**Hedging & Risk Management:** Introduction to licensed Futures Commission Merchants (FCMs) and development of hedging strategies for price risk management. Quanti Capital does not directly execute futures or options trades.

**Market Intelligence:** Provision of market data, research, and analysis related to critical materials markets.

The scope of services provided to you will be governed by any specific service agreement entered into between you and Quanti Capital.`
  },
  {
    title: "3. Eligibility and Registration",
    content: `To access certain features of our platform, you may be required to register for an account. You agree to:

• Provide accurate, current, and complete information during registration
• Maintain and promptly update your account information
• Maintain the security and confidentiality of your login credentials
• Accept responsibility for all activities under your account
• Notify us immediately of any unauthorized access or security breach

We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion, including if we believe that your conduct violates these Terms or is harmful to other users, third parties, or our business interests.

**Know Your Customer (KYC) Requirements:** In compliance with applicable U.S. anti-money laundering regulations, including the Bank Secrecy Act, we may require you to provide identification documents and undergo verification procedures before accessing certain services.`
  },
  {
    title: "4. User Conduct and Prohibited Activities",
    content: `You agree to use our services only for lawful purposes and in accordance with these Terms. You shall not:

• Violate any applicable U.S. federal, state, or local laws, or international regulations
• Engage in market manipulation, fraud, or deceptive practices
• Use our services for money laundering, terrorist financing, or sanctions evasion
• Interfere with or disrupt the integrity or performance of our systems
• Attempt to gain unauthorized access to our systems or data
• Transmit malware, viruses, or other harmful code
• Scrape, mine, or extract data from our platform without authorization
• Impersonate any person or entity or misrepresent your affiliation
• Use our services to compete with or replicate our offerings
• Circumvent any access controls or usage limitations

We reserve the right to investigate and take appropriate legal action against anyone who, in our sole discretion, violates these prohibitions.`
  },
  {
    title: "5. Intellectual Property Rights",
    content: `All content, features, and functionality of our website and services, including but not limited to text, graphics, logos, trademarks, software, data compilations, and the overall design and arrangement, are owned by Quanti Capital or its licensors and are protected by U.S. and international intellectual property laws.

**Limited License:** Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our services for your internal business purposes.

**Restrictions:** You may not:
• Copy, modify, or create derivative works from our content
• Reproduce, distribute, or publicly display our content
• Reverse engineer or decompile our software
• Remove any proprietary notices or labels
• Use our trademarks without prior written consent

Any feedback, suggestions, or ideas you provide regarding our services may be used by us without any obligation to compensate you.`
  },
  {
    title: "6. Third-Party Services and Links",
    content: `Our services may integrate with or contain links to third-party websites, services, or content that are not owned or controlled by Quanti Capital. This includes, but is not limited to:

• Futures Commission Merchants for hedging services
• Traceability platforms and compliance providers
• Payment processors and financial institutions
• Logistics and freight service providers

We do not endorse or assume responsibility for any third-party content, products, or services. Your interactions with third parties are solely between you and the third party, and you agree that Quanti Capital shall not be liable for any loss or damage arising from such interactions.`
  },
  {
    title: "7. Disclaimer of Warranties",
    content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE.

WE SPECIFICALLY DISCLAIM ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.

We do not warrant that:
• Our services will meet your requirements
• Our services will be uninterrupted, timely, secure, or error-free
• Any information obtained through our services will be accurate
• Any defects will be corrected`
  },
  {
    title: "8. Limitation of Liability",
    content: `TO THE MAXIMUM EXTENT PERMITTED BY FLORIDA LAW AND APPLICABLE FEDERAL LAW, IN NO EVENT SHALL QUANTI CAPITAL, ITS MEMBERS, MANAGERS, OFFICERS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.

Our total liability for any claims arising out of or relating to these Terms or our services shall not exceed the greater of: (a) the amount you paid us in the twelve (12) months preceding the claim, or (b) one hundred dollars ($100).

These limitations apply regardless of the theory of liability (contract, tort, strict liability, or otherwise) and even if we have been advised of the possibility of such damages.`
  },
  {
    title: "9. Indemnification",
    content: `You agree to defend, indemnify, and hold harmless Quanti Capital, its members, managers, officers, employees, agents, and affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including reasonable attorneys' fees) arising from:

• Your use of our services
• Your violation of these Terms
• Your violation of any third-party rights
• Your violation of any applicable law or regulation
• Any content you submit or transmit through our services`
  },
  {
    title: "10. Governing Law and Jurisdiction",
    content: `These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.

Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the state or federal courts located in Orange County, Florida, and you consent to the personal jurisdiction of such courts.

**Waiver of Jury Trial:** TO THE EXTENT PERMITTED BY LAW, EACH PARTY WAIVES ANY RIGHT TO A JURY TRIAL IN ANY ACTION OR PROCEEDING ARISING OUT OF OR RELATING TO THESE TERMS.`
  },
  {
    title: "11. Dispute Resolution",
    content: `**Informal Resolution:** Before initiating any formal dispute resolution, you agree to first contact us at legal@quanticapital.com to attempt to resolve the dispute informally. We will attempt to resolve the dispute within thirty (30) days.

**Binding Arbitration:** If informal resolution is unsuccessful, any dispute shall be resolved by binding arbitration administered by the American Arbitration Association ("AAA") in accordance with its Commercial Arbitration Rules. The arbitration shall be conducted in Orlando, Florida.

**Class Action Waiver:** YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION.`
  },
  {
    title: "12. General Provisions",
    content: `**Severability:** If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.

**Waiver:** Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.

**Assignment:** You may not assign these Terms without our prior written consent. We may assign these Terms without restriction.

**Entire Agreement:** These Terms, together with any service agreements, constitute the entire agreement between you and Quanti Capital regarding our services.

**Notices:** All notices under these Terms shall be in writing and delivered to the addresses specified in the service agreement or to legal@quanticapital.com.`
  },
  {
    title: "13. Contact Information",
    content: `For questions about these Terms, please contact us at:

**Quanti Capital LLC**
Winter Park, Florida 32789
United States
Email: legal@quanticapital.com`
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050505] relative">
      <GradientOrbs />
      
      <div className="relative">
        <PageHeader 
          eyebrow="Legal"
          title="Terms of Service"
          subtitle="Last updated: December 2024"
        />

        <section className="py-16 px-6">
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

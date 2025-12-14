import React from 'react';
import { PageHeader, Footer, GradientOrbs, GlassCard } from '../components/shared';

const sections = [
  {
    title: "1. Agreement to Terms",
    content: `These Terms of Service ("Terms") constitute a legally binding agreement between you ("you," "your," or "User") and Quanti Capital Ltd. ("Quanti Capital," "we," "us," or "our"), a company registered in England and Wales, governing your access to and use of our website, platform, and services.

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

**Know Your Customer (KYC) Requirements:** In compliance with applicable anti-money laundering regulations, we may require you to provide identification documents and undergo verification procedures before accessing certain services.`
  },
  {
    title: "4. User Conduct and Prohibited Activities",
    content: `You agree to use our services only for lawful purposes and in accordance with these Terms. You shall not:

• Violate any applicable laws, regulations, or third-party rights
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
    content: `All content, features, and functionality of our website and services, including but not limited to text, graphics, logos, trademarks, software, data compilations, and the overall design and arrangement, are owned by Quanti Capital or its licensors and are protected by intellectual property laws.

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

We do not endorse or assume any responsibility for third-party content, privacy policies, or practices. Your interactions with third parties are governed by their respective terms and policies.

You acknowledge and agree that Quanti Capital shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of any third-party services.`
  },
  {
    title: "7. Disclaimers and Limitation of Liability",
    content: `**DISCLAIMER OF WARRANTIES**

OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.

We do not warrant that our services will be uninterrupted, error-free, secure, or free of viruses or other harmful components. We do not guarantee the accuracy, completeness, or timeliness of any information provided through our services.

**LIMITATION OF LIABILITY**

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL QUANTI CAPITAL, ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR:

• Any indirect, incidental, special, consequential, or punitive damages
• Loss of profits, revenue, data, or business opportunities
• Any damages arising from your use of or inability to use our services
• Any damages arising from unauthorized access to your account or data

Our total liability for any claims arising under these Terms shall not exceed the greater of (a) the fees paid by you in the twelve months preceding the claim, or (b) one thousand pounds sterling (£1,000).

The limitations in this section apply regardless of the theory of liability and even if we have been advised of the possibility of such damages.`
  },
  {
    title: "8. Indemnification",
    content: `You agree to indemnify, defend, and hold harmless Quanti Capital and its directors, officers, employees, agents, licensors, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:

• Your use of our services
• Your violation of these Terms
• Your violation of any third-party rights, including intellectual property rights
• Your violation of any applicable laws or regulations
• Any content you submit through our services
• Your negligence or willful misconduct

We reserve the right to assume the exclusive defense and control of any matter subject to indemnification, in which case you agree to cooperate with our defense.`
  },
  {
    title: "9. Confidentiality",
    content: `In the course of using our services, you may receive confidential information from Quanti Capital, including but not limited to pricing information, market intelligence, business strategies, and technical data ("Confidential Information").

You agree to:
• Maintain the confidentiality of all Confidential Information
• Use Confidential Information only for purposes authorized by us
• Not disclose Confidential Information to any third party without our prior written consent
• Take reasonable measures to protect Confidential Information from unauthorized disclosure
• Promptly notify us of any unauthorized disclosure or use

These confidentiality obligations shall survive the termination of these Terms.`
  },
  {
    title: "10. Termination",
    content: `**Termination by You:** You may terminate your account and cease using our services at any time by providing written notice to us.

**Termination by Us:** We may suspend or terminate your access to our services immediately, without prior notice or liability, for any reason, including:

• Breach of these Terms
• Request by law enforcement or government agencies
• Unexpected technical or security issues
• Extended periods of inactivity
• Non-payment of applicable fees

**Effect of Termination:** Upon termination:
• Your right to access our services will immediately cease
• We may delete your account and associated data
• All provisions that by their nature should survive will survive, including intellectual property, disclaimers, limitations of liability, and indemnification`
  },
  {
    title: "11. Governing Law and Dispute Resolution",
    content: `These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to conflict of law principles.

**Dispute Resolution:** Any dispute arising out of or in connection with these Terms shall be resolved as follows:

1. **Negotiation:** The parties shall first attempt to resolve the dispute through good-faith negotiations.

2. **Mediation:** If negotiation fails, the parties agree to attempt mediation under the CEDR Model Mediation Procedure.

3. **Arbitration or Litigation:** If mediation fails, disputes shall be finally resolved by the courts of England and Wales, or by arbitration under the LCIA Rules if mutually agreed.

**Class Action Waiver:** You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.`
  },
  {
    title: "12. General Provisions",
    content: `**Entire Agreement:** These Terms, together with any service agreements, constitute the entire agreement between you and Quanti Capital regarding the subject matter hereof.

**Severability:** If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.

**Waiver:** Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.

**Assignment:** You may not assign your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations without restriction.

**Force Majeure:** Neither party shall be liable for any failure to perform due to circumstances beyond their reasonable control, including acts of God, war, terrorism, pandemic, or government action.

**Notices:** All notices under these Terms shall be in writing and delivered to the addresses specified in the service agreement or on our website.`
  },
  {
    title: "13. Contact Information",
    content: `For questions about these Terms of Service, please contact:

**Legal Department**
Quanti Capital Ltd.
London, United Kingdom
Email: legal@quanticapital.com

For general inquiries, please visit our Contact page or email contact@quanticapital.com.`
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

import React from 'react';
import { PageHeader, Footer, GradientOrbs, GlassCard } from '../components/shared';

const sections = [
  {
    title: "1. Introduction",
    content: `Quanti Capital LLC ("Quanti Capital," "we," "us," or "our"), a Florida limited liability company with its principal place of business in Winter Park, Florida, is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, use our services, or otherwise interact with us.

This policy applies to all individuals who access our website, use our services, or provide us with personal information in any capacity, including but not limited to clients, prospective clients, business partners, and website visitors.

By accessing our website or using our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with the terms of this policy, please do not access our website or use our services.`
  },
  {
    title: "2. Information We Collect",
    content: `We may collect and process the following categories of personal information:

**Information You Provide Directly:**
• Contact information (name, email address, telephone number, postal address)
• Professional information (company name, job title, industry sector)
• Transaction-related information (details of services provided, payment information)
• Communications (correspondence, inquiries, feedback)
• KYC/AML information (identification documents, beneficial ownership information)

**Information Collected Automatically:**
• Technical data (IP address, browser type, operating system, device identifiers)
• Usage data (pages visited, time spent on site, navigation paths)
• Cookie data and similar tracking technologies

**Information from Third Parties:**
• Business intelligence from reputable data providers
• Credit and background check information (where legally permitted)
• Publicly available information from government registers and databases`
  },
  {
    title: "3. Legal Basis for Processing",
    content: `We process your personal information in accordance with applicable U.S. federal and Florida state privacy laws. Our legal bases for processing include:

**Contractual Necessity:** Processing necessary for the performance of a contract with you or to take steps at your request prior to entering into a contract.

**Legal Obligation:** Processing necessary for compliance with legal and regulatory obligations, including anti-money laundering, sanctions screening, and financial services regulations under U.S. law.

**Legitimate Interests:** Processing necessary for our legitimate business interests, including fraud prevention, network security, and business development, provided such interests are not overridden by your rights and freedoms.

**Consent:** Where you have provided explicit consent for specific processing activities, which you may withdraw at any time.`
  },
  {
    title: "4. How We Use Your Information",
    content: `We use your personal information for the following purposes:

• To provide, maintain, and improve our services
• To process transactions and send related information
• To respond to your inquiries and provide customer support
• To comply with legal and regulatory requirements under U.S. and Florida law
• To conduct due diligence and risk assessment
• To prevent fraud, money laundering, and other financial crimes
• To send marketing communications (with your consent)
• To analyze usage patterns and improve our website
• To protect our rights, property, and safety
• To enforce our terms and conditions`
  },
  {
    title: "5. Data Sharing and Disclosure",
    content: `We may share your personal information with the following categories of recipients:

**Service Providers:** Third-party vendors who provide services on our behalf, including IT support, payment processing, and professional advisors.

**Regulatory Authorities:** U.S. federal and state government agencies, regulators, and law enforcement where required by law or in connection with legal proceedings.

**Business Partners:** Carefully selected partners involved in the provision of our services, subject to appropriate confidentiality obligations.

**Corporate Transactions:** In connection with any merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.

We do not sell your personal information to third parties. Any sharing is conducted in accordance with applicable data protection laws and subject to appropriate safeguards.`
  },
  {
    title: "6. International Data Transfers",
    content: `As a global business operating in the critical materials sector, we may transfer your personal information to recipients in countries outside the United States. Where such transfers occur, we ensure appropriate safeguards are in place, including:

• Contractual protections with data recipients
• Compliance with applicable U.S. data transfer requirements
• Implementation of appropriate security measures

We primarily store and process data within the United States.`
  },
  {
    title: "7. Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

• Encryption of data in transit and at rest
• Access controls and authentication procedures
• Regular security assessments and monitoring
• Employee training on data protection
• Incident response procedures

While we strive to protect your information, no method of transmission over the Internet or electronic storage is completely secure. We cannot guarantee absolute security.`
  },
  {
    title: "8. Your Rights",
    content: `Depending on your jurisdiction, you may have certain rights regarding your personal information:

**Access:** The right to request a copy of the personal information we hold about you.

**Correction:** The right to request correction of inaccurate personal information.

**Deletion:** The right to request deletion of your personal information, subject to certain exceptions.

**Opt-Out:** The right to opt out of certain data processing activities, including marketing communications.

**California Residents:** If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected and the right to non-discrimination.

**Florida Residents:** If you are a Florida resident, you may have additional rights under the Florida Digital Bill of Rights, effective July 1, 2024.

To exercise any of these rights, please contact us using the information provided below.`
  },
  {
    title: "9. Cookies and Tracking",
    content: `We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings and opt out of certain tracking.

For more information about our use of cookies, please contact us.`
  },
  {
    title: "10. Contact Us",
    content: `If you have questions about this Privacy Policy or our data practices, please contact us at:

**Quanti Capital LLC**
Winter Park, Florida
United States
Email: privacy@quanticapital.com

We will respond to your inquiry within a reasonable timeframe.`
  }
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050505] relative">
      <GradientOrbs />
      
      <div className="relative">
        <PageHeader 
          eyebrow="Legal"
          title="Privacy Policy"
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

import React from 'react';
import { PageHeader, Footer, GradientOrbs, GlassCard } from '../components/shared';

const sections = [
  {
    title: "1. Introduction",
    content: `Quanti Capital Ltd. ("Quanti Capital," "we," "us," or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, use our services, or otherwise interact with us.

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
    content: `We process your personal information in accordance with applicable data protection laws, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Our legal bases for processing include:

**Contractual Necessity:** Processing necessary for the performance of a contract with you or to take steps at your request prior to entering into a contract.

**Legal Obligation:** Processing necessary for compliance with legal and regulatory obligations, including anti-money laundering, sanctions screening, and financial services regulations.

**Legitimate Interests:** Processing necessary for our legitimate business interests, including fraud prevention, network security, and business development, provided such interests are not overridden by your rights and freedoms.

**Consent:** Where you have provided explicit consent for specific processing activities, which you may withdraw at any time.`
  },
  {
    title: "4. How We Use Your Information",
    content: `We use your personal information for the following purposes:

• To provide, maintain, and improve our services
• To process transactions and send related information
• To respond to your inquiries and provide customer support
• To comply with legal and regulatory requirements
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

**Regulatory Authorities:** Government agencies, regulators, and law enforcement where required by law or in connection with legal proceedings.

**Business Partners:** Carefully selected partners involved in the provision of our services, subject to appropriate confidentiality obligations.

**Corporate Transactions:** In connection with any merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.

We do not sell your personal information to third parties. Any sharing is conducted in accordance with applicable data protection laws and subject to appropriate safeguards.`
  },
  {
    title: "6. International Data Transfers",
    content: `As a global business operating in the critical materials sector, we may transfer your personal information to recipients in countries outside the United Kingdom and European Economic Area. Where such transfers occur, we ensure appropriate safeguards are in place, including:

• Transfers to countries with an adequacy decision
• Standard Contractual Clauses approved by the UK Information Commissioner
• Binding Corporate Rules where applicable
• Explicit consent for specific transfers

You may request a copy of the relevant safeguards by contacting our Data Protection Officer.`
  },
  {
    title: "7. Data Retention",
    content: `We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, regulatory, accounting, or reporting requirements.

The retention period may vary depending on the context of the processing and our legal obligations. Generally:

• Client records: Minimum 7 years after the end of the business relationship
• Marketing data: Until consent is withdrawn or 3 years of inactivity
• Website analytics: 26 months from collection
• Legal claims data: Duration of the limitation period plus a reasonable buffer

When personal information is no longer required, we will securely delete or anonymize it.`
  },
  {
    title: "8. Your Rights",
    content: `Under applicable data protection laws, you have the following rights regarding your personal information:

• **Right of Access:** Request a copy of your personal information
• **Right to Rectification:** Request correction of inaccurate or incomplete data
• **Right to Erasure:** Request deletion of your personal information
• **Right to Restriction:** Request limitation of processing in certain circumstances
• **Right to Data Portability:** Receive your data in a structured, machine-readable format
• **Right to Object:** Object to processing based on legitimate interests or for marketing
• **Right to Withdraw Consent:** Where processing is based on consent
• **Right to Lodge a Complaint:** With the Information Commissioner's Office (ICO)

To exercise any of these rights, please contact our Data Protection Officer using the details provided below.`
  },
  {
    title: "9. Security Measures",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

• Encryption of data in transit and at rest
• Access controls and authentication requirements
• Regular security assessments and penetration testing
• Employee training on data protection and security
• Incident response and breach notification procedures
• Physical security measures for our premises and equipment

While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is completely secure. We cannot guarantee absolute security.`
  },
  {
    title: "10. Cookies and Tracking Technologies",
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user behavior.

**Essential Cookies:** Required for the website to function properly.
**Analytics Cookies:** Help us understand how visitors interact with our website.
**Marketing Cookies:** Used to deliver relevant advertisements.

You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect website functionality.`
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website with a new effective date.

We encourage you to review this policy periodically to stay informed about how we protect your information.`
  },
  {
    title: "12. Contact Information",
    content: `If you have any questions about this Privacy Policy or our data protection practices, please contact:

**Data Protection Officer**
Quanti Capital Ltd.
London, United Kingdom
Email: privacy@quanticapital.com

**Supervisory Authority**
Information Commissioner's Office (ICO)
Wycliffe House, Water Lane
Wilmslow, Cheshire SK9 5AF
www.ico.org.uk`
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

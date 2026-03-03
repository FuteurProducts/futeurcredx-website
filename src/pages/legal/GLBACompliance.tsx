import LegalPageLayout from "@/components/legal/LegalPageLayout";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "scope", title: "Scope and Applicability" },
  { id: "npi", title: "Nonpublic Personal Information" },
  { id: "privacy-notice", title: "Privacy Notice Requirements" },
  { id: "opt-out", title: "Opt-Out Rights" },
  { id: "safeguards", title: "Safeguards Rule" },
  { id: "administrative", title: "Administrative Safeguards" },
  { id: "technical", title: "Technical Safeguards" },
  { id: "physical", title: "Physical Safeguards" },
  { id: "third-party", title: "Third-Party Service Providers" },
  { id: "training", title: "Employee Training" },
  { id: "contact", title: "Contact Us" },
];

export default function GLBACompliance() {
  return (
    <LegalPageLayout
      title="GLBA Compliance"
      lastUpdated="January 2026"
      sections={sections}
    >
      <section id="overview" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p>
          The Gramm-Leach-Bliley Act (GLBA), also known as the Financial Services Modernization 
          Act of 1999, is a federal law that requires financial institutions to explain how they 
          share and protect their customers' private information. At FuteurCredX, we are committed 
          to full compliance with GLBA requirements.
        </p>
        <p className="mt-4">
          This document describes how FuteurCredX complies with the GLBA's Privacy Rule and 
          Safeguards Rule to protect the security and confidentiality of your nonpublic personal 
          information (NPI).
        </p>
      </section>

      <section id="scope" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Scope and Applicability</h2>
        <p>
          GLBA applies to "financial institutions" – companies that offer financial products or 
          services. As a provider of credit intelligence and financial data services, FuteurCredX 
          falls within the scope of GLBA.
        </p>
        <p className="mt-4">
          Our GLBA compliance program covers:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>All consumer-facing credit monitoring and intelligence services</li>
          <li>Business credit services for small businesses</li>
          <li>API services provided to financial institution partners</li>
          <li>All data processing activities involving NPI</li>
        </ul>
      </section>

      <section id="npi" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Nonpublic Personal Information (NPI)</h2>
        <p>
          Under GLBA, NPI is personally identifiable financial information that is:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Provided by a consumer to obtain a financial product or service</li>
          <li>Resulting from any transaction involving a financial product or service</li>
          <li>Otherwise obtained in connection with providing a financial product or service</li>
        </ul>
        <p className="mt-4">
          Examples of NPI we may collect include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Social Security numbers</li>
          <li>Credit scores and credit history</li>
          <li>Account numbers and balances</li>
          <li>Transaction history</li>
          <li>Income and employment information</li>
          <li>Tax identification numbers (personal and business)</li>
        </ul>
      </section>

      <section id="privacy-notice" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Privacy Notice Requirements</h2>
        <p>
          In compliance with GLBA's Privacy Rule, we provide customers with:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Initial Notice:</strong> When a customer relationship is established, we 
          provide a clear and conspicuous notice describing our privacy practices</li>
          <li><strong>Annual Notice:</strong> We provide customers with an annual privacy notice 
          as long as the customer relationship continues</li>
          <li><strong>Revised Notice:</strong> We notify customers before implementing material 
          changes to our privacy practices</li>
        </ul>
        <p className="mt-4">
          Our privacy notices describe:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Categories of NPI collected</li>
          <li>Categories of NPI disclosed</li>
          <li>Categories of affiliates and nonaffiliated third parties with whom we share NPI</li>
          <li>Policies and practices for protecting NPI</li>
          <li>How to opt out of certain disclosures</li>
        </ul>
      </section>

      <section id="opt-out" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Opt-Out Rights</h2>
        <p>
          GLBA gives consumers the right to opt out of having their NPI shared with certain 
          nonaffiliated third parties. We provide customers with:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Clear notice of their right to opt out</li>
          <li>A reasonable method to opt out (online, phone, or mail)</li>
          <li>A reasonable time to exercise opt-out rights before sharing NPI</li>
        </ul>
        <p className="mt-4">
          To exercise your opt-out rights or change your preferences, contact us at{" "}
          <a href="mailto:data@futeurcredx.com">data@futeurcredx.com</a> or call our 
          customer support line.
        </p>
        <p className="mt-4">
          <strong>Note:</strong> Opt-out rights do not apply when we share NPI with service 
          providers who perform services on our behalf, as permitted by GLBA.
        </p>
      </section>

      <section id="safeguards" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Safeguards Rule</h2>
        <p>
          GLBA's Safeguards Rule requires financial institutions to develop, implement, and 
          maintain a comprehensive information security program. Our program includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Designation of a qualified individual to oversee the program</li>
          <li>Risk assessments to identify reasonably foreseeable risks</li>
          <li>Design and implementation of safeguards to control identified risks</li>
          <li>Regular testing and monitoring of safeguards</li>
          <li>Ongoing evaluation and adjustment of the program</li>
        </ul>
      </section>

      <section id="administrative" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Administrative Safeguards</h2>
        <p>We maintain the following administrative safeguards:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Designated Security Officer:</strong> A qualified individual responsible 
          for overseeing our information security program</li>
          <li><strong>Risk Assessment:</strong> Regular identification and assessment of internal 
          and external risks to customer NPI</li>
          <li><strong>Information Security Policies:</strong> Written policies and procedures 
          governing the handling of NPI</li>
          <li><strong>Vendor Management:</strong> Due diligence and contractual protections for 
          service providers with access to NPI</li>
          <li><strong>Incident Response Plan:</strong> Documented procedures for responding to 
          security incidents</li>
        </ul>
      </section>

      <section id="technical" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Technical Safeguards</h2>
        <p>We implement the following technical safeguards:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Access Controls:</strong> Role-based access limiting NPI access to 
          authorized personnel only</li>
          <li><strong>Multi-Factor Authentication:</strong> Required for all systems containing NPI</li>
          <li><strong>Encryption:</strong> 256-bit AES encryption for data at rest and TLS 1.3 
          for data in transit</li>
          <li><strong>Network Security:</strong> Firewalls, intrusion detection/prevention systems, 
          and network segmentation</li>
          <li><strong>Vulnerability Management:</strong> Regular vulnerability scanning and 
          patch management</li>
          <li><strong>Logging and Monitoring:</strong> Comprehensive logging of access to NPI 
          with real-time monitoring</li>
          <li><strong>Secure Development:</strong> Security-focused software development practices</li>
        </ul>
      </section>

      <section id="physical" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Physical Safeguards</h2>
        <p>We maintain the following physical safeguards:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Data Center Security:</strong> SOC 2 Type II ready cloud data centers
          with 24/7 physical security</li>
          <li><strong>Access Controls:</strong> Badge access, biometric authentication, and 
          visitor management</li>
          <li><strong>Environmental Controls:</strong> Fire suppression, climate control, and 
          backup power systems</li>
          <li><strong>Media Disposal:</strong> Secure destruction of physical and electronic 
          media containing NPI</li>
        </ul>
      </section>

      <section id="third-party" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Third-Party Service Providers</h2>
        <p>
          When we share NPI with service providers, we require them to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Implement and maintain appropriate safeguards for NPI</li>
          <li>Use NPI only for the purposes for which it was disclosed</li>
          <li>Comply with applicable laws and regulations</li>
          <li>Report security incidents promptly</li>
          <li>Submit to audits and assessments as required</li>
        </ul>
        <p className="mt-4">
          We conduct due diligence before engaging service providers and include appropriate 
          contractual protections in all service agreements.
        </p>
      </section>

      <section id="training" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Employee Training</h2>
        <p>
          All FuteurCredX employees receive training on:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>GLBA requirements and their responsibilities</li>
          <li>Our information security policies and procedures</li>
          <li>Proper handling of customer NPI</li>
          <li>Recognizing and reporting security threats</li>
          <li>Privacy practices and customer opt-out rights</li>
        </ul>
        <p className="mt-4">
          Training is provided upon hire and annually thereafter, with additional training 
          when significant changes occur.
        </p>
      </section>

      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>
          If you have questions about our GLBA compliance practices or wish to exercise 
          your rights under GLBA, please contact us:
        </p>
        <div className="mt-4 p-6 bg-white/5 border border-white/10 rounded-xl">
          <p className="font-semibold text-white">FuteurCredX Inc.</p>
          <p className="text-white/60 mt-2">
            17 State Street, FL 40<br />
            New York, NY 10004<br />
            United States
          </p>
          <p className="mt-4 text-white/70">
            <strong className="text-white">Data Protection:</strong>{" "}
            <a href="mailto:data@futeurcredx.com" className="text-amber-400 hover:text-amber-300">data@futeurcredx.com</a>
          </p>
          <p className="mt-2 text-white/70">
            <strong className="text-white">Legal:</strong>{" "}
            <a href="mailto:legal@futeurcredx.com" className="text-amber-400 hover:text-amber-300">legal@futeurcredx.com</a>
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}

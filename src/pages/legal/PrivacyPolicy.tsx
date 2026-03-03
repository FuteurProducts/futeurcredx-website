import LegalPageLayout from "@/components/legal/LegalPageLayout";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "data-collection", title: "Personal Data We Collect" },
  { id: "data-use", title: "How We Use Personal Data" },
  { id: "data-sharing", title: "How We Share Personal Data" },
  { id: "your-rights", title: "Your Rights and Choices" },
  { id: "data-protection", title: "How We Protect Your Data" },
  { id: "data-retention", title: "Data Retention" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="January 2026"
      sections={sections}
    >
      <section id="overview" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p>
          FuteurCredX Inc. (collectively referred to herein as "FuteurCredX," "we," "our," or "us") 
          recognizes the importance of protecting personal data we may collect from visitors and any 
          other individual or entity ("Users," "you," or "your") who visit our websites or use our 
          services. This Privacy Policy (the "Policy") applies to our collection, sharing, and use of 
          data about you ("Personal Data").
        </p>
        <p className="mt-4">
          This Policy shall apply to your use of our websites, including futeurcredx.com, applications, 
          software, communications, capabilities, and services (each, a "Service" and collectively, the 
          "Services").
        </p>
        <p className="mt-4">
          FuteurCredX's business partners are financial institutions and providers from whom you have 
          requested a product or service (your "FIs" or our "Partners"). Our Partners use FuteurCredX's 
          Services to provide you with those products and services you requested from them. This Policy 
          does not cover their data practices. It's important that you review and understand their 
          policies and agreements that apply to your use of their products and services.
        </p>
      </section>

      <section id="data-collection" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Personal Data We May Collect</h2>
        <p>We may collect the following categories of Personal Data:</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Information You Provide</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Contact information (name, email address, phone number, mailing address)</li>
          <li>Account credentials (username and password)</li>
          <li>Business information (company name, EIN, business address)</li>
          <li>Financial information (credit scores, tradeline data, payment history)</li>
          <li>Identity verification data (SSN, date of birth, government ID)</li>
          <li>Communications and correspondence you send to us</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Information Collected Automatically</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Device information (IP address, browser type, operating system)</li>
          <li>Usage data (pages visited, features used, time spent)</li>
          <li>Location data (based on IP address or device settings)</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Information from Third Parties</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Credit bureau data (Experian, Equifax, Dun & Bradstreet)</li>
          <li>Financial institution partners</li>
          <li>Identity verification services</li>
          <li>Public records and databases</li>
        </ul>
      </section>

      <section id="data-use" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How We Use Personal Data</h2>
        <p>We use Personal Data for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Providing and improving our Services</li>
          <li>Processing credit reports and generating credit insights</li>
          <li>Authenticating your identity and preventing fraud</li>
          <li>Communicating with you about your account and our Services</li>
          <li>Personalizing your experience and recommendations</li>
          <li>Complying with legal and regulatory requirements</li>
          <li>Analyzing usage trends and improving our platform</li>
          <li>Marketing and promotional communications (with your consent)</li>
        </ul>
      </section>

      <section id="data-sharing" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How We Share Personal Data</h2>
        <p>We may share your Personal Data with:</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Service Providers</h3>
        <p>
          Third-party vendors who perform services on our behalf, such as cloud hosting, 
          data analytics, payment processing, and customer support.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Financial Institution Partners</h3>
        <p>
          Banks, credit unions, and fintech companies that use our platform to provide 
          credit products and services to you.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Credit Bureaus</h3>
        <p>
          We exchange data with credit reporting agencies to obtain and update credit 
          information as part of our Services.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Legal and Regulatory</h3>
        <p>
          When required by law, court order, or government request, or to protect our 
          rights, property, or safety.
        </p>
      </section>

      <section id="your-rights" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
        <p>Depending on your location, you may have the following rights:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Access:</strong> Request a copy of your Personal Data</li>
          <li><strong>Correction:</strong> Request correction of inaccurate data</li>
          <li><strong>Deletion:</strong> Request deletion of your Personal Data</li>
          <li><strong>Portability:</strong> Request transfer of your data to another service</li>
          <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
          <li><strong>Restrict Processing:</strong> Limit how we use your data</li>
        </ul>
        <p className="mt-4">
          To exercise these rights, please contact us at{" "}
          <a href="mailto:data@futeurcredx.com">data@futeurcredx.com</a>.
        </p>
      </section>

      <section id="data-protection" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How We Protect Your Data</h2>
        <p>
          We implement industry-standard security measures to protect your Personal Data, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>256-bit AES encryption for data at rest and in transit</li>
          <li>SOC 2 Type II ready infrastructure (observation window active)</li>
          <li>Multi-factor authentication for account access</li>
          <li>Regular security audits and penetration testing</li>
          <li>Employee training on data protection practices</li>
          <li>Access controls limiting data access to authorized personnel</li>
        </ul>
      </section>

      <section id="data-retention" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
        <p>
          We retain Personal Data for as long as necessary to fulfill the purposes for which 
          it was collected, including to satisfy legal, accounting, or reporting requirements. 
          The retention period may vary depending on the context of our Services and our legal 
          obligations.
        </p>
        <p className="mt-4">
          When Personal Data is no longer needed, we will securely delete or anonymize it in 
          accordance with our data retention policies.
        </p>
      </section>

      <section id="childrens-privacy" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
        <p>
          Our Services are not intended for individuals under the age of 18. We do not 
          knowingly collect Personal Data from children. If you believe we have collected 
          data from a child, please contact us immediately at{" "}
          <a href="mailto:data@futeurcredx.com">data@futeurcredx.com</a>.
        </p>
      </section>

      <section id="changes" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any 
          material changes by posting the new Privacy Policy on this page and updating the 
          "Last updated" date. We encourage you to review this Policy periodically.
        </p>
      </section>

      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our data practices, 
          please contact us:
        </p>
        <div className="mt-4 p-6 bg-white/5 border border-white/10 rounded-xl">
          <p className="font-semibold text-white">FuteurCredX Inc.</p>
          <p className="text-white/60 mt-2">
            17 State Street, FL 40<br />
            New York, NY 10004<br />
            United States
          </p>
          <p className="mt-4 text-white/70">
            <strong className="text-white">Email:</strong>{" "}
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

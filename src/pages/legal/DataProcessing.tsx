import LegalPageLayout from "@/components/legal/LegalPageLayout";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "definitions", title: "Definitions" },
  { id: "scope", title: "Scope of Processing" },
  { id: "obligations", title: "Processor Obligations" },
  { id: "controller", title: "Controller Obligations" },
  { id: "subprocessors", title: "Sub-processors" },
  { id: "security", title: "Security Measures" },
  { id: "breach", title: "Data Breach Notification" },
  { id: "transfers", title: "International Transfers" },
  { id: "rights", title: "Data Subject Rights" },
  { id: "audit", title: "Audit Rights" },
  { id: "termination", title: "Termination" },
  { id: "contact", title: "Contact Us" },
];

export default function DataProcessing() {
  return (
    <LegalPageLayout
      title="Data Processing Agreement"
      lastUpdated="January 2026"
      sections={sections}
    >
      <section id="introduction" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p>
          This Data Processing Agreement ("DPA") forms part of the Agreement between FuteurCredX Inc. 
          ("FuteurCredX," "Processor," "we," or "us") and you ("Controller," "Customer," or "you") 
          for the provision of our Services.
        </p>
        <p className="mt-4">
          This DPA reflects the parties' agreement with respect to the Processing of Personal Data 
          by FuteurCredX on behalf of the Controller in connection with the Services, in accordance 
          with the requirements of Data Protection Laws including the General Data Protection 
          Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other applicable 
          privacy regulations.
        </p>
      </section>

      <section id="definitions" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Definitions</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>"Personal Data"</strong> means any information relating to an identified or 
            identifiable natural person.
          </li>
          <li>
            <strong>"Processing"</strong> means any operation performed on Personal Data, whether 
            automated or not, including collection, recording, organization, storage, adaptation, 
            retrieval, use, disclosure, or erasure.
          </li>
          <li>
            <strong>"Data Subject"</strong> means an identified or identifiable natural person 
            whose Personal Data is Processed.
          </li>
          <li>
            <strong>"Controller"</strong> means the entity that determines the purposes and means 
            of Processing Personal Data.
          </li>
          <li>
            <strong>"Processor"</strong> means the entity that Processes Personal Data on behalf 
            of the Controller.
          </li>
          <li>
            <strong>"Sub-processor"</strong> means any third party engaged by the Processor to 
            Process Personal Data on behalf of the Controller.
          </li>
        </ul>
      </section>

      <section id="scope" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Scope of Processing</h2>
        <h3 className="text-xl font-semibold mt-6 mb-3">Subject Matter</h3>
        <p>
          FuteurCredX will Process Personal Data as necessary to provide the Services as described 
          in the Agreement, including credit intelligence, analytics, and reporting services.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Nature and Purpose</h3>
        <p>Processing activities include:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Credit data aggregation and analysis</li>
          <li>Identity verification and authentication</li>
          <li>Credit score calculation and monitoring</li>
          <li>Report generation and delivery</li>
          <li>API request processing</li>
          <li>Customer support and communications</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Categories of Data Subjects</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>End users of the Controller's services</li>
          <li>Business owners and executives</li>
          <li>Authorized representatives</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Types of Personal Data</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Contact information (name, email, phone, address)</li>
          <li>Identity data (SSN, date of birth, government ID)</li>
          <li>Financial data (credit scores, tradelines, payment history)</li>
          <li>Business data (EIN, business name, registration details)</li>
          <li>Technical data (IP address, device information)</li>
        </ul>
      </section>

      <section id="obligations" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Processor Obligations</h2>
        <p>FuteurCredX, as Processor, agrees to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Process Personal Data only on documented instructions from the Controller</li>
          <li>Ensure that persons authorized to Process Personal Data are bound by confidentiality</li>
          <li>Implement appropriate technical and organizational security measures</li>
          <li>Engage Sub-processors only with prior authorization from the Controller</li>
          <li>Assist the Controller in responding to Data Subject requests</li>
          <li>Assist the Controller in ensuring compliance with security, breach notification, 
              and data protection impact assessment obligations</li>
          <li>Delete or return all Personal Data upon termination of the Services</li>
          <li>Make available all information necessary to demonstrate compliance</li>
        </ul>
      </section>

      <section id="controller" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Controller Obligations</h2>
        <p>The Controller agrees to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Ensure that the Processing of Personal Data is lawful</li>
          <li>Provide clear and documented instructions for Processing</li>
          <li>Ensure Data Subjects are informed about the Processing</li>
          <li>Obtain necessary consents from Data Subjects where required</li>
          <li>Notify FuteurCredX promptly of any changes affecting Processing</li>
          <li>Maintain records of Processing activities as required by law</li>
        </ul>
      </section>

      <section id="subprocessors" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Sub-processors</h2>
        <p>
          The Controller authorizes FuteurCredX to engage Sub-processors for the Processing of 
          Personal Data. A current list of Sub-processors is available upon request.
        </p>
        <p className="mt-4">
          FuteurCredX will notify the Controller of any intended changes to Sub-processors at 
          least 30 days in advance. The Controller may object to such changes within 14 days 
          of notification.
        </p>
        <p className="mt-4">
          FuteurCredX ensures that all Sub-processors are bound by data protection obligations 
          no less protective than those in this DPA.
        </p>
      </section>

      <section id="security" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Security Measures</h2>
        <p>FuteurCredX implements and maintains the following security measures:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Encryption:</strong> 256-bit AES encryption for data at rest and TLS 1.3 for data in transit</li>
          <li><strong>Access Controls:</strong> Role-based access with multi-factor authentication</li>
          <li><strong>Network Security:</strong> Firewalls, intrusion detection, and DDoS protection</li>
          <li><strong>Physical Security:</strong> SOC 2 Type II ready data centers</li>
          <li><strong>Monitoring:</strong> 24/7 security monitoring and logging</li>
          <li><strong>Testing:</strong> Regular penetration testing and vulnerability assessments</li>
          <li><strong>Incident Response:</strong> Documented incident response procedures</li>
          <li><strong>Business Continuity:</strong> Disaster recovery and backup procedures</li>
        </ul>
      </section>

      <section id="breach" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Data Breach Notification</h2>
        <p>
          FuteurCredX will notify the Controller without undue delay (and in any event within 
          72 hours) upon becoming aware of a Personal Data breach that affects Controller data.
        </p>
        <p className="mt-4">The notification will include:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Description of the nature of the breach</li>
          <li>Categories and approximate number of Data Subjects affected</li>
          <li>Categories and approximate number of records affected</li>
          <li>Likely consequences of the breach</li>
          <li>Measures taken or proposed to address the breach</li>
        </ul>
      </section>

      <section id="transfers" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">International Transfers</h2>
        <p>
          FuteurCredX primarily processes Personal Data within the United States. For any 
          transfers of Personal Data to countries outside the United States or European 
          Economic Area, FuteurCredX ensures appropriate safeguards are in place, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Standard Contractual Clauses approved by the European Commission</li>
          <li>Adequacy decisions where applicable</li>
          <li>Binding Corporate Rules where applicable</li>
        </ul>
      </section>

      <section id="rights" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Data Subject Rights</h2>
        <p>
          FuteurCredX will assist the Controller in fulfilling its obligations to respond to 
          Data Subject requests, including requests for access, rectification, erasure, 
          restriction, portability, and objection.
        </p>
        <p className="mt-4">
          Upon receiving a request directly from a Data Subject, FuteurCredX will promptly 
          notify the Controller unless prohibited by law.
        </p>
      </section>

      <section id="audit" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Audit Rights</h2>
        <p>
          FuteurCredX will make available to the Controller all information necessary to 
          demonstrate compliance with this DPA and allow for audits conducted by the Controller 
          or an authorized auditor.
        </p>
        <p className="mt-4">
          Audits shall be conducted with reasonable notice and during normal business hours, 
          subject to confidentiality obligations and without disrupting FuteurCredX's operations.
        </p>
      </section>

      <section id="termination" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Termination</h2>
        <p>
          Upon termination of the Services, FuteurCredX will, at the Controller's election, 
          delete or return all Personal Data within 90 days, unless retention is required by law.
        </p>
        <p className="mt-4">
          FuteurCredX will provide certification of deletion upon request.
        </p>
      </section>

      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>
          For questions about this Data Processing Agreement, please contact our Data Protection team:
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

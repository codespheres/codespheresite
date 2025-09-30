import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Terms = () => {
  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: `
        By using Code Spheres internet services, you agree to be bound by these Terms of Service. 
        If you do not agree to these terms, please do not use our services.
        
        These terms apply to all users of our services, including customers, website visitors, 
        and anyone who accesses our network or facilities.
      `
    },
    {
      id: "service-description",
      title: "Service Description",
      content: `
        Code Spheres provides high-speed internet access and related telecommunications services. 
        Our services include:
        
        • Residential and business fiber internet plans
        • Wi-Fi equipment and installation services
        • 24/7 technical support
        • Additional services as described in your service agreement
        
        Service availability, speeds, and features may vary by location and plan.
      `
    },
    {
      id: "acceptable-use",
      title: "Acceptable Use Policy",
      content: `
        You agree to use our services responsibly and legally. Prohibited activities include:
        
        • Illegal activities or violations of applicable laws
        • Harassment, threats, or abuse of others
        • Spamming or sending unsolicited communications
        • Unauthorized access to networks or systems
        • Distribution of malware or malicious software
        • Excessive bandwidth usage that impacts other users
        • Commercial resale of services without authorization
        
        Violation of this policy may result in service suspension or termination.
      `
    },
    {
      id: "billing-payment",
      title: "Billing and Payment",
      content: `
        • Monthly service fees are due in advance
        • Payments are processed automatically unless otherwise arranged
        • Late payments may result in service suspension after 30 days
        • Installation and equipment fees are due at time of service activation
        • Early termination fees may apply to certain promotional plans
        • All fees are subject to applicable taxes and regulatory charges
        
        You are responsible for maintaining current payment information and 
        notifying us of any billing disputes within 60 days.
      `
    },
    {
      id: "equipment",
      title: "Equipment and Installation",
      content: `
        • Equipment provided by Code Spheres remains our property
        • You are responsible for reasonable care of provided equipment
        • Lost, stolen, or damaged equipment may incur replacement charges
        • Professional installation is included with most plans
        • You must provide safe access to installation locations
        • Indoor wiring and certain equipment may be your responsibility
        
        Unauthorized modifications to our equipment or network connections 
        are strictly prohibited.
      `
    },
    {
      id: "service-availability",
      title: "Service Availability and Performance",
      content: `
        While we strive for 99.9% uptime, service availability may be affected by:
        
        • Scheduled maintenance (with advance notice when possible)
        • Network upgrades or improvements
        • Weather conditions or natural disasters
        • Third-party infrastructure issues
        • Customer equipment problems
        
        We do not guarantee specific speeds at all times, though we work 
        diligently to deliver advertised performance levels.
      `
    },
    {
      id: "privacy-data",
      title: "Privacy and Data Protection",
      content: `
        Your privacy is important to us. Our collection and use of your personal 
        information is governed by our Privacy Policy, which is incorporated 
        into these terms by reference.
        
        We may monitor network traffic for security and performance purposes, 
        but we do not monitor the content of your communications except as 
        required by law or to protect our network.
      `
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      content: `
        To the maximum extent permitted by law:
        
        • Our liability for service interruptions is limited to service credits
        • We are not liable for indirect, incidental, or consequential damages
        • Our total liability cannot exceed the amount you paid for services 
          in the 12 months preceding the claim
        • We are not responsible for content accessed through our services
        • You use our services at your own risk
        
        Some jurisdictions do not allow limitations on liability, so these 
        limitations may not apply to you.
      `
    },
    {
      id: "termination",
      title: "Termination",
      content: `
        Either party may terminate service:
        
        • You may cancel at any time with 30 days' notice (no early termination fee)
        • We may terminate for breach of these terms or non-payment
        • We may terminate with 30 days' notice for any reason
        • Termination does not relieve you of payment obligations for services used
        
        Upon termination, you must return all equipment in good condition or 
        pay applicable replacement fees.
      `
    },
    {
      id: "changes-terms",
      title: "Changes to Terms",
      content: `
        We may update these Terms of Service from time to time. When we make 
        material changes, we will:
        
        • Post the updated terms on our website
        • Send you email notification
        • Include notice with your service bill
        • Provide at least 30 days' notice before changes take effect
        
        Your continued use of our services after changes take effect constitutes 
        acceptance of the updated terms.
      `
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-orb opacity-20"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl sm:text-6xl font-black text-text-primary mb-6">
                Terms of
                <span className="bg-gradient-to-r from-neon-orange to-neon-light bg-clip-text text-transparent"> Service</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                These terms govern your use of Code Spheres internet services and outline our mutual rights and responsibilities.
              </p>
              <p className="text-text-muted">
                Last updated: March 15, 2024
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <div className="glass-card p-6 mb-12">
              <h2 className="text-xl font-bold text-text-primary mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a 
                      href={`#${section.id}`}
                      className="text-text-secondary hover:text-neon-orange transition-colors duration-200 text-sm"
                    >
                      {index + 1}. {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Terms Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <section key={section.id} id={section.id} className="glass-card p-8">
                  <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                    <span className="w-8 h-8 bg-gradient-neon rounded-full flex items-center justify-center text-onyx-base font-bold text-sm mr-3">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Contact Section */}
            <div className="glass-card p-8 mt-12 text-center bg-gradient-orb">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Questions About These Terms?
              </h2>
              <p className="text-text-secondary mb-6">
                If you have any questions about these Terms of Service, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="text-text-muted">
                  <strong>Email:</strong> legal@codespheres.com
                </div>
                <div className="text-text-muted">
                  <strong>Phone:</strong> <a href="tel:+18776549321" className="text-neon-orange hover:text-neon-light transition-colors cursor-pointer select-none">+1(877) 654-9321</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Terms;
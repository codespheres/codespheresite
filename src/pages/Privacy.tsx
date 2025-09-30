import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Privacy = () => {
  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      content: `
        We collect information you provide directly to us, such as when you create an account, 
        request service, or contact us for support. This includes:
        
        • Personal identifiers (name, address, phone number, email)
        • Account information and service preferences
        • Payment and billing information
        • Communications with our support team
        • Technical data about your service usage
      `
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      content: `
        We use the information we collect to:
        
        • Provide and maintain our internet services
        • Process payments and manage your account
        • Communicate with you about your service
        • Improve our network performance and customer experience
        • Comply with legal obligations and protect our rights
        • Send you promotional communications (with your consent)
      `
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      content: `
        We do not sell, trade, or rent your personal information to third parties. 
        We may share your information only in these limited circumstances:
        
        • With service providers who help us operate our business
        • When required by law or to protect our legal rights
        • In connection with a business transaction (merger, acquisition, etc.)
        • With your explicit consent
        
        Any third parties we work with are bound by strict confidentiality agreements.
      `
    },
    {
      id: "cookies-tracking",
      title: "Cookies and Tracking Technologies",
      content: `
        We use cookies and similar technologies to:
        
        • Remember your preferences and improve your experience
        • Analyze website traffic and usage patterns
        • Deliver targeted advertising (with your consent)
        • Provide customer support features
        
        You can control cookie settings through your browser preferences. 
        Disabling certain cookies may limit some website functionality.
      `
    },
    {
      id: "data-security",
      title: "Data Security",
      content: `
        We implement industry-standard security measures to protect your information:
        
        • Encryption of data in transit and at rest
        • Regular security audits and vulnerability assessments
        • Access controls and employee training programs
        • Secure data centers with physical and digital safeguards
        
        While we strive to protect your information, no method of transmission 
        over the internet is 100% secure.
      `
    },
    {
      id: "your-rights",
      title: "Your Privacy Rights",
      content: `
        You have the right to:
        
        • Access the personal information we have about you
        • Request correction of inaccurate information
        • Request deletion of your personal information
        • Opt-out of marketing communications
        • File a complaint with regulatory authorities
        
        To exercise these rights, contact us at privacy@codespheres.com or 
        call <a href="tel:+18776549321" className="text-neon-orange hover:text-neon-light transition-colors cursor-pointer select-none">+1(877) 654-9321</a>.
      `
    },
    {
      id: "children-privacy",
      title: "Children's Privacy",
      content: `
        Our services are not intended for children under 13. We do not knowingly 
        collect personal information from children under 13. If we become aware 
        that we have collected such information, we will take steps to delete it promptly.
        
        Parents or guardians who believe their child has provided us with personal 
        information should contact us immediately.
      `
    },
    {
      id: "updates",
      title: "Updates to This Policy",
      content: `
        We may update this Privacy Policy from time to time to reflect changes 
        in our practices or for other operational, legal, or regulatory reasons. 
        
        We will notify you of any material changes by:
        
        • Posting the updated policy on our website
        • Sending you an email notification
        • Including a notice with your service bill
        
        Your continued use of our services after such changes constitutes acceptance 
        of the updated policy.
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
                Privacy
                <span className="bg-gradient-to-r from-neon-orange to-neon-light bg-clip-text text-transparent"> Policy</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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

            {/* Policy Sections */}
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
                Questions About This Policy?
              </h2>
              <p className="text-text-secondary mb-6">
                If you have any questions about this Privacy Policy or our data practices, 
                we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="text-text-muted">
                  <strong>Email:</strong> privacy@codespheres.com
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

export default Privacy;
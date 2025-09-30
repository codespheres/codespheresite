import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Refund = () => {
  const sections = [
    {
      id: "money-back-guarantee",
      title: "30-Day Money-Back Guarantee",
      content: `
        We stand behind our service quality with a 30-day money-back guarantee. 
        If you're not completely satisfied with your Code Spheres internet service, 
        you can cancel within 30 days of activation for a full refund of monthly service fees.
        
        This guarantee covers:
        • Monthly service fees paid in advance
        • Promotional pricing differences
        • Service plan upgrades made during the guarantee period
        
        The guarantee does not cover installation fees, equipment charges, or 
        third-party services (such as premium TV channels).
      `
    },
    {
      id: "activation-grace-period",
      title: "Service Activation Grace Period",
      content: `
        We understand that sometimes service installation doesn't go as planned. 
        If we're unable to provide working service within 7 days of your scheduled 
        installation date due to technical issues on our end, you have these options:
        
        • Full refund of all payments made
        • Reschedule installation with priority status
        • Upgrade to a higher service tier at no additional cost
        
        This grace period automatically extends if delays are caused by:
        • Network infrastructure issues
        • Equipment shortages
        • Weather-related installation delays
      `
    },
    {
      id: "pro-rata-billing",
      title: "Pro-Rata Billing and Refunds",
      content: `
        If you cancel your service mid-billing cycle, we will calculate refunds 
        on a pro-rata basis:
        
        • Daily rate = Monthly fee ÷ Number of days in billing cycle
        • Refund = Daily rate × Unused days remaining
        • Processing time: 5-7 business days to original payment method
        
        Pro-rata refunds apply to:
        • Service plan downgrades
        • Mid-cycle cancellations (after 30-day guarantee period)
        • Service relocations where service is interrupted
        
        One-time fees (installation, equipment) are not subject to pro-rata refunds.
      `
    },
    {
      id: "refund-exceptions",
      title: "Refund Exceptions and Limitations",
      content: `
        The following items are non-refundable:
        
        • Professional installation fees (unless covered by guarantee)
        • Equipment replacement charges for lost or damaged items
        • Third-party services or premium add-ons
        • Regulatory fees and taxes
        • Usage charges exceeding plan limits
        • Services used in violation of our Acceptable Use Policy
        
        Special circumstances that may affect refund eligibility:
        • Service suspension due to non-payment
        • Account termination for policy violations
        • Equipment not returned within 30 days of cancellation
      `
    },
    {
      id: "equipment-return",
      title: "Equipment Return Policy",
      content: `
        All Code Spheres equipment must be returned within 30 days of service 
        cancellation to avoid equipment charges:
        
        Required returns include:
        • Fiber gateway/modem
        • Wi-Fi routers and mesh nodes
        • Power adapters and cables
        • Wall-mounted equipment (where removable)
        
        Return process:
        • We'll provide a prepaid return shipping label
        • Package equipment securely in original packaging when possible
        • Drop off at any authorized shipping location
        • Retain tracking information until charges are removed
        
        Equipment charges will be automatically reversed once we receive returned items in working condition.
      `
    },
    {
      id: "dispute-resolution",
      title: "Billing Disputes and Resolution",
      content: `
        If you believe you've been charged incorrectly or deserve a refund:
        
        Step 1: Contact Customer Service
        • Call <a href="tel:+18776549321" className="text-neon-orange hover:text-neon-light transition-colors cursor-pointer select-none">+1(877) 654-9321</a> or email billing@codespheres.com
        • Have your account information and billing details ready
        • Explain the issue and desired resolution
        
        Step 2: Formal Review Process
        • If not resolved within 7 days, request escalation to billing supervisor
        • Provide documentation supporting your claim
        • We'll investigate and respond within 10 business days
        
        Step 3: External Resolution
        • Unresolved disputes may be submitted to arbitration
        • You may also file complaints with state utility commissions
        
        We commit to fair and prompt resolution of all billing disputes.
      `
    },
    {
      id: "promotional-pricing",
      title: "Promotional Pricing and Refunds",
      content: `
        Special considerations for promotional rates and bundles:
        
        • Promotional pricing refunds are calculated at the promotional rate
        • Bundle discounts may be lost if individual services are cancelled
        • Gift card or credit promotions may be deducted from refunds
        • Contract buyout promotions have specific terms and conditions
        
        Early termination of promotional plans:
        • No early termination fees for month-to-month promotions
        • Contract promotions may have early termination fees
        • We'll clearly explain any fees before you sign up
        
        Promotional credits and discounts cannot be refunded as cash.
      `
    },
    {
      id: "refund-processing",
      title: "Refund Processing and Timeline",
      content: `
        Refund processing timeline:
        
        • Request acknowledgment: Within 24 hours
        • Investigation and approval: 3-5 business days
        • Refund processing: 5-7 business days
        • Bank processing time: 1-3 business days (varies by bank)
        
        Refund methods:
        • Original credit card or bank account when possible
        • Company check for cash payments or closed accounts
        • Account credit for partial refunds or ongoing disputes
        
        You'll receive email confirmation when your refund is processed, 
        including the refund amount and expected deposit date.
      `
    },
    {
      id: "contact-information",
      title: "Refund Request Contact Information",
      content: `
        To request a refund or discuss billing concerns:
        
        Phone: <a href="tel:+18776549321" className="text-neon-orange hover:text-neon-light transition-colors cursor-pointer select-none">+1(877) 654-9321</a>
        • Available 24/7 for billing support
        • Average wait time: Under 2 minutes
        • Bilingual support available
        
        Email: billing@codespheres.com
        • Include account number and detailed request
        • Response within 4 hours during business days
        • Attach supporting documentation when relevant
        
        Online Account Portal:
        • Submit refund requests through your account dashboard
        • Track request status and receive updates
        • Access billing history and payment records
        
        Mail: Code Spheres Billing Department
               P.O. Box 12345
               Austin, TX 78701
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
                Refund
                <span className="bg-gradient-to-r from-neon-orange to-neon-light bg-clip-text text-transparent"> Policy</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                We're committed to your satisfaction. Our comprehensive refund policy ensures fair treatment and transparent billing practices.
              </p>
              <p className="text-text-muted">
                Last updated: March 15, 2024
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Quick Summary */}
            <div className="glass-card p-8 mb-12 bg-gradient-orb">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Quick Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-orange mb-2">30 Days</div>
                  <div className="text-text-secondary">Money-Back Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-orange mb-2">5-7 Days</div>
                  <div className="text-text-secondary">Refund Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-orange mb-2">24/7</div>
                  <div className="text-text-secondary">Billing Support</div>
                </div>
              </div>
            </div>

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

            {/* Contact CTA */}
            <div className="glass-card p-8 mt-12 text-center bg-gradient-orb">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Need a Refund or Have Questions?
              </h2>
              <p className="text-text-secondary mb-6">
                Our billing specialists are available 24/7 to help with refund requests and billing questions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="text-text-muted">
                  <strong>Phone:</strong> <a href="tel:+18776549321" className="text-neon-orange hover:text-neon-light transition-colors cursor-pointer select-none">+1(877) 654-9321</a>
                </div>
                <div className="text-text-muted">
                  <strong>Email:</strong> billing@codespheres.com
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

export default Refund;
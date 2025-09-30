import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What internet speeds do you offer?",
      answer: "We offer fiber internet speeds ranging from 100 Mbps to 1 Gig (1000 Mbps) with symmetrical upload and download speeds. All plans include unlimited data with no throttling or caps."
    },
    {
      question: "How long does installation take?",
      answer: "Most installations are completed within 2-4 hours. Our certified technicians will set up your equipment, test all connections, and ensure optimal performance before leaving. Same-day and next-day installation slots are often available."
    },
    {
      question: "Is there a contract requirement?",
      answer: "No contracts required! We believe in earning your business every month. You can upgrade, downgrade, or cancel your service at any time without early termination fees or penalties."
    },
    {
      question: "What areas do you service?",
      answer: "We're rapidly expanding across major metropolitan areas. Use our coverage checker to see if fiber is available at your address. New neighborhoods are being added monthly as we continue our network expansion."
    },
    {
      question: "What if I have technical issues?",
      answer: "Our US-based technical support team is available 24/7 at no extra charge. We also offer remote diagnostics, on-site service calls, and proactive network monitoring to prevent issues before they occur."
    },
    {
      question: "Can I keep my current equipment?",
      answer: "While you can use compatible third-party equipment, we include professional-grade Wi-Fi 6 equipment with all plans at no additional cost. Our equipment is optimized for our network and includes automatic updates and support."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No hidden fees, ever. Our advertised price includes equipment, installation, and all taxes and fees. The only additional cost might be professional installation if you choose same-day service in select areas."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Quick
            <span className="bg-gradient-to-r from-neon-orange to-neon-light bg-clip-text text-transparent"> Answers</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Everything you need to know about our fiber internet service and more.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card mb-4 overflow-hidden transition-all duration-300 hover:shadow-neon/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-neon-orange focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-text-primary pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-neon-orange transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-secondary transition-transform duration-200 group-hover:text-neon-orange" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent mb-4"></div>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-text-muted mb-4">
            Still have questions? We're here to help.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-neon-orange hover:text-neon-light transition-colors duration-200 font-semibold"
          >
            Contact our support team
            <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
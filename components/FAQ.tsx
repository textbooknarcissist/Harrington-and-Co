import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Does the firm handle international arbitration?",
      answer: "Yes. Our Alternative Dispute Resolution team has represented domestic and international clients in high-stakes arbitrations across London, Paris, and Dubai jurisdictions, specialized in complex commercial and maritime treaties."
    },
    {
      question: "What is the typical response time for urgent maritime matters?",
      answer: "We operate an emergency response protocol for shipping and maritime emergencies. Clients have 24/7 access to specialized partners for arrest of vessels, collisions, or salvage inquiries, typically initiating within 60 minutes of contact."
    },
    {
      question: "Do you offer specialized counsel for tech startups in the Fintech sector?",
      answer: "Absolutely. Our 'Digital Sovereignty' practice group focuses on Nigerian Fintech regulations, CBN compliance, data privacy, and intellectual property protection for high-growth African technology ventures."
    },
    {
      question: "How does the firm manage cross-border regulatory compliance?",
      answer: "We leverage our established network across 24+ jurisdictions to provide synchronized legal auditing. This ensures your commercial operations remain compliant with both local Nigerian laws and international standards (GDPR, FCPA, etc.)."
    }
  ];

  return (
    <section className="py-24 bg-[#F7F5F0] border-y border-[#0F1E2E]/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F1E2E] text-white rounded-full mb-6">
            <HelpCircle size={14} className="text-[#C6A75E]" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Support Hub</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F1E2E] serif mb-4">Answers for Your Questions</h2>
          <p className="text-slate-500 font-light text-sm">Providing clarity on our engagement processes and specialized legal capabilities.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-[#0F1E2E]/10 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#0F1E2E]/20 text-[#0F1E2E] text-xs font-bold group-hover:bg-[#0F1E2E] group-hover:text-white transition-all">
                      {idx + 1}
                    </span>
                    <span className={`text-base md:text-lg font-bold transition-colors ${isOpen ? 'text-[#C6A75E]' : 'text-[#0F1E2E]'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#0F1E2E]/40 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#C6A75E]' : ''}`} 
                  />
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 pb-8' : 'max-h-0'}`}
                >
                  <div className="pl-14 text-slate-500 font-light leading-relaxed text-sm md:text-base pr-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
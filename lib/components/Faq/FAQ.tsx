'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day return policy for all unworn items in their original condition with tags attached. Shipping costs for returns are the responsibility of the customer unless the item is defective.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Standard shipping typically takes 3-5 business days within the continental US. International shipping can take 7-14 business days. Express shipping options are available at checkout.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. You can view specific shipping rates during checkout.',
  },
  {
    question: 'How do I track my order?',
    answer:
      'Once your order ships, you will receive a confirmation email with tracking information. You can also track your order by logging into your account on our website.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are secure and encrypted.',
  },
  {
    question: 'How do I know if an item  fit?',
    answer:
      "We provide detailed size guides for all our products. You can find the size guide link on each product page. If you're still unsure, our customer service team is happy to help with specific measurements.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="relative w-full h-[400px]">
        <img
          src="/images/faq.webp" // Make sure this image exists in your public folder
          alt="FAQ Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl text-white font-light">FAQs</h1>
        </div>
      </div>
      <section className="py-16 px-4 bg-primary-700">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-center mb-12">
            Frequently Asked Questions
          </h1>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-black/10 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-light">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 py-4 text-gray-600 bg-gray-50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Still have questions?{' '}
              <a
                href="/contact"
                className="text-black underline hover:text-gray-800 transition-colors"
              >
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;

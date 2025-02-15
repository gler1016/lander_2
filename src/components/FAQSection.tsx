import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const faqs: FAQ[] = [
    {
      question: "What industries do you specialise in?",
      answer: "We work with a wide range of industries, including e-commerce, tech startups, healthcare, finance, and more. Our custom solutions are designed to adapt to the specific needs of your business, no matter the sector."
    },
    {
      question: "How long does a typical project take?",
      answer: "The timeline varies depending on the complexity of the project. Smaller projects, like a basic website, can take 4-6 weeks, while more complex systems or applications may take several months. We'll provide a detailed timeline once we understand your requirements."
    },
    {
      question: "Do you offer ongoing support after the project is completed?",
      answer: "Yes! We provide post-launch support ranging from 2 weeks to 3 months, depending on your chosen plan. We also offer ongoing maintenance services if you need continuous support and updates."
    },
    {
      question: "What's your design process like?",
      answer: "Our design process is highly collaborative. We start with a deep dive into your brand and user needs, followed by wireframes and mockups. Once you approve the designs, we move into development, ensuring everything is aligned with your vision."
    },
    {
      question: "Can you help with redesigning an existing website?",
      answer: "Absolutely! We specialize in reimagining existing websites to improve their performance, user experience, and overall design. Whether you need a complete overhaul or targeted updates, we can help."
    },
    {
      question: "Do you work with pre-existing platforms like WordPress or Shopify?",
      answer: "Yes, we can work with platforms like WordPress and Shopify, but we also offer more advanced, custom-built solutions for businesses seeking more flexibility and scalability."
    },
    {
      question: "What makes your services different from other web development companies?",
      answer: "We offer fully tailored solutions, combining cutting-edge technology with a focus on exceptional user experience. Our personalized approach, along with competitive pricing, sets us apart by delivering high-quality results that drive real business impact."
    }
  ];

  return (
    <div className=" px-20 py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="font-mono font-normal text-[#272727] text-[15px] mb-2">// FAQs</div>
        <h2 className="font-bold leading-tight text-[#272727]  text-[24px]/22 mb-2">Your questions, our answers</h2>
      </div>

      {/* FAQ List */}
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-[#8F8F8F] text-[15px] font-medium mb-2">{faq.question}</h3>
            <p className="text-gray-600 leading-relaxed max-w-[70%] mb-4">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-6">
        <p className="text-gray-500 mb-2">Have a specific question? Get in touch below</p>
        <button className="inline-flex items-center px-4 py-1 border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
          Schedule a consultation
          <svg
                className="w-5 h-5 ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
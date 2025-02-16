// FAQSection.tsx
import React from 'react';
import styles from './FAQSection.module.scss';

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
    <div className={styles.faqSection}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.label}>// FAQs</div>
        <h2 className={styles.title}>Your questions, our answers</h2>
      </div>

      {/* FAQ List */}
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <h3 className={styles.question}>{faq.question}</h3>
            <p className={styles.answer}>{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className={styles.bottomCta}>
        <p>Have a specific question? Get in touch below</p>
        <button>
          Schedule a consultation
          <svg
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
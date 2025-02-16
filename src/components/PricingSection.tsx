// PricingSection.tsx
import Image from 'next/image';
import React from 'react';
import logo from '../@content/assets/images/Group 783.svg';
import styles from './PricingSection.module.scss';

interface PricingPlan {
  type: string;
  title: string;
  description: string;
  price: string;
  status: 'Available' | 'Limited';
  features: string[];
  buttonColor: string;
}

const PricingSection = () => {
  const plans: PricingPlan[] = [
    {
      type: "STARTER PLAN",
      title: "Launch",
      description: "Affordable, essential tools for businesses looking to establish a solid digital presence.",
      price: "£1234.56",
      status: "Available",
      features: [
        "Custom website with up to 5 pages",
        "Basic UI/UX design",
        "Responsive mobile design",
        "Standard performance optimization",
        "Email and basic form integrations",
        "Up to 2 revisions",
        "2 weeks of post-launch support"
      ],
      buttonColor: "starter"
    },
    {
      type: "GROWTH PLAN",
      title: "Elevate",
      description: "For growing businesses needing advanced functionality and a polished, scalable solution.",
      price: "£1234.56",
      status: "Available",
      features: [
        "Custom website with up to 10 pages",
        "Advanced UI/UX design tailored to your brand",
        "Responsive mobile-first design",
        "Performance optimization and SEO",
        "E-commerce integration or advanced forms",
        "CMS integration (e.g., headless CMS)",
        "Up to 4 revisions",
        "1 month of post-launch support"
      ],
      buttonColor: "growth"
    },
    {
      type: "ENTERPRISE PLAN",
      title: "Scale",
      description: "Complete, scalable systems designed for businesses with complex needs and high growth ambitions.",
      price: "£1234.56",
      status: "Limited",
      features: [
        "Fully custom website with unlimited pages",
        "Premium UI/UX design with custom animations and interactions",
        "JAMstack architecture for top-tier performance",
        "Advanced e-commerce solutions",
        "Headless CMS with personalized content",
        "Unlimited revisions during development",
        "3 months of post-launch support and ongoing optimisation",
        "Dedicated account manager"
      ],
      buttonColor: "starter"
    }
  ];

  return (
    <div className={styles.pricingSection}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.label}>// PRICING</div>
        <h2 className={styles.title}>Ready to upgrade your business?</h2>
      </div>

      {/* Pricing Cards Container */}
      <div className={styles.cardsContainer}>
        {plans.map((plan, index) => (
          <div
            key={plan.title}
            className={`${styles.card} ${index === 1 ? styles.popularCard : ''}`}
          >
            {index === 1 && (
              <div className={styles.popularBadge}>
                <span>Popular</span>
              </div>
            )}
            
            {/* Plan Header */}
            <div className={styles.planHeader}>
              <div className={styles.planType}>
                <span className={styles.typeLabel}>// {plan.type}</span>
                <span className={`${styles.status} ${styles[plan.status.toLowerCase()]}`}>
                  <span className={styles.statusDot}></span>
                  {plan.status}
                </span>
              </div>
              <h3 className={styles.planTitle}>{plan.title}</h3>
              <p className={styles.planDescription}>{plan.description}</p>
            </div>

            {/* Pricing */}
            <div className={styles.pricing}>
              <span className={styles.price}>{plan.price}</span>
              <span className={styles.period}>PER <br /> MONTH</span>
            </div>

            {/* Features */}
            <div className={styles.features}>
              <div className={styles.featuresTitle}>What's included:</div>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <Image
                      src={logo}
                      alt="logo"
                      height={16}
                      width={16}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button className={`${styles.ctaButton} ${styles[plan.buttonColor]}`}>
              Get Started
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
        ))}
      </div>

      {/* Bottom CTA */}
      <div className={styles.bottomCta}>
        <p>Can't find what you're looking for? Schedule a call with us today.</p>
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

export default PricingSection;
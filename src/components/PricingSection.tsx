import Image from 'next/image';
import React from 'react';
import logo from '../@content/assets/images/Group 783.svg'

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
      buttonColor: "bg-[#45C5AF]"
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
      buttonColor: "bg-[#13678A]"
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
      buttonColor: "bg-[#45C5AF]"
    }
  ];

  return (
    <div className="bg-[#F5F5F5] px-18 py-4">
      {/* Header */}
      <div className="text-left mb-8">
        <div className="font-mono font-normal text-[#272727] text-[15px] mb-2">// PRICING</div>
        <h2 className="font-bold leading-tight text-[#272727] text-[24px]/22 mb-10">Ready to upgrade your business?</h2>
      </div>

      {/* Pricing Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {plans.map((plan, index) => (
          <div
            key={plan.title}
            className={`relative p-3 rounded-3xl ${
              index === 1 ? 'bg-white shadow-lg' : 'border border-gray-200 bg-white'
            }`}
          >
            {index === 1 && (
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <span className="bg-[#13678A] text-white px-8 py-1 rounded-xl text-[14px]">
                  Popular
                </span>
              </div>
            )}
            
            {/* Plan Header */}
            <div className="mb-2">
              <div className="flex items-center justify-between ">
                <span className="font-mono font-normal text-[#272727] text-[15px] mb-2">// {plan.type}</span>
                <span className={`flex items-center ${
                  plan.status === 'Limited' ? 'text-yellow-500' : 'text-emerald-400'
                }`}>
                  <span className="w-2 h-2 rounded-full mr-2 bg-current"></span>
                  {plan.status}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className="text-[#272727] text-[15px]/6">{plan.description}</p>
            </div>

            {/* Pricing */}
            <div className="mb-2 flex flex-row  items-center w-full ml-2">
              <span className="text-[52px] font-normal">{plan.price}</span>
              <span className="text-gray-500 ml-2 text-[12px]">PER <br /> MONTH</span>
            </div>

            {/* Features */}
            <div className="mb-4">
              <div className="text-[#272727] text-[15px]">What's included:</div>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-[#8A8A8A] text-[12px]">
                    <Image
                      src={logo}
                      alt="logo"
                      height={16}
                      width={16}
                      className="mr-2"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button
              className={` ${plan.buttonColor} text-white px-4 py-1 rounded-full hover:opacity-90 flex flex-row transition-opacity`}
            >
              Get Started
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
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center flex flex-col items-center">
        <p className="text-[#272727] text-[15px] mb-4">
          Can't find what you're looking for? Schedule a call with us today.
        </p>
        <button className="bg-white border border-gray-200 text-gray-800 py-1 px-2 rounded-full hover:bg-gray-50 transition-colors flex flex-row items-center justify-center">
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

export default PricingSection;
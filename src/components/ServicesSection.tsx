import React from 'react';
import laptop from '../@content/assets/images/Group 720.svg'
import palette from '../@content/assets/images/Group 722.svg'
import shopping from '../@content/assets/images/Group 724.svg'
import network from '../@content/assets/images/Group 726.svg'
import barchart from '../@content/assets/images/Group 728.svg'
import Image from 'next/image';

const ServicesSection = () => {
  const services = [
    {
      icon: laptop,
      title: "Custom Web Development",
      description: "We build tailored web solutions that are scalable, secure, and designed for your business. From concept to deployment, we deliver code that's clean, efficient, and built for performance."
    },
    {
      icon: palette,
      title: "UI/UX Design",
      description: "Our user-centric design approach ensures that every interaction is seamless and intuitive, creating a cohesive experience that delights your customers while enhancing usability and engagement."
    },
    {
      icon: shopping,
      title: "E-commerce Solutions",
      description: "We create powerful e-commerce platforms that optimize conversions and streamline your operations. From custom storefronts to backend integrations, we provide the tools to sell smarter and scale faster."
    },
    {
      icon: network,
      title: "System Integration",
      description: "Unify your business systems with seamless integrations that streamline workflows, improve data accuracy, and reduce inefficiencies. Our solutions connect your tools to work smarter, not harder."
    },
    {
      icon: barchart,
      title: "Digital Strategy and Consulting",
      description: "We provide expert digital strategy and consulting services that align technology with your business goals. Let us help you navigate the digital landscape and build solutions that deliver results."
    }
  ];

  return (
    <div className="w-full bg-white min-h-screen p-16 relative overflow-hidden border border-b border-gray-300">
      {/* Grid Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(69, 197, 175, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(69, 197, 175, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '150px 150px',
          backgroundPosition: '50px 0px'
        }}
      />
      
      {/* Radial Blobs */}
      <div 
        className="absolute -right-64 -bottom-64 w-[800px] h-[800px] opacity-28"
        style={{
          background: 'radial-gradient(circle, #45C5AF 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute right-36 top-18 w-[600px] h-[600px] opacity-28"
        style={{
          background: 'radial-gradient(circle, #45C5AF 0%, transparent 70%)'
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-[13px] text-[#272727] font-mono mb-2">//   WHAT WE DO</div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-extrabold leading-tight text-[#1a1a1a] font-serif text-[26px]/12 mb-2">
                Custom Development & Design<br />
                Services Tailored for Your Business
              </h1>
              
              <p className="text-[#333333] text-[16px]/12 font-normal leading-relaxed">
                Our solutions are built around your specific needs. <br />
                Whether it's custom development, UI/UX design, <br />
                or full-stack integrations, we ensure that every piece <br />
                of your online ecosystem is seamlessly connected and <br />
                optimized for performance.
              </p>
            </div>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 my-6">
                  <div className="bg-gradient-to-b from-white to-[#BFEAE0] p-1 rounded-lg shadow-md border border-gray-200">
                    <Image src={service.icon} alt={service.title} className="w-12 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] font-serif text-[18px] leading-tight mb-1">{service.title}</h3>
                    <p className="text-[#333333] text-[14px]/12 font-normal max-w-[90%] leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-full">
            <div className="absolute top-3 left-8 w-46 h-76 bg-white rounded-xl shadow-md border border-gray-300 flex items-center">
              <div className="p-4 text-center text-[#D9D9D9] text-[20px] font-bold">
                Website example placeholder
                <div className="text-[12px] text-[#D9D9D9] mt-2">Scroll with section</div>
              </div>
            </div>
            <div className="absolute -top-12 left-60 w-46 h-76 bg-white rounded-xl shadow-md border border-gray-300 flex items-center">
              <div className="p-4 text-center text-[#D9D9D9] text-[20px] font-bold">
                Website example placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
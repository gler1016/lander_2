import React from 'react';

const ApproachSection = () => {
  return (
    <div className="w-full bg-white px-4 py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute right-0 top-0 w-3/4 h-full bg-gradient-to-br from-emerald-50/40 via-emerald-100/30 to-emerald-50/20 rounded-[100%] blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle at right, rgba(167, 243, 208, 0.2) 0%, rgba(167, 243, 208, 0.1) 50%, rgba(167, 243, 208, 0) 100%)'
        }}
        aria-hidden="true"
      />
      
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold text-gray-900">
          Our Approach: Simple, Streamlined, Successful
        </h2>
      </div>

      <div className="space-y-4 max-w-3xl relative">
        {/* Step 1 */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100">
          <div className="text-gray-400 text-sm font-light mb-3">// STEP 1</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Subscribe & Request
          </h3>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Become a part of our network by subscribing to our services. 
            Once you're on board, simply submit your request for a new project, 
            and we'll get started on turning your vision into reality.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100">
          <div className="text-gray-400 text-sm font-light mb-3">// STEP 2</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Design & Build
          </h3>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Our team gets to work, crafting bespoke designs and developing 
            the core functionality of your project. From the initial concept 
            to full implementation, we focus on creating solutions that are 
            both beautiful and high-performing.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100">
          <div className="text-gray-400 text-sm font-light mb-3">// STEP 3</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Refine & Evolve
          </h3>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            We believe in continuous improvement. After delivering the 
            initial version, we work closely with you to refine the product 
            based on feedback and evolving needs, ensuring it stays aligned 
            with your business growth.
          </p>
        </div>

        {/* Placeholder for animated graphic */}
        <div className="absolute -right-64 bottom-0 w-80 h-96 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-300 text-center p-4">
          Animated graphic placeholder
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;
import React from 'react';
import { ChevronRight, Code, Lightbulb, FolderOpen } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className=" w-full px-16 py-8 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="text-gray-600 text-sm tracking-wide">// WHY CHOOSE US</div>
          
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            Why Businesses Trust Us to Power Their Digital Transformation
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            We deliver more than just a website. We build scalable, high-performance systems that provide measurable results for your business.
          </p>
          
          <button className="inline-flex items-center px-6 py-3 bg-emerald-400 text-white rounded-full hover:bg-emerald-500 transition-colors">
            Let's talk
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Framework Card */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Proven development frameworks
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We use industry-standard technologies that ensure your solutions are built to grow with your business.
              </p>
            </div>
          </div>

          {/* Solutions Card */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tailored, custom-built solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We design and develop systems specifically for your business, ensuring they meet your unique needs.
              </p>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <FolderOpen className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Competitive pricing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We offer cost-effective solutions that deliver premium results, providing value without breaking your budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
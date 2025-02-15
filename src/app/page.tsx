'use client';

import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';
import logo from '../@content/assets/images/TheDevCasa_Logo@2x.png'
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ApproachSection from '@/components/ApproachSection';

const Page = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-gray-50 via-pink-50 to-[#dafdb9] px-16 pt-12 relative overflow-hidden">
      {/* Logo - Positioned independently */}
      <div className="relative -top-8 left-14 z-20">
        <Image 
          src={logo}
          alt='logo'
          height={89}
          width={83}
        />
      </div>

      {/* Fixed Navbar */}
      <nav className="fixed top-16 right-36 z-10 bg-white rounded-full px-5 py-0.5 shadow-md">
        <div className="flex items-center space-x-4 gap-8 justify-between text-[15px]">
          <ThemeToggle />
          <span className="text-gray-600">EN</span>
          <span className="text-gray-600">About</span>
          <span className="text-gray-600">Work</span>
          <span className="text-gray-600">Pricing</span>
          <button className=" flex gap-2">
            <div className='rounded-full bg-[#45C5AF] text-white p-1 flex items-center justify-center text-center'>
          <svg
                className="w-5 h-5"
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
            </div>
            <p className='flex items-center text-[#45C5AF] font-medium'>
            GET STARTED
            </p>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-2 px-6 pt-32">
        <div className="max-w-3xl mt-6">
          <div className="font-mono font-normal text-[#272727] text-[16px]">
            // ENGINEERED DIGITAL TRANSFORMATION
          </div>
          <h1 className="font-bold leading-tight text-[#272727] text-[52px]/6">
            Custom Development
          </h1>
          <h2 className="font-bold leading-tight text-[#272727] text-[52px]/6">
            Seamless Design
          </h2>
          <h3 className="text-[62px] font-extrabold leading-tight bg-gradient-to-b from-[#45C5AF] to-[#13678A] text-transparent bg-clip-text">
            Powerful Results
          </h3>
          <p className="text-[15px] font-bold mb-6 text-gray-500">
            Your partner in custom development and design that <span className='text-black'>transforms your digital landscape.</span> 
          </p>
          <div className="flex space-x-4 gap-3">
            <button className="bg-[#45C5AF] text-white px-4 py-1 rounded-full font-medium flex items-center shadow-md cursor-pointer">
              Let's talk
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
            <button className="bg-white text-gray-700 px-4 py-1 rounded-full font-medium flex items-center shadow-md cursor-pointer">
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
      </main>

      {/* Bottom Blob */}
      <div 
        style={{
          position: 'absolute',
          bottom: '-85%',
          right: '-36%',
          width: '1500px',
          height: '1500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, #45C5AF 0%, rgba(69, 197, 175, 0.1) 45%, rgba(69, 197, 175, 0) 70%)'
        }}
      />
    </div>
    <ServicesSection />
    <WhyChooseUs />
    <ApproachSection />
  </>
  );
};

export default Page;
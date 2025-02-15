import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../@content/assets/images/TheDevCasa_Logo@2x.png'

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] py-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-8">
          {/* TheDevCasa Column */}
          <div>
            <h3 className="text-[#13678A] font-semibold mb-2 text-[18px]">TheDevCasa</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-[18px] text-[#272727] font-normal font-mono hover:text-gray-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[18px] text-[#272727] font-normal hover:text-gray-600">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-[18px] text-[#272727] font-normal  hover:text-gray-600">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-[#13678A] font-semibold mb-2 text-[18px]">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-[18px] text-[#272727]  font-normal hover:text-gray-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-[18px] text-[#272727] font-normal hover:text-gray-600">
                  Legal Information
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-[18px] text-[#272727] font-normal hover:text-gray-600">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/contact" className=" text-[18px] text-[#272727] font-normalhover:text-gray-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Empty Columns for Spacing */}
          <div></div>

          {/* Logo and Copyright */}
          <div className="flex flex-row items-center justify-between">
            <div className="text-gray-400">
              TheDevCasa 2024 ©
            </div>
            <Image
              src={logo} // Make sure to update this path to your actual logo path
              alt="TheDevCasa Logo"
              width={60}
              height={60}
              className=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
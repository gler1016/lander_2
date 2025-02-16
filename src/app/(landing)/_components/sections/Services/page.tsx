// page.tsx
'use client';

import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';
import logo from '../../../../../@content/assets/images/TheDevCasa_Logo@2x.png';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ApproachSection from '@/components/ApproachSection';
import WhatWeUse from '@/components/WhatWeUse';
import Work from '@/components/Work';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import styles from './page.module.scss';
import Footer from '@/components/Footer';
import LanguageSelector from '@/components/LanguageSelector';
import { useTheme } from '@/contexts/ThemeContext';
import { log } from 'console';

const Services = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
    <div className={`${styles.container} ${theme === "dark" ? styles.conDark : ''}`}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image 
          src={logo}
          alt='logo'
          height={85}
          width={80}
        />
      </div>

      {/* Fixed Navbar */}
      <nav className={`${styles.navbar} ${theme === "dark" ? styles.navDark : styles.navWhite}`}>
        <div className={styles.navContent}>
          <ThemeToggle />
          {/* <span className={styles.navLink}>EN</span> */}
          <LanguageSelector />
          <span className={`${styles.navLink} ${theme === "dark" ? styles.linkDark : ''}`}>About</span>
          <span className={`${styles.navLink} ${theme === "dark" ? styles.linkDark : ''}`}>Work</span>
          <span className={`${styles.navLink} ${theme === "dark" ? styles.linkDark : ''}`}>Pricing</span>
          <button className={styles.getStartedBtn}>
            <div className={styles.arrowCircle}>
              <svg
                className={styles.arrow}
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
            <p className={styles.btnText}>
              GET STARTED
            </p>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.tagline}>
            // ENGINEERED DIGITAL TRANSFORMATION
          </div>
          <h1 className={styles.heading}>
            Custom Development
          </h1>
          <h2 className={styles.heading}>
            Seamless Design
          </h2>
          <h3 className={styles.gradientHeading}>
            Powerful Results
          </h3>
          <p className={styles.description}>
            Your partner in custom development and design that <span className={styles.highlight}>transforms your digital landscape.</span> 
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn}>
              Let's talk
              <svg
                className={styles.btnArrow}
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
            <button className={styles.secondaryBtn}>
              Schedule a consultation
              <svg
                className={styles.btnArrow}
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
      <div className={`${styles.blob} ${theme === "dark" ? styles.navDark : ''}`} />
    </div>
    <ServicesSection />
    <WhyChooseUs />
    <ApproachSection />
    <WhatWeUse />
    <Work />
    <PricingSection />
    <FAQSection />
    <Footer />
  </>
  );
};

export default Services;
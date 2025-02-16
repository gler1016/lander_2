import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import styles from './WhyChooseUs.module.scss';
import box from '../@content/assets/images/Group 730.svg';
import bulb from '../@content/assets/images/Group 734.svg';
import wallet from '../@content/assets/images/Group 732.svg';


const WhyChooseUs = () => {
  return (
    <div className={styles.whyChooseUs}>
      <div className={styles.grid}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <div className={styles.subtitle}>// WHY CHOOSE US</div>
          
          <h2 className={styles.title}>
            Why Businesses Trust Us to <br /> Power Their Digital Transformation
          </h2>
          
          <p className={styles.description}>
            We deliver more than just a website. We build scalable, <br /> high-performance systems that provide measurable <br /> results for your business.
          </p>
          
          <button className={styles.button}>
            <p className={styles.para}>Let's talk</p>
            <ChevronRight className={styles.icon} />
          </button>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          {/* Framework Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <Image
                  src={box}
                  alt='box'
                  className={styles.icon}
                />
              </div>
              <h3 className={styles.cardTitle}>
                Proven development frameworks
              </h3>
            </div>
            <div>
              <p className={styles.cardDescription}>
                We use industry-standard technologies that ensure your <br /> solutions are built to grow with your business.
              </p>
            </div>
          </div>

          {/* Solutions Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <Image
                  src={bulb}
                  alt='bulb'
                  className={styles.icon}
                />
              </div>
              <h3 className={styles.cardTitle}>
                Tailored, custom-built solutions
              </h3>
            </div>
            <div>
              <p className={styles.cardDescription}>
                We design and develop systems specifically for your<br />business, ensuring they meet your unique needs.
              </p>
            </div>
          </div>

          {/* Pricing Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <Image
                  src={wallet}
                  alt='wallet'
                  className={styles.icon}
                />
              </div>
              <h3 className={styles.cardTitle}>
                Competitive pricing
              </h3>
            </div>
            <div>
              <p className={styles.cardDescription}>
                We offer cost-effective solutions that deliver premium <br />results, providing value without breaking your budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
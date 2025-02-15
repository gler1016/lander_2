import React from 'react';
import styles from './ApproachSection.module.scss';

const ApproachSection = () => {
  return (
    <div className={styles.approachSection}>
      {/* Grid Background */}
      <div className={styles.gridBackground} />

      {/* Radial Gradients */}
      <div className={styles.radialGradient1} />
      <div className={styles.radialGradient2} />
      
      {/* Gradient Overlay */}
      <div className={styles.gradientOverlay} />

      <div className={styles.content}>
        <h2 className={styles.title}>
          Our Approach: Simple, Streamlined, Successful
        </h2>

        <div className={styles.stepsContainer}>
          {/* Step 1 */}
          <div className={styles.step}>
            <div className={styles.stepLabel}>// STEP 1</div>
            <h3 className={styles.stepTitle}>
              Subscribe & Request
            </h3>
            <p className={styles.stepDescription}>
              Become a part of our network by subscribing to our services. <br /> 
              Once you're on board, simply submit your request for a new project, <br />
              and we'll get started on turning your vision into reality.<br />
            </p>
          </div>

          {/* Step 2 */}
          <div className={styles.step}>
            <div className={styles.stepLabel}>// STEP 2</div>
            <h3 className={styles.stepTitle}>
              Design & Build
            </h3>
            <p className={styles.stepDescription}>
              Our team gets to work, crafting bespoke designs and developing <br />
              the core functionality of your project. From the initial concept<br /> 
              to full implementation, we focus on creating solutions that are <br />
              both beautiful and high-performing.
            </p>
          </div>

          {/* Step 3 */}
          <div className={`${styles.step} ${styles.lastStep}`}>
            <div className={styles.stepLabel}>// STEP 3</div>
            <h3 className={styles.stepTitle}>
              Refine & Evolve
            </h3>
            <p className={styles.stepDescription}>
              We believe in continuous improvement. After delivering the <br />
              initial version, we work closely with you to refine the product <br />
              based on feedback and evolving needs, ensuring it stays aligned <br />
              with your business growth.
            </p>
          </div>
        </div>

        {/* Placeholder box */}
        <div className={styles.placeholderBox}>
          Animated <br /> graphic <br /> placeholder
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;
import React from 'react';
import { SiGraphql, SiJamstack, SiTailwindcss } from '@icons-pack/react-simple-icons';
import { DiNodejs } from "react-icons/di";
import { FaAws, FaReact } from 'react-icons/fa6';
import styles from './WhatWeUse.module.scss';

const WhatWeUse = () => {
  return (
    <section className={styles.section}>
      {/* Comment header */}
      <div className={styles.header}>
        // WHAT WE USE
      </div>
      
      {/* Main heading */}
      <h2 className={styles.title}>
        Cutting-Edge Technologies, Maximum Impact
      </h2>
      
      {/* Description text */}
      <p className={styles.description}>
        We utilise the latest and most powerful development tools to build innovative, high-performance solutions. From modern frameworks like <br /> 
        React and Next.js to scalable infrastructure with AWS and Kubernetes, our tech stack ensures your projects are not only future-proof but also <br /> 
        optimised for speed, security, and growth. With a focus on efficiency and flexibility, we create systems that adapt to your business's evolving needs.
      </p>
      
      {/* Technology logos */}
      <div className={styles.techGrid}>
        <div className={`${styles.techItem} ${styles.column}`}>
          <SiTailwindcss className={`${styles.icon} ${styles.tailwind}`} />
          <p className={`${styles.label} ${styles.bold} ${styles.medium}`}>Tailwind CSS</p>
        </div>

        <div className={styles.techItem}>
          <FaReact className={`${styles.icon} ${styles.react}`} />
          <p className={`${styles.label} ${styles.normal} ${styles.large}`}>React</p>
        </div>

        <div className={`${styles.techItem} ${styles.withGap}`}>
          <SiJamstack className={`${styles.icon} ${styles.jamstack}`} />
          <p className={`${styles.label} ${styles.bold} ${styles.large}`}>Jamstack</p>
        </div>

        <div className={styles.techItem}>
          <DiNodejs className={`${styles.icon} ${styles.nodejs}`} />
        </div>

        <div className={styles.techItem}>
          <FaAws className={`${styles.icon} ${styles.aws}`} />
        </div>

        <div className={styles.techItem}>
          <SiGraphql className={`${styles.icon} ${styles.graphql}`} />
          <p className={`${styles.label} ${styles.normal} ${styles.medium}`}>GraphQL</p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeUse;
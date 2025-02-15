// ServicesSection.tsx
import React from 'react';
import laptop from '../@content/assets/images/Group 720.svg'
import palette from '../@content/assets/images/Group 722.svg'
import shopping from '../@content/assets/images/Group 724.svg'
import network from '../@content/assets/images/Group 726.svg'
import barchart from '../@content/assets/images/Group 728.svg'
import Image from 'next/image';
import styles from './ServicesSection.module.scss';

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
    <div className={styles.container}>
      {/* Grid Background */}
      <div className={styles.gridBackground} />
      
      {/* Radial Blobs */}
      <div className={styles.bottomBlob} />
      <div className={styles.topBlob} />

      <div className={styles.content}>
        <div className={styles.sectionTag}>//   WHAT WE DO</div>
        
        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            <div className={styles.header}>
              <h1 className={styles.title}>
                Custom Development & Design<br />
                Services Tailored for Your Business
              </h1>
              
              <p className={styles.description}>
                Our solutions are built around your specific needs. <br />
                Whether it's custom development, UI/UX design, <br />
                or full-stack integrations, we ensure that every piece <br />
                of your online ecosystem is seamlessly connected and <br />
                optimized for performance.
              </p>
            </div>
            
            <div className={styles.servicesList}>
              {services.map((service, index) => (
                <div key={index} className={styles.serviceItem}>
                  <div className={styles.iconContainer}>
                    <Image src={service.icon} alt={service.title} className={styles.icon} />
                  </div>
                  <div className={styles.serviceContent}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.rightColumn}>
            <div className={styles.websiteExample1}>
              <div className={styles.placeholderContent}>
                Website example placeholder
                <div className={styles.scrollText}>Scroll with section</div>
              </div>
            </div>
            <div className={styles.websiteExample2}>
              <div className={styles.placeholderContent}>
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
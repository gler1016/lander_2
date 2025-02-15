import React from 'react';
import styles from './Work.module.scss';

const Work = () => {
  const workItems = Array(4).fill({
    title: "Work placeholder",
    description: "clicks to expand below"
  });

  return (
    <section className={styles.section}>
      <div className={styles.gridBackground} />

      {/* Header comment */}
      <div className={styles.header}>
        // OUR WORK
      </div>

      {/* Main heading */}
      <h2 className={styles.title}>
        Proven Success with Industry Leaders
      </h2>

      {/* Description */}
      <p className={styles.description}>
        Discover how we've helped businesses like yours enhance their <br /> 
        digital presence with custom development solutions.
      </p>

      {/* Work grid */}
      <div className={styles.grid}>
        {workItems.map((item, index) => (
          <div key={index} className={styles.workItem}>
            <p className={styles.itemText}>
              {item.title}
            </p>
            <p className={styles.itemText}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
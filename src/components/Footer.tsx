import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';
import logo from '../@content/assets/images/TheDevCasa_Logo@2x.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* TheDevCasa Column */}
          <div className={styles.column}>
            <h3 className={styles.title}>TheDevCasa</h3>
            <ul className={styles.list}>
              <li>
                <Link href="/about" className={`${styles.link} ${styles.mono}`}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className={styles.link}>
                  Work
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={styles.link}>
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className={styles.column}>
            <h3 className={styles.title}>Legal</h3>
            <ul className={styles.list}>
              <li>
                <Link href="/privacy" className={styles.link}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal" className={styles.link}>
                  Legal Information
                </Link>
              </li>
              <li>
                <Link href="/cookies" className={styles.link}>
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Empty Columns for Spacing */}
          <div></div>

          {/* Logo and Copyright */}
          <div className={styles.logoSection}>
            <div className={styles.copyright}>
              TheDevCasa 2024 ©
            </div>
            <Image
              src={logo}
              alt="TheDevCasa Logo"
              width={60}
              height={60}
              className={styles.logo}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
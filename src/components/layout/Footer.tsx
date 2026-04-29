"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { useLanguage } from '@/context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandSection}>
          <Image src="/logo.jpg" alt="Orgalth Logo" width={140} height={48} style={{ objectFit: 'contain' }} />
          <p className={styles.brandText}>
            {t('Human-First Agriculture Services for Small & Marginal Farmers.', 'छोटे और सीमांत किसानों के लिए मानव-प्रथम कृषि सेवाएं।')}
          </p>
        </div>
        
        <div className={styles.linksSection}>
          <h4 className={styles.heading}>{t('Services', 'सेवाएं')}</h4>
          <ul>
            <li><Link href="/equipment">{t('Equipment', 'उपकरण')}</Link></li>
            <li><Link href="/advisory">{t('Advisory', 'सलाह')}</Link></li>
            <li><Link href="/sell-produce">{t('Sell Produce', 'उपज बेचें')}</Link></li>
          </ul>
        </div>
        
        <div className={styles.linksSection}>
          <h4 className={styles.heading}>{t('Company', 'कंपनी')}</h4>
          <ul>
            <li><Link href="/about">{t('About Us', 'हमारे बारे में')}</Link></li>
            <li><Link href="/blog">{t('Blog', 'ब्लॉग')}</Link></li>
            <li><Link href="/impact">{t('Impact', 'प्रभाव')}</Link></li>
            <li><Link href="/partner">{t('Become Partner', 'पार्टनर बनें')}</Link></li>
          </ul>
        </div>

        <div className={styles.contactSection}>
          <h4 className={styles.heading}>{t('Contact', 'संपर्क करें')}</h4>
          <p>📞 +91 6350584687</p>
          <p>📧 support@orgalth.com</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p>&copy; {new Date().getFullYear()} {t('Orgalth. All rights reserved.', 'ऑर्गल्थ. सर्वाधिकार सुरक्षित.')}</p>
        </div>
      </div>
    </footer>
  );
};

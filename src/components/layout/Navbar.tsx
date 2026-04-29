"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { Button } from '../ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { label: t('Home', 'मुख्य पृष्ठ'), href: '/' },
    { label: t('Services', 'सेवाएं'), href: '/services' },
    { label: t('Blog', 'ब्लॉग'), href: '/blog' },
    { label: t('About', 'हमारे बारे में'), href: '/about' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logoContainer}>
          <div style={{ position: 'relative', width: '140px', height: '50px' }}>
            <Image 
              src="/logo.jpg" 
              alt="Orgalth Logo" 
              fill
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          <button className={styles.langToggle} onClick={toggleLanguage}>
            {language === 'EN' ? 'A/अ' : 'अ/A'}
          </button>
          
          <div className={styles.desktopOnly} style={{ display: 'flex', gap: '0.5rem' }}>
            <Link href="/login" style={{ textDecoration: 'none' }}>
              <Button variant="outline" size="small">
                {t('Login', 'लॉगिन')}
              </Button>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Button variant="primary" size="small">
                {t('Contact Us', 'संपर्क करें')}
              </Button>
            </Link>
          </div>

          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={styles.mobileLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link 
              href="/contact" 
              className={styles.mobileLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('Contact Us', 'संपर्क करें')}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

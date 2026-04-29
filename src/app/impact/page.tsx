"use client";

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';

export default function Impact() {
  const { t } = useLanguage();
  const impactMetrics = [
    { value: '10,000+', label: 'Farmers Onboarded', icon: '👨‍🌾' },
    { value: '₹5 CR+', label: 'Capital Cost Saved', icon: '📉' },
    { value: '15-20%', label: 'Average Yield Increase', icon: '📈' },
    { value: '1,200+', label: 'Micro-jobs Generated', icon: '💼' }
  ];

  return (
    <div className={styles.impactContainer}>
      <header className={styles.header}>
        <div className="container">
          <h1 className="gradient-text">{t('Our Impact', 'हमारा प्रभाव')}</h1>
          <p>{t('Measuring our success by the prosperity of the farming communities we serve.', 'समुदायों की समृद्धि से अपनी सफलता को मापना।')}</p>
        </div>
      </header>

      <div className={`container ${styles.content}`}>
        <div className={styles.metricsGrid}>
          {impactMetrics.map((metric, idx) => (
            <div key={idx} className={`glass-panel ${styles.metricCard}`}>
              <div className={styles.metricIcon}>{metric.icon}</div>
              <h2>{metric.value}</h2>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>

        <div className={styles.storySection}>
          <div className={styles.storyContent}>
            <h2>{t('Transforming Rural Ecosystems', 'ग्रामीण पारिस्थितिकी तंत्र को बदलना')}</h2>
            <p>
              {t('At Orgalth, impact isn\'t just an afterthought—it\'s our core operating metric. By providing access to mechanized equipment without the burden of ownership, we are helping marginal farmers escape the debt trap.', 'ऑर्गल्थ में, प्रभाव केवल एक विचार नहीं है - यह हमारा मूल ऑपरेटिंग मीट्रिक है। स्वामित्व के बोझ के बिना यंत्रीकृत उपकरणों तक पहुंच प्रदान करके, हम सीमांत किसानों को कर्ज के जाल से बचने में मदद कर रहे हैं।')}
            </p>
            <p>
              {t('Simultaneously, our local partnership model creates decentralized employment opportunities, curbing rural-to-urban migration by making agriculture a profitable, technology-driven enterprise once again.', 'साथ ही, हमारे स्थानीय साझेदारी मॉडल से विकेन्द्रीकृत रोजगार के अवसर पैदा होते हैं, जिससे कृषि को फिर से लाभदायक, प्रौद्योगिकी-संचालित उद्यम बनाकर ग्रामीण से शहरी प्रवास पर अंकुश लगता है।')}
            </p>
          </div>
          <div className={styles.visuals}>
            <div className={styles.mapGraphic} style={{ position: 'relative', overflow: 'hidden', padding: 0, minHeight: '300px' }}>
              <Image 
                src="/images/impact_community.png" 
                alt="Orgalth Community Impact"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className={styles.pulse} style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 10, background: 'rgba(255,255,255,0.9)', color: '#333', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 'bold' }}>📍 {t('Active Regions', 'सक्रिय क्षेत्र')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

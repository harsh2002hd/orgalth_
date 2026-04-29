"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function SellProduce() {
  const { t } = useLanguage();
  const steps = [
    {
      num: '1',
      title: t('Schedule Pickup', 'पिकअप शेड्यूल करें'),
      desc: t('Inform us about your harvest volume and preferred date through a simple call or WhatsApp message.', 'एक साधारण कॉल या व्हाट्सएप संदेश के माध्यम से हमें अपनी फसल की मात्रा और पसंदीदा तारीख के बारे में बताएं।'),
      icon: '📱'
    },
    {
      num: '2',
      title: t('Orgalth Collects', 'ऑर्गल्थ इकट्ठा करता है'),
      desc: t('Our logistics team arrives at your farm gate with reliable transport, saving you the trip to the mandis.', 'हमारी लॉजिस्टिक्स टीम आपके खेत के गेट पर विश्वसनीय परिवहन के साथ पहुंचती है, जिससे आपका मंडियों का चक्कर बचता है।'),
      icon: '🚛'
    },
    {
      num: '3',
      title: t('Grading & Selling', 'ग्रेडिंग और बिक्री'),
      desc: t('Transparent grading is done on the spot. We leverage our network to secure the best market price.', 'पारदर्शी ग्रेडिंग मौके पर ही की जाती है। सर्वोत्तम बाजार मूल्य प्राप्त करने के लिए हम अपने नेटवर्क का लाभ उठाते हैं।'),
      icon: '⚖️'
    },
    {
      num: '4',
      title: t('Instant Payment', 'त्वरित भुगतान'),
      desc: t('Get paid instantly into your bank account as soon as the terms are finalized—no waiting.', 'शर्तें तय होने के तुरंत बाद अपने बैंक खाते में तुरंत भुगतान प्राप्त करें - कोई प्रतीक्षा नहीं।'),
      icon: '💳'
    }
  ];

  return (
    <div className={styles.sellContainer}>
      <header className={styles.header}>
        <div className="container">
          <h1 className="gradient-text">{t('Sell Produce', 'उपज बेचें')}</h1>
          <p>{t('Get the best rates for your harvest with zero logistics hassle.', 'बिना किसी परेशानी के अपनी फसल के लिए सर्वोत्तम दरें प्राप्त करें।')}</p>
        </div>
      </header>

      <div className={`container ${styles.content}`}>
        <div className={styles.introSection}>
          <h2>{t('The Farm-to-Market Bridge', 'फार्म-टू-मार्केट ब्रिज')}</h2>
          <p>
            {t('We eliminate the middlemen so you retain maximum profit. Our transparent weighing and direct corporate tie-ups ensure you are rewarded fairly for your hard work.', 'हम बिचौलियों को खत्म करते हैं ताकि आपको अधिकतम लाभ हो। हमारी पारदर्शी वजन प्रणाली और सीधे कॉर्पोरेट गठजोड़ यह सुनिश्चित करते हैं कि आपको उचित प्रतिफल मिले।')}
          </p>
          <div style={{ position: 'relative', width: '100%', height: '350px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginTop: 'var(--spacing-lg)', boxShadow: 'var(--shadow-md)' }}>
            <Image 
              src="/images/logistics_market.png" 
              alt="Orgalth Logistics"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>

        <div className={styles.processSection}>
          <h2 className={styles.processTitle}>{t('How It Works', 'यह कैसे काम करता है')}</h2>
          <div className={styles.stepsContainer}>
            {steps.map((step, idx) => (
              <div key={idx} className={styles.stepCard}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <div className={styles.stepNum}>{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`glass-panel ${styles.ctaBanner}`}>
          <h2>{t('Ready to sell your next harvest?', 'क्या आप अपनी अगली फसल बेचने के लिए तैयार हैं?')}</h2>
          <p>{t('Register your upcoming crop with us today to lock in transport support.', 'परिवहन सहायता सुरक्षित करने के लिए आज ही अपनी आगामी फसल हमारे साथ पंजीकृत करें।')}</p>
          <Link href="/contact">
            <Button size="large">{t('Schedule Pickup', 'पिकअप शेड्यूल करें')}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

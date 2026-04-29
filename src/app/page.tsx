"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { LivePricing } from '@/components/ui/LivePricing';
import { LiveStats } from '@/components/ui/LiveStats';
import { UberBookingSystem } from '@/components/booking/UberBookingSystem';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const problems = [
    { titleEn: 'High Machinery Cost', titleHi: 'मशीनरी की उच्च लागत', descEn: 'Expensive tractors and tools are out of reach for small farmers.', descHi: 'छोटे किसानों के लिए महंगे ट्रैक्टर और उपकरण पहुंच से बाहर हैं।', icon: '💰' },
    { titleEn: 'Limited Advisory', titleHi: 'सीमित सलाह', descEn: 'Lack of expert knowledge on crops and pests.', descHi: 'फसलों और कीटों पर विशेषज्ञ ज्ञान की कमी।', icon: '❓' },
    { titleEn: 'Crop Losses', titleHi: 'फसल का नुकसान', descEn: 'Unpredictable weather and disease destroy yields.', descHi: 'अप्रत्याशित मौसम और बीमारियां पैदावार को नष्ट कर देती हैं।', icon: '🥀' },
    { titleEn: 'Low Digital Adoption', titleHi: 'कम डिजिटल अपनाना', descEn: 'Complex apps are hard to use for rural populations.', descHi: 'ग्रामीण आबादी के लिए जटिल ऐप का उपयोग करना कठिन है।', icon: '📱' }
  ];

  const solutions = [
    { titleEn: 'Equipment Rental', titleHi: 'उपकरण किराया', descEn: 'Rent high-quality machinery at hourly rates.', descHi: 'प्रति घंटा दरों पर उच्च गुणवत्ता वाली मशीनरी किराए पर लें।', icon: '🚜', link: '/equipment' },
    { titleEn: 'Expert Advisory', titleHi: 'विशेषज्ञ सलाह', descEn: 'Consultations with agricultural experts.', descHi: 'कृषि विशेषज्ञों के साथ परामर्श।', icon: '🌱', link: '/advisory' },
    { titleEn: 'Weather Alerts', titleHi: 'मौसम अलर्ट', descEn: 'Hyper-local weather and crop health alerts.', descHi: 'हाइपर-लोकल मौसम और फसल स्वास्थ्य अलर्ट।', icon: '🌦️', link: '/advisory' },
    { titleEn: 'Market Logistics', titleHi: 'मार्केट लॉजिस्टिक्स', descEn: 'Direct farm-to-market transportation.', descHi: 'सीधे फार्म-टू-मार्केट परिवहन।', icon: '🚚', link: '/sell-produce' }
  ];

  const features = [
    { textEn: 'No app required (Web-based)', textHi: 'कोई ऐप आवश्यक नहीं (वेब आधारित)', icon: '🌐' },
    { textEn: 'Local language friendly', textHi: 'स्थानीय भाषा अनुकूल', icon: '🗣️' },
    { textEn: 'Pay-per-use model', textHi: 'उपयोग के अनुसार भुगतान मॉडल', icon: '💳' },
    { textEn: 'Trusted village partners', textHi: 'विश्वसनीय ग्रामीण भागीदार', icon: '🤝' },
    { textEn: 'Simple UI for low-tech users', textHi: 'कम तकनीक वाले उपयोगकर्ताओं के लिए सरल यूआई', icon: '✨' }
  ];

  return (
    <div className={styles.homeContainer}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <h1 className="animate-fade-in-up gradient-text">
              {t('Empowering Farmers with Smart, Affordable Services', 'स्मार्ट, किफायती सेवाओं के साथ किसानों को सशक्त बनाना')}
            </h1>
            <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t('Book tractors, get expert advice, and sell produce — all in one place', 'ट्रैक्टर बुक करें, विशेषज्ञ सलाह लें और उपज बेचें - सब एक ही जगह पर')}
            </p>
            <div className={`${styles.ctaGroup} animate-fade-in-up`} style={{ animationDelay: '0.4s' }}>
              <Button size="large" onClick={() => document.getElementById('booking')?.scrollIntoView()}>{t('Book Service', 'सेवा बुक करें')}</Button>
              <Link href="/signup">
                <Button variant="outline" size="large">{t('Get Started', 'शुरू करें')}</Button>
              </Link>
            </div>
          </div>
          <div className={`${styles.heroImageWrapper} animate-fade-in-up`} style={{ animationDelay: '0.3s' }}>
             <div className={styles.heroImageContainer}>
                <Image 
                  src="/images/home_hero.png" 
                  alt="Orgalth Hero" 
                  width={600}
                  height={600}
                  className={styles.mainHeroImage}
                  priority
                />
                <div className={styles.floatingCard1}>
                  <span>🌿 {t('Crop Health', 'फसल स्वास्थ्य')}: 98%</span>
                </div>
                <div className={styles.floatingCard2}>
                  <span>🚜 {t('Tractor arriving', 'ट्रैक्टर आ रहा है')}</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className={`section-padding ${styles.problemSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t('Challenges Farmers Face', 'किसानों के सामने चुनौतियां')}</h2>
            <p>{t('We understand the hurdles in traditional farming.', 'हम पारंपरिक खेती की बाधाओं को समझते हैं।')}</p>
          </div>
          <div className={styles.problemGrid}>
            {problems.map((p, i) => (
              <Card key={i} className={styles.problemCard}>
                <div className={styles.problemIcon}>{p.icon}</div>
                <h3>{t(p.titleEn, p.titleHi)}</h3>
                <p>{t(p.descEn, p.descHi)}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solution Section */}
      <section className={`section-padding ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t('Our Solutions', 'हमारे समाधान')}</h2>
            <p>{t('Everything you need for a successful harvest.', 'एक सफल फसल के लिए आपकी ज़रूरत की हर चीज़।')}</p>
          </div>
          <div className={styles.servicesGrid}>
            {solutions.map((s, i) => (
              <Link href={s.link} key={i}>
                <Card hoverable className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{s.icon}</div>
                  <h3>{t(s.titleEn, s.titleHi)}</h3>
                  <p>{t(s.descEn, s.descHi)}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className={`section-padding ${styles.howItWorksSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t('How It Works', 'यह कैसे काम करता है')}</h2>
          </div>
          <div className={styles.stepsContainer}>
            {[
              { n: 1, tEn: 'Farmer sends request', tHi: 'किसान अनुरोध भेजता है' },
              { n: 2, tEn: 'Local partner schedules', tHi: 'स्थानीय भागीदार शेड्यूल करता है' },
              { n: 3, tEn: 'Service delivered', tHi: 'सेवा प्रदान की गई' },
              { n: 4, tEn: 'Payment & feedback', tHi: 'भुगतान और प्रतिक्रिया' }
            ].map((step) => (
              <div key={step.n} className={styles.stepItem}>
                <div className={styles.stepNum}>{step.n}</div>
                <h4>{t(step.tEn, step.tHi)}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Features Section */}
      <section className={`section-padding ${styles.featuresSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t('Why Orgalth?', 'ऑर्गल्थ क्यों?')}</h2>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <div key={i} className={styles.featureCard}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <span>{t(f.textEn, f.textHi)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Live Pricing Section */}
      <section className={`section-padding ${styles.pricingSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t('Live Market Rates', 'लाइव बाजार दरें')}</h2>
            <p>{t('Real-time pricing for equipment and services.', 'उपकरणों और सेवाओं के लिए रीयल-टाइम मूल्य निर्धारण।')}</p>
          </div>
          <LivePricing />
        </div>
      </section>

      {/* 7. Live Impact Stats */}
      <section className={`section-padding`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t('Our Growing Impact', 'हमारा बढ़ता प्रभाव')}</h2>
            <p>{t('Live platform statistics showing our reach.', 'हमारी पहुंच दिखाने वाले लाइव प्लेटफॉर्म आंकड़े।')}</p>
          </div>
          <LiveStats />
        </div>
      </section>

      {/* 8. Business Model Section */}
      <section className={`section-padding ${styles.businessSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t('Sustainable Growth Model', 'सतत विकास मॉडल')}</h2>
          </div>
          <div className="grid-3">
            <Card>
              <h4>{t('Equipment Commission', 'उपकरण कमीशन')}</h4>
              <p>{t('Small fee per rental hour.', 'प्रति किराये घंटे पर छोटा शुल्क।')}</p>
            </Card>
            <Card>
              <h4>{t('Advisory Fees', 'सलाहकार शुल्क')}</h4>
              <p>{t('Subscription or per-call advisory.', 'सदस्यता या प्रति-कॉल सलाह।')}</p>
            </Card>
            <Card>
              <h4>{t('Logistics Margin', 'लॉजिस्टिक्स मार्जिन')}</h4>
              <p>{t('Commission on successful sales.', 'सफल बिक्री पर कमीशन।')}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 9. Market Opportunity */}
      <section className={`section-padding ${styles.opportunitySection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t('The Opportunity', 'अवसर')}</h2>
          </div>
          <div className={styles.oppGrid}>
            <div className={styles.oppCard}>
              <h4>$200B+</h4>
              <p>{t('Total Addressable Market in India Agri-services.', 'भारत कृषि सेवाओं में कुल संबोधन योग्य बाजार।')}</p>
            </div>
            <div className={styles.oppCard}>
              <h4>120M+</h4>
              <p>{t('Small and marginal farmers needing mechanization.', 'यंत्रीकरण की आवश्यकता वाले छोटे और सीमांत किसान।')}</p>
            </div>
            <div className={styles.oppCard}>
              <h4>30%</h4>
              <p>{t('Average income increase for Orgalth farmers.', 'ऑर्गल्थ किसानों के लिए औसत आय में वृद्धि।')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Booking Section */}
      <section id="booking" className={`section-padding ${styles.bookingSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 style={{ color: 'white' }}>{t('Book Your Service', 'अपनी सेवा बुक करें')}</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>{t('Uber-style instant matching with nearby partners.', 'आस-पास के भागीदारों के साथ उबर-शैली त्वरित मिलान।')}</p>
          </div>
          <UberBookingSystem />
        </div>
      </section>
    </div>
  );
}

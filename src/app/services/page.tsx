"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  
  const serviceItems = [
    {
      id: 'land',
      title: t('Find & Lease Land', 'भूमि खोजें और लीज पर लें'),
      image: '/images/service_land.png',
      description: t('Locate fertile agricultural land nearby. Uber-style matching for plots and leases.', 'पास की उपजाऊ कृषि भूमि का पता लगाएं। भूखंडों और पट्टों के लिए उबर-शैली का मिलान।'),
      benefits: [
        t('Verified land records', 'सत्यापित भूमि रिकॉर्ड'), 
        t('Nearby plot matching', 'पास के भूखंड मिलान'), 
        t('Transparent lease terms', 'पारदर्शी पट्टा शर्तें')
      ],
      howItWorks: t('Search for available land in your radius and connect with owners instantly.', 'अपने दायरे में उपलब्ध भूमि खोजें और मालिकों से तुरंत जुड़ें।'),
      link: '/#booking'
    },
    {
      id: 'equipment',
      title: t('Equipment Rental', 'उपकरण किराया'),
      image: '/images/service_equipment.png',
      description: t('Rent tractors, harvesters, and tools from nearby partners at hourly rates.', 'प्रति घंटा दरों पर पास के भागीदारों से ट्रैक्टर, हार्वेस्टर और उपकरण किराए पर लें।'),
      benefits: [
        t('No maintenance burden', 'रखरखाव का कोई बोझ नहीं'), 
        t('Modern fuel-efficient fleet', 'आधुनिक ईंधन-कुशल बेड़ा'), 
        t('Instant Uber-style booking', 'तत्काल उबर-शैली बुकिंग')
      ],
      howItWorks: t('Use our live map to see available tractors near you and book instantly.', 'अपने पास उपलब्ध ट्रैक्टरों को देखने के लिए हमारे लाइव मैप का उपयोग करें और तुरंत बुक करें।'),
      link: '/#booking'
    },
    {
      id: 'advisory',
      title: t('Expert Crop Advisory', 'विशेषज्ञ फसल सलाह'),
      image: '/images/service_advisory.png',
      description: t('Get real-time guidance from agronomists matched to your location.', 'अपने स्थान के अनुसार कृषिविदों से वास्तविक समय में मार्गदर्शन प्राप्त करें।'),
      benefits: [
        t('Personalized crop plans', 'व्यक्तिगत फसल योजनाएं'), 
        t('Pest & disease alerts', 'कीट और रोग अलर्ट'), 
        t('Yield maximization', 'पैदावार अधिकतम करना')
      ],
      howItWorks: t('Connect with an expert officer who will monitor your farm health remotely.', 'एक विशेषज्ञ अधिकारी से जुड़ें जो दूरस्थ रूप से आपके खेत के स्वास्थ्य की निगरानी करेगा।'),
      link: '/#booking'
    },
    {
      id: 'logistics',
      title: t('Farm-to-Market Logistics', 'फार्म-टू-मार्केट लॉजिस्टिक्स'),
      image: '/images/service_logistics.png',
      description: t('Direct market linkage with provided transportation. Get the best price for your yield.', 'प्रदान किए गए परिवहन के साथ सीधा बाजार लिंकेज। अपनी उपज का सर्वोत्तम मूल्य प्राप्त करें।'),
      benefits: [
        t('On-farm weighing', 'खेत पर वजन'), 
        t('Direct buyer connection', 'सीधा खरीदार कनेक्शन'), 
        t('Eliminate middlemen', 'बिचौलियों को खत्म करें')
      ],
      howItWorks: t('Request a pickup truck on the map, we grade, weigh and pay at your farm.', 'मानचित्र पर एक पिकअप ट्रक का अनुरोध करें, हम आपके खेत में ग्रेड, वजन और भुगतान करते हैं।'),
      link: '/#booking'
    }
  ];

  return (
    <div className={styles.servicesContainer}>
      <header className={styles.header}>
        <div className="container">
          <h1 className="gradient-text">{t('Modern Agricultural Services', 'आधुनिक कृषि सेवाएं')}</h1>
          <p>{t('Everything you need to succeed, powered by real-time Uber-style matching.', 'सफल होने के लिए आपकी ज़रूरत की हर चीज़, रीयल-टाइम उबर-शैली मिलान द्वारा संचालित।')}</p>
        </div>
      </header>

      <div className={`container ${styles.content}`}>
        <div className={styles.servicesList}>
          {serviceItems.map(item => (
            <div key={item.id} className={`glass-panel ${styles.serviceCard}`} id={item.id}>
              <div className={styles.imageBox}>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  sizes="(max-width: 768px) 100vw, 40vw" 
                />
              </div>
              <div className={styles.details}>
                <h2>{item.title}</h2>
                <p className={styles.desc}>{item.description}</p>
                
                <div className={styles.metaInfo}>
                  <div className={styles.benefits}>
                    <strong>{t('Key Benefits:', 'प्रमुख लाभ:')}</strong>
                    <ul>
                      {item.benefits.map((b, i) => <li key={i}>✅ {b}</li>)}
                    </ul>
                  </div>
                  <div className={styles.how}>
                    <strong>{t('How it works:', 'यह कैसे काम करता है:')}</strong>
                    <p>{item.howItWorks}</p>
                  </div>
                </div>
                
                <div className={styles.actions}>
                  <Link href={item.link}>
                    <Button size="large">{t('Find Nearby', 'पास में खोजें')} {item.title}</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

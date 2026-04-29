"use client";

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function Partner() {
  const { t } = useLanguage();
  const partnerTypes = [
    {
      title: t('Tractor & Machine Owners', 'ट्रैक्टर और मशीन के मालिक'),
      description: t('List your idle machinery on our platform and earn a steady reliable income without marketing effort.', 'हमारे मंच पर अपनी खाली मशीनरी की सूची बनाएं और बिना विपणन प्रयास के एक स्थिर विश्वसनीय आय अर्जित करें।'),
      icon: '🚜'
    },
    {
      title: t('Village Service Partners', 'ग्राम सेवा भागीदार'),
      description: t('Become the trusted Orgalth representative in your village. Manage bookings and earn commission.', 'अपने गांव में विश्वसनीय ऑर्गल्थ प्रतिनिधि बनें। बुकिंग प्रबंधित करें और कमीशन कमाएं।'),
      icon: '🤝'
    },
    {
      title: t('Agronomists & Experts', 'कृषिविद और विशेषज्ञ'),
      description: t('Consult with farmers remotely or on-field. Monetize your agricultural knowledge efficiently.', 'किसानों के साथ दूरस्थ रूप से या क्षेत्र में परामर्श करें। अपने कृषि ज्ञान का कुशलतापूर्वक मुद्रीकरण करें।'),
      icon: '👨‍🔬'
    },
    {
      title: t('Logistics Providers', 'लॉजिस्टिक्स प्रदाता'),
      description: t('Use your commercial vehicles to transport produce from farm gates to our partner buyers.', 'खेत के गेट से हमारे भागीदार खरीदारों तक उपज ले जाने के लिए अपने वाणिज्यिक वाहनों का उपयोग करें।'),
      icon: '🚚'
    }
  ];

  const handlePartnerApply = (type: string) => {
    const text = encodeURIComponent(`Hi Orgalth, I am interested in partnering as a ${type}.`);
    window.open(`https://wa.me/916350584687?text=${text}`, '_blank');
  };

  return (
    <div className={styles.partnerContainer}>
      <header className={styles.header}>
        <div className="container">
          <h1 className="gradient-text">{t('Partner With Orgalth', 'ऑर्गल्थ के साथ भागीदार बनें')}</h1>
          <p>{t('Join our mission to revolutionize rural agriculture and build your own sustainable micro-business.', 'ग्रामीण कृषि में क्रांति लाने और अपना खुद का टिकाऊ सूक्ष्म-व्यवसाय बनाने के हमारे मिशन में शामिल हों।')}</p>
        </div>
      </header>

      <div className={`container ${styles.content}`}>
        <div className={styles.benefitsBanner}>
          <h2>{t('Why Partner With Us?', 'हमारे साथ भागीदार क्यों बनें?')}</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <h3>💰 {t('Extra Income', 'अतिरिक्त आय')}</h3>
              <p>{t('Turn your idle assets into revenue.', 'अपनी बेकार पड़ी संपत्तियों को राजस्व में बदलें।')}</p>
            </div>
            <div className={styles.benefitItem}>
              <h3>📅 {t('Flexible Hours', 'लचीले घंटे')}</h3>
              <p>{t('Work on your own terms and schedule.', 'अपनी शर्तों और कार्यक्रम के अनुसार काम करें।')}</p>
            </div>
            <div className={styles.benefitItem}>
              <h3>📲 {t('Tech Support', 'तकनीकी सहायता')}</h3>
              <p>{t('We handle the technology, you handle the service.', 'हम तकनीक संभालते हैं, आप सेवा संभालते हैं।')}</p>
            </div>
          </div>
        </div>

        <h2 className={styles.sectionTitle}>{t('Who Can Partner?', 'कौन भागीदार बन सकता है?')}</h2>
        <div className={styles.rolesGrid}>
          {partnerTypes.map((role, idx) => (
            <div key={idx} className={`glass-panel ${styles.roleCard}`}>
              <div className={styles.roleIcon}>{role.icon}</div>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
              <Button 
                variant="outline" 
                className={styles.applyBtn} 
                onClick={() => handlePartnerApply(role.title)}
              >
                {t('Apply via WhatsApp', 'व्हाट्सएप के माध्यम से आवेदन करें')}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

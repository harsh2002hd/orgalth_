"use client";

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function Advisory() {
  const { t } = useLanguage();
  const advisorySections = [
    {
      title: t('Crop Planning', 'फसल योजना'),
      description: t('Choose the right crop for your soil and the current season to maximize profitability.', 'अधिकतम लाभ के लिए अपनी मिट्टी और वर्तमान मौसम के लिए सही फसल चुनें।'),
      icon: '📅'
    },
    {
      title: t('Pest Management', 'कीट प्रबंधन'),
      description: t('Identify diseases early and apply the exact required amount of safe pesticides.', 'बीमारियों को जल्दी पहचानें और सुरक्षित कीटनाशकों की सही मात्रा लागू करें।'),
      icon: '🐛'
    },
    {
      title: t('Soil & Fertilizer Guidance', 'मृदा और उर्वरक मार्गदर्शन'),
      description: t('Balance soil nutrients effectively to improve both yield and long-term soil health.', 'उपज और दीर्घकालिक मृदा दोनों को बेहतर बनाने के लिए मिट्टी के पोषक तत्वों को संतुलित करें।'),
      icon: '🌍'
    },
    {
      title: t('Expert Consultation', 'विशेषज्ञ परामर्श'),
      description: t('Direct access to senior agronomists via voice call or localized field visits.', 'वॉयस कॉल या खेत के दौरे के माध्यम से वरिष्ठ कृषिविदों तक सीधी पहुंच।'),
      icon: '👨‍🌾'
    }
  ];

  const handleTalkToExpert = () => {
    const text = encodeURIComponent(`Hi Orgalth, I need to talk to an agricultural expert regarding my farm.`);
    window.open(`https://wa.me/916350584687?text=${text}`, '_blank');
  };

  return (
    <div className={styles.advisoryContainer}>
      <header className={styles.header}>
        <div className="container">
          <h1 className="gradient-text">{t('Crop Advisory', 'फसल सलाह')}</h1>
          <p>{t('Science-backed guidance for a bountiful harvest, perfectly tailored to your land.', 'प्रचुर फसल के लिए विज्ञान-समर्थित मार्गदर्शन, आपकी भूमि के लिए तैयार किया गया।')}</p>
        </div>
      </header>

      <div className={`container ${styles.content}`}>
        <div className={styles.expertBanner}>
          <div className={styles.expertText}>
            <h2>{t('Need immediate help with your crops?', 'क्या आपको अपनी फसलों के लिए तत्काल सहायता चाहिए?')}</h2>
            <p>{t('Send a photo of your affected crop on WhatsApp, and our experts will reply with a solution within 15 minutes.', 'व्हाट्सएप पर अपनी प्रभावित फसल की फोटो भेजें, और हमारे विशेषज्ञ 15 मिनट के भीतर एक समाधान के साथ जवाब देंगे।')}</p>
            <Button size="large" onClick={handleTalkToExpert}>{t('Talk to Expert', 'विशेषज्ञ से बात करें')}</Button>
          </div>
          <div className={`${styles.expertIcon}`}>
            <Image src="/images/advisory_expert.png" fill style={{ objectFit: 'cover' }} alt="Agronomist Expert" />
          </div>
        </div>

        <h2 className={styles.sectionTitle}>{t('Our Advisory Pillars', 'हमारे सलाहकार स्तंभ')}</h2>
        <div className={styles.grid}>
          {advisorySections.map((section, idx) => (
            <div key={idx} className={`glass-panel ${styles.advisoryCard}`}>
              <div className={styles.icon}>{section.icon}</div>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

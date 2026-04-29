"use client";

import React from 'react';
import styles from './page.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <div className={styles.aboutContainer}>
      <header className={styles.header}>
        <div className="container">
          <h1 className="gradient-text">{t('About Orgalth', 'ऑर्गल्थ के बारे में')}</h1>
          <p>{t('We believe the future of farming is collaborative.', 'हम मानते हैं कि खेती का भविष्य सहयोगी है।')}</p>
        </div>
      </header>

      <div className={`container ${styles.content}`}>
        <section className={`glass-panel ${styles.section}`}>
          <h2>{t('The Problem', 'समस्या')}</h2>
          <p>
            {t('Small and marginal farmers often cannot afford heavy agricultural machinery, resulting in delayed land preparation, poor harvests, and deep debt cycles. Additionally, the lack of timely weather alerts and expert guidance leaves their crops vulnerable to pests and climate change.', 'छोटे और सीमांत किसान भारी कृषि मशीनरी का खर्च वहन नहीं कर सकते, जिसके परिणामस्वरूप भूमि की तैयारी में देरी, खराब फसल और गहरे ऋण चक्र होते हैं। इसके अतिरिक्त, मौसम अलर्ट और विशेषज्ञ मार्गदर्शन की कमी के कारण फसलें खराब हो जाती हैं।')}
          </p>
        </section>

        <section className={`glass-panel ${styles.section} ${styles.highlightSection}`}>
          <h2>{t('Our Solution', 'हमारा समाधान')}</h2>
          <p>
            {t('Orgalth introduces a revolutionary asset-light model for rural agriculture. We connect farmers who need equipment with those who have idle machinery. Coupled with hyper-local advisory from certified experts and transparent farm-to-market logistics, we provide an end-to-end support system accessed without ever needing to download an app.', 'ऑर्गल्थ ग्रामीण कृषि के लिए एक क्रांतिकारी संपत्ति-प्रकाश मॉडल पेश करता है। हम उपकरण की आवश्यकता वाले किसानों को उन लोगों के साथ जोड़ते हैं जिनके पास निष्क्रिय मशीनरी है। विशेषज्ञ सलाह और पारदर्शी लॉजिस्टिक्स के साथ, हम एक ऐसा समर्थन प्रणाली प्रदान करते हैं जिसे ऐप डाउनलोड किए बिना एक्सेस किया जा सकता है।')}
          </p>
        </section>

        <div className={styles.missionVisionGrid}>
          <section className={`glass-panel ${styles.halfSection}`}>
            <span className={styles.icon}>🎯</span>
            <h2>{t('Our Mission', 'हमारा लक्ष्य')}</h2>
            <p>
              {t('To make agriculture a profitable and predictable livelihood for every marginal farmer by democratizing access to mechanized tools, knowledge, and fair markets.', 'मशीनी उपकरणों, ज्ञान और निष्पक्ष बाजारों तक पहुंच को लोकतांत्रिक बनाकर हर सीमांत किसान के लिए कृषि को एक लाभदायक और अनुमानित आजीविका बनाना।')}
            </p>
          </section>

          <section className={`glass-panel ${styles.halfSection}`}>
            <span className={styles.icon}>👁️</span>
            <h2>{t('Our Vision', 'हमारी दृष्टि')}</h2>
            <p>
              {t('A future where no farmer abandons their land due to lack of resources, and rural economies thrive through decentralized, tech-driven collaboration.', 'एक ऐसा भविष्य जहां कोई भी किसान संसाधनों की कमी के कारण अपनी ज़मीन नहीं छोड़ता, और विकेंद्रीकृत, तकनीकी-संचालित सहयोग के माध्यम से ग्रामीण अर्थव्यवस्थाएँ फलती-फूलती हैं।')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

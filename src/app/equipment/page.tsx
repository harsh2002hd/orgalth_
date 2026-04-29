"use client";

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function Equipment() {
  const { t } = useLanguage();
  const machines = [
    {
      id: 'tractor',
      name: t('Heavy Duty Tractor', 'हैवी ड्यूटी ट्रैक्टर'),
      category: t('Land Preparation', 'भूमि की तैयारी'),
      price: t('₹800/hr', '₹800/घंटा'),
      specs: t('50 HP, 4WD', '50 एचपी, 4डब्ल्यूडी'),
      image: '/images/equipment_tractor.png'
    },
    {
      id: 'rotavator',
      name: t('Premium Rotavator', 'प्रीमियम रोटावेटर'),
      category: t('Tillage', 'जुताई'),
      price: t('₹500/hr', '₹500/घंटा'),
      specs: t('42 Blades, 6 Feet', '42 ब्लेड, 6 फीट'),
      image: '/images/equipment_rotavator.png'
    },
    {
      id: 'sprayer',
      name: t('Boom Sprayer', 'बूम स्प्रेयर'),
      category: t('Crop Protection', 'फसल संरक्षण'),
      price: t('₹300/hr', '₹300/घंटा'),
      specs: t('400L Tank, 40ft Coverage', '400L टैंक, 40ft कवरेज'),
      image: '/images/equipment_sprayer.png'
    },
    {
      id: 'harvester',
      name: t('Combine Harvester', 'कंबाइन हार्वेस्टर'),
      category: t('Harvesting', 'कटाई'),
      price: t('₹2500/hr', '₹2500/घंटा'),
      specs: t('Crop specific attachments', 'फसल विशिष्ट संलग्नक'),
      image: '/images/equipment_harvester.png'
    },
    {
      id: 'drone',
      name: t('Precision Drone', 'सटीक ड्रोन'),
      category: t('Advanced Tech', 'उन्नत तकनीक'),
      price: t('₹1200/acre', '₹1200/एकड़'),
      specs: t('10L payload, intelligent mapping', '10 लीटर पेलोड, बुद्धिमान मैपिंग'),
      image: '/images/equipment_drone.png'
    }
  ];

  const handleWhatsAppBooking = (machineName: string) => {
    const text = encodeURIComponent(`Hi Orgalth, I would like to book the ${machineName}. Please provide availability.`);
    window.open(`https://wa.me/916350584687?text=${text}`, '_blank');
  };

  return (
    <div className={styles.equipmentContainer}>
      <header className={styles.header}>
        <div className="container">
          <h1 className="gradient-text">{t('Equipment on Rent', 'किराए पर उपकरण')}</h1>
          <p>{t('Book high-quality, maintained machinery exactly when you need it.', 'जरूरत के समय उच्च गुणवत्ता वाली मशीनों को बुक करें।')}</p>
        </div>
      </header>

      <div className={`container ${styles.gridContainer}`}>
        {machines.map(machine => (
          <div key={machine.id} className={`glass-panel ${styles.machineCard}`}>
            <div className={styles.imagePlaceholder} style={{ position: 'relative', overflow: 'hidden' }}>
              <Image 
                 src={machine.image} 
                 alt={machine.name} 
                 fill
                 style={{ objectFit: 'cover' }}
                 sizes="(max-width: 768px) 100vw, 30vw"
              />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.category}>{machine.category}</span>
              <h3>{machine.name}</h3>
              <p className={styles.specs}>{machine.specs}</p>
              
              <div className={styles.priceContainer}>
                <span className={styles.price}>{machine.price}</span>
              </div>
              
              <div className={styles.actions}>
                <Button fullWidth onClick={() => handleWhatsAppBooking(machine.name)}>
                  {t('Book on WhatsApp', 'व्हाट्सएप पर बुक करें')}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="container">
         <div className={`glass-panel ${styles.infoBanner}`}>
           <h3>{t('Cant find what you are looking for?', 'क्या आपको वह नहीं मिल रहा है जो आप ढूंढ रहे हैं?')}</h3>
           <p>{t('We add new machines to our fleet every week in your local area.', 'हम हर हफ्ते आपके स्थानीय क्षेत्र में नए उपकरण जोड़ते हैं।')}</p>
           <Button variant="outline" onClick={() => handleWhatsAppBooking('Custom Equipment Request')}>{t('Request Custom Equipment', 'विशेष उपकरण का अनुरोध करें')}</Button>
         </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from 'react';
import styles from './LivePricing.module.css';
import { useLanguage } from '@/context/LanguageContext';

interface CropPrice {
  id: string;
  nameEn: string;
  nameHi: string;
  price: number;
  unitEn: string;
  unitHi: string;
  icon: string;
  trend: 'up' | 'down';
}

const INITIAL_CROPS: CropPrice[] = [
  { id: 'wheat', nameEn: 'Wheat', nameHi: 'गेहूं', price: 2125, unitEn: '/quintal', unitHi: '/क्विंटल', icon: '🌾', trend: 'up' },
  { id: 'rice', nameEn: 'Rice (Basmati)', nameHi: 'चावल (बासमती)', price: 4500, unitEn: '/quintal', unitHi: '/क्विंटल', icon: '🍚', trend: 'down' },
  { id: 'tomato', nameEn: 'Tomato', nameHi: 'टमाटर', price: 1200, unitEn: '/quintal', unitHi: '/क्विंटल', icon: '🍅', trend: 'up' },
  { id: 'onion', nameEn: 'Onion', nameHi: 'प्याज', price: 1500, unitEn: '/quintal', unitHi: '/क्विंटल', icon: '🧅', trend: 'up' },
  { id: 'potato', nameEn: 'Potato', nameHi: 'आलू', price: 900, unitEn: '/quintal', unitHi: '/क्विंटल', icon: '🥔', trend: 'down' },
  { id: 'chilli', nameEn: 'Green Chilli', nameHi: 'हरी मिर्च', price: 2800, unitEn: '/quintal', unitHi: '/क्विंटल', icon: '🌶️', trend: 'up' },
];

export const LivePricing: React.FC = () => {
  const { t } = useLanguage();
  const [crops, setCrops] = useState<CropPrice[]>(INITIAL_CROPS);

  useEffect(() => {
    const interval = setInterval(() => {
      setCrops(prev => prev.map(crop => {
        const fluctuation = (Math.random() - 0.5) * 50;
        const newPrice = Math.round(crop.price + fluctuation);
        return {
          ...crop,
          price: newPrice,
          trend: fluctuation > 0 ? 'up' : 'down'
        };
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Double the list for seamless loop
  const tickerItems = [...crops, ...crops];

  return (
    <div className={styles.pricingContainer}>
      <div className={styles.tickerWrapper}>
        {tickerItems.map((crop, idx) => (
          <div key={`${crop.id}-${idx}`} className={styles.tickerItem}>
            <span className={styles.badge}>Live</span>
            <span className={styles.icon}>{crop.icon}</span>
            <span className={styles.name}>{t(crop.nameEn, crop.nameHi)}</span>
            <span className={styles.price}>₹{crop.price.toLocaleString()}</span>
            <span className={styles.unit}>{t(crop.unitEn, crop.unitHi)}</span>
            <span className={`${styles.change} ${crop.trend === 'up' ? styles.priceUp : styles.priceDown}`}>
              {crop.trend === 'up' ? '↑' : '↓'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

"use client";

import React, { useState, useEffect } from 'react';
import styles from './LiveStats.module.css';
import { useLanguage } from '@/context/LanguageContext';

interface StatItem {
  id: string;
  labelEn: string;
  labelHi: string;
  value: number;
  increment: number;
}

const INITIAL_STATS: StatItem[] = [
  { id: 'farmers', labelEn: 'Farmers Served', labelHi: 'किसानों की सेवा की', value: 1200, increment: 1 },
  { id: 'services', labelEn: 'Services Completed', labelHi: 'सेवाएं पूरी की गईं', value: 3500, increment: 3 },
  { id: 'savings', labelEn: 'Total Savings (₹)', labelHi: 'कुल बचत (₹)', value: 85000, increment: 150 },
  { id: 'villages', labelEn: 'Active Villages', labelHi: 'सक्रिय गांव', value: 450, increment: 1 }
];

export const LiveStats: React.FC = () => {
  const { t } = useLanguage();
  const [stats, setStats] = useState<StatItem[]>(INITIAL_STATS);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => prevStats.map(stat => ({
        ...stat,
        value: stat.value + (Math.random() > 0.7 ? stat.increment : 0)
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.statsContainer}>
      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.id} className={styles.statCard}>
            <span className={styles.value}>
              {stat.id === 'savings' ? `₹${stat.value.toLocaleString()}` : stat.value.toLocaleString()}+
            </span>
            <span className={styles.label}>{t(stat.labelEn, stat.labelHi)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

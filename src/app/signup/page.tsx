"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../auth.module.css';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function SignupPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', password: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = t('Name is required', 'नाम आवश्यक है');
    if (!formData.phone) newErrors.phone = t('Phone is required', 'फ़ोन आवश्यक है');
    if (!formData.password || formData.password.length < 6) 
      newErrors.password = t('Password must be 6+ chars', 'पासवर्ड 6+ अक्षरों का होना चाहिए');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate signup
    const existingUsers = JSON.parse(localStorage.getItem('orgalth_users') || '[]');
    localStorage.setItem('orgalth_users', JSON.stringify([...existingUsers, formData]));
    
    localStorage.setItem('orgalth_session', JSON.stringify({ name: formData.name, loggedIn: true }));
    router.push('/');
  };

  return (
    <div className={styles.authPage}>
      <div className={`glass-panel ${styles.authCard}`}>
        <h1 className={styles.title}>{t('Join Orgalth', 'ऑर्गल्थ से जुड़ें')}</h1>
        <p className={styles.subtitle}>{t('Start your journey to smart farming', 'स्मार्ट खेती की अपनी यात्रा शुरू करें')}</p>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>{t('Full Name', 'पूरा नाम')}</label>
            <input 
              type="text" 
              className={styles.input}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>{t('Phone Number', 'फ़ोन नंबर')}</label>
            <input 
              type="tel" 
              className={styles.input}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>{t('Email (Optional)', 'ईमेल (वैकल्पिक)')}</label>
            <input 
              type="email" 
              className={styles.input}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>{t('Create Password', 'पासवर्ड बनाएं')}</label>
            <input 
              type="password" 
              className={styles.input}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {errors.password && <span className={styles.error}>{errors.password}</span>}
          </div>

          <Button type="submit">{t('Create Account', 'खाता बनाएं')}</Button>
        </form>

        <div className={styles.footer}>
          {t('Already have an account?', 'क्या पहले से ही एक खाता है?')}{' '}
          <Link href="/login" className={styles.link}>{t('Login', 'लॉगिन करें')}</Link>
        </div>
      </div>
    </div>
  );
}

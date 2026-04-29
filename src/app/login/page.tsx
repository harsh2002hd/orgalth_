"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../auth.module.css';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function LoginPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [formData, setFormData] = useState({ identifier: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.identifier || !formData.password) {
      setError(t('Please fill all fields', 'कृपया सभी फ़ील्ड भरें'));
      return;
    }

    // Simulate login
    const users = JSON.parse(localStorage.getItem('orgalth_users') || '[]');
    const user = users.find((u: any) => u.phone === formData.identifier || u.email === formData.identifier);

    if (user && user.password === formData.password) {
      localStorage.setItem('orgalth_session', JSON.stringify({ name: user.name, loggedIn: true }));
      router.push('/');
    } else {
      setError(t('Invalid credentials', 'अमान्य क्रेडेंशियल'));
    }
  };

  return (
    <div className={styles.authPage}>
      <div className={`glass-panel ${styles.authCard}`}>
        <h1 className={styles.title}>{t('Welcome Back', 'वापसी पर स्वागत है')}</h1>
        <p className={styles.subtitle}>{t('Login to your farmer dashboard', 'अपने किसान डैशबोर्ड में लॉगिन करें')}</p>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>{t('Phone or Email', 'फ़ोन या ईमेल')}</label>
            <input 
              type="text" 
              className={styles.input}
              value={formData.identifier}
              onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>{t('Password', 'पासवर्ड')}</label>
            <input 
              type="password" 
              className={styles.input}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <Button type="submit">{t('Login', 'लॉगिन करें')}</Button>
        </form>

        <div className={styles.footer}>
          {t("Don't have an account?", "क्या आपका खाता नहीं है?")}{' '}
          <Link href="/signup" className={styles.link}>{t('Sign Up', 'साइन अप करें')}</Link>
        </div>
      </div>
    </div>
  );
}

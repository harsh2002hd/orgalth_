"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'General', details: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', service: 'General', details: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/916350584687`, '_blank');
  };

  return (
    <div className={styles.contactContainer}>
      <header className={styles.header}>
        <div className="container">
          <h1 className="gradient-text">{t('Contact Us', 'संपर्क करें')}</h1>
          <p>{t('We are here to assist you 24/7. Call us, WhatsApp us, or request a callback.', 'हम 24/7 आपकी सहायता के लिए यहाँ हैं। हमें कॉल करें, व्हाट्सएप करें, या कॉलबैक का अनुरोध करें।')}</p>
        </div>
      </header>

      <div className={`container ${styles.content}`}>
        <div className={styles.contactGrid}>
          <div className={styles.infoSection}>
            <h2>{t('Get in Touch', 'संपर्क करें')}</h2>
            <p>{t('Our localized support team is ready to help you with equipment bookings, advisory, and produce sales.', 'हमारी स्थानीय सहायता टीम उपकरण बुकिंग, सलाह और कृषि उपज की बिक्री में आपकी मदद करने के लिए तैयार है।')}</p>
            
            <div className={styles.contactMethods}>
              <div className={styles.methodCard} onClick={handleWhatsApp} style={{ cursor: 'pointer' }}>
                <span className={styles.icon}>💬</span>
                <div>
                  <h3>{t('WhatsApp Support', 'व्हाट्सएप सहायता')}</h3>
                  <p>+91 6350584687</p>
                </div>
              </div>
              <div className={styles.methodCard}>
                <span className={styles.icon}>📞</span>
                <div>
                  <h3>{t('Direct Call', 'डायरेक्ट कॉल')}</h3>
                  <p>+91 6350584687</p>
                </div>
              </div>
              <div className={styles.methodCard}>
                <span className={styles.icon}>✉️</span>
                <div>
                  <h3>{t('Email', 'ईमेल')}</h3>
                  <p>support@orgalth.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`glass-panel ${styles.formSection}`}>
            <h2>{t('Request a Callback', 'कॉलबैक का अनुरोध करें')}</h2>
            <p className={styles.formSubtitle}>{t('Fill this form and our field officer will call you back within 2 hours.', 'ये फॉर्म भरें और हमारे फील्ड अधिकारी 2 घंटे के भीतर आपको वापस कॉल करेंगे।')}</p>
            
            {status === 'success' ? (
              <div className={styles.successMessage}>
                <h3>✅ {t('Request Sent', 'अनुरोध भेजा गया')}</h3>
                <p>{t('We have received your callback request successfully.', 'हमें आपका कॉलबैक अनुरोध सफलतापूर्वक प्राप्त हो गया है।')}</p>
                <Button onClick={() => setStatus('idle')} variant="outline" size="small" style={{ marginTop: '1rem' }}>
                  {t('Send Another Request', 'एक और अनुरोध भेजें')}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">{t('Full Name', 'पूरा नाम')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className={styles.input}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="phone">{t('Phone Number', 'फ़ोन नंबर')}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    className={styles.input}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="service">{t('Interested Service', 'इच्छुक सेवा')}</label>
                  <select 
                    id="service" 
                    className={styles.input}
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="General">{t('General Inquiry', 'सामान्य पूछताछ')}</option>
                    <option value="Equipment">{t('Equipment Rental', 'उपकरण किराया')}</option>
                    <option value="Advisory">{t('Crop Advisory', 'फसल सलाह')}</option>
                    <option value="Sell Produce">{t('Sell Produce', 'उपज खरीद')}</option>
                    <option value="Partnership">{t('Partner Program', 'पार्टनर प्रोग्राम')}</option>
                  </select>
                </div>
                
                <Button 
                  type="submit" 
                  fullWidth 
                  size="large" 
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? t('Submitting...', 'जमा कर रहे हैं...') : t('Request Callback', 'कॉलबैक का अनुरोध करें')}
                </Button>
                
                {status === 'error' && (
                  <p className={styles.errorMessage}>{t('Something went wrong. Please try again or WhatsApp us.', 'कुछ गलत हो गया। कृपया पुन: प्रयास करें या हमें व्हाट्सएप करें।')}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

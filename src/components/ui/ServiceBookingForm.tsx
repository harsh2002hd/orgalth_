"use client";

import React, { useState } from 'react';
import styles from './ServiceBookingForm.module.css';
import { useLanguage } from '@/context/LanguageContext';

export const ServiceBookingForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    village: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = t('Name is required', 'नाम आवश्यक है');
    if (!formData.phone) newErrors.phone = t('Phone is required', 'फ़ोन आवश्यक है');
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = t('Enter valid 10-digit phone', 'वैध 10-अंकीय फ़ोन दर्ज करें');
    if (!formData.service) newErrors.service = t('Select a service', 'एक सेवा चुनें');
    if (!formData.village) newErrors.village = t('Village is required', 'गांव आवश्यक है');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', service: '', village: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className={`glass-panel ${styles.formContainer}`}>
      <h2 className={styles.title}>{t('Request a Service', 'सेवा का अनुरोध करें')}</h2>
      
      {status === 'success' ? (
        <div className={styles.successMsg}>
          {t('Thank you! Our local partner will contact you shortly.', 'धन्यवाद! हमारा स्थानीय भागीदार जल्द ही आपसे संपर्क करेगा।')}
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>{t('Your Name', 'आपका नाम')}</label>
            <input 
              type="text" 
              name="name"
              className={styles.input} 
              placeholder={t('Enter full name', 'पूरा नाम दर्ज करें')}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>{t('Phone Number', 'फ़ोन नंबर')}</label>
            <input 
              type="tel" 
              name="phone"
              className={styles.input} 
              placeholder={t('10-digit mobile number', '10-अंकीय मोबाइल नंबर')}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>{t('Select Service', 'सेवा चुनें')}</label>
            <select 
              name="service"
              className={styles.select} 
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">{t('-- Choose Service --', '-- सेवा चुनें --')}</option>
              <option value="tractor">{t('Tractor Rental', 'ट्रैक्टर किराया')}</option>
              <option value="advisory">{t('Expert Advisory', 'विशेषज्ञ सलाह')}</option>
              <option value="logistics">{t('Market Logistics', 'मार्केट लॉजिस्टिक्स')}</option>
              <option value="weather">{t('Weather Alerts', 'मौसम अलर्ट')}</option>
            </select>
            {errors.service && <span className={styles.error}>{errors.service}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>{t('Village Name', 'गांव का नाम')}</label>
            <input 
              type="text" 
              name="village"
              className={styles.input} 
              placeholder={t('Enter village', 'गांव दर्ज करें')}
              value={formData.village}
              onChange={handleChange}
            />
            {errors.village && <span className={styles.error}>{errors.village}</span>}
          </div>

          <button 
            type="submit" 
            className={styles.submitBtn}
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? t('Sending...', 'भेज रहा है...') : t('Request Service', 'सेवा का अनुरोध करें')}
          </button>
        </form>
      )}
    </div>
  );
};

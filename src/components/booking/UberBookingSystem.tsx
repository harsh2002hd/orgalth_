"use client";

import React, { useState, useEffect } from 'react';
import styles from './UberBookingSystem.module.css';
import { useBooking } from '@/context/BookingContext';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';
import dynamic from 'next/dynamic';
import { findNearbyPartners, Partner, MOCK_PARTNERS } from '@/utils/locationService';

const MapComponent = dynamic(() => import('./MapComponent'), { 
  ssr: false,
  loading: () => <div className={styles.mapLoading}>Loading Map...</div>
});

export const UberBookingSystem: React.FC = () => {
  const { state, startSearch, matchedPartner, setMatched, nextStep, reset, selectedType } = useBooking();
  const { t } = useLanguage();
  const [userLocation, setUserLocation] = useState<[number, number]>([28.6139, 77.2090]);

  useEffect(() => {
    if (state === 'SEARCHING') {
      const found = findNearbyPartners(userLocation[0], userLocation[1], selectedType);
      
      const timer = setTimeout(() => {
        if (found.length > 0) {
          setMatched(found[0] as any);
        }
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [state, selectedType, setMatched, userLocation]);

  const services = [
    { id: 'tractor', icon: '🚜', labelEn: 'Tractor', labelHi: 'ट्रैक्टर' },
    { id: 'land', icon: '🏜️', labelEn: 'Find Land', labelHi: 'भूमि खोजें' },
    { id: 'equipment', icon: '🛠️', labelEn: 'Equipment', labelHi: 'उपकरण' },
    { id: 'expert', icon: '🌱', labelEn: 'Expert', labelHi: 'विशेषज्ञ' },
    { id: 'logistics', icon: '🚚', labelEn: 'Logistics', labelHi: 'लॉजिस्टिक्स' }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>
        <MapComponent 
          center={userLocation} 
          partners={MOCK_PARTNERS.filter(p => p.type === selectedType || state === 'IDLE')}
          matchedPartner={matchedPartner}
        />
        
        {state === 'SEARCHING' && <div className={styles.radar} />}

        {state === 'PAYMENT' && (
          <div className={styles.paymentModal}>
            <div className={`glass-panel ${styles.paymentCard}`}>
              <h3>{t('Secure Payment', 'सुरक्षित भुगतान')}</h3>
              <p>{t('Amount to pay: ₹800', 'भुगतान राशि: ₹800')}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <Button onClick={nextStep}>{t('Pay with UPI', 'UPI से भुगतान करें')}</Button>
                <Button variant="outline" onClick={nextStep}>{t('Pay with Card', 'कार्ड से भुगतान करें')}</Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.controls}>
        {state === 'IDLE' && (
          <>
            <h3 style={{ marginBottom: '1rem' }}>{t('Request a Ride for your Farm', 'अपने खेत के लिए सवारी का अनुरोध करें')}</h3>
            <div className={styles.serviceGrid}>
              {services.map(s => (
                <div 
                  key={s.id} 
                  className={`${styles.serviceItem} ${selectedType === s.id ? styles.serviceItemActive : ''}`}
                  onClick={() => startSearch(s.id)}
                >
                  <span className={styles.serviceIcon}>{s.icon}</span>
                  <span className={styles.serviceLabel}>{t(s.labelEn, s.labelHi)}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {state === 'SEARCHING' && (
          <div style={{ textAlign: 'center' }}>
            <h3>{t(`Searching for nearby ${selectedType}...`, `आस-पास के ${selectedType} की तलाश है...`)}</h3>
            <p>{t('Please wait while we connect you to a partner', 'कृपया प्रतीक्षा करें जब हम आपको एक साथी से जोड़ते हैं')}</p>
            <Button variant="outline" onClick={reset} style={{ marginTop: '1rem' }}>{t('Cancel Search', 'खोज रद्द करें')}</Button>
          </div>
        )}

        {state === 'MATCHED' && matchedPartner && (
          <div className={styles.matchCard}>
            <div className={styles.partnerInfo}>
              <div className={styles.partnerAvatar}>{matchedPartner.name[0]}</div>
              <div className={styles.partnerDetails}>
                <h4>{matchedPartner.name}</h4>
                <div className={styles.eta}>
                  ⭐ {matchedPartner.rating} • {matchedPartner.distance.toFixed(1)} km away • 5 min ETA
                </div>
              </div>
            </div>
            <Button onClick={nextStep}>{t('Confirm & Pay', 'पुष्टि करें और भुगतान करें')}</Button>
          </div>
        )}

        {state === 'CONFIRMED' && (
          <div className={styles.successScreen}>
            <span className={styles.successIcon}>✅</span>
            <h2>{t('Booking Confirmed!', 'बुकिंग की पुष्टि हो गई!')}</h2>
            <p>{t(`${matchedPartner?.name} is on the way to your village.`, `${matchedPartner?.name} आपके गांव के रास्ते में है।`)}</p>
            <Button onClick={reset} style={{ marginTop: '1rem' }}>{t('Book Another', 'एक और बुक करें')}</Button>
          </div>
        )}
      </div>
    </div>
  );
};

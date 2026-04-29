"use client";

import React, { createContext, useContext, useState } from 'react';
import { Partner } from '@/utils/locationService';

type BookingState = 'IDLE' | 'SEARCHING' | 'MATCHED' | 'PAYMENT' | 'CONFIRMED';

interface BookingContextType {
  state: BookingState;
  selectedType: string;
  matchedPartner: (Partner & { distance: number }) | null;
  startSearch: (type: string) => void;
  setMatched: (partner: Partner & { distance: number }) => void;
  nextStep: () => void;
  reset: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<BookingState>('IDLE');
  const [selectedType, setSelectedType] = useState('');
  const [matchedPartner, setMatchedPartner] = useState<(Partner & { distance: number }) | null>(null);

  const startSearch = (type: string) => {
    setSelectedType(type);
    setState('SEARCHING');
  };

  const setMatched = (partner: Partner & { distance: number }) => {
    setMatchedPartner(partner);
    setState('MATCHED');
  };

  const nextStep = () => {
    if (state === 'MATCHED') setState('PAYMENT');
    else if (state === 'PAYMENT') setState('CONFIRMED');
  };

  const reset = () => {
    setState('IDLE');
    setMatchedPartner(null);
  };

  return (
    <BookingContext.Provider value={{ state, selectedType, matchedPartner, startSearch, setMatched, nextStep, reset }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBooking must be used within a BookingProvider');
  return context;
};

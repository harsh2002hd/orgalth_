"use client";

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Partner } from '@/utils/locationService';
import L from 'leaflet';

// Simple fix for icons using CDN
const fixIcons = () => {
  if (typeof window !== 'undefined') {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }
};

const MapComponent: React.FC<{
  center: [number, number];
  partners: Partner[];
  matchedPartner: Partner | null;
}> = ({ center, partners, matchedPartner }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    fixIcons();
    setIsClient(true);
  }, []);

  if (!isClient) return <div style={{ height: '400px', width: '100%', background: '#eee' }}>Loading Map...</div>;

  return (
    <div style={{ height: '100%', width: '100%', minHeight: '400px' }}>
      <MapContainer 
        key={`${center[0]}-${center[1]}`} // Force re-render on center change for stability
        center={center} 
        zoom={13} 
        scrollWheelZoom={false}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>User Location</Popup>
        </Marker>
        {partners.map(p => (
          <Marker key={p.id} position={[p.lat, p.lng]}>
            <Popup>{p.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;

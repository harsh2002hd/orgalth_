export interface Partner {
  id: string;
  name: string;
  type: 'tractor' | 'expert' | 'logistics' | 'land' | 'equipment';
  rating: number;
  lat: number;
  lng: number;
  image?: string;
}

export const MOCK_PARTNERS: Partner[] = [
  { id: 'p1', name: 'Rajesh Kumar', type: 'tractor', rating: 4.8, lat: 28.6139, lng: 77.2090 },
  { id: 'p2', name: 'Amit Singh', type: 'tractor', rating: 4.9, lat: 28.6200, lng: 77.2150 },
  { id: 'p3', name: 'Suresh Patel', type: 'expert', rating: 4.7, lat: 28.6050, lng: 77.2000 },
  { id: 'p4', name: 'Vijay Logistics', type: 'logistics', rating: 4.5, lat: 28.6300, lng: 77.2250 },
  { id: 'p5', name: 'Farm Land A1', type: 'land', rating: 4.9, lat: 28.6150, lng: 77.2050 },
  { id: 'p6', name: 'Premium Soil Plot', type: 'land', rating: 4.8, lat: 28.6250, lng: 77.2100 },
  { id: 'p7', name: 'Modern Harvester', type: 'equipment', rating: 4.7, lat: 28.6100, lng: 77.2180 },
  { id: 'p8', name: 'Power Sprayer Hub', type: 'equipment', rating: 4.6, lat: 28.6180, lng: 77.2020 },
];

export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

export const findNearbyPartners = (userLat: number, userLng: number, type: string) => {
  return MOCK_PARTNERS
    .filter(p => p.type === type)
    .map(p => ({
      ...p,
      distance: calculateDistance(userLat, userLng, p.lat, p.lng)
    }))
    .sort((a, b) => a.distance - b.distance);
};

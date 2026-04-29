export interface BlogPost {
  id: string;
  titleEn: string;
  titleHi: string;
  excerptEn: string;
  excerptHi: string;
  contentEn: string;
  contentHi: string;
  date: string;
  categoryEn: string;
  categoryHi: string;
  author: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    titleEn: '5 Tips for Better Wheat Yield',
    titleHi: 'बेहतर गेहूं की पैदावार के लिए 5 टिप्स',
    excerptEn: 'Learn how to maximize your harvest this season with these expert tips.',
    excerptHi: 'इन विशेषज्ञ सुझावों के साथ इस सीजन में अपनी फसल को अधिकतम करना सीखें।',
    contentEn: 'Full content about wheat farming tips...',
    contentHi: 'गेहूं की खेती के सुझावों के बारे में पूरी जानकारी...',
    date: '2026-04-25',
    categoryEn: 'Farming Tips',
    categoryHi: 'खेती के टिप्स',
    author: 'Dr. Sharma',
    image: '/images/blog1.png'
  },
  {
    id: '2',
    titleEn: 'New Government Schemes for Farmers 2026',
    titleHi: 'किसानों के लिए नई सरकारी योजनाएं 2026',
    excerptEn: 'Stay updated with the latest subsidies and support from the government.',
    excerptHi: 'सरकार से नवीनतम सब्सिडी और सहायता के साथ अपडेट रहें।',
    contentEn: 'Full details on new schemes...',
    contentHi: 'नई योजनाओं पर पूरी जानकारी...',
    date: '2026-04-20',
    categoryEn: 'Schemes',
    categoryHi: 'योजनाएं',
    author: 'Admin',
    image: '/images/blog2.png'
  },
  {
    id: '3',
    titleEn: 'Organic Pest Control Methods',
    titleHi: 'जैविक कीट नियंत्रण विधियां',
    excerptEn: 'Protect your crops without harmful chemicals using these organic ways.',
    excerptHi: 'इन जैविक तरीकों का उपयोग करके हानिकारक रसायनों के बिना अपनी फसलों की रक्षा करें।',
    contentEn: 'Full content on organic farming...',
    contentHi: 'जैविक खेती पर पूरी जानकारी...',
    date: '2026-04-15',
    categoryEn: 'Crop Guidance',
    categoryHi: 'फसल मार्गदर्शन',
    author: 'Sunil Kumar',
    image: '/images/blog3.png'
  }

];

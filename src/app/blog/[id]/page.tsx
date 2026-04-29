"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import styles from '../blog.module.css';
import { BLOG_POSTS } from '@/data/blogData';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';

import Image from 'next/image';

export default function BlogDetailPage() {
  const { id } = useParams();
  const { t } = useLanguage();
  
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="container section-padding" style={{ textAlign: 'center' }}>
        <h1>Post Not Found</h1>
        <Link href="/blog"><Button>Go Back</Button></Link>
      </div>
    );
  }

  return (
    <div className={styles.blogPage}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link href="/blog" style={{ marginBottom: '2rem', display: 'inline-block' }}>
          ← {t('Back to Blog', 'ब्लॉग पर वापस जाएं')}
        </Link>
        
        <div className={styles.heroImageWrapper}>
          <Image 
            src={post.image} 
            alt={post.titleEn} 
            width={800} 
            height={450} 
            className={styles.heroImage}
            priority
          />
        </div>
        
        <span className={styles.category}>{t(post.categoryEn, post.categoryHi)}</span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>{t(post.titleEn, post.titleHi)}</h1>
        
        <div className={styles.cardFooter} style={{ border: 'none', padding: 0, marginBottom: '2rem' }}>
          <span>{t(`By ${post.author}`, `लेखक: ${post.author}`)}</span>
          <span>{post.date}</span>
        </div>
        
        <div className={styles.blogContent} style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
          <p>{t(post.contentEn, post.contentHi)}</p>
          
          <div style={{ margin: '3rem 0' }}>
            <Image 
              src={post.image} 
              alt="Related visual" 
              width={800} 
              height={400} 
              className={styles.contentImage}
            />
          </div>
          
          <p>{t('Following this guide will help you optimize your farm for maximum results. Stay tuned for more updates from the Orgalth team.', 'इस गाइड का पालन करने से आपको अपने खेत को अधिकतम परिणामों के लिए अनुकूलित करने में मदद मिलेगी। ऑर्गल्थ टीम से और अपडेट के लिए बने रहें।')}</p>
        </div>
      </div>
    </div>
  );
}

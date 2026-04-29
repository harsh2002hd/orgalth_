"use client";

import React from 'react';
import Link from 'next/link';
import styles from './blog.module.css';
import { BLOG_POSTS } from '@/data/blogData';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';

import Image from 'next/image';

export default function BlogPage() {
  const { t } = useLanguage();

  return (
    <div className={styles.blogPage}>
      <div className="container">
        <h1 className={styles.title}>{t('Farmer Knowledge Hub', 'किसान ज्ञान केंद्र')}</h1>
        
        <div className={styles.blogGrid}>
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className={styles.blogCard}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={post.image} 
                  alt={post.titleEn} 
                  width={400} 
                  height={250} 
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.category}>{t(post.categoryEn, post.categoryHi)}</span>
                <h2>{t(post.titleEn, post.titleHi)}</h2>
                <p className={styles.excerpt}>{t(post.excerptEn, post.excerptHi)}</p>
                
                <div className={styles.cardFooter}>
                  <span>{post.date}</span>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" size="small">{t('Read More', 'और पढ़ें')}</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

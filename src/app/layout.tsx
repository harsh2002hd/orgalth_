import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { LanguageProvider } from "@/context/LanguageContext";
import { BookingProvider } from "@/context/BookingContext";
import 'leaflet/dist/leaflet.css';

const inter = Inter({ subsets: ["latin"], variable: '--font-body' });
const outfit = Outfit({ subsets: ["latin"], weight: ['400', '500', '700', '800'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: "Orgalth | Human-First Agriculture Services",
  description: "Equipment on rent, expert advisory, weather alerts, and market linkage for small and marginal farmers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <div id="root-app">
          <LanguageProvider>
            <BookingProvider>
              <Navbar />
              <main style={{ minHeight: 'calc(100vh - 80px)' }}>
                {children}
              </main>
              <Footer />
            </BookingProvider>
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}

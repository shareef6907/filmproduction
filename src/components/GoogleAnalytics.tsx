'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// GA4 Measurement ID for FilmProductionBahrain.com
const GA_MEASUREMENT_ID = 'G-16L6N0RQEP';

export function GoogleAnalytics() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('gtag' in window)) return;

    const gtag = (window as any).gtag;
    const sisterDomains = ['bahrainnights.com', 'eventsbahrain.com', 'cinematicwebworks.com', 'filmproductionbahrain.com', 'studentphotos.com'];

    // Track WhatsApp button clicks
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
      link.addEventListener('click', () => {
        gtag('event', 'whatsapp_click', { page: window.location.pathname });
      });
    });

    // Track phone number clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
      link.addEventListener('click', () => {
        gtag('event', 'phone_click', { page: window.location.pathname });
      });
    });

    // Track contact form submissions
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', () => {
        gtag('event', 'contact_form_submit', { page: window.location.pathname });
      });
    });

    // Track cross-promotion clicks (links to sister sites)
    document.querySelectorAll('a').forEach(link => {
      sisterDomains.forEach(domain => {
        if ((link as HTMLAnchorElement).href.includes(domain) && !window.location.hostname.includes(domain)) {
          link.addEventListener('click', () => {
            gtag('event', 'cross_promo_click', { destination: domain, page: window.location.pathname });
          });
        }
      });
    });
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}

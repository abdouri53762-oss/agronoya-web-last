import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "AgroNoya - Smart Farming Solutions", 
  description = "Révolutionnez votre agriculture avec l'intelligence artificielle. Solutions IoT, drones, IA pour optimiser rendements et réduire coûts. +1400 agriculteurs nous font confiance.",
  keywords = "agriculture intelligente, smart farming, IoT agricole, drones agricoles, IA agriculture, capteurs sol, irrigation intelligente, AgroNoya, AgriTech, agriculture de précision",
  image = "/images/agronoya-og-image.jpg",
  url = "https://erqmhrkk.manus.space",
  type = "website",
  author = "AgroNoya",
  locale = "fr_FR",
  siteName = "AgroNoya Smart Farming Solutions"
}) => {
  const fullTitle = title.includes('AgroNoya') ? title : `${title} | AgroNoya`;
  const fullUrl = url.startsWith('http') ? url : `https://erqmhrkk.manus.space${url}`;
  
  return (
    <Helmet>
      {/* Meta tags principaux */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@AgroNoya" />
      <meta name="twitter:creator" content="@AgroNoya" />
      
      {/* Liens canoniques */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon et icônes */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Optimisations performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AgroNoya",
          "description": description,
          "url": "https://erqmhrkk.manus.space",
          "logo": "https://erqmhrkk.manus.space/images/agronoya-logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33-1-23-45-67-89",
            "contactType": "customer service",
            "availableLanguage": ["French", "English"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Avenue de l'Innovation",
            "addressLocality": "Paris",
            "postalCode": "75001",
            "addressCountry": "FR"
          },
          "sameAs": [
            "https://www.facebook.com/agronoya",
            "https://www.twitter.com/agronoya",
            "https://www.linkedin.com/company/agronoya"
          ],
          "foundingDate": "2019",
          "numberOfEmployees": "50+",
          "industry": "Agricultural Technology",
          "keywords": keywords,
          "offers": {
            "@type": "Offer",
            "category": "Smart Farming Solutions",
            "description": "Solutions IoT, IA et drones pour l'agriculture intelligente"
          }
        })}
      </script>
      
      {/* Schema.org pour les produits */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "AgroSol - Capteurs IoT Agricoles",
          "description": "Capteurs NPK/pH/température connectés + IA NoyaSol pour analyser la fertilité des sols",
          "brand": {
            "@type": "Brand",
            "name": "AgroNoya"
          },
          "offers": {
            "@type": "Offer",
            "price": "2500",
            "priceCurrency": "DTN",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "AgroNoya"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127"
          }
        })}
      </script>
      
      {/* Meta tags pour PWA */}
      <meta name="theme-color" content="#cfb989" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="AgroNoya" />
      
      {/* Viewport optimisé */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      
      {/* Sécurité */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Géolocalisation */}
      <meta name="geo.region" content="FR" />
      <meta name="geo.placename" content="Paris, France" />
      <meta name="geo.position" content="48.8566;2.3522" />
      <meta name="ICBM" content="48.8566, 2.3522" />
    </Helmet>
  );
};

export default SEO;


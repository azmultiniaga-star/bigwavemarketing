import React from 'react';

interface StructuredDataProps {
    data: object;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
};

// Organization Schema
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BigWave Marketing",
    "url": "https://bigwavemarketing.com",
    "logo": "https://bigwavemarketing.com/bigwave-logo.png",
    "description": "Leading digital marketing agency in Malaysia specializing in Meta Ads, Google Ads, TikTok Ads, SEO, and website development.",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "MY",
        "addressRegion": "Malaysia"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "hello@bigwave.com"
    },
    "sameAs": [
        "https://www.facebook.com/bigwavemarketing",
        "https://www.instagram.com/bigwavemarketing",
        "https://www.linkedin.com/company/bigwavemarketing"
    ]
};

// LocalBusiness Schema
export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BigWave Marketing",
    "image": "https://bigwavemarketing.com/bigwave-logo.png",
    "@id": "https://bigwavemarketing.com",
    "url": "https://bigwavemarketing.com",
    "telephone": "+60123456789",
    "priceRange": "$$",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "MY"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 3.139,
        "longitude": 101.6869
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
    }
};

// Service Schema
export const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Marketing",
    "provider": {
        "@type": "Organization",
        "name": "BigWave Marketing"
    },
    "areaServed": {
        "@type": "Country",
        "name": "Malaysia"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Meta Ads Management"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Google Ads Management"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "TikTok Ads Management"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "SEO Services"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Website Development"
                }
            }
        ]
    }
};

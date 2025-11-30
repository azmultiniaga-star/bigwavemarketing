import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BigWave Marketing | Digital Marketing Agency Malaysia",
    template: "%s | BigWave Marketing"
  },
  description: "BigWave Marketing is a leading digital marketing agency in Malaysia specializing in Meta Ads, Google Ads, TikTok Ads, SEO, and website development. Drive growth with data-driven strategies.",
  keywords: ["digital marketing agency Malaysia", "Meta Ads Malaysia", "Google Ads", "TikTok Ads", "SEO services", "website development", "social media marketing", "content creation", "marketing agency"],
  authors: [{ name: "BigWave Marketing" }],
  creator: "BigWave Marketing",
  publisher: "BigWave Marketing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bigwavemarketing.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "BigWave Marketing | Digital Marketing Agency Malaysia",
    description: "Drive growth with data-driven digital marketing strategies. Specializing in Meta Ads, Google Ads, TikTok Ads, SEO, and website development.",
    url: 'https://bigwavemarketing.com',
    siteName: 'BigWave Marketing',
    images: [
      {
        url: '/bigwave-logo.png',
        width: 1200,
        height: 630,
        alt: 'BigWave Marketing Logo',
      },
    ],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BigWave Marketing | Digital Marketing Agency Malaysia",
    description: "Drive growth with data-driven digital marketing strategies.",
    images: ['/bigwave-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BigWave Marketing",
              "url": "https://bigwavemarketing.com",
              "logo": "https://bigwavemarketing.com/bigwave-logo.png",
              "description": "Leading digital marketing agency in Malaysia specializing in Meta Ads, Google Ads, TikTok Ads, SEO, and website development.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MY"
              },
              "sameAs": [
                "https://www.facebook.com/bigwavemarketing",
                "https://www.instagram.com/bigwavemarketing",
                "https://www.linkedin.com/company/bigwavemarketing"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-secondary text-black font-sans`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { seoKeywords } from '@/lib/data';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const siteUrl = 'https://siddharthbehera.com';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Siddharth Behera',
  jobTitle: 'Frontend Engineer',
  url: siteUrl,
  email: 'hello@siddharth.dev',
  sameAs: [
    'https://www.linkedin.com/in/siddharthbehera',
    'https://github.com/siddharthbehera',
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Siddharth Behera | Frontend Engineer',
    template: '%s | Siddharth Behera',
  },
  keywords: seoKeywords,
  description:
    'Software engineer specializing in the MERN stack, system design, and DevOps practices that keep web applications fast, resilient, and secure.',
  openGraph: {
    title: 'Siddharth Behera | Frontend Engineer',
    description:
      'MERN-focused software engineer delivering scalable chat apps, optimized data layers, and automated delivery pipelines.',
    url: siteUrl,
    siteName: 'Siddharth Behera Portfolio',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Siddharth Behera portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@siddharthbehera',
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-ink">
      <body className={`${inter.className} bg-ink text-slate-100`}>
        <div className="min-h-screen bg-grid-light">
          {children}
          <script type="application/ld+json" suppressHydrationWarning>
            {JSON.stringify(jsonLd)}
          </script>
        </div>
      </body>
    </html>
  );
}

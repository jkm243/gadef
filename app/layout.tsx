import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: {
    template: '%s | GADEF Monde',
    default: 'GADEF Monde - Guinée Assistance pour le Développement et l\'Education des Femmes'
  },
  description: 'GADEF Monde œuvre pour le développement communautaire en Guinée à travers des actions concrètes dans la santé, l\'éducation, la nutrition et l\'autonomisation des femmes. Rejoignez notre mission solidaire.',
  keywords: 'GADEF, Guinée, développement, éducation, femmes, santé, nutrition, autonomisation',
  authors: [{ name: 'GADEF Monde' }],
  creator: 'GADEF Monde',
  publisher: 'GADEF Monde',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gadefmonde.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'GADEF Monde - Développement Communautaire en Guinée',
    description: 'Association œuvrant pour le développement des communautés guinéennes à travers la santé, l\'éducation, la nutrition et l\'autonomisation des femmes.',
    url: 'https://gadefmonde.com',
    siteName: 'GADEF Monde',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GADEF Monde - Développement Communautaire en Guinée',
    description: 'Association œuvrant pour le développement des communautés guinéennes.',
    creator: '@gadefmonde',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0066FF" />
      </head>
      <body className="antialiased">
        <Navigation />
        <main role="main">{children}</main>
      </body>
    </html>
  );
}
import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: {
    template: '%s | GADEF',
    default: 'GADEF - Groupe d\'Action pour le Développement et la Fraternité'
  },
  description: 'Le GADEF est un organisme communautaire fondé en 2022 à Saint-Laurent (Montréal). Nous œuvrons pour le bien-être des familles, la sécurité alimentaire et le développement durable à travers des projets solidaires et inclusifs.',
  keywords: 'GADEF, Saint-Laurent, Montréal, sécurité alimentaire, développement durable, serres agricoles, intégration sociale, fraternité, communauté',
  authors: [{ name: 'GADEF' }],
  creator: 'GADEF',
  publisher: 'GADEF',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gadef.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'GADEF - Groupe d\'Action pour le Développement et la Fraternité',
    description: 'Organisme communautaire œuvrant pour le bien-être des familles, la sécurité alimentaire et le développement durable à Saint-Laurent, Montréal.',
    url: 'https://gadef.org',
    siteName: 'GADEF',
    locale: 'fr_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GADEF - Groupe d\'Action pour le Développement et la Fraternité',
    description: 'Organisme communautaire œuvrant pour le bien-être des familles et le développement durable.',
    creator: '@gadef',
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
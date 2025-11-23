import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: {
    template: '%s | GADEF',
    default: 'GADEF - Groupe d\'Action pour le Développement et la Fraternité | Montréal-Nord'
  },
  description: 'GADEF est un organisme communautaire sans but lucratif basé à Montréal-Nord. Nous œuvrons pour le bien-être des familles, la sécurité alimentaire et le développement durable à travers des projets solidaires et inclusifs.',
  keywords: 'GADEF, Montréal-Nord, organisme communautaire, sécurité alimentaire, aide sociale, développement communautaire, intégration sociale, bénévolat, don, Québec, solidarité, fraternité, agriculture urbaine',
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
    description: 'Organisme communautaire à Montréal-Nord œuvrant pour la sécurité alimentaire, l\'aide sociale et l\'intégration. Rejoignez notre mission solidaire.',
    url: 'https://gadef.org',
    siteName: 'GADEF',
    locale: 'fr_CA',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GADEF - Développement et Fraternité',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GADEF - Groupe d\'Action pour le Développement et la Fraternité',
    description: 'Organisme communautaire à Montréal-Nord œuvrant pour la sécurité alimentaire et l\'intégration sociale.',
    creator: '@gadef',
    images: ['/og-image.png'],
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
    google: 'verification_token',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0066FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GADEF" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NGO',
              name: 'GADEF - Groupe d\'Action pour le Développement et la Fraternité',
              alternateName: 'GADEF',
              url: 'https://gadef.org',
              logo: 'https://gadef.org/logo.png',
              description: 'Organisme communautaire sans but lucratif basé à Montréal-Nord, œuvrant pour le bien-être des familles, la sécurité alimentaire et le développement durable.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Montréal-Nord',
                addressRegion: 'QC',
                addressCountry: 'CA'
              },
              areaServed: {
                '@type': 'City',
                name: 'Montréal'
              },
              foundingDate: '2022',
              sameAs: [],
              potentialAction: [
                {
                  '@type': 'DonateAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://gadef.org/faire-un-don'
                  }
                },
                {
                  '@type': 'JoinAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://gadef.org/devenir-benevole'
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main role="main">{children}</main>
      </body>
    </html>
  );
}
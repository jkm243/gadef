import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Devenir Bénévole',
  description: 'Rejoignez l\'équipe de bénévoles GADEF Monde et contribuez concrètement au développement des communautés guinéennes. Formulaire de candidature et informations sur l\'engagement bénévole.',
  keywords: 'bénévolat GADEF, volontariat Guinée, engagement solidaire, aide humanitaire, développement communautaire',
  openGraph: {
    title: 'Devenir Bénévole - GADEF Monde',
    description: 'Rejoignez notre équipe de bénévoles passionnés et contribuez au développement des communautés guinéennes.',
    url: 'https://gadefmonde.com/devenir-benevole',
  },
  alternates: {
    canonical: '/devenir-benevole',
  },
};

export default function DevenirBenevoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programmes Communautaires',
  description: 'Découvrez nos programmes de développement communautaire en cours et à venir en Guinée : santé communautaire, alphabétisation des femmes, nutrition infantile et autonomisation économique.',
  keywords: 'programmes GADEF, développement communautaire Guinée, projets santé, alphabétisation femmes, nutrition infantile',
  openGraph: {
    title: 'Programmes Communautaires - GADEF Monde',
    description: 'Nos programmes de développement conçus pour répondre aux besoins spécifiques des communautés guinéennes.',
    url: 'https://gadefmonde.com/programmes-communautaires',
  },
  alternates: {
    canonical: '/programmes-communautaires',
  },
};

export default function ProgrammesCommunautairesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
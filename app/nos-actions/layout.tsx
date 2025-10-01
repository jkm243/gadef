import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Actions',
  description: 'Découvrez en détail les quatre domaines d\'intervention de GADEF Monde : santé communautaire, éducation des femmes, nutrition infantile et autonomisation économique en Guinée.',
  keywords: 'actions GADEF, santé Guinée, éducation femmes, nutrition infantile, autonomisation économique, développement communautaire',
  openGraph: {
    title: 'Nos Actions - GADEF Monde',
    description: 'Santé, éducation, nutrition et autonomisation : découvrez nos actions concrètes pour le développement des communautés guinéennes.',
    url: 'https://gadefmonde.com/nos-actions',
  },
  alternates: {
    canonical: '/nos-actions',
  },
};

export default function NosActionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
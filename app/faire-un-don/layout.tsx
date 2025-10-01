import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Faire un Don',
  description: 'Soutenez financièrement les actions de GADEF Monde en Guinée. Informations bancaires, impact des dons et moyens de paiement pour contribuer au développement communautaire.',
  keywords: 'don GADEF, soutien financier Guinée, donation solidaire, aide humanitaire, développement communautaire',
  openGraph: {
    title: 'Faire un Don - GADEF Monde',
    description: 'Votre générosité permet de financer nos actions sur le terrain. Chaque don contribue à améliorer les conditions de vie des communautés guinéennes.',
    url: 'https://gadefmonde.com/faire-un-don',
  },
  alternates: {
    canonical: '/faire-un-don',
  },
};

export default function FaireUnDonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
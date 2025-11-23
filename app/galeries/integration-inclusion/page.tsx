'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Users } from 'lucide-react';
import PhotoGallery from '@/components/PhotoGallery';
import Footer from '@/components/Footer';

export default function IntegrationInclusionGallery() {
  const photos = [
    {
      url: 'https://i.ibb.co/mrQ5fhS7/Whats-App-Image-2025-10-30-at-14-47-23-6.jpg',
      alt: 'Activités communautaires GADEF'
    },
    {
      url: 'https://i.ibb.co/KjhkQLrq/Whats-App-Image-2025-10-30-at-14-47-23-5.jpg',
      alt: 'Intégration sociale et inclusion'
    },
    {
      url: 'https://i.ibb.co/7JFG5wp3/Whats-App-Image-2025-10-30-at-14-47-23-4.jpg',
      alt: 'Soutien aux nouveaux arrivants'
    },
    {
      url: 'https://i.ibb.co/KczL2tXn/Whats-App-Image-2025-10-30-at-14-47-23-3.jpg',
      alt: 'Événements communautaires'
    },
    {
      url: 'https://i.ibb.co/2795kjrM/Whats-App-Image-2025-10-30-at-14-47-23-2.jpg',
      alt: 'Programmes d\'inclusion'
    },
    {
      url: 'https://i.ibb.co/xtWf2Qw7/Whats-App-Image-2025-10-30-at-14-47-23-1.jpg',
      alt: 'Activités de groupe'
    },
    {
      url: 'https://i.ibb.co/d0ktxC6x/Whats-App-Image-2025-10-30-at-14-47-23.jpg',
      alt: 'Rencontres communautaires'
    },
    {
      url: 'https://i.ibb.co/Q708bYWM/Whats-App-Image-2025-10-30-at-14-47-19-1.jpg',
      alt: 'Solidarité et fraternité'
    },
    {
      url: 'https://i.ibb.co/Pv9LcnzV/Whats-App-Image-2025-10-30-at-14-47-19.jpg',
      alt: 'Vivre ensemble'
    },
    {
      url: 'https://i.ibb.co/ZppbXZXv/Whats-App-Image-2025-10-30-at-14-47-18.jpg',
      alt: 'Actions communautaires GADEF'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-lambda-bg via-white to-lambda-bg">
        <div className="max-w-lambda mx-auto px-6">
          <Link
            href="/nos-actions"
            className="inline-flex items-center text-lambda-primary hover:text-lambda-accent transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour aux actions
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-6"
          >
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mr-4">
              <Users className="w-8 h-8 text-purple-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-inter-tight font-semibold text-lambda-text">
              Intégration et <span className="gradient-text">Inclusion</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-lambda-muted mb-12 max-w-3xl"
          >
            Découvrez nos actions pour favoriser l'intégration des nouveaux arrivants et promouvoir l'inclusion sociale au sein de notre communauté.
          </motion.p>
        </div>
      </section>

      <section className="py-lambda bg-white">
        <div className="max-w-lambda mx-auto px-6">
          <PhotoGallery photos={photos} title="Intégration et Inclusion" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

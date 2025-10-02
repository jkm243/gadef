'use client';

import { motion } from 'framer-motion';
import { Heart, CreditCard, Building, Users } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Footer from '@/components/Footer';

export default function FaireUnDon() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-lambda-bg via-white to-lambda-bg overflow-hidden">
        <div className="max-w-lambda mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex items-center justify-center mb-8"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="w-20 h-20 bg-lambda-accent/10 rounded-2xl flex items-center justify-center"
            >
              <Heart className="w-10 h-10 text-lambda-accent" />
            </motion.div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 120 }}
            className="text-4xl md:text-5xl lg:text-6xl font-inter-tight font-semibold text-lambda-text mb-6"
          >
            Faire un <span className="gradient-text">Don</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 140 }}
            className="text-lg text-lambda-muted max-w-2xl mx-auto"
          >
            Votre générosité transforme des vies. Chaque don contribue directement à l'amélioration des conditions de vie des communautés guinéennes.
          </motion.p>
        </div>
      </section>

      <AnimatedSection className="py-lambda bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-inter-tight font-semibold text-lambda-text text-center mb-12">
            Comment donner ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -8 }}
              className="lambda-card p-8 text-center"
            >
              <div className="w-16 h-16 bg-lambda-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-lambda-accent" />
              </div>
              <h3 className="text-xl font-inter-tight font-semibold text-lambda-text mb-4">
                Don en ligne
              </h3>
              <p className="text-lambda-muted mb-6">
                Effectuez un don sécurisé par carte bancaire ou virement en ligne.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="lambda-card p-8 text-center"
            >
              <div className="w-16 h-16 bg-lambda-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-lambda-secondary" />
              </div>
              <h3 className="text-xl font-inter-tight font-semibold text-lambda-text mb-4">
                Virement bancaire
              </h3>
              <p className="text-lambda-muted mb-6">
                Faites un virement direct sur notre compte bancaire.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="lambda-card p-8 text-center"
            >
              <div className="w-16 h-16 bg-lambda-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-lambda-accent" />
              </div>
              <h3 className="text-xl font-inter-tight font-semibold text-lambda-text mb-4">
                Don d'entreprise
              </h3>
              <p className="text-lambda-muted mb-6">
                Engagez votre entreprise dans une action solidaire durable.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-lambda bg-lambda-bg">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-inter-tight font-semibold text-lambda-text mb-8">
            L'impact de votre don
          </h2>
          <div className="space-y-6 text-left">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-lambda-accent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lambda-text">
                <strong>50€</strong> permettent de fournir des kits scolaires complets à 5 enfants
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-lambda-secondary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lambda-text">
                <strong>100€</strong> financent une formation professionnelle pour une femme
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-lambda-accent rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lambda-text">
                <strong>200€</strong> équipent un centre de santé en matériel médical de base
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-lambda-secondary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lambda-text">
                <strong>500€</strong> soutiennent un projet communautaire pendant 6 mois
              </p>
            </div>
          </div>

          <div className="mt-12 lambda-card p-8">
            <h3 className="text-2xl font-inter-tight font-semibold text-lambda-text mb-4">
              Informations bancaires
            </h3>
            <div className="space-y-3 text-lambda-muted">
              <p><strong>Bénéficiaire :</strong> GADEF Monde</p>
              <p><strong>IBAN :</strong> FR76 XXXX XXXX XXXX XXXX XXXX XXX</p>
              <p><strong>BIC :</strong> XXXXXXXX</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}

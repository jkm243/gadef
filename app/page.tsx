'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Users, GraduationCap, Apple, UserPlus, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import ActionCard from '@/components/ActionCard';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-lambda bg-gradient-to-br from-lambda-bg via-white to-lambda-bg overflow-hidden" aria-label="Section d'accueil">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-10 w-64 h-64 opacity-10 floating-animation">
            <img 
              src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=500" 
              alt="Community development" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute bottom-20 left-10 w-48 h-48 opacity-10 floating-animation" style={{ animationDelay: '2s' }}>
            <img 
              src="https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Education in Guinea" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        
        <div className="max-w-lambda mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-4xl md:text-6xl lg:text-7xl font-inter-tight font-semibold leading-tight mb-8"
          >
            <span className="gradient-text">GADEF</span>
            <br />
            <span className="text-lambda-text">
              Groupe d'action pour le développement et la fraternité
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 120 }}
            className="text-lg md:text-xl text-lambda-muted max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Organisme sans but lucratif basé à Montréal-Nord, nous travaillons quotidiennement pour répondre aux besoins essentiels des personnes vulnérables avec solidarité, fraternité et respect.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 140 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/devenir-benevole" className="lambda-btn-primary group">
                Devenir Bénévole
                <UserPlus className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/faire-un-don" className="lambda-btn-secondary group">
                Faire un Don
                <Heart className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <AnimatedSection className="py-16 bg-white" aria-label="Nos domaines d'intervention">
        <div className="max-w-lambda mx-auto px-6">
          <h2 className="sr-only">Nos domaines d'intervention en images</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lambda group"
            >
              <img 
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Santé communautaire en Guinée" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 image-overlay opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Santé Communautaire</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lambda group"
            >
              <img 
                src="https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Education des femmes en Guinée" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 image-overlay opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Education des Femmes</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lambda group"
            >
              <img 
                src="https://images.pexels.com/photos/8061688/pexels-photo-8061688.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Nutrition infantile en Guinée" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 image-overlay opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Nutrition Infantile</p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Nos Actions Section */}
      <AnimatedSection className="py-lambda bg-lambda-bg">
        <div className="max-w-lambda mx-auto px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-inter-tight font-semibold text-lambda-text mb-6"
            >
              À propos de nous
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-lambda-muted max-w-2xl mx-auto"
            >
             <strong> Le Groupe d’Action pour le Développement et la Fraternité (GADEF)</strong> est un organisme communautaire fondé en <strong>2022</strong> à Saint-Laurent (Montréal).
Nous œuvrons pour le bien-être des familles, la sécurité alimentaire et le développement durable à travers des projets solidaires et inclusifs.
Notre objectif est de <strong>lutter contre l’insécurité alimentaire, favoriser l’intégration sociale et encourager l’autonomie des communautés</strong> grâce à des initiatives concrètes comme nos <strong>serres agricoles, nos programmes de soutien et nos activités communautaires.</strong>

            </motion.p>
          </div>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-inter-tight font-semibold text-lambda-text mb-6"
            >
              Nos Actions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-lambda-muted max-w-2xl mx-auto"
            >
              Découvrez nos quatre domaines d'intervention pour un impact durable sur les communautés guinéennes.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ActionCard
              icon={Heart}
              title="Aide Sociale Directe"
              description="Distribution alimentaire et vestimentaire aux familles défavorisées, soutien aux familles et accompagnement des personnes en situation précaire."
              delay={0.1}
            />
            <ActionCard
              icon={GraduationCap}
              title="Éducation et Sensibilisation"
              description="Ateliers éducatifs, formations, alphabétisation et développement personnel pour favoriser l'inclusion sociale."
              delay={0.2}
            />
            <ActionCard
              icon={Apple}
              title="Sécurité Alimentaire"
              description="Agriculture urbaine, distribution alimentaire et lutte contre la faim dans nos communautés."
              delay={0.3}
            />
            <ActionCard
              icon={Users}
              title="Intégration et Inclusion"
              description="Soutien aux nouveaux arrivants et lutte contre l'exclusion sociale pour bâtir une communauté solidaire."
              delay={0.4}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/nos-actions" className="inline-flex items-center text-lambda-accent hover:text-lambda-secondary transition-colors font-medium group">
                Découvrir toutes nos actions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Devenir Bénévole Section */}
      <AnimatedSection className="py-lambda bg-white">
        <div className="max-w-lambda mx-auto px-6">
          <div className="relative lambda-card p-12 text-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.pexels.com/photos/6647112/pexels-photo-6647112.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Bénévoles GADEF" 
                className="w-full h-full object-cover opacity-10"
              />
            </div>
            
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-inter-tight font-semibold text-lambda-text mb-6"
              >
                Devenir Bénévole
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-lambda-muted mb-8 max-w-2xl mx-auto"
              >
                Rejoignez notre équipe de bénévoles passionnés et contribuez concrètement à soutenir les personnes vulnérables de Montréal-Nord. Votre engagement fait la différence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/devenir-benevole" className="lambda-btn-primary group">
                  Rejoindre l'équipe
                  <UserPlus className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Faire un Don Section */}
      <AnimatedSection className="py-lambda bg-lambda-bg">
        <div className="max-w-lambda mx-auto px-6">
          <div className="relative lambda-card p-12 text-center bg-gradient-to-r from-lambda-accent to-lambda-secondary text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 pulse-animation">
                <img 
                  src="https://images.pexels.com/photos/6646943/pexels-photo-6646943.jpeg?auto=compress&cs=tinysrgb&w=300" 
                  alt="Don solidaire" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-40 h-40 pulse-animation" style={{ animationDelay: '1s' }}>
                <img 
                  src="https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=300" 
                  alt="Aide communautaire" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-inter-tight font-semibold mb-6"
              >
                Faire un Don
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg mb-8 max-w-2xl mx-auto opacity-90"
              >
                Votre générosité permet de financer nos actions sur le terrain. Chaque don, petit ou grand, contribue à améliorer les conditions de vie des familles défavorisées.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/faire-un-don" className="inline-flex items-center h-12 px-6 bg-white text-lambda-accent rounded-full font-medium hover:shadow-lg transition-all duration-300 group">
                  Soutenir nos actions
                  <Heart className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
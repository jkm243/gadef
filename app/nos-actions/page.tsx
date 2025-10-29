'use client';

import { motion } from 'framer-motion';
import { Heart, Users, GraduationCap, Apple, Package, Home } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Footer from '@/components/Footer';

export default function NosActions() {
  const actions = [
    {
      icon: Heart,
      title: "Aide Sociale Directe",
      description: "Soutien direct aux familles et personnes en situation de vulnérabilité avec distribution de ressources essentielles.",
      details: [
        "Distribution de denrées alimentaires aux familles défavorisées",
        "Distribution de vêtements et articles de première nécessité",
        "Accompagnement individuel des personnes en situation précaire",
        "Soutien aux familles dans leurs démarches administratives",
        "Aide d'urgence pour répondre aux besoins immédiats"
      ],
      color: "lambda-accent"
    },
    {
      icon: GraduationCap,
      title: "Éducation et Sensibilisation",
      description: "Programmes éducatifs et formations pour favoriser le développement personnel et l'inclusion sociale.",
      details: [
        "Ateliers éducatifs sur divers sujets communautaires",
        "Programmes d'alphabétisation pour adultes",
        "Formations professionnelles adaptées aux besoins",
        "Développement personnel et renforcement des compétences",
        "Sensibilisation aux droits et ressources disponibles"
      ],
      color: "lambda-secondary"
    },
    {
      icon: Apple,
      title: "Sécurité Alimentaire",
      description: "Initiatives pour garantir l'accès à une alimentation saine et combattre la faim dans nos communautés.",
      details: [
        "Agriculture urbaine et jardins communautaires (acquisition de serres)",
        "Distribution alimentaire régulière via Moisson Montréal",
        "Lutte contre la faim et l'insécurité alimentaire",
        "Éducation nutritionnelle et ateliers culinaires",
        "Promotion de l'autonomie alimentaire locale"
      ],
      color: "green-500"
    },
    {
      icon: Users,
      title: "Intégration et Inclusion",
      description: "Accompagnement des nouveaux arrivants et promotion de l'inclusion sociale pour bâtir une communauté solidaire.",
      details: [
        "Soutien aux nouveaux arrivants dans leur intégration",
        "Facilitation de l'accès aux services et ressources locales",
        "Activités culturelles et communautaires pour favoriser les liens",
        "Lutte contre l'exclusion sociale et l'isolement",
        "Promotion de la diversité et du vivre-ensemble"
      ],
      color: "purple-500"
    },
    {
      icon: Apple,
      title: "Nos objectifs",
      description: "",
      details: [
        "Renforcer la sécurité alimentaire des familles à faible revenu grâce à la production locale et à la distribution solidaire.",
        "Renforcer la sécurité alimentaire des familles à faible revenu grâce à la production locale et à la distribution solidaire.",
        "Soutenir le développement durable par des pratiques agricoles écologiques et responsables.",
        "Créer des espaces de fraternité et de partage, où les citoyens peuvent s’impliquer et s’entraider.",
        "Former et sensibiliser la population aux enjeux environnementaux, alimentaires et sociaux.",
        "Développer des partenariats communautaires pour bâtir un réseau solide au service de la collectivité."
      ],
      color: "purple-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-lambda-bg via-white to-lambda-bg overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 right-20 w-32 h-32 opacity-5 floating-animation">
            <img
              src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Actions GADEF"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute bottom-10 left-20 w-40 h-40 opacity-5 floating-animation" style={{ animationDelay: '3s' }}>
            <img
              src="https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Développement communautaire"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="max-w-lambda mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-4xl md:text-5xl lg:text-6xl font-inter-tight font-semibold text-lambda-text mb-6"
          >
            Nos <span className="gradient-text">Actions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 120 }}
            className="text-lg text-lambda-muted max-w-2xl mx-auto"
          >
            Découvrez nos quatre domaines d'intervention pour promouvoir la solidarité, l'inclusion sociale et le développement humain durable à Montréal-Nord.
          </motion.p>
        </div>
      </section>

      <section className="py-lambda bg-white">
        <div className="max-w-lambda mx-auto px-6">
          <div className="space-y-16">
            {actions.map((action, index) => (
              <AnimatedSection key={action.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.01, y: -5 }}
                  className={`lambda-card p-8 md:p-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex items-center gap-12 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-5">
                    <img
                      src={`https://images.pexels.com/photos/${index % 2 === 0 ? '6646918' : '6647019'}/pexels-photo-${index % 2 === 0 ? '6646918' : '6647019'}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                      alt={`${action.title} background`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 bg-${action.color}/10 rounded-2xl flex items-center justify-center mr-4`}
                      >
                        <action.icon className={`w-8 h-8 text-${action.color}`} />
                      </motion.div>
                      <h2 className="text-3xl md:text-4xl font-inter-tight font-semibold text-lambda-text">
                        {action.title}
                      </h2>
                    </div>
                    <p className="text-lg text-lambda-muted mb-8 leading-relaxed">
                      {action.description}
                    </p>
                    <div className="space-y-4">
                      {action.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div className={`w-2 h-2 bg-${action.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <p className="text-lambda-text">{detail}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
